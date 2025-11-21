
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Flyer from './components/Flyer';

const App: React.FC = () => {
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-brand-grayLight font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer onOpenFlyer={() => setIsFlyerOpen(true)} />
      <Flyer isOpen={isFlyerOpen} onClose={() => setIsFlyerOpen(false)} />
    </div>
  );
};

export default App;
