"use client"

import { createContext, useContext, useState } from "react"

export type BgMode = "grid" | "trading" | "cosmos"

type BgModeContextType = {
  bgMode: BgMode
  setBgMode: (mode: BgMode) => void
  toggleBgMode: () => void
}

const BgModeContext = createContext<BgModeContextType>({
  bgMode: "trading",
  setBgMode: () => {},
  toggleBgMode: () => {},
})

export function BgModeProvider({ children }: { children: React.ReactNode }) {
  const [bgMode, setBgMode] = useState<BgMode>("trading")

  const toggleBgMode = () => {
    setBgMode((prev) => (prev === "trading" ? "cosmos" : prev === "cosmos" ? "grid" : "trading"))
  }

  return (
    <BgModeContext.Provider value={{ bgMode, setBgMode, toggleBgMode }}>
      {children}
    </BgModeContext.Provider>
  )
}

export function useBgMode() {
  return useContext(BgModeContext)
}
