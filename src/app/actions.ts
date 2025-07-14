
'use server';

import { generateProjectDescription, type GenerateProjectDescriptionInput } from '@/ai/flows/generate-project-description';
import { z } from 'zod';

const formSchema = z.object({
  projectName: z.string().min(2, "Project name must be at least 2 characters."),
  projectSummary: z.string().min(10, "Project summary must be at least 10 characters."),
  technologiesUsed: z.string().min(2, "Please list at least one technology."),
  impact: z.string().min(10, "Impact description must be at least 10 characters."),
});

type State = {
  projectDescription: string;
  error: string | null;
};

export async function handleGenerateDescription(prevState: State, formData: GenerateProjectDescriptionInput): Promise<State> {
    try {
        const validatedData = formSchema.parse(formData);
        const result = await generateProjectDescription(validatedData);
        return {
            projectDescription: result.projectDescription,
            error: null,
        };
    } catch (e: unknown) {
        if (e instanceof z.ZodError) {
            return {
                projectDescription: "",
                error: e.errors.map(err => err.message).join(', ')
            };
        }
        console.error(e);
        return {
            projectDescription: "",
            error: 'An unexpected error occurred. Please try again.',
        };
    }
}
