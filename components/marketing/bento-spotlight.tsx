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
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] transition-colors duration-300 hover:border-white/[0.18] ${className}`}
    >
      {/* Handcrafted Mouse Spotlight Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  )
}
