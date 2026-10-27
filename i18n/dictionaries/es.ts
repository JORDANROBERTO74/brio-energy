import type { Dictionary } from "./en"

export const es: Dictionary = {
  meta: {
    title: "Brio â€” energÃ­a vegetal, sin bajÃ³n",
    description:
      "Bebida energÃ©tica sin azÃºcar elaborada con guaranÃ¡ y tÃ© verde. 80 mg de cafeÃ­na, 12 kcal, en pequeÃ±os lotes en Valencia.",
    imageAlt: "Lata de Brio sobre un fondo color hueso",
  },
  nav: {
    links: [
      { label: "Sabores", href: "#flavours" },
      { label: "FÃ³rmula", href: "#formula" },
      { label: "Rituales", href: "#rituals" },
      { label: "Comunidad", href: "#community" },
    ],
    cta: "Ãšnete a la lista",
    ctaHref: "#newsletter",
    menuLabel: "Abrir menÃº",
    closeLabel: "Cerrar menÃº",
    languageLabel: "Switch to English",
    homeLabel: "Inicio de Brio",
  },
  hero: {
    badge: "CAFEÃNA VEGETAL Â· SIN AZÃšCAR",
    line1: "SIGUE",
    line2: "EN MARCHA",
    lead: "80 mg de cafeÃ­na de guaranÃ¡, 12 kcal y nada artificial. EnergÃ­a que mantiene el ritmo.",
    primaryCta: "Ver los sabores",
    secondaryCta: "Leer la fÃ³rmula",
    benefits: ["Sin azÃºcar", "80 mg de cafeÃ­na", "12 kcal", "B6 + B12"],
    imageAlt: "Lata de Brio Yuzu y Pomelo",
  },
  flavours: {
    eyebrow: "TRES SABORES",
    title: "ELIGE TU",
    titleAccent: "RITMO",
    prev: "Sabor anterior",
    next: "Sabor siguiente",
    badges: ["Sin azÃºcar", "80 mg de cafeÃ­na", "12 kcal", "Vegano"],
    note: "330 ml Â· 2,40 â‚¬",
    items: {
      "yuzu-pomelo": {
        name: "Yuzu y Pomelo",
        tagline: "FRESCO Y AMARGO",
        description:
          "Piel de yuzu japonÃ©s sobre pomelo rosado. Punzante en el primer sorbo, limpio al final.",
      },
      "mango-cayena": {
        name: "Mango y Cayena",
        tagline: "DULCE Y PICANTE",
        description:
          "Mango maduro con un toque medido de cayena. Final cÃ¡lido, cero azÃºcar.",
      },
      "cassis-salvia": {
        name: "Cassis y Salvia",
        tagline: "OSCURO Y HERBAL",
        description:
          "Grosella negra y salvia sobre una base seca y mineral. El trago del turno de noche.",
      },
    },
  },
  formula: {
    eyebrow: "QUÃ‰ LLEVA",
    title: "La fÃ³rmula",
    items: [
      {
        value: "80 mg",
        label: "CafeÃ­na de guaranÃ¡",
        note: "LiberaciÃ³n constante, sin picos",
      },
      { value: "0 g", label: "AzÃºcar", note: "Endulzada con eritritol" },
      { value: "12 kcal", label: "Por lata", note: "Ligera para dÃ­as de entreno" },
      { value: "B6 + B12", label: "Vitaminas", note: "Cubre la dosis diaria" },
    ],
    footnote: "Vegana. Sin gluten. Sin taurina. Sin colorantes artificiales.",
  },
  rituals: {
    eyebrow: "PARA CUÃNDO",
    title: "RITUALES",
    titleAccent: "DIARIOS",
    items: [
      {
        title: "DÃ­as de entreno",
        description: "Combustible previo que no cae pesado.",
      },
      {
        title: "Horas de estudio",
        description: "Para el montaje largo, la mezcla y la entrega.",
      },
      {
        title: "Turno de noche",
        description: "Mantiene el ritmo cuando el reloj juega en contra.",
      },
      {
        title: "Carretera y tren",
        description: "Una lata en la mochila gana a la cola del andÃ©n.",
      },
    ],
  },
  community: {
    eyebrow: "DESDE LA COMUNIDAD",
    title: "HECHO EN",
    titleAccent: "LA CALLE",
    lead: "Etiqueta #brioenergy y puede que salga tu lata.",
  },
  newsletter: {
    title: "Â¿LISTO PARA",
    titleAccent: "MOVERTE?",
    placeholder: "tu@email.com",
    inputLabel: "Correo electrÃ³nico",
    button: "Ãšnete a la lista",
    submitting: "Enviandoâ€¦",
    success: "Ya estÃ¡s en la lista.",
    note: "Un correo al mes. Baja cuando quieras.",
  },
  footer: {
    blurb:
      "Brio es una bebida energÃ©tica sin azÃºcar elaborada con guaranÃ¡ y tÃ© verde en pequeÃ±os lotes en Valencia.",
    columns: [
      {
        title: "Productos",
        links: [
          { label: "Yuzu y Pomelo", href: "#flavours" },
          { label: "Mango y Cayena", href: "#flavours" },
          { label: "Cassis y Salvia", href: "#flavours" },
          { label: "Pack de 12", href: "#flavours" },
        ],
      },
      {
        title: "Explora",
        links: [
          { label: "FÃ³rmula", href: "#formula" },
          { label: "Rituales", href: "#rituals" },
          { label: "Comunidad", href: "#community" },
          { label: "Newsletter", href: "#newsletter" },
        ],
      },
      {
        title: "Contacto",
        links: [
          { label: "hola@brio.example", href: "mailto:hola@brio.example" },
          { label: "Prensa", href: "mailto:press@brio.example" },
        ],
      },
    ],
    legal: ["Privacidad", "TÃ©rminos", "Cookies"],
    rights: "Â© 2026 Brio Energy. Todos los derechos reservados.",
    tagline: "CafeÃ­na vegetal, infusionada lento",
  },
}
