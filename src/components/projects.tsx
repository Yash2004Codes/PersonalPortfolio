
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from './section-heading';

const projects = [
   {
    title: 'Kaggle Data Science Competition : Binary Rainfall Prediction',
    description: 'Achieved my best Rank of 2072 among thousands of ML enthusiasts worldwide in this self-directed project.',
    image: '/header.png',
    tags: ['React', 'Javascript', 'Python', 'Collab', 'Flask', 'Netlify'],
    liveUrl: 'https://rainfallprediction.netlify.app/',
    repoUrl: 'https://github.com/Yash2004Codes/Rainfall_prediction',
    dataAiHint: 'weather forecast',
  },
  {
    title: 'CollegeRooms',
    description: 'A online platform made for students by a student helping them find Hostels/PGs at once place with AI suggestions',
    image: '/college2.png',
    tags: ['Next.js','TypeScript','Tailwind CSS','Firebase','Gemini API','Netlify'],
    liveUrl: 'https://collegerooms.netlify.app/',
    repoUrl: 'Yash2004Codes/MyRoomate-Hostel-Management',
    dataAiHint: 'store shopping',
  },
  {
    title: 'FeelFree',
    description: 'A online platform where people can share their mental ordeal anonymously and get help from others',
    image: '',
    tags: ['Next.js','TypeScript','Tailwind CSS','Firebase','Gemini API','Netlify'],
    liveUrl: '#',
    repoUrl: '',
    dataAiHint: 'analytics chart',
  },
];

export function Projects() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black/10">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading id="projects" title="My Work" subtitle="A selection of projects I've built." />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                   {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
                      <CardHeader>
                        <div className="aspect-video relative mb-4">
                           <Image src={project.image || `https://placehold.co/600x400.png?text=${project.title.replace(' ', '+')}`} alt={project.title} fill objectFit="cover" className="rounded-t-lg" data-ai-hint={project.dataAiHint} />
                        </div>
                        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                        <CardDescription>
                          {project.description}
                        </CardDescription>
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
            </div>
        </section>
    );
}
