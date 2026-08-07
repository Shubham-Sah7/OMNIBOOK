"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Wallet } from "lucide-react"
import { motion } from "framer-motion"
import { Logo } from "./logo"

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
    <header className="sticky top-4 z-40 mx-auto max-w-5xl px-4 sm:px-6">
      <motion.nav
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`relative flex items-center justify-between rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-white/[0.16] bg-[#0c0d10]/90 px-5 py-2.5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
            : "border-white/[0.10] bg-[#0c0d10]/70 px-5 py-2.5 backdrop-blur-lg shadow-lg"
        }`}
      >
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2 text-white">
          <Logo />
        </Link>

        {/* Center: Navigation Links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-medium text-gray-3 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Balance & CTA */}
        <div className="flex items-center gap-3">
          {/* User Balance Indicator */}
          <div className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-xs font-medium text-gray-2 sm:flex">
            <Wallet className="h-3.5 w-3.5 text-gray-4" />
            <span>$90.42</span>
          </div>

          <Link href="#markets" className="btn-primary rounded-full px-5">
            Start Trading
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-[#111111] lg:hidden"
          >
            {open ? (
              <X className="h-4 w-4 text-gray-3" />
            ) : (
              <Menu className="h-4 w-4 text-gray-3" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {open && (
          <div className="absolute top-14 left-0 right-0 z-50 rounded-2xl border border-white/[0.12] bg-[#0c0d10] p-4 shadow-2xl backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-3 hover:bg-white/[0.04] hover:text-white"
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
