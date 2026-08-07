"use client"

import { useState } from "react"
import { ArrowUpRight, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedSection } from "./animated-section"

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
          <div className="linear-badge mb-3">
            LIVE ORDER BOOK
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Trending Markets
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-base leading-relaxed text-gray-3">
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
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                selectedCat === cat
                  ? "border border-white/20 bg-white/10 text-white shadow-sm"
                  : "border border-transparent bg-white/[0.03] text-gray-4 hover:border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Minimal Table */}
        <AnimatedSection delay={0.2} className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs text-gray-3">
              <thead className="border-b border-white/[0.06] bg-[#0c0c0c] uppercase text-gray-4">
                <tr>
                  <th className="px-6 py-3.5 font-semibold">MARKET</th>
                  <th className="px-6 py-3.5 font-semibold">CATEGORY</th>
                  <th className="px-6 py-3.5 font-semibold">STATUS</th>
                  <th className="px-6 py-3.5 font-semibold text-right">PROBABILITY</th>
                  <th className="px-6 py-3.5 font-semibold text-right">TIME REMAINING</th>
                  <th className="px-6 py-3.5 font-semibold text-center">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                <AnimatePresence mode="wait">
                  {filtered.map((item, i) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-3.5 font-medium text-white">
                        {item.name}
                      </td>
                      <td className="px-6 py-3.5 text-gray-4">
                        <span className="rounded bg-white/[0.04] px-2 py-0.5 text-[11px] text-gray-3">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-3.5">
                        {item.status === "Live" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00D8F6]" />
                            Live
                          </span>
                        ) : (
                          <span className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-gray-4">
                            Coming Soon
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-right font-bold text-white">
                        {item.probability}
                      </td>
                      <td className="px-6 py-3.5 text-right text-gray-4">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-4" />
                          {item.timeRemaining}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded bg-[#00D8F6] px-3 py-1 font-mono text-[11px] font-bold uppercase text-[#001D26] transition-all hover:bg-[#00c4e0]"
                        >
                          Trade <ArrowUpRight className="h-3 w-3" />
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
