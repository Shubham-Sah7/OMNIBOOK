"use client"

import { createContext, useContext, useState } from "react"

type BgMode = "grid" | "cosmos"

type BgModeContextType = {
  bgMode: BgMode
  setBgMode: (mode: BgMode) => void
  toggleBgMode: () => void
}

const BgModeContext = createContext<BgModeContextType>({
  bgMode: "grid",
  setBgMode: () => {},
  toggleBgMode: () => {},
})

export function BgModeProvider({ children }: { children: React.ReactNode }) {
  const [bgMode, setBgMode] = useState<BgMode>("grid")

  const toggleBgMode = () => {
    setBgMode((prev) => (prev === "grid" ? "cosmos" : "grid"))
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
