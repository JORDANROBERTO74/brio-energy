export const locales = ["en", "es"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeCookie = "NEXT_LOCALE"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
