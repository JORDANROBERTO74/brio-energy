"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { Dictionary } from "@/i18n"

export function RitualsSection({ dict }: { dict: Dictionary["rituals"] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="rituals" className="relative overflow-hidden bg-bone py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs tracking-[0.3em] text-ink/50">{dict.eyebrow}</span>
          <h2 className="mt-2 text-3xl font-black tracking-tighter text-ink md:text-5xl">
            {dict.title}{" "}
            <span className="text-signal">{dict.titleAccent}</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 110, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-ink/10 bg-card p-6"
            >
              <span
                aria-hidden
                className="absolute right-4 top-4 font-mono text-[11px] tracking-widest text-ink/30"
              >
                0{index + 1}
              </span>
              <h3 className="mb-2 max-w-[85%] text-lg font-black tracking-tight text-ink">{item.title}</h3>
              <p className="font-mono text-xs leading-relaxed text-ink/60">{item.description}</p>
              <div
                aria-hidden
                className="mt-6 h-0.5 w-10 origin-left bg-signal transition-transform duration-300 group-hover:scale-x-[3]"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
