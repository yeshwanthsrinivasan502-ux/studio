import { RecommendationForm } from "./recommendation-form";
import { Sparkles } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-headline font-bold text-primary">
            Personalized Recommendations
            </h1>
        </div>
        <p className="text-muted-foreground mt-2">
          Tell us about your reading habits, and our AI will curate a list of books just for you.
        </p>
      </div>
      <RecommendationForm />
    </div>
  );
}
