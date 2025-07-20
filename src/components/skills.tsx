
'use client';

import { SectionHeading } from './section-heading';
import { Cpu, Code, Wind, Database, BrainCircuit, Bot, CodeXml, GitBranch, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const skills = [
  { name: 'React & React Native', icon: <CodeXml className="h-8 w-8" /> },
  { name: 'JavaScript, HTML & CSS', icon: <Code className="h-8 w-8" /> },
  { name: 'Embedded C', icon: <Cpu className="h-8 w-8" /> },
  { name: 'Python', icon: <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python" className="h-8 w-8"/> },
  { name: 'Machine Learning', icon: <BrainCircuit className="h-8 w-8" /> },
  { name: 'Next.js', icon: <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="Next.js" className="h-8 w-8" />},
  { name: 'Firebase', icon: <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" className="h-8 w-8" />},
  { name: 'Tailwind CSS', icon: <Wind className="h-8 w-8" /> },
  { name: 'Git & GitHub', icon: <GitBranch className="h-8 w-8" /> },
  { name: 'Flask', icon: <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="Flask" className="h-8 w-8"/> },
  { name: 'Gemini API', icon: <Bot className="h-8 w-8" /> },
  { name: 'Linux', icon: <Terminal className="h-8 w-8" /> },
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
