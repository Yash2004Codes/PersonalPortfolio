import { SectionHeading } from './section-heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const certifications = [
  {
    title: "Certified in Nodejs",
    issuer: "Internshala Trainings",
    date: "April 2025",
    CertificateId:"3mq5i9l6ktm",
    Trained:"Trained in complete Nodejs"
  },
   {
    title: "Certified Web Devloper",
    issuer: "Internshala Trainings",
    date: "April 2025",
    CertificateId:"agu19w03fqf",
    Trained:"Trained in react,javascript,html,css,php,mysql"

  },
];

export function Certifications() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading id="certifications" title="Certifications" subtitle="My professional credentials and qualifications." />
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                    <CardTitle className='font-headline'>{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Badge variant="outline">{cert.date}</Badge>
                    <p className="text-muted-foreground">{cert.Trained}</p>
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
