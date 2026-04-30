import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Expertise } from '@/components/sections/Expertise';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

/**
 * Root page — composes all portfolio sections in order.
 * Each section is a standalone Server-compatible component;
 * interactivity is pushed to the leaf Client Components.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
