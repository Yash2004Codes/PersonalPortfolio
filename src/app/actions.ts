
'use server';

import { getAboutMeResponse } from '@/ai/flows/about-me-flow';
import { z } from 'zod';

const formSchema = z.string().min(5, "Question must be at least 5 characters.");

type State = {
  response: string;
  error: string | null;
};

export async function handleAskAboutMe(prevState: State, formData: FormData): Promise<State> {
    const question = formData.get('question') as string;
    try {
        const validatedQuestion = formSchema.parse(question);
        const result = await getAboutMeResponse(validatedQuestion);
        return {
            response: result,
            error: null,
        };
    } catch (e: unknown) {
        if (e instanceof z.ZodError) {
            return {
                response: "",
                error: e.errors.map(err => err.message).join(', ')
            };
        }
        console.error(e);
        return {
            response: "",
            error: 'An unexpected error occurred. Please try again.',
        };
    }
}
