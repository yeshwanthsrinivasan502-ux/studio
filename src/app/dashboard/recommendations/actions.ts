"use server";

import { generateBookRecommendations } from "@/ai/flows/book-recommendation";
import { z } from "zod";

const recommendationSchema = z.object({
  readingHistory: z.string().min(10, "Please provide more details about your reading history."),
  preferences: z.string().min(10, "Please provide more details about your preferences."),
});

export type FormState = {
  message: string;
  recommendations?: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function getRecommendationsAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = recommendationSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "Invalid form data",
      issues,
      fields: {
        readingHistory: data.get("readingHistory")?.toString() ?? "",
        preferences: data.get("preferences")?.toString() ?? "",
      }
    };
  }

  try {
    const result = await generateBookRecommendations(parsed.data);
    return { 
        message: "Recommendations generated successfully!", 
        recommendations: result.recommendations 
    };
  } catch (error) {
    return {
      message: "An error occurred while generating recommendations. Please try again.",
    };
  }
}
