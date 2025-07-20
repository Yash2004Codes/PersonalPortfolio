import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
          <Image src="/profile.png" alt="Yash Lalit Sharma" width={128} height={128} className="rounded-full" data-ai-hint="profile person" />
         
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter">
            Yash Lalit Sharma
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
           Full Stack Web Devloper with deep interest in App Development,Data Science,AI and Cyber Security
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
