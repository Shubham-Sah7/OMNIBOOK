"use client"

import { useState } from "react"
import { TrendingUp, CheckCircle2 } from "lucide-react"

export function VideoShowcase() {
  const [selectedSide, setSelectedSide] = useState<"yes" | "no">("yes")
  const [yesOdds] = useState(68)
  const [placed, setPlaced] = useState(false)

  return (
    <div className="px-4 md:px-6">
      <div className="relative mx-auto -mb-10 w-full max-w-4xl -translate-y-10 overflow-hidden rounded-xl border border-gray-7 bg-[#0c0e10] p-6 shadow-2xl md:-mb-20 md:-translate-y-20 md:p-10">
        <div className="mb-8 text-center">
          <span className="font-display text-[#00D8F6] mb-2 inline-block rounded-full bg-[#00333E]/80 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase">
            LIVE DEMO
          </span>
          <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl md:text-4xl">
            Experience prediction markets in real time
          </h2>
          <p className="text-gray-3 mt-2 text-sm md:text-base">
            Watch live odds change, place your prediction in seconds, and see markets settle instantly when the round ends.
          </p>
        </div>

        {/* Real-time Prediction Order Ticket Mockup */}
        <div className="mx-auto max-w-2xl rounded-xl border border-gray-8 bg-[#121519] p-6 shadow-inner">
          <div className="mb-4 flex items-center justify-between border-b border-gray-8/80 pb-4">
            <div>
              <span className="rounded bg-[#00D8F6]/10 px-2 py-0.5 font-mono text-xs font-bold text-[#00D8F6]">
                LIVE MARKET · CLOSING IN 02:45
              </span>
              <h3 className="font-display mt-2 text-lg font-bold text-white md:text-xl">
                Will Bitcoin break $100,000 before Q4?
              </h3>
            </div>
            <div className="text-right">
              <span className="font-mono text-2xl font-black text-[#00D8F6]">{yesOdds}%</span>
              <p className="text-[11px] font-semibold text-gray-4 uppercase">Probability YES</p>
            </div>
          </div>

          {/* Probability Bar */}
          <div className="mb-6">
            <div className="mb-1 flex justify-between font-mono text-xs font-bold">
              <span className="text-[#00D8F6]">YES {yesOdds}%</span>
              <span className="text-[#FF4D4D]">NO {100 - yesOdds}%</span>
            </div>
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-gray-9">
              <div className="h-full bg-[#00D8F6] transition-all duration-500" style={{ width: `${yesOdds}%` }} />
              <div className="h-full bg-[#FF4D4D] transition-all duration-500" style={{ width: `${100 - yesOdds}%` }} />
            </div>
          </div>

          {/* Side Selection Buttons */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => { setSelectedSide("yes"); setPlaced(false); }}
              className={`flex items-center justify-between rounded-lg border p-4 text-left transition-all ${
                selectedSide === "yes"
                  ? "border-[#00D8F6] bg-[#00333E]/60 text-white shadow-[0_0_16px_rgba(0,216,246,0.2)]"
                  : "border-gray-8 bg-gray-10 text-gray-4 hover:border-gray-7"
              }`}
            >
              <div>
                <span className="font-display block text-base font-extrabold uppercase">BUY YES</span>
                <span className="font-mono text-xs text-gray-3">${(yesOdds / 100).toFixed(2)} per share</span>
              </div>
              <span className="font-mono text-lg font-bold text-[#00D8F6]">{(100 / yesOdds).toFixed(2)}x Return</span>
            </button>

            <button
              type="button"
              onClick={() => { setSelectedSide("no"); setPlaced(false); }}
              className={`flex items-center justify-between rounded-lg border p-4 text-left transition-all ${
                selectedSide === "no"
                  ? "border-[#FF4D4D] bg-[#3B1212]/60 text-white shadow-[0_0_16px_rgba(255,77,77,0.2)]"
                  : "border-gray-8 bg-gray-10 text-gray-4 hover:border-gray-7"
              }`}
            >
              <div>
                <span className="font-display block text-base font-extrabold uppercase">BUY NO</span>
                <span className="font-mono text-xs text-gray-3">${((100 - yesOdds) / 100).toFixed(2)} per share</span>
              </div>
              <span className="font-mono text-lg font-bold text-[#FF4D4D]">{(100 / (100 - yesOdds)).toFixed(2)}x Return</span>
            </button>
          </div>

          {/* Place Trade Action */}
          <button
            type="button"
            onClick={() => setPlaced(true)}
            className="font-display flex w-full items-center justify-center gap-2 rounded-lg bg-[#00D8F6] py-3.5 text-sm font-bold uppercase tracking-wider text-[#001D26] transition-all hover:bg-[#00c4e0]"
          >
            {placed ? (
              <span className="flex items-center gap-2 text-[#001D26] font-extrabold">
                <CheckCircle2 className="h-5 w-5 text-[#001D26]" /> PREDICTION CONFIRMED ($100 {selectedSide.toUpperCase()})
              </span>
            ) : (
              <span className="flex items-center gap-2 font-extrabold">
                <TrendingUp className="h-4 w-4" /> CONFIRM $100 PREDICTION ({selectedSide.toUpperCase()})
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
