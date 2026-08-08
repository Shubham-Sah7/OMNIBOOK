"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowLeftRight, TrendingUp, ChevronRight, Timer } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SaaSProductShowcase } from "./saas-product-showcase"
import { MaskTextReveal } from "./animated-section"
import { MovingAbstractBackground } from "./moving-abstract-bg"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Scroll Parallax Depth Transformations
  const headlineY = useTransform(scrollY, [0, 600], [0, 80])
  const leftCardY = useTransform(scrollY, [0, 600], [0, -60])
  const rightCardY = useTransform(scrollY, [0, 600], [0, -90])

  return (
    <section ref={containerRef} className="relative w-full min-h-screen px-4 pt-16 pb-16 text-center md:px-6 md:pt-24 md:pb-20 overflow-hidden flex flex-col justify-center items-center">
      {/* Full-Screen Responsive Background Visual & Live Probability Wave Canvas */}
      <MovingAbstractBackground />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Floating Left Live Volume Widget (Scroll Parallax Depth) */}
        <motion.div
          style={{ y: leftCardY }}
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-0 z-20 hidden lg:flex items-center gap-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#0d0e12]/80 px-4 py-2.5 backdrop-blur-xl shadow-xl select-none"
        >
          <div className="text-left font-mono text-xs">
            <span className="block text-[10px] text-slate-500 dark:text-gray-4 uppercase">LIVE VOL TODAY</span>
            <span className="font-bold text-slate-900 dark:text-white">$48,592.80</span>
          </div>
        </motion.div>

        {/* Floating Right Settlement Speed Widget (Scroll Parallax Depth) */}
        <motion.div
          style={{ y: rightCardY }}
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 right-0 z-20 hidden lg:flex items-center gap-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#0d0e12]/80 px-4 py-2.5 backdrop-blur-xl shadow-xl select-none"
        >
          <div className="text-left font-mono text-xs">
            <span className="block text-[10px] text-slate-500 dark:text-gray-4 uppercase">AVERAGE LATENCY</span>
            <span className="font-bold text-emerald-500">42ms <span className="text-[10px] text-slate-400 font-normal">(SUB-SECOND)</span></span>
          </div>
        </motion.div>

        {/* Colosseum Style Top Centered Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] px-4 py-1.5 backdrop-blur-md shadow-sm dark:shadow-[0_0_24px_rgba(0,216,246,0.12)]"
        >
          <span className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-slate-900 dark:text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D8F6] animate-pulse" />
            SEASON 1 LIVE
          </span>

          <span className="h-3 w-[1px] bg-black/20 dark:bg-white/20" />

          <span className="flex items-center gap-1 font-mono text-[11px] font-medium text-slate-600 dark:text-gray-3">
            <Timer className="h-3 w-3 stroke-[1.75] text-[#00D8F6]" />
            60s ROUNDS
          </span>

          <span className="h-3 w-[1px] bg-black/20 dark:bg-white/20" />

          <span className="flex items-center gap-1 font-mono text-[11px] font-semibold text-slate-900 dark:text-white">
            15K+ TRADERS
            <ChevronRight className="h-3 w-3 stroke-[1.75] text-slate-500 dark:text-gray-4" />
          </span>
        </motion.div>

        {/* Kinetic Word Reveal Headline matching Colosseum "ENTER THE ARENA" */}
        <motion.div style={{ y: headlineY }} className="mb-4">
          <MaskTextReveal
            text="ENTER THE ARENA"
            className="font-display justify-center text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase sm:text-7xl md:text-8xl lg:text-[6.25rem] lg:leading-[6.5rem]"
          />
        </motion.div>

        {/* Spaced Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono mb-4 text-xs font-semibold tracking-[0.25em] text-[#00D8F6] uppercase sm:text-sm"
        >
          THE PROVING GROUND FOR PREDICTION TRADERS
        </motion.p>

        {/* Centered Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-gray-3 md:text-lg"
        >
          Omnibook is the premier prediction market arena where top traders forecast real-world events in 60-second rounds. Select outcomes, place positions before the round closes, and collect payouts upon instant settlement.
        </motion.p>

        {/* Centered Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#markets" className="btn-primary hover:scale-[1.03]">
            Start Trading <ArrowLeftRight className="h-4 w-4 stroke-[1.75]" />
          </Link>
          <Link href="#markets" className="btn-secondary hover:scale-[1.03]">
            Explore Markets <TrendingUp className="h-4 w-4 stroke-[1.75] text-slate-500 dark:text-gray-4" />
          </Link>
        </motion.div>

        {/* SaaS Dashboard Product Showcase */}
        <SaaSProductShowcase />
      </div>
    </section>
  )
}
