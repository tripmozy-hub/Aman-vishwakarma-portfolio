import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightSection, setIsLightSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      // Detect current section to highlight in navbar & determine light/dark section
      const sections = ['home', 'about', 'experience', 'featured', 'landing-pages', 'works-deck', 'services', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            // Light sections: home, featured, landing-pages, works-deck, services
            const lightList = ['home', 'featured', 'landing-pages', 'works-deck', 'services'];
            setIsLightSection(lightList.includes(sectionId));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isLightSection
              ? 'bg-white/85 backdrop-blur-md border-b border-black/10 py-3.5 shadow-sm'
              : 'bg-black/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo matching Frame 3: "ECHO •" */}
          <a
            href="#home"
            className="group flex items-center gap-2 select-none"
          >
            <span
              className={`font-anton text-2xl tracking-[0.18em] uppercase transition-colors duration-200 ${
                isLightSection ? 'text-black' : 'text-white'
              }`}
            >
              ECHO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f20d20] group-hover:scale-150 transition-transform" />
          </a>

          {/* Desktop Nav Links (Frame 3) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {portfolioConfig.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 relative py-1 ${
                    isActive
                      ? isLightSection
                        ? 'text-black font-bold'
                        : 'text-white font-bold'
                      : isLightSection
                      ? 'text-gray-600 hover:text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                        isLightSection ? 'bg-black' : 'bg-[#f20d20]'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download CV / Resume Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={portfolioConfig.personal.resumeUrl}
              download="Aman_Vishwakarma_CV.pdf"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                isLightSection
                  ? 'border border-black/20 text-black hover:bg-black hover:text-white'
                  : 'border border-white/20 text-white hover:bg-white hover:text-black'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isLightSection ? 'text-black hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-28"
          >
            <div className="space-y-6">
              <p className="font-mono-code text-[11px] text-[#f20d20] tracking-widest uppercase">
                // NAVIGATION MENU
              </p>
              <div className="flex flex-col space-y-4">
                {portfolioConfig.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-anton text-3xl tracking-wider text-white hover:text-[#f20d20] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <a
                href={portfolioConfig.personal.resumeUrl}
                download="Aman_Vishwakarma_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-[#f20d20] hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV (PDF)</span>
              </a>
              <p className="text-center text-xs text-gray-500 font-mono-code">
                AMAN VISHWAKARMA • {portfolioConfig.personal.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
