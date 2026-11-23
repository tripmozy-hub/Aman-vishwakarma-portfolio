import React from 'react';
import { motion } from 'framer-motion';
import { Compass, GitFork, Layout, Code2, Cpu, Rocket, ArrowRight } from 'lucide-react';
import { journeySteps } from '../../data/journey';

const stepIcons = [Compass, GitFork, Layout, Code2, Cpu, Rocket];

export default function Journey() {
  return (
    <section 
      id="journey" 
      className="relative min-h-screen w-full bg-[#080808] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F20D20]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#F20D20]" />
            <span className="font-mono-code text-xs font-semibold tracking-[0.25em] text-[#F20D20] uppercase">
              METHODOLOGY &amp; WORKFLOW // 02
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
              FROM IDEAS <br />
              TO REAL <br />
              <span className="text-[#F20D20]">DIGITAL PRODUCTS.</span>
            </h2>

            <div className="max-w-md">
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-body mb-4">
                A disciplined engineering philosophy bridging abstract requirements, rigorous architectural planning, and zero-defect production releases.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono-code text-gray-500">
                <span className="w-2 h-2 rounded-full bg-[#F20D20]" />
                <span>6-STAGE CONTINUOUS LIFECYCLE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6-STAGE EDITORIAL PROCESS GRID */}
        <div className="relative">
          {/* Connecting Red Laser Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-[1.5px] bg-gradient-to-r from-transparent via-[#F20D20]/40 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {journeySteps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-8 rounded-xl bg-[#0b0b0e] border border-white/10 hover:border-[#F20D20]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_40px_-10px_rgba(242,13,32,0.25)]"
                >
                  {/* Top Step Number Indicator & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-lg bg-black border border-white/10 group-hover:border-[#F20D20] flex items-center justify-center font-anton text-lg font-bold text-[#F20D20] transition-colors shadow-inner">
                          {step.step}
                        </span>
                        <div className="w-6 h-[1px] bg-white/10 group-hover:bg-[#F20D20] transition-colors" />
                      </div>
                      
                      <div className="p-2.5 rounded-lg bg-white/[0.03] text-gray-400 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Phase Name */}
                    <div className="mb-2">
                      <span className="font-mono-code text-[11px] font-bold tracking-widest text-[#F20D20] uppercase">
                        STAGE {step.step}
                      </span>
                      <h3 className="font-anton text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white mt-0.5 group-hover:text-[#F20D20] transition-colors">
                        {step.phase}
                      </h3>
                    </div>

                    {/* Headline */}
                    <h4 className="text-sm font-semibold text-gray-200 mb-3">
                      {step.headline}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-gray-400 leading-relaxed mb-6 font-body">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="pt-4 border-t border-white/5 space-y-1.5">
                    {step.details.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-mono-code text-gray-400">
                        <span className="w-1 h-1 rounded-full bg-[#F20D20]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-transparent group-hover:border-[#F20D20] transition-colors" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Footer Stat */}
        <div className="mt-16 p-6 rounded-xl bg-black/60 border border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono-code text-gray-400">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ARCHITECTURE STANDARD: MERN / NEXT.JS REST ARCHITECTURE &amp; CONTAINERIZED DEPLOYMENT</span>
          </div>
          <a 
            href="#contact" 
            className="flex items-center gap-1.5 text-white hover:text-[#F20D20] transition-colors font-bold uppercase tracking-wider"
          >
            <span>DISCUSS YOUR NEXT PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
