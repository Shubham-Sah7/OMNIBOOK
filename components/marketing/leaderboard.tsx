"use client"

import Image from "next/image"
import { Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "./animated-section"

type LeaderboardUser = {
  rank: number
  name: string
  profit: string
  avatar: string
}

const LEADERBOARD_USERS: LeaderboardUser[] = [
  { rank: 1, name: "satoshipredictor", profit: "+$10,356.33", avatar: "/avatars/trader_satoshi.png" },
  { rank: 2, name: "HellaAuditor", profit: "+$25,697.04", avatar: "/avatars/trader_hella.png" },
  { rank: 3, name: "quietfade83", profit: "+$7,562.50", avatar: "/avatars/alex_carter.png" },
  { rank: 4, name: "lustKing", profit: "+$7,091.78", avatar: "/avatars/daniel_brooks.png" },
  { rank: 5, name: "BigDaddyJackson", profit: "+$3,291.11", avatar: "/avatars/sarah_wilson.png" },
  { rank: 6, name: "cozyPump45", profit: "+$1,123.02", avatar: "/avatars/trader_satoshi.png" },
  { rank: 7, name: "sigmaApe00", profit: "+$652.58", avatar: "/avatars/alex_carter.png" },
  { rank: 8, name: "quietShock02", profit: "+$510.41", avatar: "/avatars/sarah_wilson.png" },
  { rank: 9, name: "yoloWhale24", profit: "+$310.18", avatar: "/avatars/daniel_brooks.png" },
  { rank: 10, name: "w1zard109", profit: "+$692.63", avatar: "/avatars/trader_hella.png" },
]

export function Leaderboard() {
  return (
    <section id="leaderboard" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <AnimatedSection className="mb-8 text-center md:mb-10">
          <div className="linear-badge mb-3">
            SEASON 1 STANDINGS
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Trusted by the best prediction traders
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-base leading-relaxed text-slate-600 dark:text-gray-3">
            Watch top traders climb the rankings in real time.
          </p>
        </AnimatedSection>

        {/* Leaderboard Component */}
        <AnimatedSection delay={0.15} className="overflow-hidden rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#111111] p-6 shadow-sm dark:shadow-lg">
          <div className="mb-5 flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 stroke-[1.75] text-slate-900 dark:text-white" />
              <span className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase">Live Standings</span>
            </div>
            <span className="font-mono text-xs text-slate-500 dark:text-gray-4">Updated every minute</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {LEADERBOARD_USERS.map((user, idx) => (
              <motion.div
                key={user.rank}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-between rounded-lg border border-black/[0.04] dark:border-white/[0.04] bg-slate-50 dark:bg-[#0c0c0c] px-4 py-2.5 transition-colors hover:border-black/[0.12] dark:hover:border-white/[0.12]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-5 text-center font-bold text-slate-400 dark:text-gray-4">{user.rank}</span>
                  <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-black/10 dark:border-white/10 bg-slate-200 dark:bg-gray-9">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={28}
                      height={28}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-slate-800 dark:text-gray-2">{user.name}</span>
                </div>
                <span className="font-bold text-slate-900 dark:text-white">
                  {user.profit}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
