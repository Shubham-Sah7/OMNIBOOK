"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import { motion } from "framer-motion"

export function TradingWidget() {
  const [btcPrice, setBtcPrice] = useState(64519.70)
  const [timeLeft, setTimeLeft] = useState(44.70)
  const [amount, setAmount] = useState<number>(5)
  const [selectedSide, setSelectedSide] = useState<"yes" | "no">("yes")
  const [yesPrice] = useState(62)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0.1 ? 60.0 : +(prev - 0.1).toFixed(1)))
      setBtcPrice((prev) => +(prev + (Math.random() - 0.49) * 3).toFixed(2))
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, rotateX: 2 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-md rounded-xl border border-white/[0.08] bg-[#111111] p-5 text-left shadow-lg"
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-medium tracking-wider text-gray-4 uppercase">
            BTC / USD 60s MARKET
          </span>
          <span className="flex items-center gap-1 font-mono text-[10px] font-semibold text-[#00D8F6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D8F6] animate-pulse" />
            LIVE
          </span>
        </div>
      </div>

      {/* Market Title */}
      <h3 className="text-lg font-bold text-white">
        Bitcoin up in the next 60s?
      </h3>

      {/* Price & Countdown Row */}
      <div className="my-3 flex items-baseline justify-between">
        <div>
          <span className="font-mono text-[11px] text-gray-4">INDEX PRICE</span>
          <p className="font-mono text-2xl font-bold text-white">
            ${btcPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
        <div className="text-right">
          <span className="font-mono text-[10px] text-gray-4 uppercase">ROUND CLOSES</span>
          <p className="flex items-center justify-end gap-1 font-mono text-lg font-semibold text-[#00D8F6]">
            <Clock className="h-3.5 w-3.5" />
            {timeLeft.toFixed(2)}s
          </p>
        </div>
      </div>

      {/* Animated Path & Pulse Probability Graph Visual */}
      <div className="relative mb-4 h-16 w-full overflow-hidden rounded border border-white/[0.04] bg-[#0c0c0c] p-2">
        <svg className="h-full w-full" viewBox="0 0 200 40" fill="none">
          {/* Subtle Grid Lines */}
          <line x1="0" y1="10" x2="200" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="0" y1="30" x2="200" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Animated SVG Path Drawing */}
          <motion.path
            d="M 0 28 L 30 22 L 60 25 L 90 18 L 130 22 L 160 14 L 200 12"
            fill="none"
            stroke="#00D8F6"
            strokeWidth="1.5"
            strokeOpacity="0.9"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Travelling Pulse Point */}
          <motion.circle
            cx="200"
            cy="12"
            r="3"
            fill="#00D8F6"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Probability Bar */}
      <div className="mb-4">
        <div className="mb-1.5 flex justify-between font-mono text-[11px] font-semibold">
          <span className="text-[#00D8F6]">62% YES</span>
          <span className="text-[#E15252]">38% NO</span>
        </div>
        <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-[#1c1c1c]">
          <motion.div
            className="h-full bg-[#00D8F6]"
            initial={{ width: 0 }}
            animate={{ width: "62%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.div
            className="h-full bg-[#E15252]"
            initial={{ width: 0 }}
            animate={{ width: "38%" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Stake Selector */}
      <div className="mb-4 flex items-center justify-between text-xs">
        <span className="font-mono text-gray-4">STAKE</span>
        <div className="flex gap-1.5">
          {[1, 5, 10].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setAmount(val)}
              className={`rounded px-3 py-1 font-mono text-xs font-semibold transition-all ${
                amount === val
                  ? "bg-[#00D8F6] text-[#001D26]"
                  : "border border-white/[0.06] bg-white/[0.02] text-gray-3 hover:border-white/[0.12]"
              }`}
            >
              ${val}
            </button>
          ))}
        </div>
      </div>

      {/* YES / NO Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setSelectedSide("yes")}
          className={`flex items-center justify-between rounded-lg border p-3 font-mono text-sm font-semibold transition-all ${
            selectedSide === "yes"
              ? "border-[#00D8F6]/60 bg-[#00333E]/50 text-white"
              : "border-white/[0.08] bg-white/[0.02] text-gray-4 hover:border-white/[0.16]"
          }`}
        >
          <span>YES</span>
          <span className="text-[#00D8F6]">{yesPrice}¢</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedSide("no")}
          className={`flex items-center justify-between rounded-lg border p-3 font-mono text-sm font-semibold transition-all ${
            selectedSide === "no"
              ? "border-[#E15252]/60 bg-[#3B1212]/50 text-white"
              : "border-white/[0.08] bg-white/[0.02] text-gray-4 hover:border-white/[0.16]"
          }`}
        >
          <span>NO</span>
          <span className="text-[#E15252]">{100 - yesPrice}¢</span>
        </button>
      </div>

      {/* Card Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[11px] text-gray-4">
        <span>Round #5,745</span>
        <span>$48,592 volume</span>
      </div>
    </motion.div>
  )
}
