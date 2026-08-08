"use client"

import Image from "next/image"
import { Quote, Users, Star, CheckCircle } from "lucide-react"

const TESTIMONIALS = [
  {
    quote: "Omnibook has completely redefined how I follow global macro news and crypto trends. The 60-second BTC rounds give me an immediate way to test market sentiment, while the longer-term election and rate markets let me hedge real-world portfolio risks with instant liquidity.",
    author: "Alex Carter",
    role: "Full-Time Crypto Trader",
    market: "BTC & Macro Markets",
    profit: "+$10,356.33",
    avatar: "/avatars/alex_carter.png",
  },
  {
    quote: "As someone who analyzes political probability models, Omnibook's live odds reflect crowd intelligence far faster than traditional news networks. The user experience is clean, dark mode is polished, and payouts settle automatically the moment outcomes are confirmed.",
    author: "Sarah Wilson",
    role: "Quantitative Analyst",
    market: "Politics & Economics",
    profit: "+$25,697.04",
    avatar: "/avatars/sarah_wilson.png",
  },
  {
    quote: "The combination of low 1¢ entry costs and fast 60-second round cadences makes Omnibook extremely engaging. It's the cleanest, most transparent prediction market platform I've used.",
    author: "Daniel Brooks",
    role: "Event Strategist",
    market: "Tech & Sports Markets",
    profit: "+$7,562.50",
    avatar: "/avatars/daniel_brooks.png",
  },
  {
    quote: "Sub-second settlement speed is unmatched. Funds land in my account the exact second a 60-second round resolves.",
    author: "Elena Rostova",
    role: "HFT Algorithmic Trader",
    market: "Crypto & Derivatives",
    profit: "+$18,420.00",
    avatar: "/avatars/trader_hella.png",
  },
  {
    quote: "The probability depth slider and transparent matching engine give me complete trust in pricing execution.",
    author: "Marcus Vance",
    role: "Macro Strategist",
    market: "Fed Rates & Elections",
    profit: "+$14,890.10",
    avatar: "/avatars/trader_satoshi.png",
  },
]

export function TestimonialsStory() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6 mb-8 text-center md:mb-10">
        <div className="linear-badge mb-3 flex items-center justify-center gap-1.5 mx-auto w-max">
          <Users className="h-3.5 w-3.5 stroke-[1.75] text-[#00D8F6]" />
          COMMUNITY WALL OF LOVE
        </div>
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
          Trusted by top prediction traders
        </h2>
        <p className="mt-3 mx-auto max-w-xl text-base leading-relaxed text-slate-600 dark:text-gray-3">
          See what professional quantitative analysts and prediction traders say about Omnibook.
        </p>
      </div>

      {/* Modern Left-to-Right Continuous Moving Marquee Carousel */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Left & Right Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#fbfbfd] dark:from-[#0a0a0a] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#fbfbfd] dark:from-[#0a0a0a] to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <div
              key={`${t.author}-${idx}`}
              className="group relative flex w-[350px] sm:w-[400px] shrink-0 flex-col justify-between rounded-2xl border border-black/[0.10] dark:border-white/[0.10] bg-white/90 dark:bg-[#111116]/90 p-7 shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-[#00D8F6]/40 hover:shadow-xl hover:scale-[1.02]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                    <CheckCircle className="h-3 w-3 stroke-[2]" /> {t.profit}
                  </span>
                </div>

                <Quote className="mb-3 h-5 w-5 stroke-[1.5] text-[#00D8F6] opacity-80" />
                <p className="text-xs leading-relaxed text-slate-600 dark:text-gray-3 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-black/[0.06] dark:border-white/[0.06] pt-4 flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-black/10 dark:border-white/10 bg-slate-200 dark:bg-gray-9">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">{t.author}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-gray-4">{t.role}</p>
                  <span className="font-mono text-[9px] font-semibold text-[#00D8F6] uppercase">
                    TRADES: {t.market}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
