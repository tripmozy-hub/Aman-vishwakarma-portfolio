import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

export default function Services() {
  // Expand "landing-page" by default matching Frame 27
  const [expandedId, setExpandedId] = useState('landing-page');

  const { heading, subtext, items } = portfolioConfig.services;

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-[#FAFAFC] text-[#0A0A0C] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden flex flex-col justify-center select-none"
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* SECTION HEADER (Frame 27: "THE SERVICES WE PROVIDE") */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#f20d20]" />
            <span className="font-mono-code text-xs font-bold tracking-[0.25em] text-[#f20d20] uppercase">
              CAPABILITIES &amp; OFFERINGS // 08
            </span>
            <span className="w-8 h-[2px] bg-[#f20d20]" />
          </div>

          <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#08080a] leading-tight">
            {heading}
          </h2>

          <p className="text-xs sm:text-sm font-semibold tracking-wider text-gray-500 uppercase max-w-2xl mx-auto leading-relaxed font-body">
            {subtext}
          </p>
        </div>

        {/* ACCORDION SERVICE CARDS (Frame 27) */}
        <div className="space-y-4">
          {items.map((svc) => {
            const isExpanded = expandedId === svc.id;

            return (
              <motion.div
                key={svc.id}
                initial={false}
                className="overflow-hidden transition-all duration-300"
              >
                {/* When Expanded: High-Contrast Dark Capsule (Frame 27) */}
                {isExpanded ? (
                  <div
                    onClick={() => toggleExpand(svc.id)}
                    className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0E] text-white shadow-2xl border border-black/10 cursor-pointer space-y-4 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="font-mono-code text-xs font-bold text-[#f20d20]">
                          {svc.number}
                        </span>
                        <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-tight text-white">
                          {svc.title}
                        </h3>
                      </div>
                      <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <Minus className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-body max-w-3xl">
                      {svc.description}
                    </p>

                    <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <p className="font-mono-code text-[11px] text-[#f20d20] font-bold tracking-wider uppercase">
                        DELIVERABLES: {svc.deliverables}
                      </p>

                      <a
                        href="#contact"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold uppercase hover:bg-[#f20d20] hover:text-white transition-colors"
                      >
                        <span>INQUIRE SERVICE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ) : (
                  /* When Collapsed: Minimal Light Capsule (Frame 27) */
                  <div
                    onClick={() => toggleExpand(svc.id)}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-black/10 hover:border-black/30 hover:shadow-md cursor-pointer flex justify-between items-center transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono-code text-xs font-bold text-gray-400">
                        {svc.number}
                      </span>
                      <h3 className="font-anton text-xl sm:text-2xl uppercase tracking-tight text-[#08080a]">
                        {svc.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors">
                      <Plus className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
