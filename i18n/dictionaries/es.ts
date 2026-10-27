import type { Dictionary } from "./en"

export const es: Dictionary = {
  meta: {
    title: "Brio — energía vegetal, sin bajón",
    description:
      "Bebida energética sin azúcar elaborada con guaraná y té verde. 80 mg de cafeína, 12 kcal, en pequeños lotes en Valencia.",
    imageAlt: "Lata de Brio sobre un fondo color hueso",
  },
  nav: {
    links: [
      { label: "Sabores", href: "#flavours" },
      { label: "Fórmula", href: "#formula" },
      { label: "Rituales", href: "#rituals" },
      { label: "Comunidad", href: "#community" },
    ],
    cta: "Únete a la lista",
    ctaHref: "#newsletter",
    menuLabel: "Abrir menú",
    closeLabel: "Cerrar menú",
    languageLabel: "Switch to English",
    homeLabel: "Inicio de Brio",
  },
  hero: {
    badge: "CAFEÍNA VEGETAL · SIN AZÚCAR",
    line1: "SIGUE",
    line2: "EN MARCHA",
    lead: "80 mg de cafeína de guaraná, 12 kcal y nada artificial. Energía que mantiene el ritmo.",
    primaryCta: "Ver los sabores",
    secondaryCta: "Leer la fórmula",
    benefits: ["Sin azúcar", "80 mg de cafeína", "12 kcal", "B6 + B12"],
    imageAlt: "Lata de Brio Yuzu y Pomelo",
  },
  flavours: {
    eyebrow: "TRES SABORES",
    title: "ELIGE TU",
    titleAccent: "RITMO",
    prev: "Sabor anterior",
    next: "Sabor siguiente",
    badges: ["Sin azúcar", "80 mg de cafeína", "12 kcal", "Vegano"],
    note: "330 ml · 2,40 €",
    items: {
      "yuzu-pomelo": {
        name: "Yuzu y Pomelo",
        tagline: "FRESCO Y AMARGO",
        description:
          "Piel de yuzu japonés sobre pomelo rosado. Punzante en el primer sorbo, limpio al final.",
      },
      "mango-cayena": {
        name: "Mango y Cayena",
        tagline: "DULCE Y PICANTE",
        description: "Mango maduro con un toque medido de cayena. Final cálido, cero azúcar.",
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
    eyebrow: "QUÉ LLEVA",
    title: "La fórmula",
    items: [
      {
        value: "80 mg",
        label: "Cafeína de guaraná",
        note: "Liberación constante, sin picos",
      },
      { value: "0 g", label: "Azúcar", note: "Endulzada con eritritol" },
      { value: "12 kcal", label: "Por lata", note: "Ligera para días de entreno" },
      { value: "B6 + B12", label: "Vitaminas", note: "Cubre la dosis diaria" },
    ],
    footnote: "Vegana. Sin gluten. Sin taurina. Sin colorantes artificiales.",
  },
  rituals: {
    eyebrow: "PARA CUÁNDO",
    title: "RITUALES",
    titleAccent: "DIARIOS",
    items: [
      {
        title: "Días de entreno",
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
        description: "Una lata en la mochila gana a la cola del andén.",
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
    title: "¿LISTO PARA",
    titleAccent: "MOVERTE?",
    placeholder: "tu@email.com",
    inputLabel: "Correo electrónico",
    button: "Únete a la lista",
    submitting: "Enviando…",
    success: "Ya estás en la lista.",
    note: "Un correo al mes. Baja cuando quieras.",
  },
  footer: {
    blurb:
      "Brio es una bebida energética sin azúcar elaborada con guaraná y té verde en pequeños lotes en Valencia.",
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
          { label: "Fórmula", href: "#formula" },
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
    legal: ["Privacidad", "Términos", "Cookies"],
    rights: "© 2026 Brio Energy. Todos los derechos reservados.",
    tagline: "Cafeína vegetal, infusionada lento",
  },
}
