"use client"

import { Target, Users, LayoutGrid, BarChart3 } from "lucide-react"
import { AnimatedCounter } from "./counter"
import { AnimatedSection } from "./animated-section"

export function Stats() {
  return (
    <section className="relative py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <AnimatedSection>
          <ul className="grid grid-cols-2 items-center gap-y-8 md:grid-cols-4 md:gap-y-0 lg:gap-x-12">
            <li className="flex flex-col items-center">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] text-slate-800 dark:text-white">
                <Target className="h-4.5 w-4.5 stroke-[1.75] text-[#00D8F6]" />
              </div>
              <span className="font-mono text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                <AnimatedCounter value={250000} suffix="+" />
              </span>
              <span className="mt-1.5 font-mono text-[11px] font-medium tracking-[0.12em] text-slate-500 dark:text-gray-4 uppercase">
                PREDICTIONS MADE
              </span>
            </li>

            <li className="flex flex-col items-center">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] text-slate-800 dark:text-white">
                <Users className="h-4.5 w-4.5 stroke-[1.75] text-[#00D8F6]" />
              </div>
              <span className="font-mono text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                <AnimatedCounter value={15000} suffix="+" />
              </span>
              <span className="mt-1.5 font-mono text-[11px] font-medium tracking-[0.12em] text-slate-500 dark:text-gray-4 uppercase">
                ACTIVE TRADERS
              </span>
            </li>

            <li className="flex flex-col items-center">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] text-slate-800 dark:text-white">
                <LayoutGrid className="h-4.5 w-4.5 stroke-[1.75] text-[#00D8F6]" />
              </div>
              <span className="font-mono text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                <AnimatedCounter value={1500} suffix="+" />
              </span>
              <span className="mt-1.5 font-mono text-[11px] font-medium tracking-[0.12em] text-slate-500 dark:text-gray-4 uppercase">
                MARKETS CREATED
              </span>
            </li>

            <li className="flex flex-col items-center">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] text-slate-800 dark:text-white">
                <BarChart3 className="h-4.5 w-4.5 stroke-[1.75] text-[#00D8F6]" />
              </div>
              <span className="font-mono text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                <AnimatedCounter value={5000000} prefix="$" suffix="+" />
              </span>
              <span className="mt-1.5 font-mono text-[11px] font-medium tracking-[0.12em] text-slate-500 dark:text-gray-4 uppercase">
                TRADING VOLUME
              </span>
            </li>
          </ul>
        </AnimatedSection>
      </div>
    </section>
  )
}
