"use client"

export function TopBanner() {
  return (
    <div className="relative z-50 border-b border-white/[0.08] bg-[#0c0c0c] py-2 text-xs select-none">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 text-center text-[12px] font-medium text-gray-3">
        <span className="linear-badge py-0.5 text-[10px] font-semibold text-white">
          SEASON 1
        </span>
        <span>Trainer • $100 sign up & $100 daily trading allocation</span>
      </div>
    </div>
  )
}
