"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection, MaskTextReveal } from "./animated-section"
import { BentoCard } from "./bento-spotlight"

const CATEGORIES = [
  {
    title: "Politics",
    description: "Elections, legislative votes, policy decisions, and geopolitical events.",
    tag: "LIVE MARKETS",
  },
  {
    title: "Crypto",
    description: "Bitcoin 60s rounds, Solana trends, Ethereum ETF flows, and protocol milestones.",
    tag: "HIGH VOLUMES",
  },
  {
    title: "Sports",
    description: "Championship finals, international tournaments, and individual player stats.",
    tag: "LIVE MATCHES",
  },
  {
    title: "Technology",
    description: "AI model benchmark releases, space orbits, hardware, and dev tools.",
    tag: "AI & TECH",
  },
  {
    title: "Entertainment",
    description: "Box office debuts, music award shows, TV season finales, and cultural trends.",
    tag: "POP CULTURE",
  },
  {
    title: "Economy",
    description: "Federal reserve interest rates, global inflation metrics, and GDP benchmarks.",
    tag: "MACROECONOMICS",
  },
]

export function CategoriesGrid() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedSection className="mb-8 text-center md:mb-10">
          <div className="linear-badge mb-3">
            MARKET INDEX
          </div>
          <div className="mx-auto max-w-3xl">
            <MaskTextReveal
              text="Explore Every Category"
              className="justify-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, idx) => (
            <AnimatedSection key={cat.title} delay={idx * 0.08}>
              <Link href="#markets">
                <BentoCard className="group relative flex min-h-[200px] flex-col justify-between p-6 text-left">
                  <div>
                    <span className="mb-3.5 inline-block rounded border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] font-medium text-white">
                      {cat.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-gray-2">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-4">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 font-mono text-xs font-medium text-gray-4 transition-colors group-hover:text-white">
                    View {cat.title} Markets <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </BentoCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
