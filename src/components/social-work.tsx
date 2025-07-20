import { SectionHeading } from './section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

const socialWork = [
  {
    title: "Community Tech Workshop",
    organization: "Local Non-Profit",
    date: "Summer 2023",
    description: "Volunteered to teach basic web development skills to underprivileged students in the community.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "community event"
  },
   {
    title: "Environmental Cleanup Drive",
    organization: "Green Planet Initiative",
    date: "Spring 2023",
    description: "Participated in a city-wide initiative to clean up local parks and promote recycling awareness.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "nature environment"
  },
];

export function SocialWork() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading id="social-work" title="Social Work" subtitle="Giving back to the community." />
        <div className="relative max-w-3xl mx-auto pl-8">
            <div className="absolute left-3 top-0 h-full w-0.5 bg-border" />
            {socialWork.map((item, index) => (
            <div key={index} className="relative mb-12">
                <div className="absolute -left-[38px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                <div className="pl-4">
                    <Card>
                         <div className="aspect-video relative">
                            <Image src={item.image} alt={item.title} fill objectFit="cover" className="rounded-t-lg" data-ai-hint={item.dataAiHint} />
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline">{item.title}</CardTitle>
                            <CardDescription>{item.organization} - {item.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
