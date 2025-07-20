import { SectionHeading } from './section-heading';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const profiles = [
  {
    platform: "CodeForces",
    username: "peaceful_WarriorYash",
    url: "https://codeforces.com/profile/peaceful_warriorYash",
    stats: "max rated:876",
    icon: "/CF.jpg"
  },
   {
    platform: "GfG",
    username: "yashjivdn1",
    url: "https://www.geeksforgeeks.org/user/yashjivdn1/",
    stats: "solved 70+ problems",
    icon: "/gfg.jpg"
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
                    <div className="mb-4">
                      <Image src={profile.icon} alt={`${profile.platform} logo`} width={80} height={80} className="h-20 w-20 object-contain" />
                    </div>
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
