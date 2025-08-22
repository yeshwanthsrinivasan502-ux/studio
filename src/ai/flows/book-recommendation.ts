'use server';

/**
 * @fileOverview AI flow for generating personalized book recommendations based on user reading history and preferences.
 *
 * - generateBookRecommendations - A function that generates personalized book recommendations.
 * - BookRecommendationInput - The input type for the generateBookRecommendations function.
 * - BookRecommendationOutput - The return type for the generateBookRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BookRecommendationInputSchema = z.object({
  readingHistory: z
    .string()
    .describe('The user reading history, including titles, authors, and genres of books read.'),
  preferences: z
    .string()
    .describe('The user preferences, including preferred genres, authors, and reading styles.'),
});
export type BookRecommendationInput = z.infer<typeof BookRecommendationInputSchema>;

const BookRecommendationOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of personalized book recommendations based on the user reading history and preferences.'),
});
export type BookRecommendationOutput = z.infer<typeof BookRecommendationOutputSchema>;

export async function generateBookRecommendations(
  input: BookRecommendationInput
): Promise<BookRecommendationOutput> {
  return bookRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'bookRecommendationPrompt',
  input: {schema: BookRecommendationInputSchema},
  output: {schema: BookRecommendationOutputSchema},
  prompt: `You are a book recommendation expert. Based on the user's reading history and preferences, provide a list of personalized book recommendations.

Reading History: {{{readingHistory}}}
Preferences: {{{preferences}}}

Recommendations:`,
});

const bookRecommendationFlow = ai.defineFlow(
  {
    name: 'bookRecommendationFlow',
    inputSchema: BookRecommendationInputSchema,
    outputSchema: BookRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
