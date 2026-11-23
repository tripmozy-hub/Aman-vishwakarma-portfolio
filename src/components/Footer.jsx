import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ paddingBottom: 'max(3rem, calc(env(safe-area-inset-bottom, 0px) + 2rem))' }}
      className="w-full bg-[#050506] border-t border-white/10 pt-16 px-4 sm:px-8 lg:px-12 text-left selection:bg-[#F20D20] selection:text-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/5">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-syne font-black text-2xl text-white tracking-tighter">
                {personalInfo.shortName}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F20D20]" />
            </div>
            <p className="text-xs text-gray-400 font-mono-code">
              {personalInfo.title} · RANIGANJ, INDIA
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 text-xs font-mono-code text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <a href="#work" className="hover:text-white transition-colors">WORK</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#journey" className="hover:text-white transition-colors">JOURNEY</a>
            <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
            <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
            <a 
              href={personalInfo.contact.resumeUrl} 
              download="Aman_Vishwakarma_Resume.pdf"
              className="text-[#F20D20] hover:underline"
            >
              RESUME.PDF
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 p-3 rounded-lg bg-black/60 border border-white/10 hover:border-[#F20D20] text-xs font-mono-code text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-[#F20D20] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono-code text-gray-400">
          <p className="tracking-wider uppercase">
            DESIGNED &amp; DEVELOPED BY <span className="text-white font-bold">{personalInfo.name}</span>.
          </p>

          <p className="tracking-wider text-gray-400">
            &copy; 2026 ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}
