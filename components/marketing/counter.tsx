"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

type AnimatedCounterProps = {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      // EaseOutQuart easing
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setCount(easeProgress * value)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {count.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
