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

    // Render 60 FPS Pixel-Perfect Financial Prediction Canvas
    const render = () => {
      time += 0.012
      offset += 1.2
      ctx.clearRect(0, 0, width, height)

      const centerY = height * 0.5

      // 1. Draw Top Horizontal Grid Line & Center Baseline with Ticks
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)"
      ctx.lineWidth = 1
      ctx.setLineDash([])

      // Top Horizontal Line
      ctx.beginPath()
      ctx.moveTo(0, height * 0.16)
      ctx.lineTo(width, height * 0.16)
      ctx.stroke()

      // Center Baseline
      ctx.beginPath()
      ctx.moveTo(0, centerY)
      ctx.lineTo(width, centerY)
      ctx.stroke()

      // Small Vertical Tick Marks along baseline
      const tickSpacing = 220
      const tickOffset = offset % tickSpacing
      for (let x = width - tickOffset; x > 0; x -= tickSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, centerY - 5)
        ctx.lineTo(x, centerY + 5)
        ctx.stroke()
      }

      // 2. Draw Vertical Dashed Market Event Markers & Labels
      const eventSpacing = 360
      const eventOffset = offset % eventSpacing
      const eventLabels = [
        "new market",
        "event occurred",
        "new market",
        "event occurred",
      ]

      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)"
      ctx.lineWidth = 1
      ctx.setLineDash([4, 4])

      let eventIdx = 0
      const eventXCoords: number[] = []

      for (let x = width - eventOffset; x > -200; x -= eventSpacing) {
        eventXCoords.push(x)

        ctx.beginPath()
        ctx.moveTo(x, height * 0.15)
        ctx.lineTo(x, height * 0.85)
        ctx.stroke()

        // Draw solid accent line next to the second event marker (matching reference image)
        if (eventIdx % 2 === 0) {
          ctx.setLineDash([])
          ctx.strokeStyle = "rgba(255, 255, 255, 0.22)"
          ctx.beginPath()
          ctx.moveTo(x + 18, height * 0.15)
          ctx.lineTo(x + 18, height * 0.85)
          ctx.stroke()
          ctx.strokeStyle = "rgba(255, 255, 255, 0.18)"
          ctx.setLineDash([4, 4])
        }

        // Bottom Monospace Label
        const label = eventLabels[eventIdx % eventLabels.length]
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)"
        ctx.font = "11px Inter, monospace, sans-serif"
        ctx.fillText(label, x + 6, height * 0.84)
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

      // 3. Pixel-Perfect Financial Line Curve Generator
      const step = 2

      // Function to calculate primary white benchmark trend height at screen coordinate x
      const getPrimaryY = (x: number) => {
        const worldX = x + offset
        const macro =
          Math.sin(worldX * 0.003 + time * 0.6) * 70 +
          Math.cos(worldX * 0.007 + time * 0.4) * 40
        const micro =
          Math.sin(worldX * 0.04 + time * 2) * 4 +
          Math.cos(worldX * 0.1) * 2.5
        return centerY + macro + micro
      }

      // Latest Event Marker X (where green/red split occurs near right side)
      const splitX = width - eventOffset

      let greenEnd = { x: width, y: 0 }
      let whiteEnd = { x: width, y: 0 }
      let redEnd = { x: width, y: 0 }

      // A. Main White Trend Line (draws unified path up to split point, then branches)
      ctx.beginPath()
      ctx.strokeStyle = "#EBEEF2"
      ctx.lineWidth = 1.8

      for (let x = 0; x <= width; x += step) {
        const baseY = getPrimaryY(x)
        let y = baseY

        // If x is past split point near right side, white line branches slightly center-down
        if (x > splitX) {
          const progress = (x - splitX) / Math.max(width - splitX, 1)
          y = baseY + progress * 25 + Math.sin(progress * Math.PI) * 10
        }

        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)

        if (x >= width - step) whiteEnd = { x, y }
      }
      ctx.stroke()

      // B. Secondary Green Branch Line (Splits upwards at latest new market point)
      ctx.beginPath()
      ctx.strokeStyle = "#10B981"
      ctx.lineWidth = 2.0
      ctx.shadowBlur = 8
      ctx.shadowColor = "rgba(16, 185, 129, 0.5)"

      let greenStarted = false
      for (let x = 0; x <= width; x += step) {
        const baseY = getPrimaryY(x)

        // Earlier green divergence sub-branch (left side)
        const firstSplit = splitX - eventSpacing
        if (x > firstSplit && x < firstSplit + 140) {
          const progress = (x - firstSplit) / 140
          const greenY = baseY - Math.sin(progress * Math.PI) * 35
          if (!greenStarted) {
            ctx.moveTo(x, baseY)
            greenStarted = true
          } else {
            ctx.lineTo(x, greenY)
          }
        }
        // Main Right Green Branch
        else if (x >= splitX) {
          const progress = (x - splitX) / Math.max(width - splitX, 1)
          const greenY = baseY - progress * 45 - Math.sin(progress * Math.PI * 1.5) * 15
          if (!greenStarted) {
            ctx.moveTo(x, baseY)
            greenStarted = true
          } else {
            ctx.lineTo(x, greenY)
          }
          if (x >= width - step) greenEnd = { x, y: greenY }
        } else {
          greenStarted = false
        }
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // C. Red Branch Line (Splits downwards at latest new market point)
      ctx.beginPath()
      ctx.strokeStyle = "#EF4444"
      ctx.lineWidth = 2.0
      ctx.shadowBlur = 8
      ctx.shadowColor = "rgba(239, 68, 68, 0.5)"

      let redStarted = false
      for (let x = splitX; x <= width; x += step) {
        const baseY = getPrimaryY(x)
        const progress = (x - splitX) / Math.max(width - splitX, 1)
        const redY = baseY + progress * 65 + Math.sin(progress * Math.PI * 1.2) * 12

        if (!redStarted) {
          ctx.moveTo(x, baseY)
          redStarted = true
        } else {
          ctx.lineTo(x, redY)
        }
        if (x >= width - step) redEnd = { x, y: redY }
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // 4. Draw Right-Edge Pulsing Tip Dots (matching reference image)
      // Green Tip Dot
      ctx.beginPath()
      ctx.arc(greenEnd.x - 2, greenEnd.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#10B981"
      ctx.shadowBlur = 10
      ctx.shadowColor = "#10B981"
      ctx.fill()

      // White Tip Dot
      ctx.beginPath()
      ctx.arc(whiteEnd.x - 2, whiteEnd.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#EBEEF2"
      ctx.shadowBlur = 8
      ctx.shadowColor = "#EBEEF2"
      ctx.fill()

      // Red Tip Dot
      ctx.beginPath()
      ctx.arc(redEnd.x - 2, redEnd.y, 4, 0, Math.PI * 2)
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
