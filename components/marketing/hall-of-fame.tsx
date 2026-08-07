import { Quote, Trophy } from "lucide-react"

const TESTIMONIALS = [
  {
    quote: "The live markets make every trade exciting. Watching probabilities change in real time completely changes how I think about events.",
    author: "Alex Carter",
    role: "Crypto & Macro Trader",
    winRate: "78% Win Rate",
  },
  {
    quote: "Simple to use but incredibly engaging. Every minute there's a new opportunity to trade.",
    author: "Sarah Wilson",
    role: "Event Strategist",
    winRate: "82% Win Rate",
  },
  {
    quote: "The interface is clean, the markets are transparent, and settlements are incredibly fast.",
    author: "Daniel Brooks",
    role: "Prediction Analyst",
    winRate: "75% Win Rate",
  },
]

const TOP_TRADERS = [
  { rank: "#1", name: "SatoshiPredictor", profit: "+$42,850", badge: "GOLD CHAMPION" },
  { rank: "#2", name: "AlphaNostradamus", profit: "+$31,400", badge: "SILVER TRADER" },
  { rank: "#3", name: "OracleNode99", profit: "+$24,900", badge: "BRONZE TRADER" },
]

export function HallOfFame() {
  return (
    <section id="leaderboard" className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 md:mb-14">
          <span className="font-display text-amber-400 mb-3 inline-block rounded-full bg-amber-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase">
            COMMUNITY & LEADERBOARD
          </span>
          <h2 className="text-gray-1 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted by prediction traders
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="group relative flex flex-col justify-between rounded-xl border border-gray-8 bg-gray-10/80 p-6 transition-all duration-300 hover:border-[#00D8F6]/50 hover:bg-gray-9/90"
            >
              <div>
                <Quote className="mb-3 h-6 w-6 text-[#00D8F6] opacity-70" />
                <p className="text-gray-2 text-sm italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-gray-9 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-gray-1 text-base font-extrabold">{t.author}</h4>
                  <p className="text-gray-4 text-xs">{t.role}</p>
                </div>
                <span className="rounded bg-[#00D8F6]/10 px-2 py-0.5 font-mono text-[10px] font-bold text-[#00D8F6]">
                  {t.winRate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Top Traders Leaderboard Banner */}
        <div className="rounded-xl border border-amber-400/30 bg-[#12110d] p-6 shadow-xl md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-amber-400" />
              <h3 className="font-display text-lg font-extrabold uppercase text-white md:text-xl">
                Top Traders This Week
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-amber-400 uppercase">
              UPDATED LIVE
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {TOP_TRADERS.map((trader) => (
              <div
                key={trader.rank}
                className="flex items-center justify-between rounded-lg border border-amber-400/20 bg-black/40 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-black text-amber-400">{trader.rank}</span>
                  <div>
                    <p className="font-display text-sm font-bold text-white">{trader.name}</p>
                    <p className="text-[10px] font-semibold text-gray-4">{trader.badge}</p>
                  </div>
                </div>
                <span className="font-mono text-sm font-extrabold text-[#00D8F6]">
                  {trader.profit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
