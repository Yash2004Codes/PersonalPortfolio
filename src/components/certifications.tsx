import { SectionHeading } from './section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const certifications = [
  {
    title: "Placeholder Certification",
    issuer: "Awesome Certificate Authority",
    date: "Jan 2024",
    url: "#",
    description: "This is a placeholder for a great certification you have earned. You can describe what you learned here."
  },
   {
    title: "Another Great Certificate",
    issuer: "Tech University",
    date: "Dec 2023",
    url: "#",
    description: "This is another placeholder for a certification. Describe the skills and knowledge gained."
  },
];

export function Certifications() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading id="certifications" title="Certifications" subtitle="My professional credentials and qualifications." />
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index}>
                <CardHeader>
                    <CardTitle className='font-headline'>{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Badge variant="outline">{cert.date}</Badge>
                    <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="secondary">
                        <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                            View Credential <ArrowUpRight className="ml-2 h-4 w-4" />
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
