"use client"

import { useState } from "react"
import { ArrowLeftRight, Timer, ChartCandlestick } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedSection, MaskTextReveal } from "./animated-section"

type MarketItem = {
  id: string
  name: string
  category: "Crypto" | "Politics" | "Sports" | "Economy" | "Technology" | "Entertainment"
  status: "Live" | "Coming Soon"
  probability: string
  timeRemaining: string
}

const MARKETS_DATA: MarketItem[] = [
  { id: "1", name: "BTC Up/Down 60s (Round #5,746)", category: "Crypto", status: "Live", probability: "62% YES", timeRemaining: "44s" },
  { id: "2", name: "BTC Up/Down 60s (Round #5,747)", category: "Crypto", status: "Coming Soon", probability: "—", timeRemaining: "1m 44s" },
  { id: "3", name: "US Fed Rate Cut Announced at Next Meeting?", category: "Economy", status: "Live", probability: "82% YES", timeRemaining: "12h 40m" },
  { id: "4", name: "Solana Market Cap > $150B by Q4", category: "Crypto", status: "Live", probability: "54% YES", timeRemaining: "3d 14h" },
  { id: "5", name: "US Presidential Election Winner (Party)", category: "Politics", status: "Live", probability: "51% YES", timeRemaining: "45d" },
  { id: "6", name: "OpenAI GPT-5 Official Announcement", category: "Technology", status: "Live", probability: "88% YES", timeRemaining: "8d" },
  { id: "7", name: "UEFA Champions League Winner", category: "Sports", status: "Live", probability: "34% YES", timeRemaining: "14d" },
  { id: "8", name: "Oscars Best Picture Winner Announcement", category: "Entertainment", status: "Coming Soon", probability: "—", timeRemaining: "28d" },
]

const CATEGORIES = ["All", "Crypto", "Politics", "Sports", "Economy", "Technology", "Entertainment"] as const

export function TrendingMarkets() {
  const [selectedCat, setSelectedCat] = useState<string>("All")

  const filtered = selectedCat === "All"
    ? MARKETS_DATA
    : MARKETS_DATA.filter((m) => m.category === selectedCat)

  return (
    <section id="markets" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <AnimatedSection className="mb-8 text-center md:mb-10">
          <div className="linear-badge mb-3 flex items-center justify-center gap-1.5">
            <ChartCandlestick className="h-3.5 w-3.5 stroke-[1.75] text-[#00D8F6]" />
            LIVE ORDER BOOK
          </div>
          <div className="mx-auto max-w-3xl">
            <MaskTextReveal
              text="Trending Markets"
              className="justify-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
            />
          </div>
          <p className="mt-3 mx-auto max-w-xl text-base leading-relaxed text-slate-600 dark:text-gray-3">
            Trade active live rounds or explore upcoming prediction contracts.
          </p>
        </AnimatedSection>

        {/* Category Filter Tabs */}
        <AnimatedSection delay={0.1} className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all hover:scale-[1.03] ${
                selectedCat === cat
                  ? "border border-slate-900/20 dark:border-white/20 bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white shadow-sm"
                  : "border border-transparent bg-black/[0.03] dark:bg-white/[0.03] text-slate-600 dark:text-gray-4 hover:border-black/10 dark:hover:border-white/10 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Table Container */}
        <AnimatedSection delay={0.2} className="overflow-hidden rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#111111] shadow-sm dark:shadow-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs text-slate-700 dark:text-gray-3">
              <thead className="border-b border-black/[0.06] dark:border-white/[0.06] bg-slate-50 dark:bg-[#0c0c0c] uppercase text-slate-500 dark:text-gray-4">
                <tr>
                  <th className="px-6 py-3.5 font-semibold">MARKET</th>
                  <th className="px-6 py-3.5 font-semibold">CATEGORY</th>
                  <th className="px-6 py-3.5 font-semibold">STATUS</th>
                  <th className="px-6 py-3.5 font-semibold text-right">PROBABILITY</th>
                  <th className="px-6 py-3.5 font-semibold text-right">TIME REMAINING</th>
                  <th className="px-6 py-3.5 font-semibold text-center">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.04]">
                <AnimatePresence mode="wait">
                  {filtered.map((item, i) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-3.5 font-medium text-slate-900 dark:text-white">
                        {item.name}
                      </td>
                      <td className="px-6 py-3.5 text-slate-500 dark:text-gray-4">
                        <span className="rounded bg-black/[0.04] dark:bg-white/[0.04] px-2 py-0.5 text-[11px] text-slate-700 dark:text-gray-3">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-3.5">
                        {item.status === "Live" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/10 dark:bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-900 dark:text-white">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00D8F6]" />
                            Live
                          </span>
                        ) : (
                          <span className="rounded-full bg-black/[0.04] dark:bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:text-gray-4">
                            Coming Soon
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-right font-bold text-slate-900 dark:text-white">
                        {item.probability}
                      </td>
                      <td className="px-6 py-3.5 text-right text-slate-500 dark:text-gray-4">
                        <span className="inline-flex items-center gap-1">
                          <Timer className="h-3.5 w-3.5 stroke-[1.75] text-slate-400 dark:text-gray-4" />
                          {item.timeRemaining}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded bg-[#00D8F6] px-3 py-1 font-mono text-[11px] font-bold uppercase text-[#001D26] transition-all hover:bg-[#00c4e0] hover:scale-[1.05]"
                        >
                          Trade <ArrowLeftRight className="h-3 w-3 stroke-[1.75]" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
