import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Certifications } from '@/components/certifications';
import { CompetitiveProgramming } from '@/components/competitive-programming';
import { SocialWork } from '@/components/social-work';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <CompetitiveProgramming />
        <SocialWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
