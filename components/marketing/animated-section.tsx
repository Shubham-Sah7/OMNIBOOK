"use client"

import { motion } from "framer-motion"
import React from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "none"
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const yOffset = direction === "up" ? 45 : direction === "down" ? -45 : 0

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        scale: 0.96,
        rotateX: direction !== "none" ? 8 : 0,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface MaskTextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function MaskTextReveal({ text, className = "", delay = 0 }: MaskTextRevealProps) {
  const words = text.split(" ")

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-flex flex-wrap gap-x-[0.28em] gap-y-1 ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-1">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0, rotateX: 30 },
              visible: {
                y: "0%",
                opacity: 1,
                rotateX: 0,
                transition: {
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
