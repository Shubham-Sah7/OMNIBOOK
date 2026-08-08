"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

type BentoCardProps = {
  children: React.ReactNode
  className?: string
}

export function BentoCard({ children, className = "" }: BentoCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      className={`relative overflow-hidden rounded-2xl border border-black/[0.10] dark:border-white/[0.10] bg-white/90 dark:bg-[#111115]/90 backdrop-blur-xl shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 hover:shadow-xl ${className}`}
    >
      {/* Handcrafted Mouse Radial Spotlight Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 216, 246, 0.08), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  )
}
