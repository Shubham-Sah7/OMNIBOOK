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
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            {/* Cinematic Space Earth Orbit Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/space_orbit.png"
                alt="Cosmic Space Orbit Earth View"
                fill
                priority
                className="object-cover object-center opacity-90 dark:opacity-95"
              />
            </div>

            {/* Subtle Gradient Overlays for Contrast & Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/90 dark:from-[#0a0a0a]/70 dark:via-transparent dark:to-[#0a0a0a]" />

            {/* Ambient Cosmic Cyan Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/3 z-10 h-[500px] w-[500px] rounded-full bg-[#00D8F6]/25 blur-[130px]"
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
            {/* Ambient Moving Cyan Light Orb */}
            <motion.div
              animate={{
                x: [-60, 60, -60],
                y: [-40, 40, -40],
                scale: [1, 1.2, 1],
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D8F6] blur-[140px]"
            />

            {/* Secondary Soft Indigo Ambient Orb */}
            <motion.div
              animate={{
                x: [80, -80, 80],
                y: [30, -50, 30],
                scale: [1.1, 0.9, 1.1],
                opacity: [0.08, 0.16, 0.08],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 left-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#102a45] blur-[160px]"
            />

            {/* Moving Horizontal Grid Scanner Line */}
            <motion.div
              animate={{
                y: ["-100%", "250%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#00D8F6]/[0.04] to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
