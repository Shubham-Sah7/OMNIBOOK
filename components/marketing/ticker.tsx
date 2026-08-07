"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"

const TICKER_ITEMS = [
  { pair: "BTC / USD 60s", price: "$64,528.80", probability: "62% YES", time: "44s" },
  { pair: "US FED RATE CUT", price: "5.25%", probability: "82% YES", time: "12h" },
  { pair: "ETH / USD 60s", price: "$3,482.10", probability: "48% YES", time: "22s" },
  { pair: "SOLANA > $150B", price: "$142.50", probability: "54% YES", time: "3d" },
  { pair: "US ELECTION 2026", price: "DEM 51%", probability: "REP 49%", time: "45d" },
  { pair: "GPT-5 RELEASE", price: "88% YES", probability: "HIGH ODDS", time: "8d" },
]

export function MarketTicker() {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06] bg-[#07080a] py-2.5 font-mono text-xs select-none">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-8 whitespace-nowrap"
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={`${item.pair}-${idx}`} className="flex items-center gap-3">
            <span className="font-semibold text-white">{item.pair}</span>
            <span className="text-gray-3">{item.price}</span>
            <span className="font-semibold text-white">{item.probability}</span>
            <span className="flex items-center gap-1 text-[11px] text-gray-4">
              <Clock className="h-3 w-3" />
              {item.time}
            </span>
            <span className="text-gray-6">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
