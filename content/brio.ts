export const brand = {
  name: "Brio",
  wordmark: "BRIO",
  ink: "#0F0E0B",
  inkSoft: "#191612",
  bone: "#F3EEE6",
  signal: "#FF4A1C",
  jade: "#12B39B",
  email: "hola@brio.example",
} as const

export type FlavourId = "yuzu-pomelo" | "mango-cayena" | "cassis-salvia"

export const flavours: {
  id: FlavourId
  image: string
  accent: string
  name: string
}[] = [
  {
    id: "yuzu-pomelo",
    image: "/images/cans/yuzu-pomelo.jpg",
    accent: "#E0B33C",
    name: "Yuzu & Pomelo",
  },
  {
    id: "mango-cayena",
    image: "/images/cans/mango-cayena.jpg",
    accent: "#E07A2C",
    name: "Mango & Cayenne",
  },
  {
    id: "cassis-salvia",
    image: "/images/cans/cassis-salvia.jpg",
    accent: "#6B4E8E",
    name: "Cassis & Salvia",
  },
]
