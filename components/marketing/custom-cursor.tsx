"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest(".group") ||
        target?.closest("tr")
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY, isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 transition-colors duration-200"
        style={{
          x: springX,
          y: springY,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.05)" : "transparent",
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{
          x: springX,
          y: springY,
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </div>
  )
}
