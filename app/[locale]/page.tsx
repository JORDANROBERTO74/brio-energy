import { notFound } from "next/navigation"
import { CommunitySection } from "@/components/community-section"
import { FlavourCarousel } from "@/components/flavour-carousel"
import { FormulaSection } from "@/components/formula-section"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { RitualsSection } from "@/components/rituals-section"
import { SiteFooter } from "@/components/site-footer"
import type { Dictionary } from "@/i18n"
import { getDictionary } from "@/i18n"
import { isLocale } from "@/i18n/config"

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict: Dictionary = getDictionary(locale)

  return (
    <main className="min-h-screen bg-background">
      <Navigation dict={dict} locale={locale} />
      <HeroSection dict={dict.hero} />
      <FlavourCarousel dict={dict.flavours} />
      <FormulaSection dict={dict.formula} />
      <RitualsSection dict={dict.rituals} />
      <CommunitySection dict={dict.community} />
      <SiteFooter dict={dict.footer} newsletter={dict.newsletter} />
    </main>
  )
}
