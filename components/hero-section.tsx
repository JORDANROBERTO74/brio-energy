"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { brand, flavours } from "@/content/brio"
import type { Dictionary } from "@/i18n"

const spring = { stiffness: 100, damping: 30, restDelta: 0.001 }

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.09, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 160]), spring)
  const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), spring)
  const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), spring)
  const fade = useSpring(useTransform(scrollYProgress, [0, 0.8], [1, 0]), spring)

  return (
    <section
      ref={ref}
      id="hero"
      className="noise-overlay relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-bone pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-bone via-signal/5 to-bone" />

      <motion.div
        aria-hidden
        className="absolute left-6 top-24 h-24 w-24 rounded-full bg-signal/20 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-40 right-10 h-32 w-32 rounded-full bg-jade/15 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 24, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div style={{ opacity: fade }} className="space-y-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 font-mono text-[11px] tracking-widest text-bone"
            >
              <motion.span
                aria-hidden
                className="h-2 w-2 rounded-full bg-signal"
                animate={{ scale: [1, 1.25, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              {dict.badge}
            </motion.div>

            <div className="space-y-1">
              <motion.h1
                style={{ x: x1 }}
                className="text-5xl font-black leading-[0.9] tracking-tighter text-ink md:text-7xl"
              >
                <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={1} className="inline-block">
                  {dict.line1}
                </motion.span>
              </motion.h1>
              <motion.h1
                style={{ x: x2 }}
                className="text-5xl font-black leading-[0.9] tracking-tighter text-ink md:text-7xl"
              >
                <motion.span
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="inline-block text-signal"
                >
                  {dict.line2}
                </motion.span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="max-w-md pt-3 font-mono text-base text-ink/60 md:text-lg"
              >
                {dict.lead}
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="#flavours"
                className="group relative overflow-hidden rounded-full bg-signal px-6 py-3 text-sm font-bold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03]"
              >
                <span className="relative z-10">{dict.primaryCta}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-bone/40 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>
              <a
                href="#formula"
                className="rounded-full border-2 border-ink px-6 py-3 text-sm font-bold tracking-wide text-ink transition-colors duration-300 hover:bg-ink hover:text-bone"
              >
                {dict.secondaryCta}
              </a>
            </motion.div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              {dict.benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  className="flex items-center gap-2 font-mono text-xs text-ink/60"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.08 }}
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div style={{ y }} className="relative flex justify-center">
            <div className="relative">
              <div aria-hidden className="absolute inset-0 scale-75 rounded-full bg-jade/30 blur-[80px]" />
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={flavours[0].image}
                  alt={dict.imageAlt}
                  width={340}
                  height={510}
                  priority
                  className="relative z-10 h-auto w-[260px] drop-shadow-2xl sm:w-[340px]"
                />
              </motion.div>
              <p className="mt-2 text-center font-mono text-[11px] tracking-[0.3em] text-ink/40">
                {brand.wordmark} · 330 ML
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
