import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle2, ChevronRight, Sparkles, Code2, Database, Server, Wrench, Cpu } from 'lucide-react';
import { portfolioConfig } from '../../data/portfolioConfig';

export default function CreativeTechnologist() {
  const [activeTab, setActiveTab] = useState(portfolioConfig.experienceTracks[0].id);
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');

  const currentTrack = portfolioConfig.experienceTracks.find(t => t.id === activeTab) || portfolioConfig.experienceTracks[0];
  const { technicalSkills, education, certifications } = portfolioConfig;

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-[#060608] text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden flex flex-col justify-between"
    >
      {/* Massive Background Typography: "CREATIVE TECHNOLOGIST" (Frames 9 & 10) */}
      <div className="absolute top-1/4 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-[0.05] whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="font-anton text-[130px] sm:text-[200px] md:text-[260px] tracking-tight uppercase"
        >
          FULL STACK DEVELOPER • MERN SPECIALIST • 4 INTERNSHIPS • TRIPMOZY •
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#f20d20]" />
            <span className="font-mono-code text-xs font-bold tracking-[0.25em] text-[#f20d20] uppercase">
              EXPERIENCE &amp; ARCHIVE // 04
            </span>
          </div>

          <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-none">
            WHERE I'VE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">BEEN.</span>
          </h2>
        </div>

        {/* Central Dynamic Showcase Card (Frames 10-12) */}
        <div className="relative bg-[#0d0e14]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden mb-12">
          
          {/* Subtle Year Watermark */}
          <div className="absolute right-6 bottom-4 font-anton text-7xl sm:text-9xl text-white/[0.04] select-none pointer-events-none">
            {currentTrack.period}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTrack.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Role Title & Company Header */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <span className="font-mono-code text-xs font-bold text-[#f20d20] tracking-widest uppercase">
                    // {currentTrack.type} • {currentTrack.company}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono-code text-gray-300">
                    {currentTrack.period}
                  </span>
                </div>

                <h3 className="font-anton text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
                  {currentTrack.role}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed font-body">
                  {currentTrack.description}
                </p>
              </div>

              {/* Exact Bullets from CV */}
              <div className="space-y-2.5 pt-2">
                {currentTrack.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#f20d20] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-body">{b}</p>
                  </div>
                ))}
              </div>

              {/* Metric Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {currentTrack.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <p className="font-mono-code text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                      {m.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Role Switcher Tabs (Frames 11 & 12) */}
          <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap gap-2.5">
            {portfolioConfig.experienceTracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTab(track.id)}
                className={`px-4 sm:px-5 py-2 rounded-full font-mono-code text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeTab === track.id
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                [ {track.tabLabel} ]
              </button>
            ))}
          </div>
        </div>

        {/* TECHNICAL SKILLS MATRIX (From CV) */}
        <div className="mb-12 p-8 sm:p-10 rounded-2xl bg-[#0d0e14]/70 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-[#f20d20]">
              <Cpu className="w-5 h-5 text-[#f20d20]" />
              <span className="font-mono-code text-xs font-bold tracking-widest uppercase text-white">
                TECHNICAL SKILLS MATRIX (EXACT CV CREDENTIALS)
              </span>
            </div>

            {/* Skill Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSkillCategory('generativeAI')}
                className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase transition-colors cursor-pointer ${
                  activeSkillCategory === 'generativeAI' ? 'bg-[#f20d20] text-white shadow-md' : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                Generative AI (Gemini)
              </button>
              <button
                onClick={() => setActiveSkillCategory('geospatial')}
                className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase transition-colors cursor-pointer ${
                  activeSkillCategory === 'geospatial' ? 'bg-[#f20d20] text-white shadow-md' : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                Geospatial &amp; Maps
              </button>
              <button
                onClick={() => setActiveSkillCategory('frontend')}
                className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase transition-colors cursor-pointer ${
                  activeSkillCategory === 'frontend' ? 'bg-[#f20d20] text-white shadow-md' : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveSkillCategory('backend')}
                className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase transition-colors cursor-pointer ${
                  activeSkillCategory === 'backend' ? 'bg-[#f20d20] text-white shadow-md' : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                Backend
              </button>
              <button
                onClick={() => setActiveSkillCategory('database')}
                className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase transition-colors cursor-pointer ${
                  activeSkillCategory === 'database' ? 'bg-[#f20d20] text-white shadow-md' : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                Database
              </button>
              <button
                onClick={() => setActiveSkillCategory('tools')}
                className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase transition-colors cursor-pointer ${
                  activeSkillCategory === 'tools' ? 'bg-[#f20d20] text-white shadow-md' : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                Tools &amp; Testing
              </button>
            </div>
          </div>

          {/* Active Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {activeSkillCategory === 'generativeAI' && technicalSkills.generativeAI.map((s) => (
              <div key={s.name} className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#f20d20]/50 transition-colors">
                <p className="text-xs font-bold text-white">{s.name}</p>
                <p className="text-[10px] font-mono-code text-[#f20d20] mt-0.5">{s.level}</p>
              </div>
            ))}

            {activeSkillCategory === 'geospatial' && technicalSkills.geospatial.map((s) => (
              <div key={s.name} className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#f20d20]/50 transition-colors">
                <p className="text-xs font-bold text-white">{s.name}</p>
                <p className="text-[10px] font-mono-code text-[#f20d20] mt-0.5">{s.level}</p>
              </div>
            ))}

            {activeSkillCategory === 'frontend' && technicalSkills.frontend.map((s) => (
              <div key={s.name} className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#f20d20]/50 transition-colors">
                <p className="text-xs font-bold text-white">{s.name}</p>
                <p className="text-[10px] font-mono-code text-gray-400 mt-0.5">{s.level}</p>
              </div>
            ))}

            {activeSkillCategory === 'backend' && technicalSkills.backend.map((s) => (
              <div key={s.name} className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#f20d20]/50 transition-colors">
                <p className="text-xs font-bold text-white">{s.name}</p>
                <p className="text-[10px] font-mono-code text-gray-400 mt-0.5">{s.level}</p>
              </div>
            ))}

            {activeSkillCategory === 'database' && technicalSkills.database.map((s) => (
              <div key={s.name} className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#f20d20]/50 transition-colors">
                <p className="text-xs font-bold text-white">{s.name}</p>
                <p className="text-[10px] font-mono-code text-gray-400 mt-0.5">{s.level}</p>
              </div>
            ))}

            {activeSkillCategory === 'tools' && technicalSkills.toolsTesting.map((s) => (
              <div key={s.name} className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#f20d20]/50 transition-colors">
                <p className="text-xs font-bold text-white">{s.name}</p>
                <p className="text-[10px] font-mono-code text-gray-400 mt-0.5">{s.level}</p>
              </div>
            ))}
          </div>

          {/* Also Familiar With Banner */}
          <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono-code">
            <span className="text-[#f20d20] font-bold uppercase">ALSO FAMILIAR WITH:</span>
            {(technicalSkills.alsoFamiliarWith || []).map((item) => (
              <span key={item} className="px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Formal Education & Certifications Row (Exact from CV) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-[#0d0e14]/60 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#f20d20]">
              <GraduationCap className="w-4 h-4" />
              <span className="font-mono-code text-xs font-bold tracking-widest uppercase">
                FORMAL ACADEMIC CREDENTIALS
              </span>
            </div>
            {education.map((edu, idx) => (
              <div key={idx} className="pt-3 border-t border-white/5 first:border-0 first:pt-0">
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-bold text-white">{edu.degree}</p>
                  <span className="text-xs font-mono-code text-[#f20d20]">{edu.period}</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{edu.institution} {edu.university ? `• ${edu.university}` : ''}</p>
              </div>
            ))}
          </div>

          {/* Certifications Card */}
          <div className="p-6 rounded-2xl bg-[#0d0e14]/60 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#f20d20]">
              <Award className="w-4 h-4" />
              <span className="font-mono-code text-xs font-bold tracking-widest uppercase">
                VERIFIED INDUSTRY CREDENTIALS
              </span>
            </div>
            <div className="space-y-2">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{cert.title}</p>
                    <p className="text-[10px] font-mono-code text-gray-400 mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-gray-400">
                    {cert.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
