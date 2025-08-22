"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getRecommendationsAction, type FormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Generating..." : "Get Recommendations"}
    </Button>
  );
}

export function RecommendationForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const initialState: FormState = {
    message: "",
  };

  const [state, formAction] = useFormState(getRecommendationsAction, initialState);

  useEffect(() => {
    if (state.message && !state.recommendations) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
    if (state.message && state.recommendations) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div className="space-y-6">
      <form ref={formRef} action={formAction} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Your Reading Profile</CardTitle>
            <CardDescription>The more details you provide, the better the recommendations will be.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="readingHistory">Reading History</Label>
              <Textarea
                id="readingHistory"
                name="readingHistory"
                placeholder="e.g., 'I recently read and enjoyed Dune by Frank Herbert for its world-building. I also like murder mysteries by Agatha Christie...'"
                rows={5}
                defaultValue={state.fields?.readingHistory}
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="preferences">Preferences</Label>
              <Textarea
                id="preferences"
                name="preferences"
                placeholder="e.g., 'I prefer fast-paced plots, strong female protagonists, and a bit of romance. I'm not a fan of slow-burn stories or overly descriptive writing...'"
                rows={5}
                defaultValue={state.fields?.preferences}
              />
            </div>
             {state.issues && (
              <Alert variant="destructive">
                <AlertTitle>Please fix the following issues:</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5">
                    {state.issues.map((issue, i) => (
                      <li key={i}>{issue}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>

      {state.recommendations && (
         <Card>
            <CardHeader>
                <CardTitle className="font-headline">Your Custom Reading List</CardTitle>
                <CardDescription>Based on your profile, here are a few books we think you'll love.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="prose prose-sm max-w-none whitespace-pre-wrap">{state.recommendations}</div>
            </CardContent>
         </Card>
      )}
    </div>
  );
}
