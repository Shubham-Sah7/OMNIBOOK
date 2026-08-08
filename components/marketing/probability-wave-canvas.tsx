"use client"

import { useEffect, useRef } from "react"

type DataTag = {
  x: number
  y: number
  text: string
  color: string
  alpha: number
  speed: number
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

    // Interactive Mouse Tracking
    const mouse = { x: -1000, y: -1000, radius: 200 }

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

    // Floating Financial Annotation Tags
    const tagLabels = [
      { text: "YES 62%", color: "#00D8F6" },
      { text: "BTC +2.4%", color: "#10B981" },
      { text: "SETTLEMENT 42ms", color: "#F59E0B" },
      { text: "NO 38%", color: "#E15252" },
      { text: "NEW MARKET", color: "#3B82F6" },
      { text: "EVENT RESOLVED", color: "#A855F7" },
    ]

    const tags: DataTag[] = []
    for (let i = 0; i < 8; i++) {
      const labelObj = tagLabels[i % tagLabels.length]
      tags.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.6) + height * 0.2,
        text: labelObj.text,
        color: labelObj.color,
        alpha: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.6 + 0.4,
      })
    }

    let offset = 0
    let time = 0

    // Render 60 FPS Procedural Financial Graph Canvas
    const render = () => {
      time += 0.012
      offset += 0.8
      ctx.clearRect(0, 0, width, height)

      // 1. Draw Subtle Financial Grid Mesh & Level Markers
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
      ctx.lineWidth = 1

      // Horizontal Probability Level Lines (20%, 40%, 60%, 80%)
      const levelLabels = ["80%", "60%", "40%", "20%"]
      for (let i = 1; i <= 4; i++) {
        const levelY = (height / 5) * i
        ctx.beginPath()
        ctx.moveTo(0, levelY)
        ctx.lineTo(width, levelY)
        ctx.stroke()

        ctx.fillStyle = "rgba(255, 255, 255, 0.15)"
        ctx.font = "10px Inter, sans-serif"
        ctx.fillText(levelLabels[i - 1], 12, levelY - 4)
      }

      // Vertical Time Markers
      const gridSpacing = 120
      const gridOffset = offset % gridSpacing
      for (let x = width - gridOffset; x > 0; x -= gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Mouse Parallax Glow Brightness
      if (mouse.x > 0) {
        const glowGradient = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, mouse.radius)
        glowGradient.addColorStop(0, "rgba(0, 216, 246, 0.12)")
        glowGradient.addColorStop(1, "rgba(0, 216, 246, 0.0)")
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // 2. Procedural Smooth Financial Curves Functions
      const step = 4

      // A. White Curve = Market Average Index
      ctx.beginPath()
      ctx.strokeStyle = "rgba(255, 255, 255, 0.45)"
      ctx.lineWidth = 1.8
      for (let x = 0; x <= width + step; x += step) {
        const worldX = x + offset
        const y =
          height * 0.48 +
          Math.sin(worldX * 0.003 + time) * 45 +
          Math.cos(worldX * 0.008 + time * 0.7) * 25
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // B. Cyan Curve = Bullish / YES Odds (#00D8F6)
      ctx.beginPath()
      ctx.strokeStyle = "rgba(0, 216, 246, 0.85)"
      ctx.lineWidth = 2.4
      ctx.shadowBlur = 12
      ctx.shadowColor = "#00D8F6"
      for (let x = 0; x <= width + step; x += step) {
        const worldX = x + offset
        const y =
          height * 0.4 +
          Math.sin(worldX * 0.004 + time * 1.2) * 55 +
          Math.sin(worldX * 0.009 + time) * 35
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // C. Red Curve = Bearish / NO Odds (#E15252)
      ctx.beginPath()
      ctx.strokeStyle = "rgba(225, 82, 82, 0.75)"
      ctx.lineWidth = 2.0
      ctx.shadowBlur = 10
      ctx.shadowColor = "#E15252"
      for (let x = 0; x <= width + step; x += step) {
        const worldX = x + offset
        const y =
          height * 0.58 +
          Math.cos(worldX * 0.0035 + time * 0.9) * 50 +
          Math.sin(worldX * 0.007 + time * 1.1) * 30
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // 3. Render Drifting Financial Annotation Tags
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        tag.x -= tag.speed

        if (tag.x < -120) {
          tag.x = width + 50
          tag.y = Math.random() * (height * 0.6) + height * 0.2
        }

        ctx.save()
        ctx.fillStyle = "rgba(10, 10, 14, 0.75)"
        ctx.strokeStyle = tag.color
        ctx.lineWidth = 1
        ctx.globalAlpha = tag.alpha

        const paddingX = 8
        const paddingY = 4
        ctx.font = "10px Inter, sans-serif"
        const textWidth = ctx.measureText(tag.text).width

        // Draw Pill Tag Background
        ctx.beginPath()
        ctx.roundRect(tag.x - paddingX, tag.y - 12, textWidth + paddingX * 2, 20, 6)
        ctx.fill()
        ctx.stroke()

        // Draw Tag Text
        ctx.fillStyle = tag.color
        ctx.fillText(tag.text, tag.x, tag.y + 2)
        ctx.restore()
      }

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
