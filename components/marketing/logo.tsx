import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Official Omnibook Vector Icon Mark */}
      <svg className="h-6 w-auto" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top Row */}
        <rect x="0" y="1" width="13" height="4" rx="2" fill="#00D8F6" />
        <rect x="17" y="1" width="9" height="4" rx="2" fill="#FFFFFF" />
        
        {/* Middle Row */}
        <rect x="0" y="9" width="8" height="4" rx="2" fill="#00D8F6" />
        <rect x="12" y="9" width="22" height="4" rx="2" fill="#FFFFFF" />
        
        {/* Bottom Row */}
        <rect x="0" y="17" width="18" height="4" rx="2" fill="#00D8F6" />
        <rect x="22" y="17" width="12" height="4" rx="2" fill="#FFFFFF" />
      </svg>

      {/* Official Wordmark */}
      <span className="font-sans text-2xl font-bold tracking-tight">
        <span className="text-white">omni</span>
        <span className="text-[#00D8F6]">book</span>
      </span>
    </div>
  )
}
