"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { Dictionary } from "@/i18n"

export function CommunitySection({ dict }: { dict: Dictionary["community"] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="community" className="relative overflow-hidden bg-ink py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,74,28,0.12),transparent_55%)]"
      />
      <div ref={ref} className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="grid items-end gap-8 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-signal">{dict.eyebrow}</span>
            <h2 className="mt-3 text-4xl font-black leading-[0.9] tracking-tighter text-bone md:text-6xl">
              {dict.title} <span className="block text-signal">{dict.titleAccent}</span>
            </h2>
          </div>

          <div className="md:pb-2">
            <div aria-hidden className="mb-5 h-0.5 w-16 bg-signal" />
            <p className="font-mono text-sm leading-relaxed text-bone/60">{dict.lead}</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-bone/20 px-4 py-2 font-mono text-xs tracking-widest text-bone/80">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal" />
              #brioenergy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
