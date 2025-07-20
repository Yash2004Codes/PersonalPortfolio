
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleAskAboutMe } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, Send, User, AlertTriangle } from 'lucide-react';
import { SectionHeading } from './section-heading';
import { Card, CardContent, CardHeader } from './ui/card';
import { useEffect, useRef, useState } from 'react';

const initialState = {
  response: '',
  error: null,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" size="icon" disabled={pending}>
            {pending ? <Bot className="animate-spin" /> : <Send />}
            <span className="sr-only">Send</span>
        </Button>
    );
}

export function AboutMeAI() {
    const [state, formAction] = useFormState(handleAskAboutMe, initialState);
    const [messages, setMessages] = useState<{ type: 'user' | 'ai' | 'error', text: string }[]>([]);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
      if (state.response) {
        setMessages(prev => [...prev, { type: 'ai', text: state.response }]);
      } else if (state.error) {
        setMessages(prev => [...prev, { type: 'error', text: state.error }]);
      }
    }, [state]);

    const handleFormSubmit = (formData: FormData) => {
      const question = formData.get('question') as string;
      if (question.trim()) {
        setMessages(prev => [...prev, { type: 'user', text: question }]);
        formAction(formData);
        formRef.current?.reset();
      }
    };

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading id="ai-chat" title="Ask AI About Me" subtitle="Have questions? Ask my AI assistant anything about my skills, experience, or projects." />
                <Card className="max-w-3xl mx-auto">
                    <CardContent className="p-4">
                        <div className="space-y-4 h-96 overflow-y-auto pr-4">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex items-start gap-4 ${message.type === 'user' ? 'justify-end' : ''}`}>
                                    {message.type !== 'user' && (
                                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                                            {message.type === 'ai' ? <Bot className="h-6 w-6" /> : <AlertTriangle className="h-6 w-6" />}
                                        </div>
                                    )}
                                    <div className={`rounded-lg p-3 max-w-[80%] ${
                                        message.type === 'user' ? 'bg-primary text-primary-foreground' : 
                                        message.type === 'ai' ? 'bg-muted' : 'bg-destructive text-destructive-foreground'
                                    }`}>
                                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                                    </div>
                                    {message.type === 'user' && (
                                        <div className="rounded-full bg-secondary p-2 text-secondary-foreground">
                                            <User className="h-6 w-6" />
                                        </div>
                                    )}
                                </div>
                            ))}
                             {messages.length === 0 && (
                                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                                    <Bot className="h-12 w-12 mb-4" />
                                    <p>I'm ready to answer your questions!</p>
                                    <p className="text-xs mt-1">e.g., "What are Yash's top skills?"</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                    <CardHeader className="pt-0">
                        <form ref={formRef} action={handleFormSubmit} className="flex items-center gap-2">
                            <Input name="question" placeholder="Ask a question..." autoComplete="off" />
                            <SubmitButton />
                        </form>
                    </CardHeader>
                </Card>
            </div>
        </section>
    );
}
