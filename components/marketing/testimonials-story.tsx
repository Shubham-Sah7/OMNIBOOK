import Image from "next/image"
import { Quote, Users } from "lucide-react"

const TESTIMONIALS = [
  {
    quote: "Omnibook has completely redefined how I follow global macro news and crypto trends. The 60-second BTC rounds give me an immediate way to test market sentiment, while the longer-term election and rate markets let me hedge real-world portfolio risks with instant liquidity.",
    author: "Alex Carter",
    role: "Full-Time Crypto Trader",
    market: "BTC & Macro Markets",
    avatar: "/avatars/alex_carter.png",
  },
  {
    quote: "As someone who analyzes political probability models, Omnibook's live odds reflect crowd intelligence far faster than traditional news networks. The user experience is clean, dark mode is polished, and payouts settle automatically the moment outcomes are confirmed.",
    author: "Sarah Wilson",
    role: "Quantitative Analyst",
    market: "Politics & Economics",
    avatar: "/avatars/sarah_wilson.png",
  },
  {
    quote: "The combination of low 1¢ entry costs and fast 60-second round cadences makes Omnibook extremely engaging. It's the cleanest, most transparent prediction market platform I've used.",
    author: "Daniel Brooks",
    role: "Event Strategist",
    market: "Tech & Sports Markets",
    avatar: "/avatars/daniel_brooks.png",
  },
]

export function TestimonialsStory() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <div className="linear-badge mb-3 flex items-center justify-center gap-1.5 mx-auto w-max">
            <Users className="h-3.5 w-3.5 stroke-[1.75] text-[#00D8F6]" />
            COMMUNITY
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Trusted by prediction traders
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="group relative flex flex-col justify-between rounded-xl border border-black/[0.08] dark:border-white/[0.06] bg-white dark:bg-[#111111] p-7 shadow-sm dark:shadow-none transition-all duration-200 hover:border-black/[0.16] dark:hover:border-white/[0.14]"
            >
              <div>
                <Quote className="mb-4 h-6 w-6 stroke-[1.5] text-[#00D8F6] opacity-80" />
                <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-3">
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
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{t.author}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-gray-4">{t.role}</p>
                  <span className="font-mono text-[9px] font-semibold text-slate-500 dark:text-gray-4 uppercase">
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
