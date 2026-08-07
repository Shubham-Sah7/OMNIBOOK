export function ArenaIllustration() {
  const rings = 10

  return (
    <div className="pointer-events-none relative mx-auto aspect-[21/9] w-full max-w-5xl select-none">
      <svg viewBox="0 0 900 420" fill="none" className="h-full w-full overflow-visible" aria-hidden="true">
        <defs>
          <radialGradient id="arena-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#25D0AB" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#25D0AB" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#25D0AB" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="pink-glitch-glow" cx="80%" cy="30%" r="40%">
            <stop offset="0%" stopColor="#E14FE1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E14FE1" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="arena-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F0F0F" stopOpacity="0" />
            <stop offset="100%" stopColor="#0F0F0F" stopOpacity="1" />
          </linearGradient>

          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glow-pink" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Glows */}
        <ellipse cx="450" cy="210" rx="420" ry="190" fill="url(#arena-glow)" />
        <ellipse cx="680" cy="140" rx="200" ry="100" fill="url(#pink-glitch-glow)" />

        {/* Concentric Stadium Rings */}
        {[...Array(rings)].map((_, i) => {
          const ry = 30 + i * 18
          const rx = 140 + i * 36
          const strokeOpacity = 0.65 - i * 0.05
          return (
            <ellipse
              key={i}
              cx="450"
              cy="210"
              rx={rx}
              ry={ry}
              stroke="#505050"
              strokeOpacity={Math.max(strokeOpacity, 0.15)}
              strokeWidth="1.2"
            />
          )
        })}

        {/* Inner Arena Stage Rim */}
        <ellipse cx="450" cy="210" rx="140" ry="30" stroke="#25D0AB" strokeOpacity="0.8" strokeWidth="1.5" />
        <ellipse cx="450" cy="210" rx="100" ry="22" stroke="#E14FE1" strokeOpacity="0.6" strokeWidth="1" />

        {/* Radial Seat Dividers */}
        {[...Array(32)].map((_, i) => {
          const angle = (i / 32) * Math.PI * 2
          const x1 = 450 + Math.cos(angle) * 140
          const y1 = 210 + Math.sin(angle) * 30
          const x2 = 450 + Math.cos(angle) * 440
          const y2 = 210 + Math.sin(angle) * 192
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#343434"
              strokeWidth="1"
              strokeOpacity="0.45"
            />
          )
        })}

        {/* Glitch Slice Lines - Cyan & Magenta */}
        <g className="animate-glitch-cyan" filter="url(#glow-cyan)">
          <rect x="120" y="110" width="180" height="3" fill="#25D0AB" opacity="0.9" />
          <rect x="150" y="122" width="90" height="2" fill="#25D0AB" opacity="0.6" />
          <rect x="520" y="270" width="220" height="3" fill="#25D0AB" opacity="0.85" />
          <rect x="180" y="290" width="140" height="2" fill="#25D0AB" opacity="0.5" />
        </g>

        <g className="animate-glitch-magenta" filter="url(#glow-pink)">
          <rect x="620" y="90" width="160" height="3" fill="#E14FE1" opacity="0.9" />
          <rect x="660" y="102" width="80" height="2.5" fill="#E14FE1" opacity="0.6" />
          <rect x="240" y="250" width="110" height="3" fill="#E14FE1" opacity="0.75" />
          <rect x="610" y="280" width="95" height="2" fill="#E14FE1" opacity="0.5" />
        </g>

        {/* White Accent Lines */}
        <rect x="220" y="150" width="60" height="2" fill="#FFFFFF" opacity="0.7" />
        <rect x="680" y="180" width="75" height="2" fill="#FFFFFF" opacity="0.7" />

        {/* Bottom Fade Overlay */}
        <rect x="0" y="250" width="900" height="170" fill="url(#arena-fade)" />

        {/* Sparkle 4-point Stars */}
        <g transform="translate(810, 45)" opacity="0.9">
          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="#25D0AB" />
        </g>
        <g transform="translate(70, 75) scale(0.7)" opacity="0.7">
          <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="#E14FE1" />
        </g>
      </svg>
    </div>
  )
}
