import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MovingBackground from '@/components/MovingBackground';

const Index = () => {
  return (
    <div className="min-h-screen">
      <MovingBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
