"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ProbabilityWaveCanvas } from "./probability-wave-canvas"

export function MovingAbstractBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* 1. High Visibility Vivid Hero Background Image Layer */}
      <motion.div
        animate={{
          scale: [1.02, 1.08, 1.03, 1.02],
          x: [0, -15, 12, 0],
          y: [0, -10, 8, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-8 z-0"
      >
        <Image
          src="/images/hero_user_bg.jpg"
          alt="Cinematic Hero Background"
          fill
          priority
          className="object-cover object-center opacity-85 dark:opacity-90 filter brightness-95 contrast-105"
        />
      </motion.div>

      {/* 2. Soft Edge Vignette & Readability Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/60 via-white/20 to-[#fbfbfd] dark:from-[#0a0a0a]/70 dark:via-[#0a0a0a]/30 dark:to-[#0a0a0a]" />

      {/* 3. Ambient Cyan Lens Flare Glow */}
      <motion.div
        animate={{
          scale: [0.95, 1.25, 0.95],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 z-10 h-[500px] w-[500px] rounded-full bg-[#00D8F6]/30 blur-[120px]"
      />

      {/* 4. Live Market Sentiment 60 FPS Probability Graph Canvas Layer */}
      <ProbabilityWaveCanvas />
    </div>
  )
}
