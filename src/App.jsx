import React from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

export default function App() {
  const active = useScrollSpy(SECTION_IDS);

  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
