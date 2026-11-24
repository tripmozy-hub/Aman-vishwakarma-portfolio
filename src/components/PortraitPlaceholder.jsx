import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function PortraitPlaceholder({ mouseX = 0, mouseY = 0, customImage = "/portrait.jpg" }) {
  // Parallax calculations
  const rotateX = mouseY * -10;
  const rotateY = mouseX * 10;

  return (
    <motion.div 
      className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] mx-auto select-none"
      style={{ perspective: 1200 }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      {/* Background ambient lighting halos */}
      {/* Red ambient glow (Left) */}
      <div 
        className="absolute -left-12 top-1/4 w-72 h-80 rounded-full blur-[90px] opacity-75 pointer-events-none transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(242,13,32,0.9) 0%, rgba(242,13,32,0) 70%)',
          transform: `translate(${mouseX * 20}px, ${mouseY * 20}px)`
        }}
      />
      
      {/* Ambient lighting halo */}
      <div 
        className="absolute -right-12 top-1/3 w-72 h-80 rounded-full blur-[90px] opacity-70 pointer-events-none transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(242,13,32,0.75) 0%, rgba(200,10,25,0.4) 40%, rgba(0,0,0,0) 70%)',
          transform: `translate(${mouseX * -20}px, ${mouseY * -20}px)`
        }}
      />

      {/* Main Portrait Container with Cinematic Framing */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0A0A0C] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group">
        
        {/* Real Profile Image: Perfectly Centered Headshot */}
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src={customImage} 
            alt="Aman Vishwakarma" 
            className="w-full h-full object-cover object-[50%_25%] filter contrast-110 brightness-95 saturate-100 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Vignette Gradients: Bottom fade for badge clarity */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080808]/95 via-[#080808]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080808]/50 to-transparent pointer-events-none" />

          {/* Red Lighting from Left Edge */}
          <div 
            className="absolute inset-y-0 left-0 w-1/3 pointer-events-none mix-blend-screen opacity-70"
            style={{
              background: 'linear-gradient(90deg, rgba(242,13,32,0.7) 0%, rgba(242,13,32,0.2) 60%, transparent 100%)'
            }}
          />

          {/* Soft Red Lighting from Right Edge */}
          <div 
            className="absolute inset-y-0 right-0 w-1/3 pointer-events-none mix-blend-screen opacity-50"
            style={{
              background: 'linear-gradient(270deg, rgba(242,13,32,0.5) 0%, rgba(242,13,32,0.15) 60%, transparent 100%)'
            }}
          />

          {/* Film Grain Texture */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        </div>

        {/* Top Badge: Verified Status */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#F20D20] animate-pulse" />
          <span className="font-mono-code text-[11px] tracking-wider text-gray-200 uppercase font-semibold">AMAN.DEV // MERN</span>
        </div>

        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/10 backdrop-blur-md">
          <Code2 className="w-3.5 h-3.5 text-[#F20D20]" />
          <span className="font-mono-code text-[10px] text-gray-300 font-semibold">2026 ED.</span>
        </div>

        {/* Bottom Glass Card Metadata Banner (Slim, elegant, non-intrusive) */}
        <div className="absolute bottom-3 left-3 right-3 z-20 px-3.5 py-2.5 rounded-xl bg-[#080808]/90 border border-white/15 backdrop-blur-md flex items-center justify-between shadow-lg">
          <div>
            <p className="text-[9px] tracking-widest text-[#F20D20] font-bold font-mono-code">PROFILE // FULL STACK</p>
            <h4 className="text-xs sm:text-sm font-bold tracking-tight text-white font-syne">AMAN VISHWAKARMA</h4>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-[10px] text-gray-300 font-mono-code">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              ONLINE
            </span>
            <p className="text-[10px] text-gray-400 font-mono-code">RANIGANJ, WB</p>
          </div>
        </div>

        {/* Framing Corner Accents */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#F20D20] pointer-events-none z-20" />
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#F20D20] pointer-events-none z-20" />
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#F20D20] pointer-events-none z-20" />
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#F20D20] pointer-events-none z-20" />
      </div>
    </motion.div>
  );
}
