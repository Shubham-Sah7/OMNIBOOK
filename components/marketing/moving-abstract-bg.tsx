"use client"

import { motion } from "framer-motion"

export function MovingAbstractBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
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
    </div>
  )
}
