"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useBgMode } from "./bg-mode-context"

export function MovingAbstractBackground() {
  const { bgMode } = useBgMode()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      <AnimatePresence mode="wait">
        {bgMode === "cosmos" ? (
          <motion.div
            key="cosmos-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 z-0 overflow-hidden"
          >
            {/* Live Video Stock Motion Effect: Continuous Slow Pan & Ken Burns Scale */}
            <motion.div
              animate={{
                scale: [1.02, 1.12, 1.05, 1.02],
                x: [0, -30, 20, 0],
                y: [0, -18, 12, 0],
                rotate: [0, 0.6, -0.4, 0],
              }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-10 z-0"
            >
              <Image
                src="/images/space_orbit.png"
                alt="Cosmic Space Orbit Earth View"
                fill
                priority
                className="object-cover object-center opacity-90 dark:opacity-95"
              />
            </motion.div>

            {/* Moving Stock Video Ray Sweep Effect */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
                y: ["-50%", "150%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-1/2 -left-1/2 h-[200%] w-48 rotate-45 bg-gradient-to-r from-transparent via-[#00D8F6]/15 to-transparent blur-xl"
            />

            {/* Subtle Gradient Overlays for High-Contrast Typography Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/90 dark:from-[#0a0a0a]/70 dark:via-transparent dark:to-[#0a0a0a]" />

            {/* Live Pulsing Cosmic Lens Flare Light */}
            <motion.div
              animate={{
                scale: [0.9, 1.25, 0.9],
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/3 z-10 h-[500px] w-[500px] rounded-full bg-[#00D8F6]/30 blur-[140px]"
            />
          </motion.div>
        ) : (
          <motion.div
            key="grid-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            {/* Live Video Motion: Floating Ambient Cyan Light Orb */}
            <motion.div
              animate={{
                x: [-70, 70, -70],
                y: [-50, 50, -50],
                scale: [1, 1.25, 1],
                opacity: [0.14, 0.26, 0.14],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D8F6] blur-[140px]"
            />

            {/* Live Video Motion: Secondary Soft Indigo Ambient Orb */}
            <motion.div
              animate={{
                x: [90, -90, 90],
                y: [40, -60, 40],
                scale: [1.15, 0.85, 1.15],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 left-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#102a45] blur-[160px]"
            />

            {/* Continuous Moving Stock Grid Scanner Line */}
            <motion.div
              animate={{
                y: ["-100%", "250%"],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 right-0 h-44 bg-gradient-to-b from-transparent via-[#00D8F6]/[0.05] to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
