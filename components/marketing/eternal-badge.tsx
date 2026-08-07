"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Rolling 45-day window, purely cosmetic — mirrors the "Eternal" countdown pill.
function getTargetDate() {
  const target = new Date()
  target.setUTCHours(0, 0, 0, 0)
  target.setUTCDate(target.getUTCDate() + 31)
  return target
}

function formatRemaining(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now())
  const totalMinutes = Math.floor(ms / 60000)
  const days = Math.floor(totalMinutes / (60 * 24))
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60)
  const minutes = totalMinutes % 60
  return `${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m`
}

export function EternalBadge() {
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    const target = getTargetDate()
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only value, avoids SSR/CSR hydration mismatch
    setLabel(formatRemaining(target))
    const id = setInterval(() => setLabel(formatRemaining(target)), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <Link
      href="/eternal"
      className="border-gray-8 bg-gray-10/80 hover:border-gray-7 mx-auto mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-sm transition-all duration-300 md:mb-8"
    >
      <span className="bg-green-1 relative inline-block h-1.5 w-1.5 shrink-0 rounded-full">
        <span className="bg-green-1 animate-ping-slow absolute inset-0 rounded-full opacity-75" />
      </span>
      <span className="font-display text-gray-2 text-[11px] tracking-[0.1em] uppercase">
        Eternal <span className="text-green-1 ml-0.5">Open</span>
      </span>
      <span className="hidden h-3 w-px bg-gray-700/50 sm:block" />
      <span className="font-display text-gray-1 hidden text-[11px] tabular-nums sm:block">
        {label ?? " "}
      </span>
      <span className="hidden h-3 w-px bg-gray-700/50 sm:block" />
      <span className="font-display text-green-1 hidden text-[11px] sm:block">129+ builders</span>
      <ArrowRight className="text-gray-5 h-3 w-3" />
    </Link>
  )
}
