import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ArrowUpRight, RotateCcw, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

export default function WorksDeck() {
  // Modes: 'wheel' (Frames 19 & 20: Hexagonal circular ring) vs 'deck' (Frames 21-26: 3D vertical cycling stack)
  const [viewMode, setViewMode] = useState('deck'); // default to interactive deck as seen in video
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = portfolioConfig.works26;
  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="works-deck"
      className="relative min-h-screen w-full bg-[#FFFFFF] text-[#0A0A0C] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden flex flex-col justify-between select-none"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">

        {/* Top Controls & View Toggle (Hexagonal Ring vs 3D Deck) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-8 h-[2px] bg-black" />
              <span className="font-mono-code text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
                SELECTED WORKS // 07
              </span>
            </div>
            <p className="font-mono-code text-xs text-gray-500 uppercase">
              INTERACTIVE 3D COMPILATION
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode(viewMode === 'deck' ? 'wheel' : 'deck')}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 text-xs font-mono-code font-bold uppercase transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>LAYOUT: {viewMode === 'deck' ? '3D VERTICAL DECK' : 'HEXAGONAL WHEEL'}</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: HEXAGONAL CIRCULAR WHEEL (Frames 19 & 20) */}
        {viewMode === 'wheel' && (
          <div className="relative flex-1 flex items-center justify-center min-h-[500px]">
            {/* Center Label: "WORKS '26" (Frames 19 & 20) */}
            <div className="text-center z-10 pointer-events-none">
              <span className="font-anton text-4xl sm:text-6xl uppercase tracking-wider text-black">
                WORKS '26
              </span>
              <p className="text-[11px] font-mono-code text-gray-500 mt-1 uppercase">
                [ CLICK ANY CARD TO INSPECT ]
              </p>
            </div>

            {/* 6 Circular / Hexagonal Arranged Cards (Frames 19 & 20) */}
            <div className="absolute inset-0 flex items-center justify-center">
              {projects.map((proj, idx) => {
                const angle = (idx * 360) / projects.length; // 60 deg each
                const radius = 230; // Radius in pixels for desktop
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <motion.div
                    key={proj.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setViewMode('deck');
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, x, y, rotate: angle + 90 }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.15, zIndex: 30 }}
                    className="absolute w-[140px] sm:w-[170px] aspect-[16/10] rounded-xl overflow-hidden shadow-lg border border-black/15 bg-white cursor-pointer group"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: 3D CYCLING VERTICAL DECK (Frames 21-26) */}
        {viewMode === 'deck' && (
          <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto min-h-[440px]">
            
            {/* LEFT COLUMN: Project Title & Headline (Frames 22-26) */}
            <motion.div
              key={`left-${currentProject.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-3 space-y-2"
            >
              <span className="font-mono-code text-[11px] text-[#f20d20] font-bold tracking-widest uppercase">
                0{currentIndex + 1} // 0{projects.length}
              </span>
              <h3 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-black leading-none">
                {currentProject.title}
              </h3>
              <p className="font-syne text-lg font-bold text-gray-800 leading-snug">
                "{currentProject.headline}"
              </p>
            </motion.div>

            {/* CENTER COLUMN: Floating 3D Stacked Browser Window (Frames 22-26) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[360px] perspective-[1000px]">
              
              {/* Previous Floating Card (Floating above in perspective) */}
              <div 
                onClick={handlePrev}
                className="absolute -top-10 w-[78%] aspect-[16/10] rounded-2xl overflow-hidden opacity-35 filter blur-[0.5px] scale-90 cursor-pointer border border-black/10 shadow-md transition-all hover:opacity-60"
                style={{ transform: 'translateY(-20px) rotateX(16deg)' }}
              >
                <img
                  src={projects[(currentIndex - 1 + projects.length) % projects.length].image}
                  alt="Previous"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main Active Browser Mockup (Frames 22-26) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-20 w-full max-w-[540px] aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-black/15 bg-white group cursor-pointer"
                  onClick={handleNext}
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Next Card Sitting Below */}
              <div 
                onClick={handleNext}
                className="absolute -bottom-10 w-[78%] aspect-[16/10] rounded-2xl overflow-hidden opacity-35 filter blur-[0.5px] scale-90 cursor-pointer border border-black/10 shadow-md transition-all hover:opacity-60"
                style={{ transform: 'translateY(20px) rotateX(-16deg)' }}
              >
                <img
                  src={projects[(currentIndex + 1) % projects.length].image}
                  alt="Next"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* RIGHT COLUMN: Project Specs & Role (Frames 22-26) */}
            <motion.div
              key={`right-${currentProject.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-3 space-y-4 text-xs font-mono-code"
            >
              <div className="p-4 rounded-xl bg-black/5 border border-black/5 space-y-2">
                <div>
                  <span className="text-gray-500 font-bold uppercase">CLIENT</span>
                  <p className="font-bold text-black">{currentProject.client}</p>
                </div>
                <div>
                  <span className="text-gray-500 font-bold uppercase">ROLE</span>
                  <p className="font-bold text-[#f20d20]">{currentProject.role}</p>
                </div>
                <div>
                  <span className="text-gray-500 font-bold uppercase">TECH STACK</span>
                  <p className="text-gray-800">{currentProject.stack}</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 font-body leading-relaxed">
                {currentProject.description}
              </p>
            </motion.div>

          </div>
        )}

        {/* BOTTOM CONTROLS & CUE (Frames 22-26) */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-4">
            <span className="font-anton text-2xl tracking-wider text-black">
              WORKS '26
            </span>
            <span className="font-mono-code text-xs text-gray-500">
              [ {currentIndex + 1} OF {projects.length} ]
            </span>
          </div>

          {/* Cycling Cue matching Frames 22-26: "✦ SCROLL OR DRAG TO CYCLE" */}
          <div className="flex items-center gap-2 font-mono-code text-xs text-gray-500 uppercase">
            <span className="text-[#f20d20]">✦</span>
            <span>CLICK CARD OR ARROWS TO CYCLE DECK</span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
              aria-label="Previous Project"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-black/20 hover:bg-black hover:text-white transition-colors"
              aria-label="Next Project"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
