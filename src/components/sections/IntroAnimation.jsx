import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation({ onComplete }) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('skipIntro')) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    // Automatically transition into the portfolio after 2.2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000] text-white select-none overflow-hidden cursor-pointer touch-manipulation"
          onClick={handleSkip}
          onTouchStart={handleSkip}
        >
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

          {/* Central Logo Container matching Frames 1 & 2 */}
          <div className="relative flex items-center justify-center">
            
            {/* Animated Organic Wavy Soundwave Halo (Frame 2) */}
            <motion.svg
              className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] pointer-events-none"
              viewBox="0 0 200 200"
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ 
                rotate: 360, 
                scale: [0.95, 1.05, 0.98, 1.02],
                opacity: [0.4, 0.85, 0.6, 0.9] 
              }}
              transition={{
                rotate: { duration: 16, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Undulating Scalloped Soundwave Path */}
              <path
                d="M 100 15 
                   C 125 10, 145 30, 165 40 
                   C 185 55, 195 80, 185 105 
                   C 180 130, 165 155, 145 170 
                   C 120 185, 95 185, 70 175 
                   C 45 165, 20 145, 18 115 
                   C 15 90, 25 65, 45 45 
                   C 65 25, 80 20, 100 15 Z"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.2"
                filter="url(#glow)"
                opacity="0.85"
              />

              {/* Secondary delicate orbital trace dot */}
              <motion.circle
                cx="100"
                cy="15"
                r="3"
                fill="#ffffff"
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </motion.svg>

            {/* Glowing Text "AMAN.V" (Frames 1 & 2) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.25em" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex items-baseline justify-center"
            >
              <span 
                className="font-anton text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-[0.2em]"
                style={{
                  textShadow: "0 0 30px rgba(255,255,255,0.85), 0 0 60px rgba(255,255,255,0.4)"
                }}
              >
                AMAN.V
              </span>
            </motion.div>
          </div>

          {/* Tap or Click to skip helper hint */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ bottom: 'max(2rem, env(safe-area-inset-bottom, 0px))' }}
            className="absolute font-mono-code text-[11px] tracking-widest text-gray-400 uppercase text-center px-4"
          >
            [ TAP OR CLICK TO ENTER ]
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
