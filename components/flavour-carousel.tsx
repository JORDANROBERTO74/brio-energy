"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion, useSpring } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { flavours } from "@/content/brio"
import type { Dictionary } from "@/i18n"

const slide = {
  enter: (direction: number) => ({
    x: direction > 0 ? 220 : -220,
    opacity: 0,
    scale: 0.94,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 28 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -220 : 220,
    opacity: 0,
    scale: 0.94,
    transition: { type: "spring" as const, stiffness: 260, damping: 28 },
  }),
}

export function FlavourCarousel({ dict }: { dict: Dictionary["flavours"] }) {
  const [[index, direction], setState] = useState([0, 0])
  const current = flavours[index]
  const copy = dict.items[current.id]

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  const paginate = (step: number) => {
    setState([(index + step + flavours.length) % flavours.length, step])
  }

  const jumpTo = (next: number) => {
    setState([next, next > index ? 1 : -1])
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    rotateY.set(x * 4)
    rotateX.set(-y * 4)
  }

  return (
    <section id="flavours" className="relative overflow-hidden bg-bone py-20">
      <motion.div
        key={current.id}
        aria-hidden
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 70% 20%, ${current.accent}22, transparent 60%)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs tracking-[0.3em] text-ink/50">{dict.eyebrow}</span>
          <h2 className="mt-2 text-3xl font-black tracking-tighter text-ink md:text-5xl">
            {dict.title}{" "}
            <motion.span className="inline-block" animate={{ color: current.accent }} transition={{ duration: 0.4 }}>
              {dict.titleAccent}
            </motion.span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label={dict.prev}
              className="hidden h-11 w-11 items-center justify-center rounded-full border-2 border-ink/80 text-ink transition-colors hover:bg-ink hover:text-bone md:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full max-w-3xl"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="rounded-3xl border-2 border-ink/10 bg-card p-6 shadow-xl md:p-8"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => {
                    rotateX.set(0)
                    rotateY.set(0)
                  }}
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                >
                  <div className="grid items-center gap-6 md:grid-cols-2">
                    <div className="relative flex aspect-[3/4] items-center justify-center">
                      <div
                        aria-hidden
                        className="absolute inset-6 rounded-full opacity-40 blur-2xl"
                        style={{ backgroundColor: current.accent }}
                      />
                      <Image
                        src={current.image}
                        alt={copy.name}
                        fill
                        sizes="(max-width: 768px) 80vw, 380px"
                        className="relative z-10 object-contain"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="font-mono text-xs tracking-[0.25em]" style={{ color: current.accent }}>
                          {copy.tagline}
                        </span>
                        <h3 className="mt-1 text-3xl font-black tracking-tighter text-ink md:text-4xl">
                          {copy.name}
                        </h3>
                      </div>

                      <p className="font-mono text-sm leading-relaxed text-ink/60">{copy.description}</p>

                      <ul className="flex flex-wrap gap-2">
                        {dict.badges.map((badge) => (
                          <li
                            key={badge}
                            className="rounded-full bg-ink/5 px-2.5 py-1 font-mono text-[11px] text-ink/60"
                          >
                            {badge}
                          </li>
                        ))}
                      </ul>

                      <p className="border-t border-ink/10 pt-3 font-mono text-xs tracking-widest text-ink/50">
                        {dict.note}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => paginate(1)}
              aria-label={dict.next}
              className="hidden h-11 w-11 items-center justify-center rounded-full border-2 border-ink/80 text-ink transition-colors hover:bg-ink hover:text-bone md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-4 md:hidden">
            <button
              onClick={() => paginate(-1)}
              aria-label={dict.prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink/80 text-ink"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label={dict.next}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink/80 text-ink"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {flavours.map((flavour, dotIndex) => (
              <button
                key={flavour.id}
                onClick={() => jumpTo(dotIndex)}
                aria-label={dict.items[flavour.id].name}
                aria-current={dotIndex === index}
                className={`h-2 rounded-full transition-all ${dotIndex === index ? "" : "bg-ink/10"}`}
                style={{
                  width: dotIndex === index ? 28 : 10,
                  backgroundColor: dotIndex === index ? flavour.accent : undefined,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
