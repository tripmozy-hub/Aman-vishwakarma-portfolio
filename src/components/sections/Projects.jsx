import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Layers, Sparkles, Terminal, Shield, HeartHandshake, Plane } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { projectsData } from '../../data/projects';

// Bespoke Mockup Previews for the 3 Projects
function ProjectMockup({ project }) {
  if (project.imageType === 'jobhub') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#0c0c0e] rounded-xl overflow-hidden border border-white/10 group-hover:border-[#F20D20]/50 transition-all duration-500 shadow-2xl flex flex-col">
        {/* Browser Chrome Header */}
        <div className="h-9 bg-[#141418] border-b border-white/10 px-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F20D20]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded bg-black/50 text-[10px] font-mono-code text-gray-400 border border-white/5 flex items-center gap-1">
            <Shield className="w-2.5 h-2.5 text-[#F20D20]" />
            jobhub.portal.app/dashboard
          </div>
          <div className="text-[10px] font-mono-code text-emerald-400">● MERN LIVE</div>
        </div>

        {/* Mockup UI Body */}
        <div className="flex-1 p-5 flex flex-col justify-between bg-gradient-to-br from-[#0c0c10] via-[#09090b] to-[#040405] text-left">
          {/* Top Bar inside app */}
          <div className="flex justify-between items-center pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-[#F20D20] font-black font-syne text-sm">JOBHUB</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#F20D20]/20 text-[#F20D20] rounded font-mono-code">RECRUITER SUITE</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-0.5 bg-white/5 rounded text-gray-400">Filter: All Roles</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#F20D20] text-white font-bold rounded">Post Job</span>
            </div>
          </div>

          {/* Dynamic Mockup Content Cards */}
          <div className="grid grid-cols-3 gap-3 my-auto py-2">
            <div className="bg-white/[0.03] border border-white/5 p-3 rounded-lg">
              <p className="text-[10px] text-gray-400 font-mono-code">ACTIVE JOBS</p>
              <p className="text-xl font-bold font-anton text-white mt-1">128</p>
              <p className="text-[9px] text-emerald-400 mt-1">↑ +14 this week</p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 p-3 rounded-lg">
              <p className="text-[10px] text-gray-400 font-mono-code">APPLICANTS</p>
              <p className="text-xl font-bold font-anton text-[#F20D20] mt-1">1,420</p>
              <p className="text-[9px] text-gray-400 mt-1">Role-based review</p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 p-3 rounded-lg">
              <p className="text-[10px] text-gray-400 font-mono-code">RESUMES</p>
              <p className="text-xl font-bold font-anton text-white mt-1">98%</p>
              <p className="text-[9px] text-[#f20d20] mt-1">Parsed &amp; Filtered</p>
            </div>
          </div>

          {/* List simulation */}
          <div className="space-y-1.5 pt-1">
            <div className="p-2 rounded bg-black/40 border border-white/5 flex justify-between items-center text-xs">
              <div>
                <span className="font-semibold text-white text-[11px]">Senior Frontend Engineer</span>
                <span className="text-[10px] text-gray-400 ml-2">Remote · Full-Time</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono-code bg-emerald-500/10 px-1.5 py-0.5 rounded">Active</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5 flex justify-between items-center text-xs">
              <div>
                <span className="font-semibold text-white text-[11px]">Backend Node.js Architect</span>
                <span className="text-[10px] text-gray-400 ml-2">Bengaluru · Hybrid</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono-code bg-emerald-500/10 px-1.5 py-0.5 rounded">Active</span>
            </div>
          </div>
        </div>

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-30 pointer-events-none" />
      </div>
    );
  }

  if (project.imageType === 'ayudar') {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#0c0c0e] rounded-xl overflow-hidden border border-white/10 group-hover:border-[#F20D20]/50 transition-all duration-500 shadow-2xl flex flex-col">
        {/* Browser Chrome Header */}
        <div className="h-9 bg-[#141418] border-b border-white/10 px-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F20D20]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 rounded bg-black/50 text-[10px] font-mono-code text-gray-400 border border-white/5 flex items-center gap-1">
            <HeartHandshake className="w-2.5 h-2.5 text-[#F20D20]" />
            animal-ngo-website.vercel.app
          </div>
          <div className="text-[10px] font-mono-code text-emerald-400">● VERCEL LIVE</div>
        </div>

        {/* Mockup UI Body */}
        <div className="flex-1 p-5 flex flex-col justify-between bg-gradient-to-br from-[#0c0c10] via-[#09090b] to-[#040405] text-left">
          <div className="flex justify-between items-center pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-white font-black font-syne text-sm">AYUDAR FOUNDATION</span>
              <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded font-mono-code">RESCUE &amp; ADOPT</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] px-2.5 py-1 bg-[#F20D20] text-white font-bold rounded flex items-center gap-1">
                Donate (Razorpay)
              </span>
            </div>
          </div>

          {/* Cards for Rescue & Adoption */}
          <div className="grid grid-cols-2 gap-3 my-auto py-2">
            <div className="bg-white/[0.03] border border-white/5 p-3 rounded-lg relative overflow-hidden">
              <div className="w-full h-16 rounded bg-gradient-to-br from-amber-900/40 to-neutral-900 flex items-center justify-center text-xs text-amber-200 font-mono-code">
                🐾 Milo (Golden Pup)
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-[11px] font-bold text-white">Adoption Pending</span>
                <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">Available</span>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 p-3 rounded-lg relative overflow-hidden">
              <div className="w-full h-16 rounded bg-gradient-to-br from-red-900/40 to-neutral-900 flex items-center justify-center text-xs text-red-200 font-mono-code">
                🚨 Emergency SOS #409
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-[11px] font-bold text-white">Rescue Dispatched</span>
                <span className="text-[9px] px-1.5 py-0.5 bg-[#F20D20]/20 text-[#F20D20] rounded">Active</span>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="p-2 rounded bg-black/40 border border-white/5 flex justify-between items-center text-xs">
            <span className="text-[10px] text-gray-400 font-mono-code">Verified 501(c)(3) Tier NGO Partner</span>
            <span className="text-[10px] text-emerald-400 font-mono-code">Razorpay Live Integrated</span>
          </div>
        </div>
      </div>
    );
  }

  // Tripmozy mockup
  return (
    <div className="relative w-full aspect-[16/10] bg-[#0c0c0e] rounded-xl overflow-hidden border border-white/10 group-hover:border-[#F20D20]/50 transition-all duration-500 shadow-2xl flex flex-col">
      <div className="h-9 bg-[#141418] border-b border-white/10 px-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F20D20]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="px-3 py-0.5 rounded bg-black/50 text-[10px] font-mono-code text-gray-400 border border-white/5 flex items-center gap-1">
          <Plane className="w-2.5 h-2.5 text-[#F20D20]" />
          tripmozy.com/enterprise
        </div>
        <div className="text-[10px] font-mono-code text-[#F20D20]">● PRODUCTION WEB</div>
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between bg-gradient-to-br from-[#0c0c10] via-[#09090b] to-[#040405] text-left">
        <div className="flex justify-between items-center pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-white font-black font-syne text-sm">TRIPMOZY TECH</span>
            <span className="text-[10px] px-2 py-0.5 bg-[#F20D20]/20 text-[#F20D20] rounded font-mono-code">TRAVEL AI PLATFORM</span>
          </div>
          <div className="text-[10px] font-mono-code text-gray-400">ENGINEERED BY AMAN</div>
        </div>

        <div className="grid grid-cols-3 gap-3 my-auto py-2">
          <div className="bg-white/[0.03] border border-white/5 p-3 rounded-lg">
            <p className="text-[10px] text-gray-400 font-mono-code">BOOKING FLOWS</p>
            <p className="text-xl font-bold font-anton text-white mt-1">99.9%</p>
            <p className="text-[9px] text-emerald-400 mt-1">Uptime SLA</p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 p-3 rounded-lg">
            <p className="text-[10px] text-gray-400 font-mono-code">AI WORKFLOWS</p>
            <p className="text-xl font-bold font-anton text-[#F20D20] mt-1">AUTOMATED</p>
            <p className="text-[9px] text-[#F20D20] mt-1">Itinerary Engine</p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 p-3 rounded-lg">
            <p className="text-[10px] text-gray-400 font-mono-code">DESTINATIONS</p>
            <p className="text-xl font-bold font-anton text-[#F20D20] mt-1">45+ REGIONS</p>
            <p className="text-[9px] text-gray-400 mt-1">Dynamic Catalogs</p>
          </div>
        </div>

        <div className="p-2 rounded bg-black/40 border border-white/5 flex justify-between items-center text-xs">
          <span className="text-[10px] text-gray-400 font-mono-code">AI Operations &amp; Full Platform Maintenance</span>
          <span className="text-[10px] text-[#F20D20] font-mono-code font-bold">2025 – PRESENT</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section 
      id="work" 
      className="relative min-h-screen w-full bg-[#080808] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background Section Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F20D20]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#F20D20]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#F20D20]" />
            <span className="font-mono-code text-xs font-semibold tracking-[0.25em] text-[#F20D20] uppercase">
              SELECTED PORTFOLIO // 01
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              WORK THAT <span className="text-[#F20D20]">SPEAKS.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed font-body">
              Selected projects showcasing my approach to development, problem-solving and digital experiences.
            </p>
          </div>
        </div>

        {/* ASYMMETRIC PROJECT SHOWCASE LIST */}
        <div className="space-y-28">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Thin divider line above each project */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* PROJECT PREVIEW (Image / Mockup) - Takes 7 Cols */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group-hover:scale-[1.01] transition-transform duration-500">
                      {/* Big Glowing Underlayer on Hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#F20D20]/25 to-[#F20D20]/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Actual Project Mockup UI */}
                      <ProjectMockup project={project} />
                    </div>
                  </div>

                  {/* PROJECT METADATA & CONTENT - Takes 5 Cols */}
                  <div className={`lg:col-span-5 flex flex-col justify-center text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Project Number & Category */}
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-anton text-4xl sm:text-5xl font-black text-[#F20D20] leading-none">
                        {project.id}
                      </span>
                      <div className="h-4 w-[1px] bg-white/20" />
                      <span className="font-mono-code text-xs text-gray-400 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-anton text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#F20D20] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Subtitle / Role */}
                    <p className="text-xs font-bold tracking-wider uppercase text-[#F20D20] mb-4">
                      {project.subtitle} {project.role ? `• ${project.role}` : ''}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-300 font-normal leading-relaxed mb-6">
                      "{project.description}"
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D20] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Tag List */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono-code text-gray-300 group-hover:border-[#F20D20]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links / CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#F20D20] hover:bg-[#E92735] text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(242,13,32,0.4)]"
                        >
                          <span>VIEW LIVE PROJECT</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 bg-transparent hover:bg-white/5 text-white text-xs font-bold tracking-widest uppercase border border-white/20 hover:border-white/50 transition-all duration-300"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-gray-300" />
                          <span>VIEW SOURCE CODE</span>
                        </a>
                      )}

                      {!project.githubUrl && (
                        <span className="text-[11px] font-mono-code text-gray-500 py-2">
                          // COMMERCIAL PRODUCTION PLATFORM
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
