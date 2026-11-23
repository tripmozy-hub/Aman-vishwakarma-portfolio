import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { portfolioConfig } from '../../data/portfolioConfig';

export default function FeaturedProject() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const projects = portfolioConfig.projects;
  const project = projects[selectedIdx];

  return (
    <section
      id="featured"
      className="relative min-h-screen w-full bg-[#F5F5F7] text-[#0A0A0C] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden flex flex-col justify-center select-none"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Section Header & Project Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-black" />
              <span className="font-mono-code text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
                {project.badge}
              </span>
            </div>

            <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#08080a] leading-none">
              PRODUCTION <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">PROJECTS.</span>
            </h2>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-black/5 border border-black/10">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full font-mono-code text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-black text-white shadow-md'
                    : 'text-gray-600 hover:text-black hover:bg-black/5'
                }`}
              >
                {p.tabLabel || `0${idx + 1} // ${p.title.slice(0, 16)}`}
              </button>
            ))}
          </div>
        </div>

        {/* Center Showcase Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            
            {/* Main Browser Window Mockup (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.14)] border border-black/10 bg-white group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Overlay live status */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-emerald-400 font-mono-code text-[10px] font-bold uppercase tracking-wider border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                </div>
              </div>
            </div>

            {/* Project Details Narrative (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono-code text-xs font-bold text-[#f20d20] tracking-widest uppercase">
                  // {project.category}
                </span>
                <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-tight text-[#08080a] mt-1 leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Exact Bullets from CV */}
              <div className="space-y-2.5">
                {project.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#f20d20] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">
                      {b}
                    </p>
                  </div>
                ))}
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-black/10">
                {project.stats.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="font-mono-code text-[9px] text-gray-500 font-bold uppercase">{s.label}</p>
                    <p className="font-anton text-sm sm:text-base text-black truncate">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md bg-black/5 text-gray-800 font-mono-code text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons with Real Live Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold text-xs tracking-wider uppercase hover:bg-[#f20d20] transition-colors shadow-md cursor-pointer"
                >
                  <span>VIEW LIVE DEMO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 text-black font-bold text-xs tracking-wider uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>SOURCE CODE</span>
                </a>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
