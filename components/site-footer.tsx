"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import type { Dictionary } from "@/i18n"

type FooterProps = {
  dict: Dictionary["footer"]
  newsletter: Dictionary["newsletter"]
}

export function SiteFooter({ dict, newsletter }: FooterProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle")
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("sending")
    window.setTimeout(() => setStatus("done"), 600)
  }

  return (
    <footer ref={ref} id="newsletter" className="relative overflow-hidden bg-ink pt-20 pb-8">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-black leading-[0.9] tracking-tighter text-bone md:text-6xl">
            {newsletter.title} <span className="text-signal">{newsletter.titleAccent}</span>
          </h2>
        </motion.div>

        <form onSubmit={onSubmit} className="mx-auto mb-12 max-w-xl" noValidate>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletter.inputLabel}
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={newsletter.placeholder}
              autoComplete="email"
              className="flex-1 rounded-xl border-2 border-bone/20 bg-bone/5 px-4 py-3 font-mono text-sm text-bone placeholder:text-bone/40 focus:border-signal focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-xl bg-signal px-6 py-3 text-sm font-bold tracking-wide whitespace-nowrap text-ink transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
            >
              {status === "sending" ? newsletter.submitting : newsletter.button}
            </button>
          </div>
          <p aria-live="polite" className="mt-2 text-center font-mono text-xs text-bone/40">
            {status === "done" ? newsletter.success : newsletter.note}
          </p>
        </form>

        <p className="mx-auto mb-10 max-w-xl text-center font-mono text-xs leading-relaxed text-bone/50">
          {dict.blurb}
        </p>

        <div className="grid grid-cols-2 gap-6 border-t border-bone/10 py-8 md:grid-cols-3">
          {dict.columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-bold text-bone">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="inline-block font-mono text-xs text-bone/60 transition-colors hover:text-signal"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="inline-block font-mono text-xs text-bone/60 transition-colors hover:text-signal"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-bone/10 pt-6 md:flex-row">
          <span className="text-xl font-black tracking-tighter text-bone">
            BR<span className="text-signal">I</span>O
          </span>
          <p className="font-mono text-xs text-bone/40">{dict.rights}</p>
          <ul className="flex gap-4 font-mono text-[11px] text-bone/30">
            {dict.legal.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="relative z-10 mt-2 text-center font-mono text-[10px] tracking-[0.3em] text-bone/20">
        {dict.tagline}
      </p>
    </footer>
  )
}
