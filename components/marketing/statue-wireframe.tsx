export function StatueWireframe() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden select-none opacity-40">
      <svg
        viewBox="0 0 800 600"
        fill="none"
        className="h-full w-full max-w-4xl object-contain"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="statue-glow-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#25D0AB" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#E14FE1" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Center Glow */}
        <circle cx="400" cy="300" r="280" fill="url(#statue-glow-center)" />

        {/* Wireframe Grid Mesh Lines */}
        <g stroke="#3a3a3a" strokeWidth="0.8" strokeOpacity="0.6">
          {/* Vertical contour curves */}
          <path d="M400 60 C360 120 340 220 340 320 C340 420 370 500 400 540" />
          <path d="M400 60 C440 120 460 220 460 320 C460 420 430 500 400 540" />
          <path d="M400 60 C310 140 280 240 290 340 C300 440 350 500 400 540" />
          <path d="M400 60 C490 140 520 240 510 340 C500 440 450 500 400 540" />
          <path d="M400 60 C250 160 210 260 230 360 C250 460 330 520 400 540" />
          <path d="M400 60 C550 160 590 260 570 360 C550 460 470 520 400 540" />

          {/* Horizontal contour rings */}
          <ellipse cx="400" cy="120" rx="90" ry="25" />
          <ellipse cx="400" cy="180" rx="130" ry="35" />
          <ellipse cx="400" cy="250" rx="160" ry="42" />
          <ellipse cx="400" cy="320" rx="175" ry="46" />
          <ellipse cx="400" cy="400" rx="150" ry="38" />
          <ellipse cx="400" cy="470" rx="110" ry="28" />
        </g>

        {/* Prominent Classical Facial Geometry Feature Lines */}
        <path d="M400 100 L400 240 L380 270 L400 310 M400 240 L420 270 L400 310" stroke="#25D0AB" strokeWidth="1.2" strokeOpacity="0.8" />
        <ellipse cx="360" cy="210" rx="20" ry="10" stroke="#25D0AB" strokeWidth="1" strokeOpacity="0.7" />
        <ellipse cx="440" cy="210" rx="20" ry="10" stroke="#25D0AB" strokeWidth="1" strokeOpacity="0.7" />

        {/* RGB Horizontal Glitch Slice Bars */}
        <g className="animate-glitch-cyan">
          <rect x="220" y="160" width="360" height="3" fill="#25D0AB" opacity="0.85" />
          <rect x="180" y="310" width="440" height="4" fill="#25D0AB" opacity="0.75" />
          <rect x="260" y="440" width="280" height="3" fill="#25D0AB" opacity="0.6" />
        </g>

        <g className="animate-glitch-magenta">
          <rect x="250" y="220" width="300" height="3.5" fill="#E14FE1" opacity="0.8" />
          <rect x="200" y="360" width="400" height="3" fill="#E14FE1" opacity="0.7" />
          <rect x="300" y="480" width="200" height="2.5" fill="#E14FE1" opacity="0.65" />
        </g>
      </svg>
    </div>
  )
}
