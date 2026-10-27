"use client"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Brain, Flame, Sparkles, Zap } from "lucide-react"
import { brand } from "@/content/brio"
import type { Dictionary } from "@/i18n"

const icons = [Zap, Flame, Brain, Sparkles]
const accents = [brand.signal, brand.jade, brand.signal, brand.jade]

function SpecCard({ item, index }: { item: Dictionary["formula"]["items"][number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateY = useTransform(useSpring(mouseX, { stiffness: 260, damping: 26 }), [-0.5, 0.5], ["6deg", "-6deg"])
  const rotateX = useTransform(useSpring(mouseY, { stiffness: 260, damping: 26 }), [-0.5, 0.5], ["-6deg", "6deg"])

  const Icon = icons[index % icons.length]
  const accent = accents[index % accents.length]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={(event) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-bone/10 bg-ink-soft p-5">
        <motion.div
          aria-hidden
          className="absolute -inset-px rounded-2xl opacity-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ background: `linear-gradient(135deg, ${accent}33, transparent 70%)` }}
        />
        <div className="relative z-10 flex h-full min-h-[150px] flex-col">
          <div
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${accent}1F` }}
          >
            <Icon className="h-5 w-5" style={{ color: accent }} aria-hidden />
          </div>
          <div className="flex-1">
            <p className="text-3xl font-black tracking-tight" style={{ color: accent }}>
              {item.value}
            </p>
            <h3 className="mt-1 text-sm font-semibold text-bone">{item.label}</h3>
            <p className="mt-1 font-mono text-xs text-bone/50">{item.note}</p>
          </div>
          <div className="mt-4 h-0.5 w-full rounded-full" style={{ backgroundColor: `${accent}66` }} />
        </div>
      </div>
    </motion.div>
  )
}

export function FormulaSection({ dict }: { dict: Dictionary["formula"] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="formula" className="relative overflow-hidden bg-ink py-20">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink via-ink-soft/60 to-ink" />

      <div ref={ref} className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <motion.span
            className="inline-block font-mono text-[10px] uppercase tracking-[0.35em] text-signal"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            {dict.eyebrow}
          </motion.span>
          <motion.h2
            className="mt-2 text-3xl font-black tracking-tight text-bone md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {dict.title}
          </motion.h2>
          <div aria-hidden className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-signal" />
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {dict.items.map((item, index) => (
            <SpecCard key={item.value} item={item} index={index} />
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-xs text-bone/40">{dict.footnote}</p>
      </div>
    </section>
  )
}
