"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, ShieldCheck, Zap, Trophy, TrendingUp, Check } from "lucide-react"
import { motion } from "framer-motion"
import { SaaSProductShowcase } from "./saas-product-showcase"
import { MaskTextReveal, AnimatedSection } from "./animated-section"

const STORY_CHAPTERS = [
  {
    chapter: "CHAPTER 01",
    title: "Markets move at the speed of news.",
    desc: "Every second, global events unfold across crypto, macroeconomics, elections, and technology. Omnibook turns real-time headlines into liquid, tradeable prediction contracts with 60-second round cadences.",
    tag: "LIVE EVENT ENGINE",
  },
  {
    chapter: "CHAPTER 02",
    title: "Order book depth powered by the crowd.",
    desc: "No black boxes or hidden spreads. Our continuous matching engine displays 100% visible probabilities. Place your position on YES or NO contracts with dynamic odds updating before every round closes.",
    tag: "TRANSPARENT ODDS",
  },
  {
    chapter: "CHAPTER 03",
    title: "Instant settlement within milliseconds.",
    desc: "Once an outcome is confirmed by multi-source oracle consensus, smart contracts immediately execute payouts straight into user account balances with sub-second latency.",
    tag: "AUTOMATED PAYOUTS",
  },
]

export function OptionTwoStoryline() {
  return (
    <div className="relative py-10">
      {/* Central Storyline Guide Line */}
      <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 z-0 w-px -translate-x-1/2 bg-gradient-to-b from-white/10 via-[#00D8F6]/30 to-transparent md:block hidden" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        {/* Storyline Hero Chapter */}
        <AnimatedSection className="mb-20 text-center">
          <div className="linear-badge mb-4">
            CHAPTER 01 · THE PREDICTION NARRATIVE
          </div>
          <div className="mx-auto max-w-4xl">
            <MaskTextReveal
              text="ONCE UPON A PREDICTION MARKET"
              className="font-display justify-center text-4xl font-extrabold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl"
            />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-3 md:text-lg">
            Where real-time financial events, crowd wisdom, and sub-second settlements converge into a unified prediction trading experience.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="#markets" className="btn-primary">
              Start Trading <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Laptop Dashboard Showcase */}
        <AnimatedSection className="mb-24">
          <SaaSProductShowcase />
        </AnimatedSection>

        {/* Vertical Story Flow Sections with Connecting Guides */}
        <div className="space-y-24">
          {STORY_CHAPTERS.map((item, idx) => (
            <AnimatedSection key={item.chapter} delay={0.1}>
              <div className={`flex flex-col items-center gap-10 md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Story Content Block */}
                <div className="w-full text-left md:w-1/2">
                  <span className="mb-2 inline-block font-mono text-xs font-bold text-gray-4">
                    {item.chapter}
                  </span>
                  <h3 className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-3 md:text-base">
                    {item.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs font-medium text-white">
                    <Check className="h-3.5 w-3.5 text-[#00D8F6]" />
                    {item.tag}
                  </div>
                </div>

                {/* Story Graphic Visual Card */}
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#111218] p-7 shadow-2xl backdrop-blur-xl">
                    {idx === 0 && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex justify-between rounded-lg border border-white/[0.06] bg-[#07080a] p-3">
                          <span className="text-white">BTC 60s Contract #5,746</span>
                          <span className="font-bold text-[#00D8F6]">62% YES</span>
                        </div>
                        <div className="flex justify-between rounded-lg border border-white/[0.06] bg-[#07080a] p-3">
                          <span className="text-white">US Fed Interest Rate Cut</span>
                          <span className="font-bold text-white">82% YES</span>
                        </div>
                        <div className="flex justify-between rounded-lg border border-white/[0.06] bg-[#07080a] p-3">
                          <span className="text-white">Solana Market Cap &gt; $150B</span>
                          <span className="font-bold text-white">54% YES</span>
                        </div>
                      </div>
                    )}

                    {idx === 1 && (
                      <div className="text-left font-mono text-xs">
                        <div className="mb-3 flex justify-between">
                          <span className="text-gray-4">LIVE ORDER MATCHING</span>
                          <span className="text-emerald-400">LATENCY: 42ms</span>
                        </div>
                        <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-[#1c1c1c]">
                          <div className="h-full w-[62%] bg-[#00D8F6]" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-lg border border-white/[0.08] bg-[#07080a] p-3 text-center">
                            <span className="text-gray-4">YES SHARE</span>
                            <p className="mt-1 text-lg font-bold text-white">62¢</p>
                          </div>
                          <div className="rounded-lg border border-white/[0.08] bg-[#07080a] p-3 text-center">
                            <span className="text-gray-4">NO SHARE</span>
                            <p className="mt-1 text-lg font-bold text-[#E15252]">38¢</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className="space-y-4 font-mono text-xs text-left">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-[#07080a] text-white">
                            <ShieldCheck className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-bold text-white">Multi-Oracle Consensus</span>
                            <p className="text-[11px] text-gray-4">3 of 3 signatures confirmed</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-[#07080a] text-white">
                            <Zap className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-bold text-white">Instant Balance Credit</span>
                            <p className="text-[11px] text-gray-4">Winnings disbursed in 42ms</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Story Community Leaderboard Chapter */}
        <AnimatedSection className="mt-24 text-center">
          <div className="linear-badge mb-3">
            CHAPTER 04 · COMMUNITY STANDINGS
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ranked by prediction accuracy.
          </h2>
          <p className="mt-3 mx-auto max-w-lg text-sm text-gray-3">
            Top traders competing live for weekly leaderboard glory.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { rank: "#1", name: "satoshipredictor", profit: "+$10,356.33", avatar: "/avatars/trader_satoshi.png" },
              { rank: "#2", name: "HellaAuditor", profit: "+$25,697.04", avatar: "/avatars/trader_hella.png" },
              { rank: "#3", name: "quietfade83", profit: "+$7,562.50", avatar: "/avatars/alex_carter.png" },
            ].map((u) => (
              <div key={u.rank} className="rounded-xl border border-white/[0.08] bg-[#111218] p-5 text-left font-mono">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-4">{u.rank}</span>
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10">
                    <Image src={u.avatar} alt={u.name} width={32} height={32} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{u.name}</p>
                    <p className="text-[11px] font-semibold text-white">{u.profit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Grand Final Story Conclusion CTA */}
        <AnimatedSection className="mt-24 rounded-2xl border border-white/[0.12] bg-[#0c0d12] p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to predict the next move?
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm leading-relaxed text-gray-3">
            Start trading live prediction markets across crypto, politics, and sports in seconds.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="#markets" className="btn-primary">
              Start Trading Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
