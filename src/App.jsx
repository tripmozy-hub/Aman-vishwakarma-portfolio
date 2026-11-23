import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollExperience from './components/ScrollExperience';
import IntroAnimation from './components/sections/IntroAnimation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CreativeTechnologist from './components/sections/CreativeTechnologist';
import FeaturedProject from './components/sections/FeaturedProject';
import LandingPages from './components/sections/LandingPages';
import WorksDeck from './components/sections/WorksDeck';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  // Initialize luxury smooth momentum scroll (Lenis)
  useEffect(() => {
    // Only run on desktop / pointer devices to preserve native mobile feel
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#0A0A0C] selection:bg-[#F20D20] selection:text-white font-body overflow-x-hidden">
      
      {/* SECTION 1: Intro Loading Animation (Glowing "AMAN.V" with soundwave ring) */}
      <IntroAnimation onComplete={() => setIntroFinished(true)} />

      {/* Desktop Precision Cursor */}
      <CustomCursor />

      {/* Luxury Scroll Progress Bar & Floating Quick Section Controller */}
      <ScrollExperience />

      {/* Persistent Minimal Header ("AMAN.V •" + Links + CV Download) */}
      <Navbar />

      {/* MAIN SECTIONS IN EXACT ORDER OF REFERENCE VIDEO */}
      <main className="w-full">
        {/* SECTION 2: HERO (Frames 3-4: EXPLORE MY PORTFOLIO + Backlit Silhouette / Portrait) */}
        <Hero />

        {/* SECTION 3: ABOUT (Frames 5-8: Starry Backdrop + Split ABOUT ME + Floating Beam Figure) */}
        <About />

        {/* SECTION 4: CREATIVE TECHNOLOGIST (Frames 9-12: WHERE I'VE BEEN + 4 Internships + Skills Matrix) */}
        <CreativeTechnologist />

        {/* SECTION 5: FEATURED PRODUCTION PROJECTS (Frame 13: JobHub & Ayudar NGO Live Switcher) */}
        <FeaturedProject />

        {/* SECTION 6: LANDING PAGES GALLERY (Frames 14-18: Curved Perspective Ribbon Slider) */}
        <LandingPages />

        {/* SECTION 7: CLEAN WHITE WORKS '26 (Frames 19-26: Hexagonal Wheel & 3D Cycling Deck) */}
        <WorksDeck />

        {/* SECTION 8: SERVICES (Frame 27: THE SERVICES WE PROVIDE + Expandable Dark Pills) */}
        <Services />

        {/* SECTION 9: CONTACT & FOOTER (Frames 28-29: Ticker + Glowing LET'S TALK + Social Pills) */}
        <Contact />
      </main>

    </div>
  );
}
