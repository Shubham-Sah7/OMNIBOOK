"use client"

import { useEffect, useRef } from "react"

type Star = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  baseAlpha: number
  twinkleSpeed: number
  twinklePhase: number
  hasFlare: boolean
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
  baseAlpha: number
  phase: number
  sentiment: "yes" | "no" | "neutral"
}

export function ProbabilityWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Mouse Interaction Coordinates
    const mouse = { x: -1000, y: -1000, radius: 160 }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    // 1. Initialize 120 Moving Twinkling Starlight Particles
    const numStars = Math.min(Math.floor((width * height) / 7000), 120)
    const stars: Star[] = []

    for (let i = 0; i < numStars; i++) {
      const radius = Math.random() * 1.8 + 0.6
      const alpha = Math.random() * 0.6 + 0.25

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius,
        alpha,
        baseAlpha: alpha,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        hasFlare: radius > 1.6,
      })
    }

    // 2. Initialize 140 Market Sentiment Particles
    const colors = {
      yes: ["#00D8F6", "#10B981", "#34D399"],
      no: ["#E15252", "#F43F5E", "#EF4444"],
      neutral: ["#A1A1AA", "#E4E4E7", "#FFFFFF"],
    }

    const numParticles = Math.min(Math.floor((width * height) / 9000), 140)
    const particles: Particle[] = []

    for (let i = 0; i < numParticles; i++) {
      const rand = Math.random()
      const sentiment: "yes" | "no" | "neutral" = rand < 0.55 ? "yes" : rand < 0.85 ? "no" : "neutral"
      const colorArr = colors[sentiment]
      const color = colorArr[Math.floor(Math.random() * colorArr.length)]
      const radius = Math.random() * 2.5 + 1.2
      const alpha = Math.random() * 0.5 + 0.35

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius,
        color,
        alpha,
        baseAlpha: alpha,
        phase: Math.random() * Math.PI * 2,
        sentiment,
      })
    }

    let time = 0

    // Render Loop (60 FPS GPU-Accelerated)
    const render = () => {
      time += 0.015
      ctx.clearRect(0, 0, width, height)

      // A. Render Moving Twinkling Stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        s.x += s.vx
        s.y += s.vy

        // Wrap around boundaries
        if (s.x < 0) s.x = width
        if (s.x > width) s.x = 0
        if (s.y < 0) s.y = height
        if (s.y > height) s.y = 0

        // Twinkle Alpha Modulation
        s.twinklePhase += s.twinkleSpeed
        const twinkleAlpha = s.baseAlpha + Math.sin(s.twinklePhase) * 0.35
        const currentAlpha = Math.max(0.1, Math.min(twinkleAlpha, 0.95))

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = "#FFFFFF"
        ctx.globalAlpha = currentAlpha
        ctx.shadowBlur = s.hasFlare ? 8 : 4
        ctx.shadowColor = "#FFFFFF"
        ctx.fill()

        // Draw Subtle 4-Point Starlight Cross Flare for Larger Stars
        if (s.hasFlare && currentAlpha > 0.4) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.5})`
          ctx.lineWidth = 0.6
          const flareLen = s.radius * 3
          ctx.moveTo(s.x - flareLen, s.y)
          ctx.lineTo(s.x + flareLen, s.y)
          ctx.moveTo(s.x, s.y - flareLen)
          ctx.lineTo(s.x, s.y + flareLen)
          ctx.stroke()
        }
      }

      // B. Render Market Sentiment Wave Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        const waveX = Math.sin(time + p.y * 0.006 + p.phase) * 1.2
        const waveY = Math.cos(time * 0.8 + p.x * 0.006 + p.phase) * 1.2

        p.x += p.vx + waveX * (p.sentiment === "yes" ? 1 : -0.8)
        p.y += p.vy + waveY * 0.5

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        // Mouse Repulsion & Ripple
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius
          p.x += (dx / dist) * force * 4
          p.y += (dy / dist) * force * 4
          p.alpha = Math.min(p.baseAlpha + force * 0.4, 0.95)
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.shadowBlur = p.radius > 2 ? 12 : 6
        ctx.shadowColor = p.color
        ctx.fill()
      }

      ctx.shadowBlur = 0

      // C. Draw Neural Network Connecting Energy Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 85) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            const lineAlpha = (1 - dist / 85) * 0.18
            ctx.strokeStyle = p1.sentiment === "yes" ? "#00D8F6" : p1.sentiment === "no" ? "#E15252" : "#A1A1AA"
            ctx.globalAlpha = lineAlpha
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1.0
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full z-0 opacity-85 dark:opacity-95 select-none"
    />
  )
}
