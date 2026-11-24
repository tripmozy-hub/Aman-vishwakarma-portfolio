import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ArrowUp, Compass } from 'lucide-react';

const sections = [
  { id: 'home', label: 'HERO', num: '01' },
  { id: 'about', label: 'ABOUT', num: '02' },
  { id: 'experience', label: 'EXPERIENCE', num: '03' },
  { id: 'featured', label: 'FEATURED', num: '04' },
  { id: 'landing-pages', label: 'LANDING PAGES', num: '05' },
  { id: 'works-deck', label: 'WORKS \'26', num: '06' },
  { id: 'services', label: 'SERVICES', num: '07' },
  { id: 'contact', label: 'CONTACT', num: '08' }
];

export default function ScrollExperience() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [showNavPill, setShowNavPill] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowNavPill(scrollY > 200);

      // Determine current active section
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSectionIdx(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jumpTo = (index) => {
    const targetIdx = Math.max(0, Math.min(sections.length - 1, index));
    const targetEl = document.getElementById(sections[targetIdx].id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeSection = sections[activeSectionIdx] || sections[0];

  return (
    <>
      {/* 1. TOP SCROLL PROGRESS BAR (Glowing red gradient) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#f20d20] via-[#ff4d5a] to-[#f20d20] shadow-[0_0_12px_rgba(242,13,32,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. FLOATING QUICK SCROLL CONTROLLER (Bottom Right) */}
      <AnimatePresence>
        {showNavPill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              bottom: 'max(1.25rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))',
              right: 'max(1rem, calc(env(safe-area-inset-right, 0px) + 0.75rem))'
            }}
            className="fixed z-40 flex items-center gap-2 select-none"
          >
            {/* Active Section Indicator Capsule */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/85 backdrop-blur-xl border border-white/15 text-white shadow-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f20d20] animate-pulse" />
              <span className="font-mono-code text-[10px] font-bold tracking-widest text-[#f20d20]">
                {activeSection.num}
              </span>
              <span className="font-anton text-xs tracking-wider uppercase text-gray-200">
                {activeSection.label}
              </span>
              <span className="font-mono-code text-[10px] text-gray-500">
                {Math.round(scrollProgress)}%
              </span>
            </div>

            {/* Jump Buttons Group */}
            <div className="flex items-center p-1 rounded-full bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl">
              {/* Previous Section Button */}
              <button
                onClick={() => jumpTo(activeSectionIdx - 1)}
                disabled={activeSectionIdx === 0}
                className="p-2 rounded-full text-white hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                title="Scroll to Previous Section"
                aria-label="Previous Section"
              >
                <ChevronUp className="w-4 h-4" />
              </button>

              {/* Next Section Button */}
              <button
                onClick={() => jumpTo(activeSectionIdx + 1)}
                disabled={activeSectionIdx === sections.length - 1}
                className="p-2 rounded-full text-white hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                title="Scroll to Next Section"
                aria-label="Next Section"
              >
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Quick Back to Top */}
              <button
                onClick={scrollToTop}
                className="p-2 ml-1 rounded-full bg-[#f20d20] text-white hover:bg-[#ff2437] transition-all hover:scale-110 shadow-lg cursor-pointer"
                title="Back to Top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
