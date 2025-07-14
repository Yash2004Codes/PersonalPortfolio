'use server';

/**
 * @fileOverview An AI agent for generating compelling project descriptions.
 *
 * - generateProjectDescription - A function that generates a project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectSummary: z.string().describe('A brief summary of the project.'),
  technologiesUsed: z.string().describe('The technologies used in the project, separated by commas.'),
  impact: z.string().describe('The impact or results of the project.'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  projectDescription: z.string().describe('A compelling description of the project.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an AI assistant specialized in creating engaging and effective project descriptions for personal portfolios.

  Given the project name, a brief summary, the technologies used, and its impact, craft a compelling description that will capture the attention of potential employers or collaborators.

  Project Name: {{projectName}}
  Summary: {{projectSummary}}
  Technologies Used: {{technologiesUsed}}
  Impact: {{impact}}

  Write a project description that highlights the project's key features, the technologies you employed, and the results you achieved. The description should be concise, impactful, and tailored to showcase your skills and experience to potential employers or collaborators.
  `,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
