"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import type { Dictionary } from "@/i18n"
import { localeCookie, type Locale } from "@/i18n/config"

type NavigationProps = {
  dict: Dictionary
  locale: Locale
}

export function Navigation({ dict, locale }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const other: Locale = locale === "es" ? "en" : "es"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const goTo = (href: string) => {
    setOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const rememberLocale = () => {
    document.cookie = `${localeCookie}=${other};path=/;max-age=31536000;samesite=lax`
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-bone/10 bg-ink/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          aria-label={dict.nav.homeLabel}
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <span className="text-2xl font-black tracking-tighter">
            <span className={scrolled ? "text-bone" : "text-ink"}>BR</span>
            <span className="text-signal">I</span>
            <span className={scrolled ? "text-bone" : "text-ink"}>O</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {dict.nav.links.map((item, index) => (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className={`group relative text-sm font-medium tracking-wide transition-colors ${
                scrolled ? "text-bone/80 hover:text-bone" : "text-ink/80 hover:text-ink"
              }`}
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={`/${other}`}
            hrefLang={other}
            aria-label={dict.nav.languageLabel}
            onClick={rememberLocale}
            className={`font-mono text-xs tracking-widest transition-colors ${
              scrolled ? "text-bone/60 hover:text-bone" : "text-ink/60 hover:text-ink"
            }`}
          >
            {other.toUpperCase()}
          </Link>
          <button
            onClick={() => goTo(dict.nav.ctaHref)}
            className="rounded-full bg-signal px-6 py-2.5 text-sm font-bold tracking-wide text-ink transition-transform duration-300 hover:scale-105"
          >
            {dict.nav.cta}
          </button>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? dict.nav.closeLabel : dict.nav.menuLabel}
        >
          {open ? (
            <X className={scrolled ? "text-bone" : "text-ink"} />
          ) : (
            <Menu className={scrolled ? "text-bone" : "text-ink"} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden border-t border-bone/10 bg-ink/95 backdrop-blur-md md:hidden"
          >
            <div className="space-y-2 px-6 py-4">
              {dict.nav.links.map((item) => (
                <button
                  key={item.href}
                  onClick={() => goTo(item.href)}
                  className="block w-full py-2 text-left text-lg font-medium text-bone/80 hover:text-bone"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between pt-2">
                <Link
                  href={`/${other}`}
                  hrefLang={other}
                  aria-label={dict.nav.languageLabel}
                  onClick={() => {
                    rememberLocale()
                    setOpen(false)
                  }}
                  className="font-mono text-xs tracking-widest text-bone/60 hover:text-bone"
                >
                  {other.toUpperCase()}
                </Link>
                <button
                  onClick={() => goTo(dict.nav.ctaHref)}
                  className="rounded-full bg-signal px-5 py-2.5 text-sm font-bold tracking-wide text-ink"
                >
                  {dict.nav.cta}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
