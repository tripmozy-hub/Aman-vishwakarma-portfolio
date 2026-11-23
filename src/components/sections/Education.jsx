import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { educationData } from '../../data/education';

export default function Education() {
  return (
    <section 
      id="education" 
      className="relative w-full bg-[#080808] py-24 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#F20D20]" />
            <span className="font-mono-code text-xs font-semibold tracking-[0.25em] text-[#F20D20] uppercase">
              CREDENTIALS &amp; FOUNDATIONS // 06
            </span>
          </div>

          <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
            EDUCATION &amp; <span className="text-[#F20D20]">CERTIFICATIONS.</span>
          </h2>
        </div>

        {/* 2-COLUMN COMPACT EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* COLUMN 1: FORMAL EDUCATION (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#F20D20]" />
                <h3 className="font-anton text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                  FORMAL EDUCATION
                </h3>
              </div>
              <span className="font-mono-code text-xs text-gray-500">ACADEMICS</span>
            </div>

            <div className="space-y-4">
              {educationData.education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#0b0b0e] border border-white/10 hover:border-[#F20D20]/40 transition-colors"
                >
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h4 className="font-anton text-lg font-bold text-white uppercase tracking-tight">
                      {edu.degree}
                    </h4>
                    <span className="font-mono-code text-xs font-bold text-[#F20D20] shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-gray-300">
                    {edu.institution} {edu.university ? `• ${edu.university}` : ''}
                  </p>

                  <p className="text-xs text-gray-400 mt-2 leading-relaxed font-body">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: INDUSTRY CERTIFICATIONS (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F20D20]" />
                <h3 className="font-anton text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                  INDUSTRY CERTIFICATIONS
                </h3>
              </div>
              <span className="font-mono-code text-xs text-[#F20D20] font-bold">7 CREDENTIALS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {educationData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0b0b0e] border border-white/10 hover:border-[#F20D20]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 group-hover:text-[#F20D20] transition-colors">
                        {cert.category}
                      </span>
                      <span className="text-[10px] font-mono-code text-[#F20D20] font-bold">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#F20D20] transition-colors leading-snug">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
