"use client"

import { useState } from "react"
import { ShieldCheck, Eye, Lock } from "lucide-react"

const NODES = [
  {
    id: "liquidity",
    title: "Open Liquidity",
    desc: "100% visible order books with verifiable depth and price discovery.",
    icon: Eye,
    metrics: "250K+ Orders Matched",
  },
  {
    id: "oracles",
    title: "Fair Oracles",
    desc: "Multi-feed automated resolution eliminating single-point failures.",
    icon: ShieldCheck,
    metrics: "1,500+ Markets Resolved",
  },
  {
    id: "payouts",
    title: "Instant Payouts",
    desc: "Non-custodial smart contracts disburse winnings directly upon confirmation.",
    icon: Lock,
    metrics: "< 42ms Execution",
  },
]

export function TransparencySection() {
  const [activeNode, setActiveNode] = useState<string>("liquidity")

  return (
    <section id="transparency" className="relative py-12 md:py-16 text-center">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="linear-badge mb-3">
          BUILT ON TRANSPARENCY
        </div>
        <h2 className="mx-auto mb-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
          Trade with confidence.
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-gray-3">
          Every market displays transparent probabilities, real-time pricing, and instant settlements so every prediction is backed by the wisdom of the crowd.
        </p>

        {/* Interactive Architecture Visual Diagram */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-black/[0.10] dark:border-white/[0.10] bg-white dark:bg-[#0d0f12] p-8 shadow-md dark:shadow-2xl backdrop-blur-xl md:p-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {NODES.map((node) => {
              const IconComp = node.icon
              const isActive = activeNode === node.id
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node.id)}
                  className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border p-6 text-left transition-all duration-300 ${
                    isActive
                      ? "border-black/30 dark:border-white/30 bg-slate-50 dark:bg-white/[0.06] shadow-md dark:shadow-xl"
                      : "border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:border-black/20 dark:hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-slate-100 dark:bg-[#07080a] text-slate-900 dark:text-white">
                      <IconComp className="h-6 w-6 stroke-[1.75]" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{node.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-gray-4">{node.desc}</p>
                  </div>

                  <div className="mt-6 border-t border-black/[0.06] dark:border-white/[0.06] pt-3 font-mono text-[11px] font-bold text-slate-900 dark:text-white">
                    {node.metrics}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Interactive Network Status Bar */}
          <div className="mt-8 flex items-center justify-between border-t border-black/[0.08] dark:border-white/[0.08] pt-4 font-mono text-xs text-slate-500 dark:text-gray-4">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM STATUS: ALL CONTRACT ORACLES OPERATIONAL
            </span>
            <span>TRANSPARENCY AUDIT: VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  )
}
