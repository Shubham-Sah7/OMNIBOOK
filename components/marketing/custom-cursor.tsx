"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleOver)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none hidden md:block">
      {/* Primary Precision Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 h-2.5 w-2.5 rounded-full bg-[#00D8F6] shadow-[0_0_10px_#00D8F6]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isClicked ? 0.7 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Trailing Smooth Glowing Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border transition-colors duration-200 ${
          isHovered
            ? "border-[#00D8F6] bg-[#00D8F6]/10 shadow-[0_0_20px_rgba(0,216,246,0.3)]"
            : "border-slate-900/30 dark:border-white/30 bg-transparent"
        }`}
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 220, mass: 0.2 }}
      />
    </div>
  )
}
