import { SectionHeading } from './section-heading';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const profiles = [
  {
    platform: "CodeForces",
    username: "peaceful_WarriorYash",
    url: "https://codeforces.com/profile/peaceful_warriorYash",
    stats: "max rated:876",
    icon: (
        <svg
            className="h-8 w-8"
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Codeforces</title>
            <path d="M4.582 0C2.37.245.531 2.036.245 4.195c-.242 1.83.003 3.66.726 5.25.758 1.666 1.968 3.018 3.513 3.887a.492.492 0 0 0 .54-.035c.14-.104.204-.288.169-.464-.52-2.653.003-5.403 1.57-7.62 1.565-2.215 3.93-3.483 6.475-3.492C15.822 1.71 18.288.94 20.817.92c.314 0 .47-.24.47-.468 0-.228-.156-.47-.47-.47-2.73 0-5.462.86-8.006 2.583C10.273 4.28 8.16 6.355 6.78 8.89c-.198.365-.488.66-.82.87-.27.17-.592.275-.915.31C2.39 10.15.534 8.35.245 5.92.015 3.965.248 2.01.92 1.015A.47.47 0 0 0 1.017.92C2.01.248 3.965.015 5.92.245c.182.022.31.21.23.38-.08.17-.3.22-.485.195l-.083-.04Z" />
            <path d="M23.08.92c-1-.673-2.955-.906-4.92-.68-2.653.303-5.11 1.558-6.99 3.558-1.88 2-3.04 4.58-3.28 7.23-.24 2.654.43 5.353 1.88 7.56.106.166.3.248.486.18.188-.068.29-.29.21-.485-.75-2.24-1.02-4.71-.55-7.07.47-2.36 1.7-4.59 3.56-6.32 1.86-1.73 4.2-2.82 6.7-3.04 2.5-.22 4.9.33 6.91 1.48.18.1.39.02.47-.16a.47.47 0 0 0-.16-.47Z" />
        </svg>
    )
  },
   {
    platform: "GfG",
    username: "yashjivdn1",
    url: "https://www.geeksforgeeks.org/user/yashjivdn1/",
    stats: "solved 70+ problems",
    icon: (
        <svg
            className="h-8 w-8 fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <title>GeeksforGeeks</title>
            <path d="M11.534 2.122c-1.84.42-3.352 1.4-4.524 2.87-1.55 1.94-2.28 4.21-2.02 6.55.26 2.34 1.55 4.49 3.52 5.89 1.18.84 2.58 1.35 4.02 1.44.33.02.66.03 1.04.03.62 0 1.2-.05 1.72-.15 1.04-.2 2.08-.66 2.92-1.35 1.68-1.39 2.62-3.41 2.76-5.59.14-2.18-.59-4.32-2.02-5.96-1.06-1.22-2.48-2.02-4.02-2.35-.6-.13-1.2-.1-1.8-.02l-1.12.15zM8.474 6.722c.3-.5.78-.88 1.34-.98.56-.1 1.13.04 1.62.39.49.35.82.88.92 1.47.1.59-.05 1.2-.42 1.68-.37.48-.92.78-1.5.85-.58.07-1.16-.1-1.62-.48-.46-.38-.75-.92-.8-1.5-.05-.53.12-1.08.46-1.43zM16.914 16.1c-.53.92-1.4 1.54-2.45 1.72-1.05.18-2.14-.02-3.02-.6-1.18-.78-2.01-2.04-2.2-3.43-.19-1.39.29-2.8,1.3-3.76.6-.57 1.35-.91 2.15-1.02.8-.11 1.6.02 2.3.42.82.47 1.45 1.25 1.78 2.17.33.92.3 1.94-.1 2.85-.4.91-1.12 1.65-2.05 2.08l.29-.47z" />
        </svg>
    )
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
