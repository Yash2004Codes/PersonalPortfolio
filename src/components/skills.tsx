
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
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.443 16.32a.75.75 0 01-.75-.75c0-1.26.504-2.52 1.427-3.483C10.612 10.533 12.22 9.605 12.22 8V6.75a.75.75 0 011.5 0V8c0 .762.59 1.455 1.771 2.528 1.492 1.554 3.1 2.483 3.1 4.108a.75.75 0 01-.75.75c-1.26 0-2.52.504-3.483 1.427-1.554 1.492-2.483 3.1-4.108 3.1v1.25a.75.75 0 01-1.5 0V20.5c0-.762-.59-1.455-1.771-2.528-1.492-1.554-3.1-2.483-3.1-4.108a.75.75 0 01.75-.75c1.26 0 2.52-.504 3.483-1.427C10.533 10.22 12.148 8.648 13.72 8.648h1.53c.762 0 1.455-.59 2.528-1.771 1.554-1.492 2.483-3.1 4.108-3.1h1.25a.75.75 0 010 1.5H20.5c-.762 0-1.455.59-2.528 1.771-1.554 1.492-2.483 3.1-4.108 3.1h-1.25a.75.75 0 01-.75-.75 1.5 1.5 0 00-3 0 .75.75 0 01-.75.75h-1.25c-1.625 0-3.116-1.573-4.108-3.1C5.035 8.045 4.445 7.455 3.682 7.455H2.432a.75.75 0 010-1.5h1.25c1.625 0 3.116 1.573 4.108 3.1.992 1.527 2.483 3.1 4.108 3.1a.75.75 0 01.75.75 1.5 1.5 0 003 0 .75.75 0 01.75-.75h1.25c1.625 0 3.116-1.573 4.108-3.1C21.965 7.045 22.555 6.455 23.318 6.455h1.25a.75.75 0 010 1.5h-1.25c-.762 0-1.455.59-2.528 1.771-1.554 1.492-2.483 3.1-4.108 3.1h-1.53c-1.572 0-3.18-.928-4.672-2.483-1.492-1.554-2.42-3.162-2.42-4.779V6.75a.75.75 0 011.5 0V8c0 1.617.928 3.225 2.42 4.78.96.99 2.112 1.942 3.523 1.942.75 0 1.5-.75 1.5-1.5s-.75-1.5-1.5-1.5c-1.26 0-2.52.504-3.483 1.427C10.533 13.78 8.918 15.352 7.346 15.352H5.816c-.762 0-1.455.59-2.528 1.771-1.554 1.492-2.483 3.1-4.108 3.1H-.5a.75.75 0 010-1.5H.5c.762 0 1.455-.59 2.528-1.771 1.554-1.492 2.483-3.1 4.108-3.1a.75.75 0 01.75-.75 1.5 1.5 0 003 0 .75.75 0 01.75-.75h1.25c1.625 0 3.116 1.573 4.108 3.1.992 1.527 2.483 3.1 4.108 3.1s3.116-1.573 4.108-3.1c.992-1.527 2.483-3.1 4.108-3.1a.75.75 0 01.75.75 1.5 1.5 0 003 0 .75.75 0 01.75-.75h1.25c1.625 0 3.116 1.573 4.108 3.1.992 1.527 2.483 3.1 4.108 3.1a.75.75 0 01.75.75 1.5 1.5 0 003 0 .75.75 0 01.75-.75h1.25c1.625 0 3.116-1.573 4.108-3.1l.001-.001a.75.75 0 111.06 1.062l-.001.001c-.992 1.527-2.483 3.1-4.108 3.1h-1.25a.75.75 0 01-.75-.75 1.5 1.5 0 00-3 0 .75.75 0 01-.75.75h-1.25c-1.625 0-3.116-1.573-4.108-3.1-.992-1.527-2.483-3.1-4.108-3.1a.75.75 0 01-.75.75 1.5 1.5 0 00-3 0 .75.75 0 01-.75.75h-1.25c-1.625 0-3.116-1.573-4.108-3.1C2.535 13.955 1.945 13.365 1.182 13.365H-.068a.75.75 0 010-1.5h1.25c.762 0 1.455.59 2.528 1.771C5.202 15.128 6.13 16.736 6.13 18.352v1.25a.75.75 0 01-1.5 0V18.352c0-1.617-.928-3.225-2.42-4.78C1.25 12.612.322 11 1.322 11c1.26 0 2.52-.504 3.483-1.427C6.357 8.02 7.972 6.448 9.544 6.448h1.53c1.572 0 3.18.928 4.672 2.483 1.492 1.554 2.42 3.162 2.42 4.779v1.25a.75.75 0 01-1.5 0v-1.25c0-1.617-.928-3.225-2.42-4.78C13.25 12.612 12.322 11 11.322 11c-1.26 0-2.52.504-3.483 1.427C6.287 13.98 4.672 15.552 3.1 15.552H1.57a.75.75 0 010-1.5H3.1c.762 0 1.455-.59 2.528-1.771C7.12 10.728 8.048 9.12 8.048 7.502V6.25a.75.75 0 011.5 0v1.252c0 1.617.928 3.225 2.42 4.78.96.99 2.112 1.942 3.523 1.942.75 0 1.5-.75 1.5-1.5s-.75-1.5-1.5-1.5z" />
      </svg>
    ) },
  { name: 'API Creation & Handling', icon: <Database className="h-8 w-8" /> },
  { name: 'PHP', icon: <img src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt="PHP" className="h-8 w-8" /> },
  { name: 'MySQL', icon: <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="MySQL" className="h-8 w-8" /> },
  { name: 'MongoDB', icon: <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="MongoDB" className="h-8 w-8" /> },
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
