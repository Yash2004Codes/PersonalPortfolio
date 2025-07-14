import { SectionHeading } from './section-heading';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: "Embedded C Developer Intern",
    company: "Upcoming Opportunity",
    period: "Starting May 2025",
    description: "Joining a team to develop and test embedded software solutions, focusing on C programming for low-level systems and hardware interaction.",
  },
  {
    role: "Computer Engineering Student",
    company: "Sardar Patel Institute of Technology (SPIT)",
    period: "2022 - Present",
    description: "Third-year undergraduate pursuing a B.Tech in Computer Engineering. Coursework includes Data Structures, Algorithms, Computer Architecture, and Operating Systems.",
  },
];

export function Experience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading id="experience" title="Education & Experience" subtitle="My professional journey so far." />
        <div className="relative max-w-3xl mx-auto pl-8">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-border" />
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background" />
              <div className="pl-4">
                <Badge variant="outline" className="mb-2">{exp.period}</Badge>
                <h3 className="text-xl font-bold font-headline">{exp.role}</h3>
                <p className="font-semibold text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-foreground/80">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
