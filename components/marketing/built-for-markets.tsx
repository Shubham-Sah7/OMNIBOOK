"use client"

import { useState } from "react"
import { Activity, Clock, ShieldCheck, Globe, Check } from "lucide-react"
import { BentoCard } from "./bento-spotlight"
import { AnimatedSection } from "./animated-section"

export function BuiltForMarkets() {
  const [sliderVal, setSliderVal] = useState(62)

  return (
    <section id="features" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedSection className="mb-10 text-center md:mb-12">
          <div className="linear-badge mb-3">
            PLATFORM ARCHITECTURE
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Built for prediction markets
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-base leading-relaxed text-slate-600 dark:text-gray-3">
            Experience instant round execution, transparent liquidity, and automated payouts designed for real-time market trading.
          </p>
        </AnimatedSection>

        {/* Asymmetric Bento Grid Architecture */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Main Hero Bento Tile: Interactive Order Book & Live Probability Matcher */}
          <div className="md:col-span-8">
            <BentoCard className="p-8 text-left">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-[#0c0c0c] text-slate-900 dark:text-white">
                    <Activity className="h-5 w-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Live Order Book Depth</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-4">Continuous matching engine with real-time probability curves</p>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <Check className="inline mr-1 h-3 w-3" /> MATCHING ENGINE ACTIVE
                </span>
              </div>

              {/* Interactive Probability Depth Slider */}
              <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-slate-50 dark:bg-[#07080a] p-5">
                <div className="mb-3 flex justify-between font-mono text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">YES PROBABILITY: {sliderVal}%</span>
                  <span className="font-bold text-[#E15252]">NO PROBABILITY: {100 - sliderVal}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  aria-label="Interactive probability ratio slider"
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 dark:bg-[#1c1c1c] accent-[#00D8F6]"
                />
                <div className="mt-3 flex justify-between font-mono text-[11px] text-slate-500 dark:text-gray-4">
                  <span>ESTIMATED YES RETURN: +{((100 / (sliderVal / 100) - 1) * 100).toFixed(0)}%</span>
                  <span>ESTIMATED NO RETURN: +{((100 / ((100 - sliderVal) / 100) - 1) * 100).toFixed(0)}%</span>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Sub-Second Settlement Tile */}
          <div className="md:col-span-4">
            <BentoCard className="flex flex-col justify-between p-8 text-left">
              <div>
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-[#0c0c0c] text-slate-900 dark:text-white">
                  <Clock className="h-5 w-5 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sub-Second Settlement</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-gray-4">
                  Automated smart contracts disburse winnings straight to user balances within milliseconds of oracle outcome verification.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-slate-50 dark:bg-[#07080a] px-3.5 py-2.5 font-mono text-xs">
                <span className="text-slate-500 dark:text-gray-4">AVERAGE LATENCY</span>
                <span className="font-bold text-slate-900 dark:text-white">42ms</span>
              </div>
            </BentoCard>
          </div>

          {/* Multi-Source Oracle Resolution Tile */}
          <div className="md:col-span-5">
            <BentoCard className="flex flex-col justify-between p-8 text-left">
              <div>
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-[#0c0c0c] text-slate-900 dark:text-white">
                  <ShieldCheck className="h-5 w-5 stroke-[1.75]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Transparent Oracle Resolution</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-gray-4">
                  Multi-feed data resolution cross-checks global APIs, financial benchmarks, and official sources with zero human intervention.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-gray-4">
                <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                VERIFIED BY MULTI-SIGNATURE CONSENSUS
              </div>
            </BentoCard>
          </div>

          {/* Global Prediction Index Tile */}
          <div className="md:col-span-7">
            <BentoCard className="p-8 text-left">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-[#0c0c0c] text-slate-900 dark:text-white">
                <Globe className="h-5 w-5 stroke-[1.75]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Global Event Index</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-gray-4">
                Trade outcomes spanning crypto asset prices, federal interest rates, global political elections, AI technological breakthroughs, and championship sports.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                <span className="rounded border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.03] px-3 py-1 font-semibold text-slate-900 dark:text-white">CRYPTO 60s</span>
                <span className="rounded border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.03] px-3 py-1 font-semibold text-slate-900 dark:text-white">MACROECONOMICS</span>
                <span className="rounded border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.03] px-3 py-1 font-semibold text-slate-900 dark:text-white">POLITICAL ELECTIONS</span>
                <span className="rounded border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.03] px-3 py-1 font-semibold text-slate-900 dark:text-white">AI BENCHMARKS</span>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  )
}
