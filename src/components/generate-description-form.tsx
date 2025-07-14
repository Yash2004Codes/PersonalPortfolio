'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleGenerateDescription } from '@/app/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Clipboard } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import type { GenerateProjectDescriptionInput } from '@/ai/flows/generate-project-description';

const formSchema = z.object({
  projectName: z.string().min(2, "Project name must be at least 2 characters."),
  projectSummary: z.string().min(10, "Project summary must be at least 10 characters."),
  technologiesUsed: z.string().min(2, "Please list at least one technology."),
  impact: z.string().min(10, "Impact description must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

const initialState = {
  projectDescription: "",
  error: null,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Generating..." : <><Sparkles className="mr-2 h-4 w-4" /> Generate Description</>}
        </Button>
    );
}

export function GenerateDescriptionForm() {
    const { toast } = useToast();
    const [state, formAction] = useFormState(handleGenerateDescription, initialState);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            projectName: "",
            projectSummary: "",
            technologiesUsed: "",
            impact: "",
        },
    });

    const handleFormSubmit = (data: FormValues) => {
        formAction(data as GenerateProjectDescriptionInput);
    };

    const handleCopy = () => {
        if (state.projectDescription) {
            navigator.clipboard.writeText(state.projectDescription);
            toast({
                title: "Copied to clipboard!",
                description: "The project description is ready to be pasted.",
            });
        }
    };

    return (
        <div className="space-y-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
                    <FormField control={form.control} name="projectName" render={({ field }) => (
                        <FormItem><FormLabel>Project Name</FormLabel><FormControl><Input placeholder="e.g., Personal Portfolio Website" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="projectSummary" render={({ field }) => (
                        <FormItem><FormLabel>Project Summary</FormLabel><FormControl><Textarea placeholder="A brief summary of what your project does." {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="technologiesUsed" render={({ field }) => (
                        <FormItem><FormLabel>Technologies Used</FormLabel><FormControl><Input placeholder="e.g., Next.js, Tailwind CSS, Stripe" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="impact" render={({ field }) => (
                        <FormItem><FormLabel>Impact / Results</FormLabel><FormControl><Textarea placeholder="What was the outcome or achievement of this project?" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <SubmitButton />
                </form>
            </Form>

            {state.projectDescription && (
                <div className="space-y-2 pt-4">
                    <Label htmlFor="generated-description" className="font-headline text-lg">AI Generated Description</Label>
                    <Card className="bg-secondary/50">
                        <CardContent className="p-4 relative">
                            <p className="text-sm text-foreground/80 whitespace-pre-wrap">{state.projectDescription}</p>
                            <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={handleCopy}>
                                <Clipboard className="h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            )}
            {state.error && (
                 <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.error}</AlertDescription>
                </Alert>
            )}
        </div>
    );
}
