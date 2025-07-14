'use client';

import { Progress } from '@/components/ui/progress';
import { SectionHeading } from './section-heading';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'React & Next.js', value: 95 },
  { name: 'TypeScript', value: 90 },
  { name: 'UI/UX Design (Figma)', value: 85 },
  { name: 'Node.js & Express', value: 80 },
  { name: 'Database (SQL & NoSQL)', value: 75 },
  { name: 'GenAI Integration', value: 70 },
];

export function Skills() {
    const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));

    useEffect(() => {
        const timers = skills.map((skill, index) => 
            setTimeout(() => {
                setProgressValues(prev => {
                    const newValues = [...prev];
                    newValues[index] = skill.value;
                    return newValues;
                });
            }, 100 * (index + 1))
        );
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading id="skills" title="My Skills" subtitle="Technologies and tools I work with." />
                <div className="max-w-4xl mx-auto grid gap-8">
                    {skills.map((skill, index) => (
                        <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-medium">{skill.name}</h3>
                                <span className="text-muted-foreground font-mono">{progressValues[index]}%</span>
                            </div>
                            <Progress value={progressValues[index]} aria-label={`${skill.name} proficiency`} className="h-3" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
