
'use client';

import { SectionHeading } from './section-heading';
import { Cpu, Code, Wind, Database, BrainCircuit, Bot, CodeXml, GitBranch, Terminal, Sparkles, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const skills = [
  { name: 'React & React Native', icon: <CodeXml className="h-8 w-8" /> },
  { name: 'JavaScript, HTML & CSS', icon: <Code className="h-8 w-8" /> },
  { name: 'TypeScript', icon: <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="TypeScript" className="h-8 w-8" /> },
  { name: 'Embedded C', icon: <Cpu className="h-8 w-8" /> },
  { name: 'Python', icon: <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python" className="h-8 w-8"/> },
  { name: 'Machine Learning', icon: <BrainCircuit className="h-8 w-8" /> },
  { name: 'Next.js', icon: <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js" className="h-8 w-8" />},
  { name: 'Firebase', icon: <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" className="h-8 w-8" />},
  { name: 'Tailwind CSS', icon: <Wind className="h-8 w-8" /> },
  { name: 'Git & GitHub', icon: <GitBranch className="h-8 w-8" /> },
  { name: 'Flask', icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="currentColor"
      >
        <title>Flask</title>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.633 16.32a.75.75 0 0 1-.75-.75c0-1.26-.504-2.52-1.427-3.483-1.492-1.554-3.1-2.483-3.1-4.108V6.75a.75.75 0 0 1 1.5 0v1.229c0 .762.59 1.455 1.771 2.528 1.492 1.554 3.1 2.483 3.1 4.108a.75.75 0 0 1-.694.705zM9.75 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75zm-3 7.5a.75.75 0 0 1 .75.75c0 1.26.504 2.52 1.427 3.483C10.42 19.975 12 20.903 12 22.528v1.222a.75.75 0 0 1-1.5 0v-1.23c0-.762-.59-1.455-1.771-2.527C7.237 18.442 5.75 17.514 5.75 15.9a.75.75 0 0 1 .75-.75z" />
      </svg>
    ) },
  { name: 'API Handling & Creation', icon: <Database className="h-8 w-8" /> },
  { name: 'Prompt Engineering', icon: <Sparkles className="h-8 w-8" /> },
  { name: 'Linux', icon: <Terminal className="h-8 w-8" /> },
  { name: 'Soft Skills', icon: <Users className="h-8 w-8" /> },
];

export function Skills() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading id="skills" title="My Skills" subtitle="Technologies and tools I work with." />
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <Card key={skill.name} className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-200">
                           <CardContent className="flex flex-col items-center justify-center p-6">
                                <div className="mb-4 text-primary">
                                    {skill.icon}
                                </div>
                                <p className="text-md font-semibold">{skill.name}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
