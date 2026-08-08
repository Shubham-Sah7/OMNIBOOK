"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, ShieldCheck, ArrowUpRight } from "lucide-react"

type TradeNotification = {
  id: string
  user: string
  action: string
  market: string
  amount: string
  profit?: string
}

const SAMPLE_NOTIFICATIONS: TradeNotification[] = [
  { id: "1", user: "satoshipredictor", action: "BOUGHT 500 YES SHARES", market: "BTC 60s #5,745", amount: "$310.00" },
  { id: "2", user: "HellaAuditor", action: "SETTLED WINNING TRADE", market: "US FED RATE CUT", amount: "$1,250.00", profit: "+$420.00" },
  { id: "3", user: "quietfade83", action: "BOUGHT 250 NO SHARES", market: "SOL 60s #1,209", amount: "$95.00" },
  { id: "4", user: "w1zard109", action: "SETTLED WINNING TRADE", market: "GPT-5 LAUNCH Q3", amount: "$640.00", profit: "+$210.00" },
]

export function LiveTransactionFeed() {
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SAMPLE_NOTIFICATIONS.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const notif = SAMPLE_NOTIFICATIONS[currentIdx]

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none select-none hidden sm:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={notif.id}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0d0e12]/90 p-3.5 shadow-2xl backdrop-blur-xl max-w-sm"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00D8F6]/10 text-[#00D8F6]">
            <Zap className="h-4.5 w-4.5 stroke-[1.75]" />
          </div>

          <div className="flex-1 font-mono text-xs">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-slate-900 dark:text-white">@{notif.user}</span>
              <span className="text-[10px] text-slate-400 dark:text-gray-4">JUST NOW</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-gray-3 mt-0.5">
              {notif.action} • <span className="font-semibold text-slate-900 dark:text-white">{notif.market}</span>
            </p>
          </div>

          {notif.profit && (
            <span className="shrink-0 font-mono text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
              {notif.profit}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
