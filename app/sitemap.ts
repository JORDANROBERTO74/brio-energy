import type { MetadataRoute } from "next"
import { siteUrl } from "@/content/site"
import { locales } from "@/i18n/config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const languages = Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}/${locale}`]))

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }))
}
