"use client"

import { useState, useEffect } from "react"
import { Clock, ShieldCheck, Zap, TrendingUp, Check } from "lucide-react"
import { motion } from "framer-motion"

export function SaaSProductShowcase() {
  const [btcPrice, setBtcPrice] = useState(64596.90)
  const [timeLeft, setTimeLeft] = useState(50.00)
  const [amount, setAmount] = useState<number>(10)
  const [selectedSide, setSelectedSide] = useState<"yes" | "no">("yes")
  const [yesPrice] = useState(62)
  const [activeTab, setActiveTab] = useState<"btc" | "eth" | "sol">("btc")

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0.1 ? 60.0 : +(prev - 0.1).toFixed(1)))
      setBtcPrice((prev) => +(prev + (Math.random() - 0.49) * 3.5).toFixed(2))
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="perspective-1200 w-full max-w-5xl mx-auto py-6">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.93, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full"
      >
        {/* Laptop Display Screen Outer Aluminum Frame */}
        <div className="relative overflow-hidden rounded-t-2xl border-[10px] border-[#181a20] bg-[#0c0d11] shadow-[0_25px_90px_rgba(0,0,0,0.95)]">
          {/* Laptop Camera Lens Dot */}
          <div className="absolute top-2 left-1/2 z-30 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0a0a0d] border border-white/10 flex items-center justify-center">
            <span className="h-0.5 w-0.5 rounded-full bg-blue-900/80" />
          </div>

          {/* Laptop Screen Content (Polymarket / Linear SaaS Terminal) */}
          <div className="relative pt-4">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#07080a] px-4 py-2.5 text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-[11px] text-gray-4">omnibook.com/trade/btc-60s</span>
              </div>

              {/* Market Tab Switcher */}
              <div className="hidden items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.03] p-0.5 font-mono text-xs sm:flex">
                <button
                  type="button"
                  onClick={() => setActiveTab("btc")}
                  className={`rounded-md px-3 py-1 font-semibold transition-all ${
                    activeTab === "btc"
                      ? "bg-[#00D8F6] text-[#001D26] shadow-sm"
                      : "text-gray-4 hover:text-white"
                  }`}
                >
                  BTC 60s
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("eth")}
                  className={`rounded-md px-3 py-1 font-semibold transition-all ${
                    activeTab === "eth"
                      ? "bg-[#00D8F6] text-[#001D26] shadow-sm"
                      : "text-gray-4 hover:text-white"
                  }`}
                >
                  ETH 60s
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("sol")}
                  className={`rounded-md px-3 py-1 font-semibold transition-all ${
                    activeTab === "sol"
                      ? "bg-[#00D8F6] text-[#001D26] shadow-sm"
                      : "text-gray-4 hover:text-white"
                  }`}
                >
                  SOL 60s
                </button>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] text-white">
                <span className="h-2 w-2 rounded-full bg-[#00D8F6] animate-pulse" />
                <span>LIVE MATCHING ENGINE</span>
              </div>
            </div>

            {/* Main SaaS Platform Grid */}
            <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-12 lg:gap-8">
              {/* Left Panel: Real-time Chart & Order Depth */}
              <div className="flex flex-col justify-between text-left lg:col-span-7">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                        {activeTab.toUpperCase()} / USD
                      </span>
                      <span className="font-mono text-xs text-gray-4">60-SECOND CONTRACT</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-white">ROUND #5,745</span>
                  </div>

                  <h3 className="font-display mb-5 text-2xl font-bold text-white sm:text-3xl">
                    {activeTab === "btc"
                      ? "Bitcoin up in the next 60s?"
                      : activeTab === "eth"
                      ? "Ethereum up in the next 60s?"
                      : "Solana up in the next 60s?"}
                  </h3>

                  {/* Price & Countdown Box */}
                  <div className="mb-5 flex items-baseline justify-between rounded-xl border border-white/[0.08] bg-[#07080b] p-4 shadow-inner">
                    <div>
                      <span className="font-mono text-[11px] font-semibold text-gray-4 uppercase">INDEX PRICE</span>
                      <p className="font-mono text-3xl font-bold text-white sm:text-4xl">
                        ${btcPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[11px] font-semibold text-gray-4 uppercase">ROUND CLOSES</span>
                      <p className="flex items-center justify-end gap-1.5 font-mono text-2xl font-bold text-white sm:text-3xl">
                        <Clock className="h-5 w-5 text-gray-4" />
                        {timeLeft.toFixed(2)}s
                      </p>
                    </div>
                  </div>

                  {/* Terminal Probability Chart with Gradient Fill */}
                  <div className="relative mb-5 h-36 w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#07080b] p-4">
                    <div className="absolute top-2 left-3 font-mono text-[10px] text-gray-5">$64,620</div>
                    <div className="absolute bottom-2 left-3 font-mono text-[10px] text-gray-5">$64,520</div>

                    <svg className="h-full w-full" viewBox="0 0 300 70" fill="none">
                      <defs>
                        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00D8F6" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#00D8F6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Grid Baseline */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                      <line x1="0" y1="40" x2="300" y2="40" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                      <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />

                      {/* Gradient Area Fill */}
                      <path
                        d="M 0 50 L 40 42 L 80 48 L 120 32 L 170 38 L 220 22 L 300 18 L 300 70 L 0 70 Z"
                        fill="url(#chart-fill)"
                      />

                      {/* Dynamic Probability Line */}
                      <motion.path
                        d="M 0 50 L 40 42 L 80 48 L 120 32 L 170 38 L 220 22 L 300 18"
                        fill="none"
                        stroke="#00D8F6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                      />

                      {/* Pulse Indicator Point */}
                      <motion.circle
                        cx="300"
                        cy="18"
                        r="4.5"
                        fill="#00D8F6"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>

                  {/* Probability Depth Ratio Bar */}
                  <div>
                    <div className="mb-1.5 flex justify-between font-mono text-xs font-semibold">
                      <span className="text-white">62% YES (PROBABILITY)</span>
                      <span className="text-[#E15252]">38% NO (PROBABILITY)</span>
                    </div>
                    <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-[#1b1c22]">
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
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4 font-mono text-xs text-gray-4">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-gray-4" />
                    Smart Contract Verified Settlement
                  </span>
                  <span>24/7 Liquidity</span>
                </div>
              </div>

              {/* Right Panel: Trading Ticket & Order Execution */}
              <div className="flex flex-col justify-between rounded-xl border border-white/[0.10] bg-[#07080c] p-5 text-left shadow-lg lg:col-span-5">
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <span className="font-mono text-xs font-semibold text-white uppercase">ORDER TICKET</span>
                    <span className="font-mono text-xs text-gray-4">$48,592 VOL TODAY</span>
                  </div>

                  {/* Stake Amount Picker */}
                  <div className="mb-5">
                    <div className="mb-2 flex justify-between font-mono text-xs text-gray-4">
                      <span>SELECT STAKE</span>
                      <span>BALANCE: $90.42</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 5, 10, 25].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setAmount(val)}
                          className={`rounded-lg py-2 font-mono text-xs font-bold transition-all ${
                            amount === val
                              ? "bg-[#00D8F6] text-[#001D26] shadow-md"
                              : "border border-white/[0.08] bg-white/[0.03] text-gray-3 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          ${val}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* YES / NO Outcome Buttons */}
                  <div className="mb-5 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedSide("yes")}
                      className={`flex flex-col items-start rounded-xl border p-4 font-mono transition-all ${
                        selectedSide === "yes"
                          ? "border-[#00D8F6] bg-[#00333E]/60 text-white shadow-lg"
                          : "border-white/[0.08] bg-white/[0.02] text-gray-4 hover:border-white/20"
                      }`}
                    >
                      <div className="flex w-full justify-between items-center text-xs text-gray-4">
                        <span>OUTCOME</span>
                        {selectedSide === "yes" && <Check className="h-3.5 w-3.5 text-[#00D8F6]" />}
                      </div>
                      <div className="mt-1 flex w-full justify-between items-baseline">
                        <span className="text-lg font-bold text-white">YES</span>
                        <span className="text-base font-extrabold text-white">{yesPrice}¢</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedSide("no")}
                      className={`flex flex-col items-start rounded-xl border p-4 font-mono transition-all ${
                        selectedSide === "no"
                          ? "border-[#E15252] bg-[#3B1212]/60 text-white shadow-lg"
                          : "border-white/[0.08] bg-white/[0.02] text-gray-4 hover:border-white/20"
                      }`}
                    >
                      <div className="flex w-full justify-between items-center text-xs text-gray-4">
                        <span>OUTCOME</span>
                        {selectedSide === "no" && <Check className="h-3.5 w-3.5 text-[#E15252]" />}
                      </div>
                      <div className="mt-1 flex w-full justify-between items-baseline">
                        <span className="text-lg font-bold text-white">NO</span>
                        <span className="text-base font-extrabold text-[#E15252]">{100 - yesPrice}¢</span>
                      </div>
                    </button>
                  </div>

                  {/* Payout Estimate Calculation */}
                  <div className="mb-5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3.5 font-mono text-xs">
                    <div className="flex justify-between text-gray-4">
                      <span>POTENTIAL PAYOUT:</span>
                      <span className="font-bold text-white">${(amount * (100 / (selectedSide === "yes" ? yesPrice : (100 - yesPrice)))).toFixed(2)}</span>
                    </div>
                    <div className="mt-1.5 flex justify-between text-gray-4">
                      <span>ESTIMATED RETURN:</span>
                      <span className="font-bold text-white">+{((100 / (selectedSide === "yes" ? yesPrice : (100 - yesPrice)) - 1) * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>

                {/* Execute Order CTA Button */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00D8F6] py-3.5 font-display text-sm font-bold uppercase tracking-wider text-[#001D26] transition-all hover:bg-[#00c4e0] hover:shadow-[0_0_24px_rgba(0,216,246,0.4)]"
                >
                  <Zap className="h-4 w-4 fill-current" />
                  CONFIRM {selectedSide.toUpperCase()} POSITION (${amount})
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Bottom Base & Hinge */}
        <div className="relative mx-auto h-4 w-[104%] -translate-x-[2%] rounded-b-xl border-t border-white/20 bg-gradient-to-b from-[#2a2c36] via-[#1a1b22] to-[#0f1014] shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
          {/* Laptop Thumb Notch */}
          <div className="absolute top-0 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-[#121318]" />
        </div>
      </motion.div>
    </div>
  )
}
