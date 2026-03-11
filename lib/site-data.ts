export type ProductKey = "vitality" | "unwind" | "afterglow" | "cellular-energy" | "total-defense" | "zen-matrix";

export type Product = {
  slug: ProductKey;
  name: string;
  shortLabel: string;
  state: string;
  functionLine: string;
  tagline: string;
  description: string;
  benefitTitle: string;
  benefitBody: string;
  base: string[];
  ingredients: string[];
  image: string;
  gradient: string;
  glow: string;
  orderText: string;
  seoKeywords: string[];
  isFeatured?: boolean;
  price?: string;
  format?: string;
};

const whatsappBase = "https://wa.me/6281339451454";

export const products: Product[] = [
  {
    slug: "vitality",
    name: "Vitality",
    isFeatured: true,
    shortLabel: "Energy & Blood Flow",
    state: "Energy",
    functionLine: "Peak Energy, Blood Flow & Libido",
    tagline: "Designed to sustain vitality and focus, it helps you stay strong, clear, and ready to perform. Whether at work, in training, or in passion.",
    description:
      "Vitality is the performance-forward blend for training, long work blocks, and nights when you want energy that feels switched on rather than over-caffeinated.",
    benefitTitle: "Performance without the crash",
    benefitBody:
      "A nitric-oxide-forward stack with clinically relevant amino acids and adaptogens to support blood flow, stamina, and confident energy.",
    base: ["Tart Cherry concentrate", "Pomegranate concentrate"],
    ingredients: [
      "2000mg L-Citrulline",
      "600mg L-Arginine",
      "400mg Tongkat Ali",
      "1500mg Gelatinized Maca"
    ],
    image: "/products/VITALITY.png",
    gradient: "from-[#8A5CFF] via-[#B46AFF] to-[#FF5C5C]",
    glow: "rgba(180,106,255,0.32)",
    orderText: "Hi I want to order EUNOIA VITALITY",
    seoKeywords: [
      "nitric oxide energy drink",
      "L-citrulline energy supplement",
      "libido performance drink"
    ]
  },
  {
    slug: "unwind",
    name: "Unwind",
    isFeatured: true,
    shortLabel: "Relaxation & Calm Focus",
    state: "Relaxation",
    functionLine: "Relaxation Without Sedation",
    tagline: "Smooths tension without dulling your mind. Supports calm focus so you can unwind while staying clear and present.",
    description:
      "Unwind is designed for stress-heavy days, evening resets, and work sessions that need composure more than stimulation.",
    benefitTitle: "Calm focus, clean landing",
    benefitBody:
      "Ashwagandha, L-theanine, magnesium glycinate, and glycine combine to help settle tension while keeping your head clear.",
    base: ["3000mg Glycine"],
    ingredients: [
      "300mg Ashwagandha KSM-66",
      "200mg L-Theanine",
      "150mg Magnesium Glycinate"
    ],
    image: "/products/UNWIND.png",
    gradient: "from-[#FF3F86] via-[#C4A6FF] to-[#63E6E2]",
    glow: "rgba(196,166,255,0.34)",
    orderText: "Hi I want to order EUNOIA UNWIND",
    seoKeywords: [
      "ashwagandha relaxation drink",
      "stress relief supplement drink",
      "calm focus beverage"
    ]
  },
  {
    slug: "afterglow",
    name: "Afterglow",
    isFeatured: true,
    shortLabel: "Recovery & Brain Clarity",
    state: "Recovery",
    functionLine: "Detox & Brain Fog Clearance",
    tagline: "Hydrates and resets for a clearer morning. Clears the fog so you feel refreshed, balanced, and ready to move forward.",
    description:
      "Afterglow targets the heavy, foggy state after hard nights or hard weeks with a recovery blend that feels clean and usable.",
    benefitTitle: "Recovery that feels immediate",
    benefitBody:
      "A hydration-led base with botanical support aimed at mental clarity, liver support, and a more functional recovery window.",
    base: ["Coconut Water", "Liquid Maca Extract"],
    ingredients: [
      "300mg Milk Thistle",
      "300mg Turmeric",
      "500mg Lion's Mane Mushroom"
    ],
    image: "/products/AFTERGLOW.png",
    gradient: "from-[#A3FF3B] via-[#FFD35A] to-[#FF8A00]",
    glow: "rgba(255,211,90,0.32)",
    orderText: "Hi I want to order EUNOIA AFTERGLOW",
    seoKeywords: [
      "detox recovery drink",
      "lion's mane brain supplement",
      "liver support drink"
    ]
  },
  {
    slug: "cellular-energy",
    name: "Cellular Energy",
    isFeatured: false,
    shortLabel: "NAD+ Boosting",
    state: "Energy",
    functionLine: "NAD+ Boosting & Heart Health",
    tagline: "Support cellular energy and anti-aging with premium NAD+ precursors and heart-supporting CoQ10.",
    description:
      "Cellular Energy gummies deliver NMN and CoQ10 to boost NAD+ levels, supporting youthful cellular function and cardiovascular health.",
    benefitTitle: "Anti-aging at the cellular level",
    benefitBody:
      "NAD+ boosting (NMN 250mg) combined with CoQ10 (100mg) supports energy production, longevity markers, and heart health.",
    base: [],
    ingredients: [
      "250mg NMN",
      "100mg CoQ10"
    ],
    image: "/products/eunoia-cellular-pack.png",
    gradient: "from-[#8A5CFF] via-[#B46AFF] to-[#FF5C5C]",
    glow: "rgba(180,106,255,0.32)",
    orderText: "Hi I want to order EUNOIA CELLULAR ENERGY",
    seoKeywords: [
      "NAD+ booster gummies",
      "NMN supplement",
      "anti-aging gummies"
    ],
    price: "IDR 99.000",
    format: "60 gummies per box"
  },
  {
    slug: "total-defense",
    name: "Total Defense",
    isFeatured: false,
    shortLabel: "Complete Immunity",
    state: "Protection",
    functionLine: "Complete Immune Support & Energy Baseline",
    tagline: "Comprehensive immunity support with essential vitamins, minerals, and B-Complex for daily wellness.",
    description:
      "Total Defense gummies provide a complete immunity stack with Vitamin C, Vitamin D3 + K2, Zinc, and B-Complex for full-spectrum daily defense.",
    benefitTitle: "Daily immune resilience",
    benefitBody:
      "Multivitamin support (Vit C, D3 + K2, Zinc, B-Complex) works together to strengthen immune response and energy baseline.",
    base: [],
    ingredients: [
      "Vitamin C",
      "Vitamin D3 + K2",
      "Zinc",
      "B-Complex"
    ],
    image: "/products/eunoia-total-defense-pack.png",
    gradient: "from-[#FFD35A] via-[#FF8A00] to-[#FF5C5C]",
    glow: "rgba(255,211,90,0.32)",
    orderText: "Hi I want to order EUNOIA TOTAL DEFENSE",
    seoKeywords: [
      "immunity gummies",
      "vitamin D3 K2 supplement",
      "zinc gummies"
    ],
    price: "IDR 99.000",
    format: "60 gummies per box"
  },
  {
    slug: "zen-matrix",
    name: "Zen Matrix",
    isFeatured: false,
    shortLabel: "Cortisol Control",
    state: "Relaxation",
    functionLine: "Cortisol Control & Relaxation",
    tagline: "Stress-responsive blend designed to manage cortisol and promote calm, balanced relaxation.",
    description:
      "Zen Matrix gummies combine Ashwagandha KSM-66 and Magnesium to address stress at the hormonal level while supporting deep relaxation.",
    benefitTitle: "Stress management at the source",
    benefitBody:
      "Ashwagandha (KSM-66) and Magnesium work together to reduce cortisol patterns and promote parasympathetic activation for genuine calm.",
    base: [],
    ingredients: [
      "Ashwagandha KSM-66",
      "Magnesium"
    ],
    image: "/products/eunoia-zen-matrix.png",
    gradient: "from-[#FF3F86] via-[#C4A6FF] to-[#63E6E2]",
    glow: "rgba(196,166,255,0.34)",
    orderText: "Hi I want to order EUNOIA ZEN MATRIX",
    seoKeywords: [
      "ashwagandha gummies",
      "stress relief gummies",
      "cortisol control"
    ],
    price: "IDR 99.000",
    format: "60 gummies per box"
  }
];

export const featuredIngredients = [
  "L-Citrulline",
  "Tongkat Ali",
  "Ashwagandha",
  "Lion's Mane",
  "Magnesium Glycinate"
];

export const lifestyleMoments = [
  "Gym performance",
  "Recovery mornings",
  "Relaxation at home",
  "Work productivity"
];

export const primaryKeywords = [
  "functional vitamin drink",
  "energy vitamin drink",
  "nitric oxide drink",
  "relaxation supplement drink",
  "recovery vitamin drink"
];

export const seoTopics = [
  "Benefits of L-Citrulline for energy",
  "Ashwagandha for stress and focus",
  "Lion's Mane for brain fog",
  "Nitric oxide and blood flow"
];

export const whatsappOrderTemplate = `Hi, I want to order:%0A%0AProduct:%0AQuantity:%0ADelivery location:`;

export function getProduct(slug: ProductKey) {
  return products.find((product) => product.slug === slug);
}

export function getWhatsAppLink(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function getTemplateWhatsAppLink() {
  return `${whatsappBase}?text=${whatsappOrderTemplate}`;
}