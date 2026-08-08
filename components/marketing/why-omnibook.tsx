"use client"

import { Activity, ShieldCheck, BadgeCheck, Coins, Trophy, Timer } from "lucide-react"
import { AnimatedSection, MaskTextReveal } from "./animated-section"
import { BentoCard } from "./bento-spotlight"

const CARDS = [
  { icon: Activity, title: "Real-Time Pricing", desc: "Order book updates probabilities dynamically with every trade executed." },
  { icon: ShieldCheck, title: "Transparent Markets", desc: "Open liquidity pools and verifiable smart contract resolution." },
  { icon: BadgeCheck, title: "Instant Settlement", desc: "Winnings credit to your account balance the exact second the round finishes." },
  { icon: Coins, title: "Low Entry Cost", desc: "Predict on global events starting at just 1¢ per contract share." },
  { icon: Trophy, title: "Leaderboards", desc: "Climb the weekly rankings and compete for extra trainer prizes." },
  { icon: Timer, title: "24/7 Trading", desc: "Continuous 60-second and multi-day prediction markets running 365 days a year." },
]

export function WhyOmnibook() {
  return (
    <section id="why-omnibook" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedSection className="mb-8 text-center md:mb-10">
          <div className="linear-badge mb-3">
            WHY OMNIBOOK
          </div>
          <div className="mx-auto max-w-3xl">
            <MaskTextReveal
              text="Why traders choose Omnibook"
              className="justify-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((item, idx) => {
            const IconComp = item.icon
            return (
              <AnimatedSection key={item.title} delay={idx * 0.08}>
                <BentoCard className="flex flex-col justify-between p-6 text-left">
                  <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-[#00D8F6]/10 text-[#00D8F6] shadow-sm">
                      <IconComp className="h-5 w-5 stroke-[1.75]" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-gray-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 font-mono text-[10px] font-medium text-slate-500 dark:text-gray-4">
                    ✓ VERIFIED FEATURE
                  </div>
                </BentoCard>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
