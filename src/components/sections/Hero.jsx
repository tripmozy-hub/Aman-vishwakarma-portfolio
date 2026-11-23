import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

export default function Hero() {
  const [useRealPhoto, setUseRealPhoto] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[100vh] min-h-[100dvh] w-full bg-[#FFFFFF] text-[#0A0A0C] flex flex-col justify-between pt-20 sm:pt-24 pb-6 px-4 sm:px-8 lg:px-12 overflow-hidden select-none"
      style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))' }}
    >
      {/* Subtle Depth Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-gradient-to-b from-[#f2f4f7] to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Top Switcher: Toggle between Artistic Silhouette & Real Portrait */}
      <div className="relative z-30 flex justify-end items-center max-w-7xl mx-auto w-full mb-2">
        <button
          onClick={() => setUseRealPhoto(!useRealPhoto)}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/5 hover:bg-black/10 active:scale-95 border border-black/10 text-[11px] font-mono-code text-gray-700 transition-all duration-200 cursor-pointer min-h-[38px]"
          title="Toggle silhouette vs photo"
        >
          <span className="w-2 h-2 rounded-full bg-[#f20d20] group-hover:scale-125 transition-transform" />
          <span>VIEW: {useRealPhoto ? 'REAL PORTRAIT' : 'ARTISTIC SILHOUETTE'}</span>
        </button>
      </div>

      {/* CENTERPIECE: Oversized EXPLORE MY PORTFOLIO with Overlapping Silhouette (Frames 3 & 4) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto my-auto">
        
        {/* Layer 1: Giant EXPLORE MY PORTFOLIO Headline */}
        <div className="w-full text-center relative z-10 pt-2 sm:pt-0">
          <h1 className="font-anton text-4xl sm:text-7xl md:text-9xl lg:text-[132px] font-black uppercase tracking-tight text-[#08080a] leading-[0.9]">
            EXPLORE MY
          </h1>

          <div className="font-anton text-4xl sm:text-7xl md:text-9xl lg:text-[138px] font-black uppercase tracking-tight text-black/20 leading-[0.88] mt-0 sm:-mt-3">
            PORTFOLIO
          </div>
        </div>

        {/* Layer 2: Central Artistic Silhouette / Backlit Portrait overlapping PORTFOLIO */}
        <div className="relative sm:absolute sm:bottom-0 left-1/2 -translate-x-1/2 w-[220px] sm:w-[340px] md:w-[400px] lg:w-[440px] pointer-events-none z-20 flex justify-center -mt-6 sm:mt-0">
          {useRealPhoto ? (
            <div className="relative w-[200px] sm:w-[280px] md:w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
              <img
                src={portfolioConfig.personal.portraitUrl}
                alt="Aman Vishwakarma"
                className="w-full h-full object-cover object-[50%_25%] filter contrast-115 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md rounded-xl p-2 text-center border border-white/10">
                <p className="font-anton text-xs tracking-wider text-white uppercase">{portfolioConfig.personal.name}</p>
                <p className="text-[9px] font-mono-code text-gray-300">RANIGANJ, WEST BENGAL</p>
              </div>
            </div>
          ) : (
            <div className="relative w-full flex justify-center">
              <img
                src={portfolioConfig.personal.silhouetteUrl}
                alt="Artistic Backlit Silhouette"
                className="w-full h-auto max-h-[280px] sm:max-h-[380px] md:max-h-[440px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] filter contrast-125"
              />
            </div>
          )}
        </div>

      </div>

      {/* BOTTOM EDITORIAL DETAILS (Frames 3 & 4) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-4 sm:pt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        
        {/* Left: Designer Est. 2023 */}
        <div className="space-y-0.5">
          <p className="font-mono-code text-xs font-bold tracking-[0.2em] text-gray-900 uppercase">
            DESIGNER {portfolioConfig.personal.estYear}
          </p>
          <p className="text-[11px] font-mono-code text-gray-500">
            {portfolioConfig.personal.location}
          </p>
        </div>

        {/* Center: Scroll indicator cue */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono-code text-gray-400">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#f20d20]" />
          <span>SCROLL TO EXPLORE ARCHIVE</span>
        </div>

        {/* Right: Editorial statement & Disciplines list (Frames 3 & 4) */}
        <div className="text-left sm:text-right max-w-sm space-y-2">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-gray-800 leading-snug font-syne uppercase">
            "{portfolioConfig.personal.introStatement}"
          </p>

          <div className="flex sm:justify-end flex-wrap gap-x-4 gap-y-1 text-xs font-mono-code font-bold tracking-wider text-gray-700">
            {portfolioConfig.personal.heroDisciplines.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#f20d20]" />
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
