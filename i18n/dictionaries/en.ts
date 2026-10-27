import type { FlavourId } from "@/content/brio"

export const en = {
  meta: {
    title: "Brio â€” plant energy, no crash",
    description:
      "Zero-sugar energy drink brewed with guaranÃ¡ and green tea. 80 mg caffeine, 12 kcal, made in small batches in Valencia.",
    imageAlt: "Brio can on a bone-coloured background",
  },
  nav: {
    links: [
      { label: "Flavours", href: "#flavours" },
      { label: "Formula", href: "#formula" },
      { label: "Rituals", href: "#rituals" },
      { label: "Community", href: "#community" },
    ],
    cta: "Join the list",
    ctaHref: "#newsletter",
    menuLabel: "Open menu",
    closeLabel: "Close menu",
    languageLabel: "Cambiar a espaÃ±ol",
    homeLabel: "Brio home",
  },
  hero: {
    badge: "PLANT CAFFEINE Â· ZERO SUGAR",
    line1: "STAY",
    line2: "IN MOTION",
    lead: "80 mg of guaranÃ¡ caffeine, 12 kcal and nothing artificial. Energy that holds its rhythm.",
    primaryCta: "See the flavours",
    secondaryCta: "Read the formula",
    benefits: ["Zero sugar", "80 mg caffeine", "12 kcal", "B6 + B12"],
    imageAlt: "Brio Yuzu & Pomelo can",
  },
  flavours: {
    eyebrow: "THREE FLAVOURS",
    title: "PICK YOUR",
    titleAccent: "PACE",
    prev: "Previous flavour",
    next: "Next flavour",
    badges: ["Zero sugar", "80 mg caffeine", "12 kcal", "Vegan"],
    note: "330 ml Â· â‚¬2.40",
    items: {
      "yuzu-pomelo": {
        name: "Yuzu & Pomelo",
        tagline: "BRIGHT & BITTER",
        description:
          "Japanese yuzu peel over pink pomelo. Sharp on the first sip, clean on the finish.",
      },
      "mango-cayena": {
        name: "Mango & Cayenne",
        tagline: "SWEET HEAT",
        description:
          "Ripe mango with a measured kick of cayenne. Warm finish, zero sugar.",
      },
      "cassis-salvia": {
        name: "Cassis & Salvia",
        tagline: "DARK & HERBAL",
        description:
          "Blackcurrant and sage over a dry, mineral base. The late-shift pour.",
      },
    } satisfies Record<FlavourId, { name: string; tagline: string; description: string }>,
  },
  formula: {
    eyebrow: "WHAT'S INSIDE",
    title: "The formula",
    items: [
      {
        value: "80 mg",
        label: "GuaranÃ¡ caffeine",
        note: "Steady release, no spike",
      },
      { value: "0 g", label: "Sugar", note: "Sweetened with erythritol" },
      { value: "12 kcal", label: "Per can", note: "Light enough for training days" },
      { value: "B6 + B12", label: "Vitamins", note: "Covers a day's needs" },
    ],
    footnote: "Vegan. Gluten free. No taurine. No artificial colours.",
  },
  rituals: {
    eyebrow: "WHEN IT'S FOR",
    title: "EVERYDAY",
    titleAccent: "RITUALS",
    items: [
      {
        title: "Training days",
        description: "Pre-session fuel that does not sit heavy.",
      },
      {
        title: "Studio hours",
        description: "For the long edit, the mixdown and the deadline.",
      },
      {
        title: "Night shift",
        description: "Keeps the rhythm when the clock is against you.",
      },
      {
        title: "Road and rail",
        description: "A can in the bag beats a queue at the platform.",
      },
    ],
  },
  community: {
    eyebrow: "FROM THE COMMUNITY",
    title: "SHOT ON",
    titleAccent: "THE ROAD",
    lead: "Tag #brioenergy and we might feature your can.",
  },
  newsletter: {
    title: "READY TO",
    titleAccent: "MOVE?",
    placeholder: "you@email.com",
    inputLabel: "Email address",
    button: "Join the list",
    submitting: "Joiningâ€¦",
    success: "You're on the list.",
    note: "One email a month. Unsubscribe anytime.",
  },
  footer: {
    blurb:
      "Brio is a zero-sugar energy drink brewed with guaranÃ¡ and green tea in small batches in Valencia.",
    columns: [
      {
        title: "Products",
        links: [
          { label: "Yuzu & Pomelo", href: "#flavours" },
          { label: "Mango & Cayenne", href: "#flavours" },
          { label: "Cassis & Salvia", href: "#flavours" },
          { label: "12-pack", href: "#flavours" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "Formula", href: "#formula" },
          { label: "Rituals", href: "#rituals" },
          { label: "Community", href: "#community" },
          { label: "Newsletter", href: "#newsletter" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "hola@brio.example", href: "mailto:hola@brio.example" },
          { label: "Press", href: "mailto:press@brio.example" },
        ],
      },
    ],
    legal: ["Privacy", "Terms", "Cookies"],
    rights: "Â© 2026 Brio Energy. All rights reserved.",
    tagline: "Plant caffeine, brewed slow",
  },
}

export type Dictionary = typeof en
