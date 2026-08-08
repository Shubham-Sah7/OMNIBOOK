"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Wallet, TrendingUp, Sparkles, Grid } from "lucide-react"
import { motion } from "framer-motion"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"
import { useBgMode } from "./bg-mode-context"

const NAV_LINKS = [
  { label: "Markets", href: "#markets" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Omnibook", href: "#why-omnibook" },
  { label: "Transparency", href: "#transparency" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { bgMode, toggleBgMode } = useBgMode()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4 mb-6 sm:px-6 md:mb-8">
      <motion.nav
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`relative flex items-center justify-between rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-black/[0.14] dark:border-white/[0.16] bg-white/90 dark:bg-[#0c0d10]/90 px-6 py-2.5 backdrop-blur-xl shadow-lg dark:shadow-[0_12px_40px_rgba(0,0,0,0.8)] text-slate-900 dark:text-white"
            : "border-black/[0.10] dark:border-white/[0.10] bg-white/80 dark:bg-[#0c0d10]/70 px-6 py-2.5 backdrop-blur-lg shadow-md dark:shadow-lg text-slate-900 dark:text-white"
        }`}
      >
        {/* Left: Brand Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 text-slate-900 dark:text-white">
          <Logo />
        </Link>

        {/* Center: Navigation Links */}
        <ul className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="whitespace-nowrap text-xs font-medium text-slate-700 dark:text-gray-3 transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Background Nudge Switcher, Theme Switcher, Balance & CTA */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Background Style Nudge Switcher (Trading Video / Cosmos / Grid) */}
          <button
            type="button"
            onClick={toggleBgMode}
            className="flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1 text-[11px] font-mono font-semibold text-slate-800 dark:text-white transition-all hover:bg-black/10 dark:hover:bg-white/10"
            title="Switch Background Visual (Trading Video / Cosmos / Arena Grid)"
          >
            {bgMode === "trading" ? (
              <>
                <TrendingUp className="h-3.5 w-3.5 text-[#00D8F6] animate-pulse" />
                <span className="hidden sm:inline">TRADING</span>
              </>
            ) : bgMode === "cosmos" ? (
              <>
                <Sparkles className="h-3.5 w-3.5 text-[#00D8F6]" />
                <span className="hidden sm:inline">COSMOS</span>
              </>
            ) : (
              <>
                <Grid className="h-3.5 w-3.5 text-slate-600 dark:text-gray-3" />
                <span className="hidden sm:inline">GRID</span>
              </>
            )}
          </button>

          {/* Light / Dark Mode Toggle Button */}
          <ThemeToggle />

          {/* User Balance Indicator */}
          <div className="hidden items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] px-3 py-1.5 font-mono text-xs font-medium text-slate-800 dark:text-gray-2 sm:flex">
            <Wallet className="h-3.5 w-3.5 text-slate-500 dark:text-gray-4" />
            <span>$90.42</span>
          </div>

          <Link href="#markets" className="btn-primary rounded-full px-5 whitespace-nowrap">
            Start Trading
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.12] dark:border-white/[0.12] bg-slate-100 dark:bg-[#111111] lg:hidden"
          >
            {open ? (
              <X className="h-4 w-4 text-slate-700 dark:text-gray-3" />
            ) : (
              <Menu className="h-4 w-4 text-slate-700 dark:text-gray-3" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {open && (
          <div className="absolute top-14 left-0 right-0 z-50 rounded-2xl border border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-[#0c0d10] p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-gray-3 hover:bg-slate-100 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.nav>
    </header>
  )
}
