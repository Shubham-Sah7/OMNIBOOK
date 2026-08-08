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

    // Render 60 FPS Event-Splitting Financial Terminal Canvas
    const render = () => {
      time += 0.012
      offset += 1.2
      ctx.clearRect(0, 0, width, height)

      const centerY = height * 0.5

      // 1. Draw Horizontal Baseline with Small Tick Marks
      ctx.strokeStyle = "rgba(255, 255, 255, 0.14)"
      ctx.lineWidth = 1
      ctx.setLineDash([])

      ctx.beginPath()
      ctx.moveTo(0, centerY)
      ctx.lineTo(width, centerY)
      ctx.stroke()

      // Small vertical tick marks on baseline
      const tickSpacing = 200
      const tickOffset = offset % tickSpacing
      for (let x = width - tickOffset; x > 0; x -= tickSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, centerY - 4)
        ctx.lineTo(x, centerY + 4)
        ctx.stroke()
      }

      // 2. Draw Vertical Dashed Market Event Markers & Labels
      const eventSpacing = 340
      const eventOffset = offset % eventSpacing
      const eventLabels = [
        "event occurred",
        "new market",
        "event did not occur",
        "new market",
      ]

      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)"
      ctx.lineWidth = 1
      ctx.setLineDash([4, 4])

      let eventIdx = 0
      const currentEvents: number[] = []

      for (let x = width - eventOffset; x > -200; x -= eventSpacing) {
        currentEvents.push(x)

        ctx.beginPath()
        ctx.moveTo(x, height * 0.12)
        ctx.lineTo(x, height * 0.88)
        ctx.stroke()

        // Bottom Event Text Label (matching reference image font style)
        const label = eventLabels[eventIdx % eventLabels.length]
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)"
        ctx.font = "11px Inter, monospace, sans-serif"
        ctx.fillText(label, x + 6, height * 0.86)
        eventIdx++
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

      // 3. Mathematical Event-Splitting Financial Spline Curves
      // Generates unified trend line that splits into Green (YES), White (Base), and Red (NO) branches
      const step = 3

      // Function to calculate base trend height at screen coordinate x
      const getBaseY = (x: number) => {
        const worldX = x + offset
        const macro = Math.sin(worldX * 0.003 + time * 0.8) * 80 + Math.cos(worldX * 0.008 + time * 0.5) * 35
        const micro = Math.sin(worldX * 0.03 + time * 2) * 5 + Math.cos(worldX * 0.07) * 3
        return centerY + macro + micro
      }

      // Function to calculate branch displacement multiplier at screen coordinate x
      const getBranchOffset = (x: number) => {
        // Find nearest event line to x
        const relativeX = (x + offset) % eventSpacing
        const phase = relativeX / eventSpacing // 0.0 to 1.0 within event cycle

        // If phase < 0.3 (right after new market), lines are merged together (multiplier near 0)
        // If phase >= 0.3, lines diverge into Green (+), White (0), and Red (-) branches
        if (phase < 0.35) {
          return Math.sin((phase / 0.35) * (Math.PI / 2)) * 0.2
        } else {
          return 0.2 + Math.sin(((phase - 0.35) / 0.65) * (Math.PI / 2)) * 0.8
        }
      }

      let lastGreenY = 0
      let lastWhiteY = 0
      let lastRedY = 0

      // A. Draw White Central Benchmark Line
      ctx.beginPath()
      ctx.strokeStyle = "#EBEEF2"
      ctx.lineWidth = 2.0
      for (let x = 0; x <= width; x += step) {
        const baseY = getBaseY(x)
        if (x === 0) ctx.moveTo(x, baseY)
        else ctx.lineTo(x, baseY)
        if (x >= width - step) lastWhiteY = baseY
      }
      ctx.stroke()

      // B. Draw Green (YES / Bullish) Branch Line
      ctx.beginPath()
      ctx.strokeStyle = "#10B981"
      ctx.lineWidth = 2.2
      ctx.shadowBlur = 8
      ctx.shadowColor = "rgba(16, 185, 129, 0.6)"
      for (let x = 0; x <= width; x += step) {
        const baseY = getBaseY(x)
        const branchMult = getBranchOffset(x)
        const greenY = baseY - branchMult * 55 - Math.sin((x + offset) * 0.015) * 8
        if (x === 0) ctx.moveTo(x, greenY)
        else ctx.lineTo(x, greenY)
        if (x >= width - step) lastGreenY = greenY
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // C. Draw Red (NO / Bearish) Branch Line
      ctx.beginPath()
      ctx.strokeStyle = "#EF4444"
      ctx.lineWidth = 2.0
      ctx.shadowBlur = 8
      ctx.shadowColor = "rgba(239, 68, 68, 0.6)"
      for (let x = 0; x <= width; x += step) {
        const baseY = getBaseY(x)
        const branchMult = getBranchOffset(x)
        const redY = baseY + branchMult * 60 + Math.cos((x + offset) * 0.015) * 8
        if (x === 0) ctx.moveTo(x, redY)
        else ctx.lineTo(x, redY)
        if (x >= width - step) lastRedY = redY
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // 4. Draw Right-Edge Pulsing Tip Dots (matching reference image)
      // Green Tip Dot
      ctx.beginPath()
      ctx.arc(width - 4, lastGreenY, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#10B981"
      ctx.shadowBlur = 10
      ctx.shadowColor = "#10B981"
      ctx.fill()

      // White Tip Dot
      ctx.beginPath()
      ctx.arc(width - 4, lastWhiteY, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#EBEEF2"
      ctx.shadowBlur = 8
      ctx.shadowColor = "#EBEEF2"
      ctx.fill()

      // Red Tip Dot
      ctx.beginPath()
      ctx.arc(width - 4, lastRedY, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#EF4444"
      ctx.shadowBlur = 10
      ctx.shadowColor = "#EF4444"
      ctx.fill()

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
      className="pointer-events-none absolute inset-0 h-full w-full z-0 opacity-90 dark:opacity-95 select-none"
    />
  )
}
