"use client"

import { GlitchNumber } from "./glitch-number"
import { AnimatedSection } from "./animated-section"

export function Stats() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <AnimatedSection>
          <ul className="grid grid-cols-2 items-center gap-y-10 md:grid-cols-4 md:gap-y-0 lg:gap-x-12">
            <li className="flex flex-col items-center">
              <GlitchNumber value={250000} suffix="+" />
              <span className="mt-2.5 font-mono text-[11px] font-bold tracking-[0.18em] text-slate-500 dark:text-gray-4 uppercase">
                PREDICTIONS MADE
              </span>
            </li>

            <li className="flex flex-col items-center">
              <GlitchNumber value={15000} suffix="+" />
              <span className="mt-2.5 font-mono text-[11px] font-bold tracking-[0.18em] text-slate-500 dark:text-gray-4 uppercase">
                ACTIVE TRADERS
              </span>
            </li>

            <li className="flex flex-col items-center">
              <GlitchNumber value={1500} suffix="+" />
              <span className="mt-2.5 font-mono text-[11px] font-bold tracking-[0.18em] text-slate-500 dark:text-gray-4 uppercase">
                MARKETS CREATED
              </span>
            </li>

            <li className="flex flex-col items-center">
              <GlitchNumber value={5000000} prefix="$" suffix="+" />
              <span className="mt-2.5 font-mono text-[11px] font-bold tracking-[0.18em] text-slate-500 dark:text-gray-4 uppercase">
                TRADING VOLUME
              </span>
            </li>
          </ul>
        </AnimatedSection>
      </div>
    </section>
  )
}
