
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
import SocialMediaKit from './components/SocialMediaKit';

const App: React.FC = () => {
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  const [isSocialKitOpen, setIsSocialKitOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-brand-grayLight font-sans">
      {/* 
        Wrap main content in an ID to allow the Flyer to exclude it from print styles.
        Flyer and SocialMediaKit are outside this wrapper so they aren't affected by the layout 
        but handle their own visibility/positioning (fixed overlays).
      */}
      <div id="site-content" className="flex-grow flex flex-col">
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
          <Footer 
            onOpenFlyer={() => setIsFlyerOpen(true)} 
            onOpenSocialKit={() => setIsSocialKitOpen(true)}
          />
      </div>
      
      <Flyer isOpen={isFlyerOpen} onClose={() => setIsFlyerOpen(false)} />
      <SocialMediaKit isOpen={isSocialKitOpen} onClose={() => setIsSocialKitOpen(false)} />
    </div>
  );
};

export default App;
