"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ProbabilityWaveCanvas } from "./probability-wave-canvas"

export function MovingAbstractBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* 1. User Hero Cinematic Background Image Layer */}
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
          className="object-cover object-center opacity-45 dark:opacity-55 mix-blend-luminosity dark:mix-blend-lighten filter brightness-90 contrast-110"
        />
      </motion.div>

      {/* 2. Light & Dark Adaptive Gradient Backdrop Filter Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#fbfbfd]/70 via-[#fbfbfd]/30 to-[#fbfbfd]/90 dark:from-[#0a0a0a]/75 dark:via-[#0a0a0a]/40 dark:to-[#0a0a0a]/90 backdrop-blur-[2px]" />

      {/* 3. Ambient Cyan Lens Flare Glow */}
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
        className="absolute top-1/4 left-1/3 z-10 h-[500px] w-[500px] rounded-full bg-[#00D8F6]/25 blur-[140px]"
      />

      {/* 4. Live Market Sentiment 60 FPS Probability Graph Canvas Layer */}
      <ProbabilityWaveCanvas />
    </div>
  )
}
