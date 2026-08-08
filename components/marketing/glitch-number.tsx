"use client"

import { useState, useEffect } from "react"
import { AnimatedCounter } from "./counter"

type GlitchNumberProps = {
  value: number
  prefix?: string
  suffix?: string
}

export function GlitchNumber({ value, prefix = "", suffix = "" }: GlitchNumberProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Random subtle glitch pulse interval (matching Colosseum hackathon UI)
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 280)
      }
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
      className="relative inline-block cursor-default select-none"
    >
      <span
        className={`font-mono text-4xl font-extrabold tracking-wider sm:text-5xl md:text-6xl text-slate-900 dark:text-white transition-all duration-150 ${
          isGlitching ? "glitch-active text-[#00D8F6]" : ""
        }`}
        data-text={`${prefix}${value.toLocaleString()}${suffix}`}
      >
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </span>
    </div>
  )
}
