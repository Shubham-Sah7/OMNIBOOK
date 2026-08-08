"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ProbabilityWaveCanvas } from "./probability-wave-canvas"

export function MovingAbstractBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full min-h-full overflow-hidden select-none z-0">
      {/* 1. Full-Screen Razor Sharp Fully Visible Hero Background Image */}
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
          alt="Cinematic Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full opacity-100 dark:opacity-100"
        />
      </motion.div>

      {/* 2. Minimal Subtle Vignette Gradient Overlay (No Blur) */}
      <div className="absolute inset-0 z-10 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]/90" />

      {/* 3. Full-Width 60 FPS Probability Graph & Particle Canvas Layer */}
      <ProbabilityWaveCanvas />
    </div>
  )
}
