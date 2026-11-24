import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ThreeDCarCanvas from './ThreeDCarCanvas';

export default function ParallaxBackdrop({ mode = 'car', isLight = true }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Responsive spring interpolation
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 75, 
    damping: 24, 
    restDelta: 0.001 
  });

  const rotateDna = useTransform(smoothProgress, [0, 0.5, 1], [-180, 0, 180]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none flex items-center justify-center"
      aria-hidden="true"
    >
      {/* 1. TRUE 3D SUPERCAR CANVAS - TURNS RIGHT-TO-LEFT ON SCROLL DOWN, LEFT-TO-RIGHT ON SCROLL UP */}
      {mode === 'car' && (
        <ThreeDCarCanvas containerRef={containerRef} isLight={isLight} />
      )}

      {/* 2. BIOTECH DNA HELIX LAYER */}
      {mode === 'dna' && (
        <motion.div
          style={{
            rotate: rotateDna,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] sm:w-[980px] md:w-[1250px] max-w-none opacity-30 sm:opacity-45 filter blur-[2.5px] sm:blur-[3.5px] transition-opacity duration-500 gpu-accel pointer-events-none origin-center"
        >
          <img
            src="/assets/parallax-dna.png"
            alt=""
            className={`w-full h-auto object-contain ${
              isLight 
                ? 'drop-shadow-[0_15px_40px_rgba(242,13,32,0.4)] filter contrast-115' 
                : 'drop-shadow-[0_0_70px_rgba(242,13,32,0.8)] mix-blend-screen'
            }`}
          />
        </motion.div>
      )}

      {/* Subtle depth gradient vignette */}
      <div 
        className={`absolute inset-0 pointer-events-none ${
          isLight 
            ? 'bg-gradient-to-b from-white/60 via-transparent to-white/60' 
            : 'bg-gradient-to-b from-black/60 via-transparent to-black/60'
        }`} 
      />
    </div>
  );
}
