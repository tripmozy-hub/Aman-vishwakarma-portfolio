import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../../data/experience';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative min-h-screen w-full bg-[#080808] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F20D20]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#F20D20]" />
            <span className="font-mono-code text-xs font-semibold tracking-[0.25em] text-[#F20D20] uppercase">
              CAREER TRACK RECORD // 04
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
              BUILDING EXPERIENCE. <br />
              <span className="text-[#F20D20]">DELIVERING SOLUTIONS.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed font-body">
              A progressive track record spanning commercial travel technology operations and 4 rigorous full-stack software development internships.
            </p>
          </div>
        </div>

        {/* TIMELINE LIST */}
        <div className="space-y-6">
          {experienceData.map((item, index) => {
            return (
              <motion.div
                key={item.company + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative p-7 sm:p-9 rounded-xl bg-[#0b0b0e] border transition-all duration-300 ${
                  item.current 
                    ? 'border-[#F20D20]/40 shadow-[0_10px_30px_-10px_rgba(242,13,32,0.25)]' 
                    : 'border-white/10 hover:border-[#F20D20]/40'
                }`}
              >
                {/* Thin top indicator */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                  
                  {/* Company & Role */}
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-anton text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white group-hover:text-[#F20D20] transition-colors">
                        {item.company}
                      </h3>
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F20D20]/10 border border-[#F20D20]/30 text-[10px] font-mono-code font-bold text-[#F20D20]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F20D20] animate-pulse" />
                          CURRENT ROLE
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-semibold text-gray-300 mt-1 flex items-center gap-2">
                      <span className="text-[#F20D20] font-mono-code text-xs font-bold uppercase tracking-wider">
                        {item.role}
                      </span>
                    </p>
                  </div>

                  {/* Dates & Location */}
                  <div className="flex flex-col lg:items-end text-left lg:text-right">
                    <span className="font-mono-code text-xs sm:text-sm font-bold text-[#F20D20] tracking-wider uppercase">
                      {item.period}
                    </span>
                    <span className="text-xs text-gray-400 font-mono-code mt-0.5">
                      {item.location}
                    </span>
                  </div>

                </div>

                {/* Bullet Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D20] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Left accent border bar */}
                <div className={`absolute top-0 bottom-0 left-0 w-1 rounded-l-xl transition-colors ${
                  item.current ? 'bg-[#F20D20]' : 'bg-transparent group-hover:bg-[#F20D20]'
                }`} />
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Summary Bar */}
        <div className="mt-12 p-6 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono-code text-gray-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white uppercase">VERIFIED INDUSTRY IMMERSION</span>
            <span className="text-gray-600">//</span>
            <span className="text-[#F20D20]">100% HANDS-ON PRODUCTION DELIVERABLES</span>
          </div>
          <span className="text-gray-500">MERN · REST ARCHITECTURE · CLOUD &amp; AI WORKFLOWS</span>
        </div>
      </div>
    </section>
  );
}
