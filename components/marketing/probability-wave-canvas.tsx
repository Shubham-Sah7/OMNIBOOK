"use client"

import { useEffect, useRef } from "react"

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
    const mouse = { x: -1000, y: -1000, radius: 220 }

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

    let offset = 0
    let time = 0

    // Render 60 FPS Financial Prediction Terminal Graph Canvas
    const render = () => {
      time += 0.015
      offset += 1.2
      ctx.clearRect(0, 0, width, height)

      // 1. Draw Thin Horizontal Baseline & Grid Lines
      const centerY = height * 0.52

      ctx.strokeStyle = "rgba(255, 255, 255, 0.06)"
      ctx.lineWidth = 1
      ctx.setLineDash([])

      // Center Horizontal Baseline
      ctx.beginPath()
      ctx.moveTo(0, centerY)
      ctx.lineTo(width, centerY)
      ctx.stroke()

      // Top & Bottom Quarter Level Lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
      ctx.beginPath()
      ctx.moveTo(0, height * 0.25)
      ctx.lineTo(width, height * 0.25)
      ctx.moveTo(0, height * 0.75)
      ctx.lineTo(width, height * 0.75)
      ctx.stroke()

      // 2. Draw Vertical Dashed Market Event Markers (matching reference image)
      const eventSpacing = 320
      const eventOffset = offset % eventSpacing
      const eventLabels = ["new market", "event occurred", "new market", "settlement confirmed"]

      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)"
      ctx.lineWidth = 1
      ctx.setLineDash([4, 4])

      let labelIdx = 0
      for (let x = width - eventOffset; x > -100; x -= eventSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, height * 0.1)
        ctx.lineTo(x, height * 0.85)
        ctx.stroke()

        // Bottom Event Label Text
        const text = eventLabels[labelIdx % eventLabels.length]
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)"
        ctx.font = "11px Inter, monospace, sans-serif"
        ctx.fillText(text, x + 8, height * 0.84)
        labelIdx++
      }

      ctx.setLineDash([]) // Reset line dash

      // Mouse Parallax Glow Brightness Aura
      if (mouse.x > 0) {
        const glowGradient = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, mouse.radius)
        glowGradient.addColorStop(0, "rgba(0, 216, 246, 0.12)")
        glowGradient.addColorStop(1, "rgba(0, 216, 246, 0.0)")
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // 3. Realistic High-Frequency Financial Probability Curves
      const step = 3

      // A. White Curve = Benchmark Market Index (Smooth Financial Spline)
      ctx.beginPath()
      ctx.strokeStyle = "rgba(235, 238, 242, 0.65)"
      ctx.lineWidth = 1.8
      for (let x = 0; x <= width + step; x += step) {
        const worldX = x + offset
        // Financial wave equation combining macro trends + micro jagged noise
        const macro = Math.sin(worldX * 0.0035 + time * 0.8) * 65
        const micro = Math.cos(worldX * 0.02 + time * 2) * 6 + Math.sin(worldX * 0.08) * 3
        const y = centerY + macro + micro

        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // B. Green/Cyan Curve = Bullish / YES Prediction Trajectory (#10B981 / #00D8F6)
      ctx.beginPath()
      ctx.strokeStyle = "#10B981"
      ctx.lineWidth = 2.2
      ctx.shadowBlur = 10
      ctx.shadowColor = "rgba(16, 185, 129, 0.5)"
      for (let x = 0; x <= width + step; x += step) {
        const worldX = x + offset
        const macro = Math.sin(worldX * 0.004 + time * 1.1) * 75 + Math.cos(worldX * 0.009 + time) * 35
        const micro = Math.sin(worldX * 0.035 + time * 2.5) * 8 + Math.cos(worldX * 0.07) * 4
        const y = centerY - 20 + macro + micro

        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // C. Red Curve = Bearish / NO Prediction Trajectory (#E15252)
      ctx.beginPath()
      ctx.strokeStyle = "#E15252"
      ctx.lineWidth = 2.0
      ctx.shadowBlur = 8
      ctx.shadowColor = "rgba(225, 82, 82, 0.4)"
      for (let x = 0; x <= width + step; x += step) {
        const worldX = x + offset
        const macro = Math.cos(worldX * 0.0038 + time * 0.95) * 70 - Math.sin(worldX * 0.008 + time * 1.2) * 40
        const micro = Math.cos(worldX * 0.04 + time * 2.2) * 7 + Math.sin(worldX * 0.09) * 3.5
        const y = centerY + 25 + macro + micro

        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.shadowBlur = 0

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
