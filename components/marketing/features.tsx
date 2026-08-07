import { Zap, Clock, ShieldCheck, Trophy, Globe } from "lucide-react"

const FEATURES = [
  {
    icon: Zap,
    title: "Live Markets",
    description: "Trade events as they happen with instant execution and non-stop market action.",
    accent: "#00D8F6",
  },
  {
    icon: Clock,
    title: "Real-Time Odds",
    description: "Watch probabilities update instantly driven by real-time crowd liquidity.",
    accent: "#44D2FF",
  },
  {
    icon: ShieldCheck,
    title: "Fast Settlement",
    description: "Markets resolve automatically via verifiable smart contract resolution.",
    accent: "#F2C44F",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description: "Compete with top traders worldwide for weekly prize pools and bragging rights.",
    accent: "#E14FE1",
  },
  {
    icon: Globe,
    title: "Global Events",
    description: "Predict outcomes across politics, crypto, sports, tech, and financial news.",
    accent: "#00D8F6",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <span className="font-display text-[#00D8F6] mb-3 inline-block rounded-full bg-[#00333E]/80 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase">
            PLATFORM FEATURES
          </span>
          <h2 className="text-gray-1 font-display mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Everything you need to trade smarter
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border border-gray-8 bg-gray-10/70 p-6 transition-all duration-300 hover:border-gray-6 hover:bg-gray-9/80 hover:shadow-xl"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border bg-gray-11 transition-transform group-hover:scale-110"
                  style={{ borderColor: `${feature.accent}44`, color: feature.accent }}
                >
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-gray-1 font-display text-xl font-extrabold uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-4 mt-2 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
