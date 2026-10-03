import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import WorkWithMe from '@/components/sections/WorkWithMe';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import ProjectMarquee from '@/components/ui/ProjectMarquee';
import RevealSection from '@/components/ui/RevealSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectMarquee />
      <RevealSection>
        <FeaturedWork />
      </RevealSection>
      <RevealSection>
        <WorkWithMe />
      </RevealSection>
      <RevealSection>
        <Testimonials />
      </RevealSection>
      <RevealSection>
        <Contact />
      </RevealSection>
    </>
  );
}
