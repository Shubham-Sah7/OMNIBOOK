"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ProbabilityWaveCanvas } from "./probability-wave-canvas"

export function MovingAbstractBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full min-h-full overflow-hidden select-none z-0">
      {/* 1. Deep Dark Cinematic Background Image Texture */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -12, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="/images/hero_user_bg.jpg"
          alt="Cinematic Dark Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full opacity-40 dark:opacity-50 mix-blend-luminosity filter brightness-70 contrast-130"
        />
      </motion.div>

      {/* 2. Deep Dark Mode Gradient Overlay */}
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/65 to-[#0a0a0a]/95" />

      {/* 3. Deep Ambient Cyan Glow Pulse */}
      <motion.div
        animate={{
          scale: [0.95, 1.25, 0.95],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 z-10 h-[600px] w-[600px] rounded-full bg-[#00D8F6]/20 blur-[150px]"
      />

      {/* 4. Full-Width 60 FPS Probability Graph & Particle Canvas Layer */}
      <ProbabilityWaveCanvas />
    </div>
  )
}
