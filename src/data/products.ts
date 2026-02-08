export interface ColorVariant {
  color: string;
  images: string[];
  inStock: number;
}

export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  originalPrice?: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: "men" | "women" | "kid" | "unisex";
  colorVariants?: ColorVariant[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export type ValidSizes =
  | "3ml"
  | "10ml"
  | "13ml"
  | "15ml"
  | "20ml"
  | "30ml"
  | "35ml"
  | "40ml"
  | "45ml"
  | "50ml"
  | "55ml"
  | "59ml"
  | "60ml"
  | "70ml"
  | "75ml"
  | "80ml"
  | "90ml"
  | "100ml"
  | "105ml"
  | "110ml"
  | "115ml"
  | "120ml"
  | "125ml"
  | "130ml"
  | "140ml"
  | "145ml"
  | "150ml"
  | "160ml"
  | "180ml"
  | "190ml"
  | "200ml"
  | "210ml"
  | "220ml"
  | "230ml"
  | "240ml"
  | "250ml"
  | "255ml"
  | "260ml"
  | "290ml"
  | "300ml"
  | "350ml"
  | "400ml"
  | "450ml"
  | "500ml"
  | "515ml"
  | "600ml"
  | "650ml"
  | "1000ml"
  | "3.5g"
  | "4.8g"
  | "10g"
  | "10.5g"
  | "20g"
  | "25g"
  | "26g"
  | "30g"
  | "35g"
  | "40g"
  | "45g"
  | "50g"
  | "60g"
  | "80g"
  | "100g"
  | "120g"
  | "150g"
  | "170g"
  | "200g"
  | "220g"
  | "250g"
  | "300g"
  | "unitario"
  | "set";

export type ValidTypes =
  | "accesorios"
  | "cuidado-capilar"
  | "cuidado-facial"
  | "piel"
  | "unas"
  | "brochas"
  | "labios"
  | "ojos";

export const categories: {
  value: ValidTypes | "todos";
  label: string;
  icon: string;
}[] = [
  { value: "todos", label: "Todos", icon: "✨" },
  { value: "cuidado-capilar", label: "Cuidado Capilar", icon: "💇‍♀️" },
  { value: "cuidado-facial", label: "Cuidado Facial", icon: "🧴" },
  { value: "piel", label: "Piel", icon: "🌸" },
  { value: "labios", label: "Labios", icon: "💋" },
  { value: "ojos", label: "Ojos", icon: "👁️" },
  { value: "unas", label: "Uñas", icon: "💅" },
  { value: "brochas", label: "Brochas", icon: "🖌️" },
  { value: "accesorios", label: "Accesorios", icon: "💎" },
];

// Productos de ejemplo para DN Magic Cosmetics
export const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Sérum Vitamina C Iluminador",
    description:
      "Sérum concentrado con vitamina C pura para iluminar y unificar el tono de la piel. Fórmula antioxidante que combate los signos del envejecimiento.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&q=80",
    ],
    inStock: 15,
    price: 89900,
    originalPrice: 119900,
    sizes: ["30ml", "50ml"],
    slug: "serum-vitamina-c-iluminador",
    tags: ["vitamina c", "iluminador", "antioxidante"],
    type: "cuidado-facial",
    gender: "unisex",
    isNew: true,
    isBestseller: true,
  },
  {
    id: "2",
    title: "Mascarilla Hidratante Capilar",
    description:
      "Mascarilla intensiva para cabello seco y dañado. Con aceite de argán y queratina para una hidratación profunda.",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&q=80",
    ],
    inStock: 20,
    price: 54900,
    sizes: ["200ml", "400ml"],
    slug: "mascarilla-hidratante-capilar",
    tags: ["hidratante", "capilar", "argán"],
    type: "cuidado-capilar",
    gender: "unisex",
    isBestseller: true,
  },
  {
    id: "3",
    title: "Labial Matte Larga Duración",
    description:
      "Labial líquido mate de larga duración. Fórmula ligera y confortable que no reseca los labios.",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
    ],
    inStock: 30,
    price: 34900,
    sizes: ["3ml"],
    slug: "labial-matte-larga-duracion",
    tags: ["labial", "mate", "larga duración"],
    type: "labios",
    gender: "women",
    colorVariants: [
      {
        color: "#8B0000",
        images: [
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
        ],
        inStock: 10,
      },
      {
        color: "#FF69B4",
        images: [
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
        ],
        inStock: 10,
      },
      {
        color: "#800020",
        images: [
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
        ],
        inStock: 10,
      },
    ],
  },
  {
    id: "4",
    title: "Set Completo de Brochas Profesionales",
    description:
      "Set de 12 brochas profesionales para maquillaje completo. Cerdas sintéticas de alta calidad.",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80",
    ],
    inStock: 8,
    price: 129900,
    originalPrice: 159900,
    sizes: ["set"],
    slug: "set-completo-brochas-profesionales",
    tags: ["brochas", "profesional", "set"],
    type: "brochas",
    gender: "unisex",
    isNew: true,
  },
  {
    id: "5",
    title: "Crema Corporal Hidratante",
    description:
      "Crema corporal con manteca de karité y vitamina E. Hidratación intensa para todo tipo de piel.",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&q=80",
    ],
    inStock: 25,
    price: 44900,
    sizes: ["200ml", "400ml"],
    slug: "crema-corporal-hidratante",
    tags: ["corporal", "hidratante", "karité"],
    type: "piel",
    gender: "unisex",
  },
  {
    id: "6",
    title: "Paleta de Sombras Sunset",
    description:
      "Paleta de 18 sombras en tonos cálidos. Acabados mate, satinado y glitter.",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80",
    ],
    inStock: 12,
    price: 74900,
    sizes: ["unitario"],
    slug: "paleta-sombras-sunset",
    tags: ["sombras", "paleta", "ojos"],
    type: "ojos",
    gender: "women",
    isBestseller: true,
  },
  {
    id: "7",
    title: "Esmalte Gel Sin Lámpara",
    description:
      "Esmalte en gel de larga duración que no requiere lámpara UV. Acabado brillante profesional.",
    images: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80",
    ],
    inStock: 40,
    price: 19900,
    sizes: ["10ml"],
    slug: "esmalte-gel-sin-lampara",
    tags: ["esmalte", "gel", "uñas"],
    type: "unas",
    gender: "women",
    colorVariants: [
      {
        color: "#FF0000",
        images: [
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80",
        ],
        inStock: 10,
      },
      {
        color: "#FFB6C1",
        images: [
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80",
        ],
        inStock: 10,
      },
      {
        color: "#800080",
        images: [
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80",
        ],
        inStock: 10,
      },
    ],
  },
  {
    id: "8",
    title: "Espejo LED con Aumento",
    description:
      "Espejo de maquillaje con luz LED y aumento 10x. Rotación 360° y base antideslizante.",
    images: [
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&q=80",
    ],
    inStock: 6,
    price: 64900,
    sizes: ["unitario"],
    slug: "espejo-led-aumento",
    tags: ["espejo", "LED", "maquillaje"],
    type: "accesorios",
    gender: "unisex",
    isNew: true,
  },
  {
    id: "9",
    title: "Shampoo Anticaída",
    description:
      "Shampoo fortalecedor con biotina y cafeína. Estimula el crecimiento y previene la caída del cabello.",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80",
    ],
    inStock: 18,
    price: 39900,
    sizes: ["300ml", "500ml"],
    slug: "shampoo-anticaida",
    tags: ["shampoo", "anticaída", "biotina"],
    type: "cuidado-capilar",
    gender: "unisex",
  },
  {
    id: "10",
    title: "Kit Spa Facial Completo",
    description:
      "Kit completo con limpiador, tónico, sérum y crema hidratante. Para una rutina de skincare profesional.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80",
    ],
    inStock: 5,
    price: 189900,
    originalPrice: 249900,
    sizes: ["set"],
    slug: "kit-spa-facial-completo",
    tags: ["kit", "facial", "spa", "skincare"],
    type: "cuidado-facial",
    gender: "unisex",
    isBestseller: true,
  },
];

// Funciones helpers
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProductById(id: string): Product | undefined {
  return sampleProducts.find((product) => product.id === id);
}

export function getProductsByType(type: ValidTypes): Product[] {
  return sampleProducts.filter((product) => product.type === type);
}

export function getProductsByGender(
  gender: "men" | "women" | "kid" | "unisex",
): Product[] {
  return sampleProducts.filter((product) => product.gender === gender);
}

export function getBestsellers(): Product[] {
  return sampleProducts.filter((product) => product.isBestseller);
}

export function getNewProducts(): Product[] {
  return sampleProducts.filter((product) => product.isNew);
}

export function getProductsByTag(tag: string): Product[] {
  return sampleProducts.filter((product) => product.tags?.includes(tag));
}

export function getPromotions(): Product[] {
  return sampleProducts.filter(
    (p) => p.originalPrice && p.originalPrice > p.price,
  );
}
