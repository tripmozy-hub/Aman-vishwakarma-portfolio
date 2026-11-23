import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight, X, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

export default function LandingPages() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with ECHO centered (Frame 15)
  const [selectedProject, setSelectedProject] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const projects = portfolioConfig.landingPages;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  // Touch swipe support for iOS & Android
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="landing-pages"
      className="relative min-h-screen w-full bg-[#FFFFFF] text-[#0A0A0C] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden flex flex-col justify-between select-none"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-black" />
              <span className="font-mono-code text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
                GALLERY ARCHIVE // 06
              </span>
            </div>
            {/* Headline matching Frames 14-18: "LANDING PAGES" */}
            <h2 className="font-anton text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-[#08080a] leading-none">
              LANDING PAGES
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono-code text-xs font-bold text-gray-500">
              0{currentIndex + 1} / 0{projects.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CURVED / RIBBON HORIZONTAL PERSPECTIVE CAROUSEL (Frames 14-18) */}
        <div 
          className="relative w-full py-8 sm:py-12 overflow-hidden touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          <div className="flex items-center justify-center min-h-[280px] sm:min-h-[420px] perspective-[1200px]">
            {projects.map((proj, idx) => {
              const offset = idx - currentIndex;
              const isCenter = offset === 0;

              // Hide cards too far away
              if (Math.abs(offset) > 2) return null;

              // 3D curved ribbon transform calculations (responsive for mobile vs desktop)
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
              const translateX = offset * (isMobile ? 210 : 320);
              const rotateY = offset * (isMobile ? -16 : -25);
              const scale = isCenter ? (isMobile ? 1.0 : 1.05) : (isMobile ? 0.78 : 0.82);
              const opacity = isCenter ? 1 : (isMobile ? 0.35 : 0.45);
              const zIndex = 20 - Math.abs(offset) * 5;

              return (
                <motion.div
                  key={proj.id}
                  onClick={() => {
                    if (isCenter) {
                      setSelectedProject(proj);
                    } else {
                      setCurrentIndex(idx);
                    }
                  }}
                  animate={{
                    x: translateX,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 25 }}
                  className={`absolute w-[260px] sm:w-[440px] md:w-[500px] aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.18)] border ${
                    isCenter ? 'border-black ring-2 ring-black/10' : 'border-black/10'
                  } bg-[#0A0A0C] transition-shadow duration-300 gpu-accel`}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle inner shadow and curved perspective gloss */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Title on Hover / Active */}
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                    <div>
                      <p className="font-anton text-base sm:text-xl text-white uppercase tracking-wider">{proj.title}</p>
                      <p className="font-mono-code text-[10px] text-gray-300">{proj.category}</p>
                    </div>
                    {isCenter && (
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/20 backdrop-blur-md text-[9px] sm:text-[10px] font-mono-code text-white">
                        TAP TO OPEN
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="sm:hidden text-center mt-3">
            <span className="font-mono-code text-[10px] text-gray-400 uppercase tracking-wider">
              👈 SWIPE TO BROWSE 👉
            </span>
          </div>

        </div>

        {/* BOTTOM METADATA & SPECS (Frame 18) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-black">
                  {currentProject.title}
                </span>
                <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-black/5 text-gray-600">
                  {currentProject.year}
                </span>
              </div>
              <p className="font-mono-code text-xs text-[#f20d20] font-bold tracking-wider uppercase mt-1">
                {currentProject.category}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl font-body">
                {currentProject.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedProject(currentProject)}
                className="px-6 py-2.5 rounded-full bg-black text-white font-bold text-xs tracking-wider uppercase hover:bg-[#f20d20] transition-colors flex items-center gap-2"
              >
                <span>VIEW SPECIFICATIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-black/10 overflow-hidden relative space-y-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="font-mono-code text-xs text-[#f20d20] font-bold uppercase">{selectedProject.category}</p>
                <h3 className="font-anton text-3xl uppercase tracking-tight text-black mt-1">{selectedProject.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono-code text-gray-700">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-black/10 flex justify-between items-center">
                <span className="font-mono-code text-xs text-gray-500">YEAR // {selectedProject.year}</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 rounded-full bg-black text-white text-xs font-bold uppercase hover:bg-[#f20d20] transition-colors"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
