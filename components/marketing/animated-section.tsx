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
  const yOffset = direction === "up" ? 50 : direction === "down" ? -50 : 0

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        scale: 0.95,
        rotateX: direction !== "none" ? 12 : 0,
        filter: "blur(14px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 0.9,
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
            staggerChildren: 0.06,
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
              hidden: {
                y: "120%",
                opacity: 0,
                rotateX: 45,
                scale: 0.92,
                filter: "blur(8px)",
              },
              visible: {
                y: "0%",
                opacity: 1,
                rotateX: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            style={{ transformStyle: "preserve-3d", display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}

interface Kinetic3DRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Kinetic3DReveal({ children, className = "", delay = 0 }: Kinetic3DRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        rotateX: 18,
        rotateY: -8,
        scale: 0.93,
        filter: "blur(16px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.05,
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
