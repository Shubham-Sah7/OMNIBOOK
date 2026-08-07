export function MarketIllustration() {
  return (
    <div className="pointer-events-none relative mx-auto aspect-[21/9] w-full max-w-5xl select-none">
      <svg viewBox="0 0 900 420" fill="none" className="h-full w-full overflow-visible" aria-hidden="true">
        <defs>
          <radialGradient id="market-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#00D8F6" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#FF4D4D" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0F0F0F" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="buy-depth" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D8F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D8F6" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="sell-depth" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF4D4D" stopOpacity="0.0" />
          </linearGradient>

          <linearGradient id="fade-bottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F0F0F" stopOpacity="0" />
            <stop offset="100%" stopColor="#0F0F0F" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Ambient Center Glow */}
        <ellipse cx="450" cy="210" rx="420" ry="190" fill="url(#market-glow)" />

        {/* Order Book Grid Horizontal Guidelines */}
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1="80"
            y1={60 + i * 50}
            x2="820"
            y2={60 + i * 50}
            stroke="#262626"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Cyan Buy Order Depth Curve */}
        <path
          d="M 80 310 L 180 300 L 260 280 L 340 240 L 410 180 L 440 140 L 440 340 L 80 340 Z"
          fill="url(#buy-depth)"
          stroke="#00D8F6"
          strokeWidth="2"
        />

        {/* Red Sell Order Depth Curve */}
        <path
          d="M 460 140 L 490 180 L 560 240 L 640 280 L 720 300 L 820 310 L 820 340 L 460 340 Z"
          fill="url(#sell-depth)"
          stroke="#FF4D4D"
          strokeWidth="2"
        />

        {/* Live Mid-Price Candle / Probability Node */}
        <line x1="450" y1="60" x2="450" y2="340" stroke="#00D8F6" strokeWidth="1.5" strokeDasharray="3 3" />

        <circle cx="450" cy="140" r="8" fill="#00D8F6" className="animate-ping" opacity="0.6" />
        <circle cx="450" cy="140" r="5" fill="#00D8F6" />

        {/* Floating Live Odds Badges */}
        <g transform="translate(400, 70)">
          <rect x="-40" y="-14" width="80" height="28" rx="6" fill="#00333E" stroke="#00D8F6" strokeWidth="1.2" />
          <text x="0" y="4" textAnchor="middle" fill="#00D8F6" fontSize="12" fontWeight="bold" fontFamily="monospace">
            74.5% YES
          </text>
        </g>

        {/* Dynamic Glitch Ticks */}
        <g className="animate-glitch-cyan">
          <rect x="120" y="110" width="160" height="3" fill="#00D8F6" opacity="0.9" />
          <rect x="520" y="270" width="220" height="3" fill="#00D8F6" opacity="0.8" />
        </g>

        <g className="animate-glitch-magenta">
          <rect x="620" y="90" width="180" height="3" fill="#FF4D4D" opacity="0.9" />
          <rect x="240" y="250" width="120" height="3" fill="#FF4D4D" opacity="0.75" />
        </g>

        {/* Bottom Fade Gradient */}
        <rect x="0" y="250" width="900" height="170" fill="url(#fade-bottom)" />
      </svg>
    </div>
  )
}
