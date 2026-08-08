"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ProbabilityWaveCanvas } from "./probability-wave-canvas"

export function MovingAbstractBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full min-h-full overflow-hidden select-none z-0">
      {/* 1. Full-Screen Responsive Hero Background Image */}
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
          alt="Cinematic Responsive Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full opacity-80 dark:opacity-85 filter brightness-95 contrast-105"
        />
      </motion.div>

      {/* 2. Soft Edge Gradient Vignette for Text Contrast */}
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-b from-white/70 via-white/25 to-[#fbfbfd] dark:from-[#0a0a0a]/75 dark:via-[#0a0a0a]/30 dark:to-[#0a0a0a]" />

      {/* 3. Ambient Cyan Lens Flare Glow */}
      <motion.div
        animate={{
          scale: [0.95, 1.25, 0.95],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 z-10 h-[600px] w-[600px] rounded-full bg-[#00D8F6]/25 blur-[140px]"
      />

      {/* 4. Full-Width 60 FPS Probability Graph & Particle Canvas Layer */}
      <ProbabilityWaveCanvas />
    </div>
  )
}
