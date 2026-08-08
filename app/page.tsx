"use client"

import { Header } from "@/components/marketing/header"
import { Hero } from "@/components/marketing/hero"
import { Stats } from "@/components/marketing/stats"
import { BuiltForMarkets } from "@/components/marketing/built-for-markets"
import { TrendingMarkets } from "@/components/marketing/trending-markets"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { WhyOmnibook } from "@/components/marketing/why-omnibook"
import { CategoriesGrid } from "@/components/marketing/categories-grid"
import { Leaderboard } from "@/components/marketing/leaderboard"
import { TransparencySection } from "@/components/marketing/transparency"
import { TestimonialsStory } from "@/components/marketing/testimonials-story"
import { CallToAction } from "@/components/marketing/cta"
import { Footer } from "@/components/marketing/footer"
import { SmoothScrollProvider } from "@/components/marketing/smooth-scroll"
import { BgModeProvider } from "@/components/marketing/bg-mode-context"

export default function Page() {
  return (
    <SmoothScrollProvider>
      <BgModeProvider>
        <div className="relative min-h-screen bg-[#fbfbfd] dark:bg-[#0a0a0a] bg-grid-full text-slate-900 dark:text-white selection:bg-[#00D8F6] selection:text-black transition-colors duration-300">
          <div className="mx-auto max-w-[90rem]">
            <Header />

            <main>
              <Hero />
              <Stats />
              <BuiltForMarkets />
              <TrendingMarkets />
              <HowItWorks />
              <WhyOmnibook />
              <CategoriesGrid />
              <Leaderboard />
              <TransparencySection />
              <TestimonialsStory />
              <CallToAction />
            </main>

            <Footer />
          </div>
        </div>
      </BgModeProvider>
    </SmoothScrollProvider>
  )
}
