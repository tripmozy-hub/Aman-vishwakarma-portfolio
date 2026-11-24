import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

export default function About() {
  const { personal } = portfolioConfig;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#08080A] text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden flex flex-col justify-center select-none"
    >
      {/* Background: Starry Swirls & Gothic Cathedral Spire Silhouettes (Frames 5-8) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/assets/about-backdrop.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080A] via-transparent to-[#08080A] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* SECTION 3 HEADER: Split "ABOUT" / "ME" with Center Window (Frames 5 & 6) */}
        <div className="relative flex flex-col items-center justify-center mb-10 sm:mb-16">
          
          {/* Split Background Headline */}
          <div className="w-full flex justify-between items-center select-none pointer-events-none px-2 sm:px-0">
            <h2 className="font-anton text-5xl xs:text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-black tracking-tight text-white/90 uppercase">
              ABOUT
            </h2>

            <h2 className="font-anton text-5xl xs:text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-black tracking-tight text-white/90 uppercase">
              ME
            </h2>
          </div>

          {/* Central Portal / Card with Floating Figure in Beam of Light (Frames 7 & 8) */}
          <div className="w-full max-w-4xl bg-[#0c0d12]/95 border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-xl -mt-16 sm:-mt-24 md:-mt-32 z-20">
            {/* Top Bar of the Card */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between text-xs font-mono-code text-gray-400">
              <span className="text-[#f20d20] font-bold tracking-widest uppercase">
                // PROFESSIONAL SUMMARY &amp; IDENTITY
              </span>
              <span className="hidden sm:inline-block tracking-wider">
                {personal.name} • {personal.location}
              </span>
            </div>

            {/* Inner Content Area */}
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Mission Statement (Frame 8) */}
              <h3 className="font-anton text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
                {personal.aboutStatement}
              </h3>

              {/* Floating Figure in Beam of Light Graphic (Frames 7 & 8) */}
              <div className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-inner group">
                <img
                  src="/assets/beam-figure.png"
                  alt="Ethereal Figure Floating in Beam of Light"
                  className="w-full h-full object-cover object-center filter contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent opacity-80" />
                
                {/* Overlay status marker */}
                <span className="absolute top-3 left-3 text-[10px] font-mono-code text-gray-300 px-2.5 py-1 rounded bg-black/70 border border-white/10">
                  FULL STACK DEVELOPER // MERN
                </span>
                <span className="absolute bottom-3 right-3 text-[10px] font-mono-code text-emerald-400 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  AVAILABLE FOR IMMEDIATE HIRE
                </span>
              </div>

              {/* Exact Professional Summary from CV */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <p className="font-mono-code text-xs font-bold text-[#f20d20] uppercase tracking-wider">
                  // CANDIDATE PROFILE &amp; OBJECTIVE
                </p>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-body">
                  {personal.aboutSummary}
                </p>
              </div>

              {/* Bottom Editorial Details & Action Buttons (Frame 8) */}
              <div className="pt-2 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                
                {/* Left: Discipline & Craft */}
                <div className="space-y-1.5 max-w-xl">
                  <p className="font-mono-code text-xs font-bold text-[#f20d20] tracking-widest uppercase">
                    DISCIPLINE &amp; CRAFT: {personal.aboutCraft}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed font-body">
                    {personal.aboutBio}
                  </p>
                </div>

                {/* Right: Contact & Services Pill Buttons (Frame 8) */}
                <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                  <a
                    href="#contact"
                    className="flex-1 md:flex-initial px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-[#f20d20] hover:text-white transition-colors text-center shadow-lg cursor-pointer"
                  >
                    CONTACT
                  </a>
                  <a
                    href="#services"
                    className="flex-1 md:flex-initial px-6 py-2.5 rounded-full border border-white/20 text-white font-bold text-xs tracking-wider uppercase hover:bg-white/10 transition-colors text-center cursor-pointer"
                  >
                    SERVICES
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
