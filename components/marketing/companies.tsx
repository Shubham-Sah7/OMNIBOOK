const TRUST_POINTS = [
  { title: "Transparent Markets", desc: "All odds and liquidity pools are open, verifiable, and on-chain." },
  { title: "Real-time Pricing", desc: "Live order books instantly update probabilities as traders place predictions." },
  { title: "Instant Settlement", desc: "Winnings land directly into your balance the second the market closes." },
  { title: "Fair Market Resolution", desc: "Decentralized oracle resolution guarantees unbiased outcome verification." },
  { title: "Low Entry Cost", desc: "Start predicting with as little as $1 per share on any live market." },
  { title: "24/7 Availability", desc: "Markets run non-stop 365 days a year across every global time zone." },
]

export function Companies() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center md:mb-14">
          <span className="font-display text-[#00D8F6] mb-3 inline-block rounded-full bg-[#00333E]/80 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase">
            WHY OMNIBOOK
          </span>
          <h2 className="text-gray-1 font-display mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted by traders around the world
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="border-gray-8 bg-gray-10/80 hover:border-gray-6 hover:bg-gray-9/90 flex flex-col justify-between rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <h3 className="font-display text-gray-1 text-lg font-extrabold tracking-wide uppercase">
                  {point.title}
                </h3>
                <p className="text-gray-4 mt-2 text-xs leading-relaxed">
                  {point.desc}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#00D8F6]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D8F6]" />
                VERIFIED STANDARD
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
