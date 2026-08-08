"use client"

import { useState } from "react"
import { Activity, Clock, ShieldCheck, Globe, Check, Zap, Cpu, Database } from "lucide-react"
import { motion } from "framer-motion"
import { BentoCard } from "./bento-spotlight"
import { AnimatedSection, MaskTextReveal } from "./animated-section"

export function BuiltForMarkets() {
  const [sliderVal, setSliderVal] = useState(62)

  const yesReturn = ((100 / (sliderVal / 100) - 1) * 100).toFixed(0)
  const noReturn = ((100 / ((100 - sliderVal) / 100) - 1) * 100).toFixed(0)

  return (
    <section id="features" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedSection className="mb-10 text-center md:mb-12">
          <div className="linear-badge mb-3">
            PLATFORM ARCHITECTURE
          </div>
          <div className="mx-auto max-w-3xl">
            <MaskTextReveal
              text="Built for prediction markets"
              className="justify-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
            />
          </div>
          <p className="mt-3 mx-auto max-w-xl text-base leading-relaxed text-slate-600 dark:text-gray-3">
            Experience instant round execution, transparent liquidity, and automated payouts designed for real-time market trading.
          </p>
        </AnimatedSection>

        {/* Asymmetric Bento Grid Architecture */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Main Hero Bento Tile: Interactive Order Book & Live Probability Matcher */}
          <div className="md:col-span-8">
            <BentoCard className="flex flex-col justify-between p-7 text-left md:p-8">
              <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-[#00D8F6]/10 text-[#00D8F6] shadow-sm">
                      <Activity className="h-5 w-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Live Order Book Depth</h3>
                      <p className="text-xs text-slate-500 dark:text-gray-4">Continuous matching engine with real-time probability curves</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <Check className="h-3.5 w-3.5" /> MATCHING ENGINE ACTIVE
                  </span>
                </div>

                {/* Interactive Probability Depth Slider & Live Order Book Box */}
                <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-50 dark:bg-[#07080c] p-5 shadow-inner">
                  <div className="mb-3 flex flex-wrap items-baseline justify-between font-mono text-xs gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white">YES PROBABILITY:</span>
                      <span className="rounded bg-[#00D8F6]/20 px-2 py-0.5 font-bold text-[#00D8F6]">{sliderVal}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white">NO PROBABILITY:</span>
                      <span className="rounded bg-[#E15252]/20 px-2 py-0.5 font-bold text-[#E15252]">{100 - sliderVal}%</span>
                    </div>
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

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs pt-1">
                    <div className="flex items-center justify-between rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111116] px-3.5 py-2">
                      <span className="text-slate-500 dark:text-gray-4">ESTIMATED YES RETURN:</span>
                      <span className="font-bold text-[#00D8F6]">+{yesReturn}%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-[#111116] px-3.5 py-2">
                      <span className="text-slate-500 dark:text-gray-4">ESTIMATED NO RETURN:</span>
                      <span className="font-bold text-[#E15252]">+{noReturn}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Sub-Second Settlement Tile */}
          <div className="md:col-span-4">
            <BentoCard className="flex flex-col justify-between p-7 text-left md:p-8">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-[#00D8F6]/10 text-[#00D8F6] shadow-sm">
                  <Clock className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sub-Second Settlement</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-gray-4">
                  Automated smart contracts disburse winnings straight to user balances within milliseconds of oracle outcome verification.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-50 dark:bg-[#07080c] px-4 py-3 font-mono text-xs">
                <span className="flex items-center gap-2 text-slate-500 dark:text-gray-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  AVERAGE LATENCY
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-base">42ms</span>
              </div>
            </BentoCard>
          </div>

          {/* Multi-Source Oracle Resolution Tile */}
          <div className="md:col-span-5">
            <BentoCard className="flex flex-col justify-between p-7 text-left md:p-8">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-[#00D8F6]/10 text-[#00D8F6] shadow-sm">
                  <ShieldCheck className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Transparent Oracle Resolution</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-gray-4">
                  Multi-feed data resolution cross-checks global APIs, financial benchmarks, and official sources with zero human intervention.
                </p>
              </div>

              {/* 3-Node Consensus Visual Chain */}
              <div className="mt-6 space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-slate-50 dark:bg-[#07080c] px-3 py-2 text-slate-700 dark:text-gray-3">
                  <span className="flex items-center gap-2">
                    <Database className="h-3.5 w-3.5 text-slate-500 dark:text-gray-4" />
                    Global API Feeds
                  </span>
                  <span className="font-bold text-emerald-500">SYNCED</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-slate-50 dark:bg-[#07080c] px-3 py-2 text-slate-700 dark:text-gray-3">
                  <span className="flex items-center gap-2">
                    <Cpu className="h-3.5 w-3.5 text-slate-500 dark:text-gray-4" />
                    Multi-Sig Consensus
                  </span>
                  <span className="font-bold text-emerald-500">VERIFIED</span>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Global Prediction Index Tile */}
          <div className="md:col-span-7">
            <BentoCard className="flex flex-col justify-between p-7 text-left md:p-8">
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-[#00D8F6]/10 text-[#00D8F6] shadow-sm">
                  <Globe className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Global Event Index</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-gray-4">
                  Trade outcomes spanning crypto asset prices, federal interest rates, global political elections, AI technological breakthroughs, and championship sports.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5 font-mono text-xs">
                <span className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-3.5 py-1.5 font-semibold text-slate-900 dark:text-white transition-colors hover:border-[#00D8F6]">
                  CRYPTO 60s
                </span>
                <span className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-3.5 py-1.5 font-semibold text-slate-900 dark:text-white transition-colors hover:border-[#00D8F6]">
                  MACROECONOMICS
                </span>
                <span className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-3.5 py-1.5 font-semibold text-slate-900 dark:text-white transition-colors hover:border-[#00D8F6]">
                  POLITICAL ELECTIONS
                </span>
                <span className="rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.04] px-3.5 py-1.5 font-semibold text-slate-900 dark:text-white transition-colors hover:border-[#00D8F6]">
                  AI BENCHMARKS
                </span>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  )
}
