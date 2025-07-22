
import { SectionHeading } from './section-heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

const socialWork = [
  {
    title: "YouTuber",
    organization: "YouTube",
    date: "Jan 2025",
    description: "I share my knowledge with others on YouTube.Till now have uploaded 4 videos,Will be uploading more.click on the image to get to my channel",
    image: "/library/youtube.png",
    url: "https://www.youtube.com/@yashsharma-n3w7z",
    dataAiHint: "community event"
  },
] 

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
                    {item.url ? (
                      <Link href={item.url} target="_blank" rel="noopener noreferrer" className="block transition-transform transform hover:-translate-y-1 hover:shadow-xl">
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
                      </Link>
                    ) : (
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
                    )}
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
