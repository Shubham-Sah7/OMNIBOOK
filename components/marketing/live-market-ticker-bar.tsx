"use client"

import { motion } from "framer-motion"
import { TrendingUp, ArrowUpRight, Flame } from "lucide-react"

const TICKER_ITEMS = [
  { symbol: "BTC 60s", price: "$64,596.90", change: "+3.2%", probability: "62% YES", isHot: true },
  { symbol: "ETH 60s", price: "$3,482.10", change: "+5.8%", probability: "74% YES", isHot: false },
  { symbol: "SOL 60s", price: "$148.50", change: "+12.4%", probability: "54% YES", isHot: true },
  { symbol: "FED RATE CUT", price: "Q4 2026", change: "+0.8%", probability: "82% YES", isHot: false },
  { symbol: "PRESIDENTIAL ELECTION", price: "2026", change: "+1.5%", probability: "51% YES", isHot: true },
  { symbol: "GPT-5 LAUNCH", price: "Q3 2026", change: "+8.4%", probability: "88% YES", isHot: true },
]

export function LiveMarketTickerBar() {
  return (
    <div className="relative w-full overflow-hidden border-y border-black/[0.08] dark:border-white/[0.08] bg-slate-900/[0.03] dark:bg-white/[0.02] py-2.5 backdrop-blur-md select-none">
      <div className="flex w-max animate-marquee gap-8">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2.5 font-mono text-xs">
            {item.isHot && <Flame className="h-3.5 w-3.5 text-amber-500 animate-pulse" />}
            <span className="font-bold text-slate-900 dark:text-white uppercase">{item.symbol}</span>
            <span className="text-slate-500 dark:text-gray-4">{item.price}</span>
            <span className="flex items-center text-emerald-500 font-semibold">
              <ArrowUpRight className="h-3 w-3 stroke-[2]" />
              {item.change}
            </span>
            <span className="rounded bg-[#00D8F6]/15 px-2 py-0.5 font-bold text-[#00D8F6] text-[10px]">
              {item.probability}
            </span>
            <span className="ml-4 h-3 w-[1px] bg-black/10 dark:bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  )
}
