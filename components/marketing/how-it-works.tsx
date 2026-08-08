"use client"

import { Globe, Target, BadgeCheck } from "lucide-react"
import { AnimatedSection, MaskTextReveal } from "./animated-section"
import { BentoCard } from "./bento-spotlight"

const STEPS = [
  {
    step: "01",
    icon: Globe,
    title: "Choose a Market",
    description: "Browse live prediction markets across crypto, politics, sports, and news and pick an outcome.",
    badge: "SELECT MARKET",
  },
  {
    step: "02",
    icon: Target,
    title: "Place Your Prediction",
    description: "Buy your position before the countdown ends. Dynamic odds display your prospective return.",
    badge: "PLACE ORDER",
  },
  {
    step: "03",
    icon: BadgeCheck,
    title: "Watch It Resolve",
    description: "Markets settle instantly once the outcome is confirmed, depositing funds straight to your wallet.",
    badge: "INSTANT SETTLEMENT",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedSection className="mb-8 text-center md:mb-10">
          <div className="linear-badge mb-3 flex items-center justify-center gap-1.5">
            <Target className="h-3.5 w-3.5 stroke-[1.75] text-[#00D8F6]" />
            HOW IT WORKS
          </div>
          <div className="mx-auto max-w-3xl">
            <MaskTextReveal
              text="Three steps. One prediction."
              className="justify-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((s, idx) => {
            const StepIcon = s.icon
            return (
              <AnimatedSection key={s.step} delay={idx * 0.12}>
                <BentoCard className="p-7 text-left">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-[#00D8F6]/10 text-[#00D8F6] shadow-sm">
                      <StepIcon className="h-5 w-5 stroke-[1.75]" />
                    </div>
                    <span className="rounded border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] font-medium text-slate-600 dark:text-gray-4">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-500 dark:text-gray-4">
                    {s.description}
                  </p>
                </BentoCard>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
