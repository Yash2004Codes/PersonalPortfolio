import { SectionHeading } from './section-heading';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: "Senior Creative Developer",
    company: "Innovate Inc.",
    period: "2021 - Present",
    description: "Led the development of interactive web applications, focusing on high-impact user experiences and integrating AI-powered features. Collaborated with designers and product managers to ship beautiful, functional products.",
  },
  {
    role: "UI/UX Designer & Frontend Dev",
    company: "DesignCo",
    period: "2019 - 2021",
    description: "Designed and implemented user interfaces for various clients. Specialized in creating responsive and accessible websites from concept to deployment. Grew skills in user research and prototyping.",
  },
  {
    role: "Junior Web Developer",
    company: "Tech Start",
    period: "2017 - 2019",
    description: "Assisted the senior development team in building and maintaining websites. Gained foundational experience in HTML, CSS, JavaScript, and version control with Git.",
  },
];

export function Experience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading id="experience" title="Work Experience" subtitle="My professional journey so far." />
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
