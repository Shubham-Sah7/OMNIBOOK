"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection, MaskTextReveal } from "./animated-section"

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-16 text-center md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <AnimatedSection className="mb-4">
          <MaskTextReveal
            text="The next prediction is yours."
            className="justify-center text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-600 dark:text-gray-3 md:text-lg">
            Join thousands of traders predicting the world&apos;s biggest events in real time.
          </p>
          <Link href="#markets" className="btn-primary">
            Start Trading <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
