"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Category = {
  name: string
  description: string
  prob: string
  accent: string
  gradient: string
}

const CATEGORIES: Category[] = [
  {
    name: "Politics",
    description: "Predict elections, policy decisions, and international diplomacy.",
    prob: "54% YES",
    accent: "#00D8F6",
    gradient: "from-cyan-950/80 via-slate-900 to-gray-950",
  },
  {
    name: "Crypto",
    description: "Bitcoin, Ethereum, Solana, and market capitalization trends.",
    prob: "78% YES",
    accent: "#F5BC22",
    gradient: "from-amber-950/80 via-slate-900 to-gray-950",
  },
  {
    name: "Sports",
    description: "Major tournaments, championship finals, and live match outcomes.",
    prob: "62% YES",
    accent: "#44D2FF",
    gradient: "from-sky-950/80 via-slate-900 to-gray-950",
  },
  {
    name: "Economy",
    description: "Inflation rates, central bank interest cuts, and GDP figures.",
    prob: "85% YES",
    accent: "#A8EAFF",
    gradient: "from-cyan-950/80 via-slate-900 to-gray-950",
  },
  {
    name: "Entertainment",
    description: "Box office records, major award shows, TV, and pop culture.",
    prob: "41% YES",
    accent: "#E14FE1",
    gradient: "from-pink-950/80 via-slate-900 to-gray-950",
  },
  {
    name: "Technology",
    description: "AI model launches, space missions, and big tech announcements.",
    prob: "91% YES",
    accent: "#00D8F6",
    gradient: "from-emerald-950/80 via-slate-900 to-gray-950",
  },
]

export function Competitions() {
  return (
    <section id="markets" className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 md:mb-14">
          <span className="font-display text-[#00D8F6] mb-3 inline-block rounded-full bg-[#00333E]/80 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase">
            EXPLORE MARKETS
          </span>
          <h2 className="text-gray-1 font-display max-w-3xl text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            One platform. Endless predictions.
          </h2>
          <p className="text-gray-4 mt-3 max-w-xl text-base leading-relaxed">
            Browse active prediction markets across crypto, global politics, sports, tech, and financial news.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              href="#markets"
              className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-xl border bg-gradient-to-br ${cat.gradient} p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              style={{ borderColor: `${cat.accent}33` }}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-xs font-bold text-gray-3">
                  <span className="h-2 w-2 rounded-full bg-[#00D8F6] animate-pulse" />
                  🟢 LIVE CATEGORY
                </span>
                <span
                  className="rounded-full px-2.5 py-1 font-mono text-xs font-bold"
                  style={{ backgroundColor: `${cat.accent}20`, color: cat.accent }}
                >
                  {cat.prob}
                </span>
              </div>

              <div>
                <h3
                  className="font-display mb-2 text-2xl font-extrabold uppercase tracking-wide transition-colors group-hover:translate-x-1"
                  style={{ color: cat.accent }}
                >
                  {cat.name}
                </h3>
                <p className="text-gray-3 text-xs leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-3 transition-colors group-hover:text-white">
                  Trade {cat.name} <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
