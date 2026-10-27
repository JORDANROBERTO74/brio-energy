import { defaultLocale, type Locale } from "./config"
import { en } from "./dictionaries/en"
import { es } from "./dictionaries/es"

export type { Dictionary } from "./dictionaries/en"

const dictionaries = { en, es }

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}
