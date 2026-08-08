import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "MARKETS",
    links: [
      { label: "Markets", href: "#markets" },
      { label: "Trade", href: "#markets" },
      { label: "Rewards", href: "#" },
      { label: "Leaderboard", href: "#leaderboard" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Rules", href: "#" },
      { label: "Season 1", href: "#" },
      { label: "Account", href: "#" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Fees & Settlement", href: "#" },
      { label: "Discord", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.08] dark:border-white/[0.08] bg-slate-50 dark:bg-[#070707]">
      {/* Background Footer Architectural Vector Graphic */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto max-w-6xl opacity-5 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen select-none">
        <Image
          src="/images/footer_skyline.png"
          alt="Architectural Skyline Graphic"
          width={1200}
          height={400}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-6 py-16 text-xs font-normal text-slate-500 dark:text-gray-4 md:flex-row md:gap-0">
        <div>
          <div className="mb-6">
            <Link href="/" className="mb-3 inline-block text-slate-900 dark:text-white">
              <Logo />
            </Link>
            <p className="mt-2 text-xs text-slate-500 dark:text-gray-4">© 2026 Omnibook Inc. All rights reserved.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 md:gap-x-16 md:gap-y-0">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-mono text-[11px] font-medium tracking-wider text-slate-700 dark:text-gray-3 uppercase">{column.title}</h3>
              <ul className="grid gap-2.5 text-xs">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 dark:text-gray-4 transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t border-black/[0.06] dark:border-white/[0.06] bg-slate-100 dark:bg-[#050505] px-6 py-4 text-center text-[10px] text-slate-500 dark:text-gray-4">
        <p className="mx-auto max-w-3xl leading-relaxed">
          Trading on prediction markets involves risk. Event derivative contracts are options contracts based on real-world events.
        </p>
      </div>
    </footer>
  )
}
