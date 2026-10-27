import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { notFound } from "next/navigation"
import { Analytics } from "@vercel/analytics/next"
import ClickSpark from "@/components/click-spark"
import { brand } from "@/content/brio"
import { getDictionary } from "@/i18n"
import { isLocale, locales } from "@/i18n/config"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brio-energy.vercel.app"

type Params = { params: Promise<{ locale: string }> }

export const viewport: Viewport = {
  themeColor: brand.ink,
}
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const dict = getDictionary(locale)

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      siteName: brand.name,
      locale: locale === "es" ? "es_ES" : "en_GB",
      type: "website",
      images: [{ url: "/images/cans/yuzu-pomelo.jpg", width: 1024, height: 1536, alt: dict.meta.imageAlt }],
    },
    twitter: { card: "summary_large_image" },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Params & { children: React.ReactNode }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <ClickSpark sparkColor={brand.signal} sparkSize={10} sparkRadius={18} sparkCount={8} duration={400}>
          {children}
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}
