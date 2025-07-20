import { SectionHeading } from './section-heading';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const profiles = [
  {
    platform: "LeetCode",
    username: "your_username",
    url: "#",
    stats: "100+ Problems Solved",
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current"><title>LeetCode</title><path d="M13.48 0L24 10.52 13.48 21.04 2.96 10.52 13.48 0zm0 3.8L6.84 10.52l6.64 6.72 6.64-6.72-6.64-6.72zM0 13.48l10.52 10.52L21.04 13.48l-3.52 3.52-6.88-6.88-6.88 6.88-3.76-3.52z"></path></svg>
  },
  {
    platform: "HackerRank",
    username: "your_username",
    url: "#",
    stats: "5 Star Coder",
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current"><title>HackerRank</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.333 16.333H7.667V7.667h8.666v8.666zm-5.625-2.95h2.533v-2.75H10.708v2.75zm-1.625-4.25h5.833V7.75H9.083v1.383z"></path></svg>
  },
   {
    platform: "CodeChef",
    username: "your_username",
    url: "#",
    stats: "4 Star Coder",
    icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current"><title>CodeChef</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.06 2.01c5.523 0 9.99 4.467 9.99 9.99s-4.467 9.99-9.99 9.99-9.99-4.467-9.99-9.99S6.537 2.01 12.06 2.01zm-3.69 3.63v8.72h1.72V7.36h4.52V5.64H8.37zm6.21 0v1.72h1.72V5.64h-1.72zm0 3.44v1.72h1.72V9.08h-1.72zm0 3.45v1.72h1.72v-1.72h-1.72z"></path></svg>
  }
];

export function CompetitiveProgramming() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black/10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading id="competitive-programming" title="Competitive Programming" subtitle="My profiles on various competitive coding platforms." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
             <Card key={index} className="flex flex-col text-center items-center justify-center p-6 hover:shadow-lg hover:-translate-y-1 transition-transform duration-200">
                <CardHeader className="flex flex-col items-center">
                    <div className="text-primary mb-4">{profile.icon}</div>
                    <CardTitle className="font-headline">{profile.platform}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col items-center space-y-4">
                    <p className="text-muted-foreground">{profile.stats}</p>
                    <Button asChild>
                        <Link href={profile.url} target="_blank" rel="noopener noreferrer">
                           View Profile <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
