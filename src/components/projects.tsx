'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { SectionHeading } from './section-heading';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { GenerateDescriptionForm } from './generate-description-form';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with a modern UI, product management, and secure payments using the latest web technologies.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Stripe', 'Prisma', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'store shopping',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, providing insights through charts and graphs.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'analytics chart',
  },
  {
    title: 'Mobile Task Manager',
    description: 'A cross-platform mobile app to help users organize their tasks and boost productivity on the go.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React Native', 'Firebase', 'Redux'],
    liveUrl: '#',
    repoUrl: '#',
    dataAiHint: 'mobile application',
  },
];

export function Projects() {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black/10">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading id="projects" title="My Work" subtitle="A selection of projects I've built." />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                   {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                      <CardHeader>
                        <div className="aspect-video relative mb-4">
                           <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-t-lg" data-ai-hint={project.dataAiHint} />
                        </div>
                        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                         <div className="flex flex-wrap gap-2">
                           {project.tags.map((tag) => (
                             <Badge key={tag} variant="secondary">{tag}</Badge>
                           ))}
                         </div>
                      </CardContent>
                      <CardFooter className="flex justify-start gap-4">
                        <Button asChild variant="outline">
                          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" /> GitHub
                          </Link>
                        </Button>
                        <Button asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                             <ExternalLink className="mr-2" /> Live Demo
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                   ))}
                </div>
                <div className="text-center mt-16">
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button size="lg" variant="default">
                                <Sparkles className="mr-2 h-5 w-5" />
                                Generate Project Description with AI
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl">
                            <DialogHeader>
                                <DialogTitle className="font-headline text-2xl">Generate Project Description</DialogTitle>
                                <DialogDescription>
                                    Fill in your project details and let our AI craft a compelling description for you.
                                </DialogDescription>
                            </DialogHeader>
                            <GenerateDescriptionForm />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    );
}
