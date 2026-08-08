"use client"

import { useState, useEffect } from "react"
import { Check, Database, Cpu, ArrowUpRight, Zap, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection, MaskTextReveal } from "./animated-section"

export function BuiltForMarkets() {
  const [sliderVal, setSliderVal] = useState(62)
  const [livePrice, setLivePrice] = useState(64596.90)

  useEffect(() => {
    const timer = setInterval(() => {
      setLivePrice((prev) => +(prev + (Math.random() - 0.48) * 4).toFixed(2))
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const yesReturn = ((100 / (sliderVal / 100) - 1) * 100).toFixed(0)
  const noReturn = ((100 / ((100 - sliderVal) / 100) - 1) * 100).toFixed(0)

  return (
    <section id="features" className="relative py-14 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Editorial Section Header */}
        <AnimatedSection className="mb-12 text-center md:mb-16">
          <div className="linear-badge mb-3">
            PLATFORM ARCHITECTURE
          </div>
          <div className="mx-auto max-w-3xl">
            <MaskTextReveal
              text="Engineered for prediction trading"
              className="justify-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
            />
          </div>
          <p className="mt-3.5 mx-auto max-w-xl text-base leading-relaxed text-slate-600 dark:text-gray-3 font-normal">
            Continuous order book matching, sub-second settlement smart contracts, and decentralized multi-feed oracles built for real-world event markets.
          </p>
        </AnimatedSection>

        {/* Handcrafted Editorial Asymmetric Composition */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Hero Dominant Module (70% / 8-cols): Interactive Live Matching Engine Terminal */}
          <AnimatedSection className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0c0d12]/90 p-7 sm:p-9 backdrop-blur-2xl shadow-xl dark:shadow-[0_16px_50px_rgba(0,0,0,0.7)] text-left">
              {/* Top Engine Status Bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.08] dark:border-white/[0.08] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-3 w-3 items-center justify-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#00D8F6] animate-ping" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Live Matching Engine</h3>
                    <span className="font-mono text-xs text-slate-500 dark:text-gray-4">BTC/USD 60s Contract Order Depth</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 stroke-[2]" /> MATCHING ENGINE ACTIVE
                  </span>
                </div>
              </div>

              {/* Dynamic Live Chart SVG Visualization */}
              <div className="relative mb-6 h-40 w-full overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-50 dark:bg-[#07080c] p-4">
                <div className="flex items-center justify-between font-mono text-xs mb-2">
                  <span className="text-slate-500 dark:text-gray-4">LIVE INDEX PRICE: <strong className="text-slate-900 dark:text-white">${livePrice.toLocaleString()}</strong></span>
                  <span className="text-[#00D8F6] font-bold">YES PROBABILITY: {sliderVal}%</span>
                </div>

                <svg className="h-28 w-full" viewBox="0 0 500 80" fill="none">
                  <defs>
                    <linearGradient id="bento-chart-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D8F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00D8F6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path d="M 0 60 Q 120 20, 240 50 T 500 15 L 500 80 L 0 80 Z" fill="url(#bento-chart-fill)" />
                  <motion.path
                    d="M 0 60 Q 120 20, 240 50 T 500 15"
                    fill="none"
                    stroke="#00D8F6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="500"
                    cy="15"
                    r="5"
                    fill="#00D8F6"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              {/* Interactive Ratio Depth Control */}
              <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-50 dark:bg-[#07080c] p-5 shadow-inner">
                <div className="mb-3 flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">YES PROBABILITY: <span className="text-[#00D8F6]">{sliderVal}%</span></span>
                  <span className="font-bold text-slate-900 dark:text-white">NO PROBABILITY: <span className="text-[#E15252]">{100 - sliderVal}%</span></span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="90"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  aria-label="Interactive probability ratio slider"
                  className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 dark:bg-[#1b1c24] accent-[#00D8F6]"
                />

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="flex items-center justify-between rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111116] px-4 py-2.5">
                    <span className="text-slate-500 dark:text-gray-4">ESTIMATED YES RETURN:</span>
                    <span className="font-bold text-[#00D8F6]">+{yesReturn}%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111116] px-4 py-2.5">
                    <span className="text-slate-500 dark:text-gray-4">ESTIMATED NO RETURN:</span>
                    <span className="font-bold text-[#E15252]">+{noReturn}%</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column Stack (30% / 4-cols): Latency Module & Multi-Sig Oracle Flow */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            {/* Top-Right Module: Sub-Second Settlement Latency */}
            <AnimatedSection delay={0.15}>
              <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0c0d12]/90 p-7 backdrop-blur-2xl shadow-lg dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] text-left">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase">SETTLEMENT LATENCY</span>
                  <Zap className="h-4 w-4 stroke-[1.75] text-[#00D8F6] animate-pulse" />
                </div>

                <div className="mb-4 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-extrabold text-slate-900 dark:text-white">42ms</span>
                  <span className="font-mono text-xs font-semibold text-emerald-500">SUB-SECOND</span>
                </div>

                <p className="text-xs leading-relaxed text-slate-500 dark:text-gray-4">
                  Automated smart contracts disburse payouts directly to user account balances within milliseconds of oracle verification.
                </p>
              </div>
            </AnimatedSection>

            {/* Bottom-Right Module: Oracle Verification Flow */}
            <AnimatedSection delay={0.25}>
              <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0c0d12]/90 p-7 backdrop-blur-2xl shadow-lg dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] text-left">
                <div className="mb-4 flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 stroke-[1.75] text-[#00D8F6]" />
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase">ORACLE RESOLUTION</span>
                  </div>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-slate-50 dark:bg-[#07080c] px-3.5 py-2.5 text-slate-700 dark:text-gray-3">
                    <span className="flex items-center gap-2">
                      <Database className="h-3.5 w-3.5 stroke-[1.75] text-slate-500 dark:text-gray-4" />
                      Global API Feeds
                    </span>
                    <span className="font-bold text-emerald-500">SYNCED</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-slate-50 dark:bg-[#07080c] px-3.5 py-2.5 text-slate-700 dark:text-gray-3">
                    <span className="flex items-center gap-2">
                      <Cpu className="h-3.5 w-3.5 stroke-[1.75] text-slate-500 dark:text-gray-4" />
                      Multi-Sig Consensus
                    </span>
                    <span className="font-bold text-emerald-500">VERIFIED</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom Full-Width Banner (100% / 12-cols): Global Event Index & Active Category Chips */}
          <AnimatedSection delay={0.35} className="lg:col-span-12">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0c0d12]/90 p-7 sm:p-8 backdrop-blur-2xl shadow-lg dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] text-left flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Global Event Index</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-gray-4">1,500+ active prediction contracts updated 24/7 across major global categories</p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                <span className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-4 py-2 font-semibold text-slate-900 dark:text-white transition-all hover:border-[#00D8F6] hover:scale-[1.03]">
                  CRYPTO 60s
                </span>
                <span className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-4 py-2 font-semibold text-slate-900 dark:text-white transition-all hover:border-[#00D8F6] hover:scale-[1.03]">
                  MACROECONOMICS
                </span>
                <span className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-4 py-2 font-semibold text-slate-900 dark:text-white transition-all hover:border-[#00D8F6] hover:scale-[1.03]">
                  POLITICAL ELECTIONS
                </span>
                <span className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-4 py-2 font-semibold text-slate-900 dark:text-white transition-all hover:border-[#00D8F6] hover:scale-[1.03]">
                  AI BENCHMARKS
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
