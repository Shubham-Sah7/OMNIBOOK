"use client"

import { useState, useEffect } from "react"
import { Globe, Target, BadgeCheck, Search, Timer, CheckCircle, ArrowRight, Coins, Wallet, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection, MaskTextReveal } from "./animated-section"
import { BentoCard } from "./bento-spotlight"

export function HowItWorks() {
  const [activeStake, setActiveStake] = useState("$10")
  const [countdown, setCountdown] = useState(44)
  const [balance, setBalance] = useState(1250)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 60))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="mb-12 text-center md:mb-16">
          <div className="linear-badge mb-3 flex items-center justify-center gap-1.5 mx-auto w-max">
            <Target className="h-3.5 w-3.5 stroke-[1.75] text-[#00D8F6]" />
            HOW IT WORKS
          </div>
          <div className="mx-auto max-w-3xl">
            <MaskTextReveal
              text="Three steps. One prediction."
              className="justify-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
            />
          </div>
          <p className="mt-3.5 mx-auto max-w-xl text-base leading-relaxed text-slate-600 dark:text-gray-3">
            An interactive product walkthrough of trading, locking in odds, and instant settlement.
          </p>
        </AnimatedSection>

        {/* 3 Visual Product Story Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Card 1: Choose a Market */}
          <AnimatedSection delay={0.1}>
            <BentoCard className="flex flex-col justify-between h-full p-6 text-left">
              {/* Visual Mockup Top (65% Height) */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-50 dark:bg-[#07080c] p-4 flex flex-col justify-between">
                {/* Search Bar & Chips */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#111116] px-3 py-1.5 text-xs text-slate-500 dark:text-gray-4 font-mono">
                    <Search className="h-3.5 w-3.5 stroke-[1.75] text-[#00D8F6]" />
                    <span>Search 1,500+ markets...</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[10px]">
                    <span className="rounded-full bg-[#00D8F6]/10 px-2 py-0.5 font-bold text-[#00D8F6]">Crypto 60s</span>
                    <span className="rounded-full bg-slate-200 dark:bg-white/[0.04] px-2 py-0.5 text-slate-600 dark:text-gray-4">Politics</span>
                    <span className="rounded-full bg-slate-200 dark:bg-white/[0.04] px-2 py-0.5 text-slate-600 dark:text-gray-4">AI</span>
                  </div>
                </div>

                {/* Animated Market Selection Card */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-xl border border-[#00D8F6]/40 bg-white dark:bg-[#0f1016] p-3.5 shadow-lg"
                >
                  <div className="flex items-center justify-between font-mono text-[11px] mb-1.5">
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Coins className="h-3.5 w-3.5 text-[#00D8F6]" /> BTC Up/Down 60s
                    </span>
                    <span className="flex items-center gap-1 text-emerald-500 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" /> LIVE
                    </span>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-[#00D8F6] font-bold">YES 62%</span>
                    <span className="text-[#E15252] font-bold">NO 38%</span>
                  </div>
                </motion.div>
              </div>

              {/* Text Bottom (35% Height) */}
              <div>
                <span className="font-mono text-xs font-bold text-[#00D8F6] uppercase">01. MARKET SELECTION</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mt-1 mb-2">Choose a Market</h3>
                <p className="text-xs text-slate-500 dark:text-gray-4 leading-relaxed">
                  Browse live prediction markets spanning cryptocurrency 60-second rounds, interest rates, sports, and AI benchmarks.
                </p>
              </div>
            </BentoCard>
          </AnimatedSection>

          {/* Card 2: Place Your Prediction */}
          <AnimatedSection delay={0.2}>
            <BentoCard className="flex flex-col justify-between h-full p-6 text-left">
              {/* Visual Mockup Top (65% Height) */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-50 dark:bg-[#07080c] p-4 flex flex-col justify-between">
                {/* Mini Graph + Timer Header */}
                <div className="flex items-center justify-between font-mono text-xs mb-1">
                  <span className="text-slate-500 dark:text-gray-4">BTC/USD: <strong className="text-slate-900 dark:text-white">$64,596</strong></span>
                  <span className="flex items-center gap-1 text-[#00D8F6] font-bold">
                    <Timer className="h-3.5 w-3.5 stroke-[1.75]" /> {countdown}s
                  </span>
                </div>

                {/* Stake Buttons */}
                <div className="grid grid-cols-4 gap-1.5 font-mono text-[10px] my-1">
                  {["$1", "$5", "$10", "$25"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setActiveStake(s)}
                      className={`rounded-lg py-1 font-bold text-center transition-all ${
                        activeStake === s
                          ? "bg-[#00D8F6] text-[#001D26]"
                          : "bg-slate-200 dark:bg-white/[0.04] text-slate-600 dark:text-gray-4"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* YES / NO Action Buttons with Simulated Cursor Click */}
                <div className="relative grid grid-cols-2 gap-2 font-mono text-xs">
                  <div className="rounded-xl border border-emerald-500/50 bg-emerald-500/10 p-2.5 text-center font-bold text-emerald-500">
                    YES 62%
                  </div>
                  <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-2.5 text-center font-bold text-rose-500 opacity-60">
                    NO 38%
                  </div>

                  {/* Simulated Cursor Click Ring */}
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.9, 0.3, 0.9] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-6 top-3 h-5 w-5 rounded-full border-2 border-[#00D8F6]"
                  />
                </div>
              </div>

              {/* Text Bottom (35% Height) */}
              <div>
                <span className="font-mono text-xs font-bold text-[#00D8F6] uppercase">02. POSITION EXECUTION</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mt-1 mb-2">Place Your Prediction</h3>
                <p className="text-xs text-slate-500 dark:text-gray-4 leading-relaxed">
                  Select YES or NO, lock in your position stake before the 60-second countdown ends, and track live order book depth.
                </p>
              </div>
            </BentoCard>
          </AnimatedSection>

          {/* Card 3: Watch It Resolve & Collect Payouts */}
          <AnimatedSection delay={0.3}>
            <BentoCard className="flex flex-col justify-between h-full p-6 text-left">
              {/* Visual Mockup Top (65% Height) */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-50 dark:bg-[#07080c] p-4 flex flex-col justify-between">
                {/* Resolved Status Header */}
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="flex items-center gap-1 text-emerald-500 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full">
                    <CheckCircle className="h-3.5 w-3.5" /> MARKET RESOLVED
                  </span>
                  <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse" />
                </div>

                {/* Winning Position Payout Card */}
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3.5 font-mono text-center space-y-1">
                  <span className="block text-[10px] text-slate-500 dark:text-gray-4 uppercase">WINNING OUTCOME DISBURSED</span>
                  <span className="block font-bold text-lg text-emerald-500">+$210.00 PAYOUT</span>
                </div>

                {/* Wallet Balance Animated Upgrade */}
                <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#111116] p-3 flex items-center justify-between font-mono text-xs">
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-gray-4">
                    <Wallet className="h-4 w-4 text-[#00D8F6]" /> Balance:
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">$1,250.00</span>
                </div>
              </div>

              {/* Text Bottom (35% Height) */}
              <div>
                <span className="font-mono text-xs font-bold text-emerald-500 uppercase">03. INSTANT SETTLEMENT</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mt-1 mb-2">Watch It Resolve</h3>
                <p className="text-xs text-slate-500 dark:text-gray-4 leading-relaxed">
                  Decentralized multi-sig oracles verify outcomes sub-seconds after round expiry, depositing payouts directly to your wallet.
                </p>
              </div>
            </BentoCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
