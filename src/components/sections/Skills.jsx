import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Sparkles, Check, Quote } from 'lucide-react';
import { skillsData } from '../../data/skills';

const categoryIcons = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Database": Database,
  "Development Tools": Wrench,
  "AI & Other": Sparkles,
};

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative min-h-screen w-full bg-[#080808] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#F20D20]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#F20D20]" />
            <span className="font-mono-code text-xs font-semibold tracking-[0.25em] text-[#F20D20] uppercase">
              CAPABILITIES &amp; PHILOSOPHY // 03
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              MORE THAN CODE — <br />
              <span className="text-[#F20D20]">CREATING EXPERIENCES.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed font-body">
              A comprehensive technical toolkit engineered through production experience, academic foundations, and high-standard design paradigms.
            </p>
          </div>
        </div>

        {/* 3-COLUMN SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMN 1: EXPERTISE & SKILLS (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#0b0b0e] border border-white/10 p-7 sm:p-8 rounded-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <h3 className="font-anton text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                  EXPERTISE &amp; SKILLS
                </h3>
                <span className="font-mono-code text-[11px] text-[#F20D20] font-bold">5 DOMAINS</span>
              </div>

              <div className="space-y-6">
                {skillsData.categories.map((cat) => {
                  const Icon = categoryIcons[cat.title] || Code2;

                  return (
                    <div key={cat.title} className="group">
                      <div className="flex items-center gap-2 mb-2.5">
                        <Icon className="w-4 h-4 text-[#F20D20]" />
                        <h4 className="font-mono-code text-xs font-bold tracking-wider uppercase text-gray-200">
                          {cat.title}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded bg-black/60 border border-white/5 text-[11px] font-mono-code text-gray-300 hover:text-white hover:border-[#F20D20]/50 hover:bg-[#F20D20]/10 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-gray-500">
              <span>// MODERN WEB &amp; CLOUD ECOSYSTEM</span>
              <span className="text-[#F20D20]">2026 STACK</span>
            </div>
          </motion.div>

          {/* COLUMN 2: MY APPROACH (4 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-[#0b0b0e] border border-white/10 p-7 sm:p-8 rounded-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <h3 className="font-anton text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                  MY APPROACH
                </h3>
                <span className="font-mono-code text-[11px] text-[#F20D20] font-bold">CORE PRINCIPLES</span>
              </div>

              <div className="space-y-4">
                {skillsData.approach.map((item) => (
                  <div 
                    key={item.number}
                    className="p-3.5 rounded-lg bg-black/40 border border-white/5 hover:border-[#F20D20]/40 transition-colors group"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-anton text-lg font-bold text-[#F20D20] group-hover:scale-110 transition-transform">
                        {item.number}
                      </span>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 pl-7 leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono-code text-gray-500">
              // REPEATABLE QUALITY ASSURANCE
            </div>
          </motion.div>

          {/* COLUMN 3: BOLD RED QUOTE PANEL (3 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bg-gradient-to-br from-[#F20D20] to-[#990814] text-white p-8 rounded-xl flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_-10px_rgba(242,13,32,0.4)]"
          >
            {/* Background quote watermark */}
            <div className="absolute -right-6 -bottom-8 pointer-events-none opacity-20">
              <Quote className="w-48 h-48 text-black" />
            </div>

            {/* Subtle light sheen */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.25)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-8">
                <Quote className="w-5 h-5 text-white" />
              </div>

              <blockquote className="font-syne text-2xl sm:text-3xl font-black leading-tight tracking-tight text-white mb-8">
                "{skillsData.quote.text}"
              </blockquote>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/20">
              <h4 className="font-anton text-2xl tracking-wide uppercase font-black text-white">
                {skillsData.quote.author}
              </h4>
              <p className="font-mono-code text-xs font-bold tracking-widest text-white/90 uppercase mt-0.5">
                {skillsData.quote.title}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono-code text-white/70">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>MERN &amp; FULL-STACK SPECIALIST</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
