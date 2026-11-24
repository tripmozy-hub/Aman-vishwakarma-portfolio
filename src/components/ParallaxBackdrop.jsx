import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ParallaxBackdrop({ mode = 'car', isLight = true }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 85, 
    damping: 25, 
    restDelta: 0.001 
  });

  // Parallax motion physics: Y-translation, subtle X-drift, and angle tilt
  const yCar = useTransform(smoothProgress, [0, 1], [-140, 160]);
  const xCar = useTransform(smoothProgress, [0, 1], [-80, 80]);
  const rotateCar = useTransform(smoothProgress, [0, 1], [-4, 6]);

  const yDna = useTransform(smoothProgress, [0, 1], [-160, 180]);
  const xDna = useTransform(smoothProgress, [0, 1], [60, -60]);
  const rotateDna = useTransform(smoothProgress, [0, 1], [15, -25]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. FUTURISTIC HYPERCAR PARALLAX LAYER */}
      {mode === 'car' && (
        <motion.div
          style={{
            y: yCar,
            x: xCar,
            rotate: rotateCar,
          }}
          className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] sm:w-[1050px] md:w-[1300px] max-w-none opacity-35 sm:opacity-45 filter blur-[3px] sm:blur-[4px] transition-opacity duration-500 gpu-accel pointer-events-none"
        >
          <img
            src="/assets/parallax-car.png"
            alt=""
            className={`w-full h-auto object-contain ${
              isLight 
                ? 'drop-shadow-[0_20px_50px_rgba(242,13,32,0.45)] filter contrast-125' 
                : 'drop-shadow-[0_0_60px_rgba(242,13,32,0.7)] mix-blend-screen'
            }`}
          />
        </motion.div>
      )}

      {/* 2. BIOTECH DNA HELIX PARALLAX LAYER */}
      {mode === 'dna' && (
        <motion.div
          style={{
            y: yDna,
            x: xDna,
            rotate: rotateDna,
          }}
          className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] sm:w-[980px] md:w-[1250px] max-w-none opacity-30 sm:opacity-45 filter blur-[2.5px] sm:blur-[3.5px] transition-opacity duration-500 gpu-accel pointer-events-none"
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
