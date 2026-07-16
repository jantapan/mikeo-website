export type LocalizedText = {
  th: string;
  en?: string;
};

export type CategoryId = "drinks" | "supplements" | "jelly" | "beauty";

export type Category = {
  id: CategoryId;
  slug: string;
  name: LocalizedText;
  shortLabel: LocalizedText;
};

export type ProductContentImage = {
  src: string;
  width: number;
  height: number;
  alt: LocalizedText;
};

export type ProductAccent =
  | "leaf"
  | "pistachio"
  | "coffee"
  | "cacao"
  | "coral"
  | "orange"
  | "sakura"
  | "berry"
  | "apple";

export type ProductEffect =
  | "veggie-bloom"
  | "pistachio-orbit"
  | "birdnest-steam"
  | "matcha-mist"
  | "cocoa-splash"
  | "tomato-burst"
  | "citrus-burst"
  | "sakura-fall"
  | "berry-glow"
  | "apple-crisp"
  | "berry-fiber"
  | "glowy-spark"
  | "fitty-fresh";

// All product content below is transcribed from brand-supplied packaging and
// material images in incoming/ (see docs/PRODUCT-IMAGE-INVENTORY.md).
// Customer guidance is displayed as supplied artwork; no unverified prices,
// contact details, registration numbers, or claims are added.
export type Product = {
  slug: string;
  categoryId: CategoryId;
  name: LocalizedText;
  description?: LocalizedText;
  packSize?: LocalizedText;
  /** Total number of extracts as printed on the pack/brand card. */
  extractsTotal?: LocalizedText;
  /** Headline extracts visible on the pack front or brand ingredient card — not the full list. */
  keyExtracts?: LocalizedText[];
  /** Directions as printed on the brand "How to use" cards. */
  directions?: LocalizedText[];
  image?: {
    src: string;
    width: number;
    height: number;
    alt: LocalizedText;
  };
  ingredientImages: ProductContentImage[];
  compositionImages: ProductContentImage[];
  usageImages: ProductContentImage[];
  advisoryImages: ProductContentImage[];
  accent: ProductAccent;
  effect: ProductEffect;
  visual: "pouch" | "box" | "jar" | "bottle" | "tube";
};

export const categories: Category[] = [
  {
    id: "drinks",
    slug: "coffee-health-drinks",
    name: { th: "กาแฟและเครื่องดื่มสุขภาพ", en: "Coffee & health drinks" },
    shortLabel: { th: "เครื่องดื่ม", en: "Drinks" },
  },
  {
    id: "supplements",
    slug: "fiber-supplements",
    name: { th: "ไฟเบอร์และอาหารเสริม", en: "Fiber & supplements" },
    shortLabel: { th: "อาหารเสริม", en: "Supplements" },
  },
  {
    id: "jelly",
    slug: "jelly",
    name: { th: "เยลลี่", en: "Jelly" },
    shortLabel: { th: "เยลลี่", en: "Jelly" },
  },
  {
    id: "beauty",
    slug: "beauty-cosmetics",
    name: { th: "ความงามและเครื่องสำอาง", en: "Beauty & cosmetics" },
    shortLabel: { th: "ความงาม", en: "Beauty" },
  },
];

const drinkDirections: LocalizedText[] = [
  { th: "ชงร้อน: ครั้งละ 2 ซอง ต่อน้ำร้อน 120 มล.", en: "Hot: 2 sachets with 120 ml of hot water." },
  { th: "ชงเย็น: ครั้งละ 2 ซอง ต่อน้ำร้อน 50 มล. แล้วเติมน้ำแข็ง", en: "Iced: 2 sachets with 50 ml of hot water, then add ice." },
  { th: "ทานตอนเช้าหรือกลางวัน ก่อนหรือหลังอาหาร 30 นาที หรือจิบระหว่างวัน", en: "Morning or daytime, 30 minutes before or after a meal, or sip through the day." },
];

const glutaDirections: LocalizedText[] = [
  { th: "ทานตอนเช้าหรือตอนท้องว่าง 2 ซอง ต่อน้ำ 120 มล. หรือทานก่อนนอน 2 ซอง ต่อน้ำ 120 มล.", en: "Take 2 sachets with 120 ml of water in the morning or on an empty stomach, or 2 sachets with 120 ml of water before bedtime." },
  { th: "สูตรปกติ: ครั้งละ 1 ซอง · สูตรเร่งด่วน: ครั้งละ 2 ซอง", en: "Regular: 1 sachet per serving · Intensive: 2 sachets per serving." },
];

const fiberDirections: LocalizedText[] = [
  { th: "ทานหลังอาหารมื้อหนัก 30 นาที 2 ซอง ต่อน้ำ 120 มล. หรือทานก่อนนอน 2 ซอง ต่อน้ำ 120 มล.", en: "Take 2 sachets with 120 ml of water 30 minutes after a heavy meal, or 2 sachets with 120 ml of water before bedtime." },
  { th: "สูตรปกติ: ครั้งละ 1 ซอง · สูตรดื้อยา: ครั้งละ 2 ซอง", en: "Regular: 1 sachet per serving · Resistant: 2 sachets per serving." },
];

const jimmiDirections: LocalizedText[] = [
  { th: "รับประทานวันละ 1 ซอง หลังอาหารหรือก่อนนอน", en: "Take 1 sachet daily, after meals or before bedtime." },
  { th: "ฉีกซอง เทใส่ปาก เคี้ยวและกลืนได้เลย ไม่ต้องดื่มน้ำตาม", en: "Tear the sachet, pour into the mouth, chew and swallow — no water needed." },
];

type ProductShowcaseContent = Pick<
  Product,
  "ingredientImages" | "compositionImages" | "usageImages" | "accent" | "effect"
>;

type ProductEvidenceContent = Pick<
  Product,
  "advisoryImages"
>;

function contentImage(
  slug: string,
  filename: string,
  width: number,
  height: number,
  alt: LocalizedText,
): ProductContentImage {
  return {
    src: `/images/product-content/${slug}/${filename}`,
    width,
    height,
    alt,
  };
}

function evidenceImage(
  slug: string,
  filename: string,
  productName: string,
  width = 1280,
  height = 1280,
): ProductContentImage {
  return {
    src: `/images/product-evidence/${slug}/${filename}`,
    width,
    height,
    alt: {
      th: `ภาพข้อมูลสำคัญสำหรับลูกค้าสำหรับ ${productName}`,
      en: `Customer guidance artwork for ${productName}`,
    },
  };
}

const productShowcaseContent: Record<string, ProductShowcaseContent> = {
  "veggie-fiber-coffee": {
    accent: "leaf",
    effect: "veggie-bloom",
    ingredientImages: [
      contentImage("veggie-fiber-coffee", "ingredient-overview.webp", 1280, 1280, {
        th: "ภาพสารสกัดสำคัญจากสื่อแบรนด์ของไมเกว เวจจี้ ไฟเบอร์ คอฟฟี่ มิกซ์ พลัส",
        en: "Brand-supplied key-extract artwork for Mikeo Veggie Fiber Coffee Mix Plus",
      }),
    ],
    compositionImages: [
      contentImage("veggie-fiber-coffee", "composition-grid.webp", 1280, 1280, {
        th: "ภาพรวมส่วนประกอบจากสื่อแบรนด์ของไมเกว เวจจี้ ไฟเบอร์ คอฟฟี่ มิกซ์ พลัส",
        en: "Brand-supplied composition artwork for Mikeo Veggie Fiber Coffee Mix Plus",
      }),
    ],
    usageImages: [
      contentImage("veggie-fiber-coffee", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว เวจจี้ ไฟเบอร์ คอฟฟี่ มิกซ์ พลัส",
        en: "Brand-supplied how-to artwork for Mikeo Veggie Fiber Coffee Mix Plus",
      }),
    ],
  },
  "pistachio-coffee": {
    accent: "pistachio",
    effect: "pistachio-orbit",
    ingredientImages: [
      contentImage("pistachio-coffee", "ingredient-overview.webp", 1280, 1280, {
        th: "ภาพสารสกัดสำคัญจากสื่อแบรนด์ของไมเกว พิสตาชิโอ คอฟฟี่ มิกซ์ พลัส",
        en: "Brand-supplied key-extract artwork for Mikeo Pistachio Coffee Mix Plus",
      }),
    ],
    compositionImages: [
      contentImage("pistachio-coffee", "composition-grid.webp", 1280, 1280, {
        th: "ภาพรวมส่วนประกอบจากสื่อแบรนด์ของไมเกว พิสตาชิโอ คอฟฟี่ มิกซ์ พลัส",
        en: "Brand-supplied composition artwork for Mikeo Pistachio Coffee Mix Plus",
      }),
    ],
    usageImages: [
      contentImage("pistachio-coffee", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว พิสตาชิโอ คอฟฟี่ มิกซ์ พลัส",
        en: "Brand-supplied how-to artwork for Mikeo Pistachio Coffee Mix Plus",
      }),
    ],
  },
  "coffee-bird-nest": {
    accent: "coffee",
    effect: "birdnest-steam",
    ingredientImages: [
      contentImage("coffee-bird-nest", "ingredient-overview.webp", 1144, 1430, {
        th: "ภาพสารสกัดสำคัญจากสื่อแบรนด์ของไมเกว คอฟฟี่ เบิร์ด เนสท์",
        en: "Brand-supplied key-extract artwork for Mikeo Coffee Bird Nest",
      }),
    ],
    compositionImages: [],
    usageImages: [
      contentImage("coffee-bird-nest", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว คอฟฟี่ เบิร์ด เนสท์",
        en: "Brand-supplied how-to artwork for Mikeo Coffee Bird Nest",
      }),
    ],
  },
  "matcha-latte-xs": {
    accent: "leaf",
    effect: "matcha-mist",
    ingredientImages: [
      contentImage("matcha-latte-xs", "ingredient-overview.webp", 1280, 1280, {
        th: "ภาพสารสกัดสำคัญจากสื่อแบรนด์ของไมเกว มัทฉะ ลาเต้ เอ็กซ์เอส มิกซ์ พลัส",
        en: "Brand-supplied key-extract artwork for MIKEO Matcha Latte XS Mix Plus",
      }),
    ],
    compositionImages: [
      contentImage("matcha-latte-xs", "composition-grid.webp", 1280, 1280, {
        th: "ภาพรวมส่วนประกอบจากสื่อแบรนด์ของไมเกว มัทฉะ ลาเต้ เอ็กซ์เอส มิกซ์ พลัส",
        en: "Brand-supplied composition artwork for MIKEO Matcha Latte XS Mix Plus",
      }),
    ],
    usageImages: [
      contentImage("matcha-latte-xs", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว มัทฉะ ลาเต้ เอ็กซ์เอส มิกซ์ พลัส",
        en: "Brand-supplied how-to artwork for MIKEO Matcha Latte XS Mix Plus",
      }),
    ],
  },
  "cacao-cocoa-mix-plus": {
    accent: "cacao",
    effect: "cocoa-splash",
    ingredientImages: [
      contentImage("cacao-cocoa-mix-plus", "ingredient-overview.webp", 1144, 1430, {
        th: "ภาพสารสกัดสำคัญจากสื่อแบรนด์ของไมเกว คาเคา แอนด์ โกโก้ มิกซ์ พลัส",
        en: "Brand-supplied key-extract artwork for MIKEO Cacao & Cocoa Mix Plus",
      }),
    ],
    compositionImages: [
      contentImage("cacao-cocoa-mix-plus", "composition-overview.webp", 1280, 1280, {
        th: "ภาพรวมส่วนประกอบจากสื่อแบรนด์ของไมเกว คาเคา แอนด์ โกโก้ มิกซ์ พลัส",
        en: "Brand-supplied composition overview for MIKEO Cacao & Cocoa Mix Plus",
      }),
      contentImage("cacao-cocoa-mix-plus", "composition-grid.webp", 1280, 1280, {
        th: "ภาพตารางส่วนประกอบจากสื่อแบรนด์ของไมเกว คาเคา แอนด์ โกโก้ มิกซ์ พลัส",
        en: "Brand-supplied composition grid for MIKEO Cacao & Cocoa Mix Plus",
      }),
    ],
    usageImages: [
      contentImage("cacao-cocoa-mix-plus", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว คาเคา แอนด์ โกโก้ มิกซ์ พลัส",
        en: "Brand-supplied how-to artwork for MIKEO Cacao & Cocoa Mix Plus",
      }),
    ],
  },
  "gluta-collagen-tomato": {
    accent: "coral",
    effect: "tomato-burst",
    ingredientImages: [
      contentImage("gluta-collagen-tomato", "ingredient-overview.webp", 1144, 1430, {
        th: "ภาพสารสกัดสำคัญจากสื่อแบรนด์ของไมเกว กลูต้า คอลลาเจน โทเมโท",
        en: "Brand-supplied key-extract artwork for MIKEO Gluta Collagen Tomato",
      }),
    ],
    compositionImages: [],
    usageImages: [
      contentImage("gluta-collagen-tomato", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว กลูต้า คอลลาเจน โทเมโท",
        en: "Brand-supplied how-to artwork for MIKEO Gluta Collagen Tomato",
      }),
    ],
  },
  "blood-orange-c": {
    accent: "orange",
    effect: "citrus-burst",
    ingredientImages: [
      contentImage("blood-orange-c", "ingredient-overview.webp", 1080, 1350, {
        th: "ภาพสารสกัดสำคัญจากสื่อแบรนด์ของไมเกว บลัด ออเรนจ์ ซี",
        en: "Brand-supplied key-extract artwork for MIKEO Blood Orange C",
      }),
    ],
    compositionImages: [
      contentImage("blood-orange-c", "composition-grid.webp", 1280, 1280, {
        th: "ภาพรวมส่วนประกอบจากสื่อแบรนด์ของไมเกว บลัด ออเรนจ์ ซี",
        en: "Brand-supplied composition artwork for MIKEO Blood Orange C",
      }),
    ],
    usageImages: [
      contentImage("blood-orange-c", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว บลัด ออเรนจ์ ซี",
        en: "Brand-supplied how-to artwork for MIKEO Blood Orange C",
      }),
    ],
  },
  "gluta-collagen-sakura-peach": {
    accent: "sakura",
    effect: "sakura-fall",
    ingredientImages: [
      contentImage("gluta-collagen-sakura-peach", "ingredient-overview.webp", 1080, 1350, {
        th: "ภาพสารสกัดสำคัญจากสื่อแบรนด์ของไมเกว กลูต้า คอลลาเจน ซากุระ พีช",
        en: "Brand-supplied key-extract artwork for MIKEO Gluta Collagen Sakura Peach",
      }),
    ],
    compositionImages: [
      contentImage("gluta-collagen-sakura-peach", "composition-grid.webp", 1280, 1280, {
        th: "ภาพรวมส่วนประกอบจากสื่อแบรนด์ของไมเกว กลูต้า คอลลาเจน ซากุระ พีช",
        en: "Brand-supplied composition artwork for MIKEO Gluta Collagen Sakura Peach",
      }),
    ],
    usageImages: [
      contentImage("gluta-collagen-sakura-peach", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว กลูต้า คอลลาเจน ซากุระ พีช",
        en: "Brand-supplied how-to artwork for MIKEO Gluta Collagen Sakura Peach",
      }),
    ],
  },
  "collagen-berry-zinc": {
    accent: "berry",
    effect: "berry-glow",
    ingredientImages: [
      contentImage("collagen-berry-zinc", "ingredient-overview.webp", 1080, 1350, {
        th: "ภาพสารสกัดสำคัญจากสื่อแบรนด์ของไมเกว คอลลาเจน เบอร์รี่ ซิงก์",
        en: "Brand-supplied key-extract artwork for MIKEO Collagen Berry Zinc",
      }),
    ],
    compositionImages: [
      contentImage("collagen-berry-zinc", "composition-grid.webp", 1280, 1280, {
        th: "ภาพรวมส่วนประกอบจากสื่อแบรนด์ของไมเกว คอลลาเจน เบอร์รี่ ซิงก์",
        en: "Brand-supplied composition artwork for MIKEO Collagen Berry Zinc",
      }),
    ],
    usageImages: [
      contentImage("collagen-berry-zinc", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว คอลลาเจน เบอร์รี่ ซิงก์",
        en: "Brand-supplied how-to artwork for MIKEO Collagen Berry Zinc",
      }),
    ],
  },
  "fiber-xs-green-apple": {
    accent: "apple",
    effect: "apple-crisp",
    ingredientImages: [],
    compositionImages: [
      contentImage("fiber-xs-green-apple", "composition-grid.webp", 1280, 1280, {
        th: "ภาพรวมส่วนประกอบจากสื่อแบรนด์ของไมเกว ไฟเบอร์ เอ็กซ์เอส กรีน แอปเปิล",
        en: "Brand-supplied composition artwork for MIKEO Fiber XS Green Apple",
      }),
    ],
    usageImages: [
      contentImage("fiber-xs-green-apple", "usage-guide.webp", 1600, 1566, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว ไฟเบอร์ เอ็กซ์เอส กรีน แอปเปิล",
        en: "Brand-supplied how-to artwork for MIKEO Fiber XS Green Apple",
      }),
    ],
  },
  "fiber-xs-plus-berry-zinc": {
    accent: "berry",
    effect: "berry-fiber",
    ingredientImages: [],
    compositionImages: [
      contentImage("fiber-xs-plus-berry-zinc", "composition-grid.webp", 1280, 1280, {
        th: "ภาพรวมส่วนประกอบจากสื่อแบรนด์ของไมเกว ไฟเบอร์ เอ็กซ์เอส พลัส เบอร์รี่ ซิงก์",
        en: "Brand-supplied composition artwork for MIKEO Fiber XS Plus Berry Zinc",
      }),
    ],
    usageImages: [
      contentImage("fiber-xs-plus-berry-zinc", "usage-guide.webp", 1280, 1280, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของไมเกว ไฟเบอร์ เอ็กซ์เอส พลัส เบอร์รี่ ซิงก์",
        en: "Brand-supplied how-to artwork for MIKEO Fiber XS Plus Berry Zinc",
      }),
    ],
  },
  "jimmi-glowy-probiotic": {
    accent: "sakura",
    effect: "glowy-spark",
    ingredientImages: [],
    compositionImages: [],
    usageImages: [
      contentImage("jimmi-glowy-probiotic", "usage-guide.webp", 1600, 1600, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของจิมมี่ โกลวี่ โพรไบโอติก",
        en: "Brand-supplied how-to artwork for Jimmi Glowy Probiotic",
      }),
    ],
  },
  "jimmi-fitty-probiotic": {
    accent: "apple",
    effect: "fitty-fresh",
    ingredientImages: [],
    compositionImages: [],
    usageImages: [
      contentImage("jimmi-fitty-probiotic", "usage-guide.webp", 1200, 1200, {
        th: "ภาพวิธีรับประทานจากสื่อแบรนด์ของจิมมี่ ฟิตตี้ โพรไบโอติก",
        en: "Brand-supplied how-to artwork for Jimmi Fitty Probiotic",
      }),
    ],
  },
};

const productEvidenceContent: Partial<Record<string, ProductEvidenceContent>> = {
  "veggie-fiber-coffee": {
    advisoryImages: [
      evidenceImage("veggie-fiber-coffee", "customer-guidance.webp", "Mikeo Veggie Fiber Coffee Mix Plus"),
    ],
  },
  "pistachio-coffee": {
    advisoryImages: [
      evidenceImage("pistachio-coffee", "customer-guidance.webp", "Mikeo Pistachio Coffee Mix Plus"),
    ],
  },
  "coffee-bird-nest": {
    advisoryImages: [
      evidenceImage("coffee-bird-nest", "customer-guidance.webp", "Mikeo Coffee Bird Nest"),
    ],
  },
  "cacao-cocoa-mix-plus": {
    advisoryImages: [
      evidenceImage("cacao-cocoa-mix-plus", "customer-guidance.webp", "MIKEO Cacao & Cocoa Mix Plus"),
    ],
  },
  "gluta-collagen-tomato": {
    advisoryImages: [
      evidenceImage("gluta-collagen-tomato", "customer-guidance.webp", "MIKEO Gluta Collagen Tomato"),
      evidenceImage("gluta-collagen-tomato", "ingredient-guidance.webp", "MIKEO Gluta Collagen Tomato"),
    ],
  },
  "blood-orange-c": {
    advisoryImages: [
      evidenceImage("blood-orange-c", "customer-guidance.webp", "MIKEO Blood Orange C"),
    ],
  },
  "gluta-collagen-sakura-peach": {
    advisoryImages: [
      evidenceImage("gluta-collagen-sakura-peach", "customer-guidance.webp", "MIKEO Gluta Collagen Sakura Peach"),
      evidenceImage("gluta-collagen-sakura-peach", "combined-usage-guidance.webp", "MIKEO Gluta Collagen Sakura Peach", 1524, 1074),
    ],
  },
  "collagen-berry-zinc": {
    advisoryImages: [
      evidenceImage("collagen-berry-zinc", "customer-guidance.webp", "MIKEO Collagen Berry Zinc"),
      evidenceImage("collagen-berry-zinc", "combined-usage-guidance.webp", "MIKEO Collagen Berry Zinc", 1524, 1074),
    ],
  },
  "fiber-xs-green-apple": {
    advisoryImages: [
      evidenceImage("fiber-xs-green-apple", "customer-guidance.webp", "MIKEO Fiber XS Green Apple"),
      evidenceImage("fiber-xs-green-apple", "color-guidance.webp", "MIKEO Fiber XS Green Apple"),
      evidenceImage("fiber-xs-green-apple", "appearance-guidance.webp", "MIKEO Fiber XS Green Apple"),
    ],
  },
  "fiber-xs-plus-berry-zinc": {
    advisoryImages: [
      evidenceImage("fiber-xs-plus-berry-zinc", "customer-guidance.webp", "MIKEO Fiber XS Plus Berry Zinc"),
    ],
  },
};

const productRecords: Omit<
  Product,
  keyof ProductShowcaseContent | keyof ProductEvidenceContent
>[] = [
  {
    slug: "veggie-fiber-coffee",
    categoryId: "drinks",
    name: { th: "มิเกว เวจจี้ ไฟเบอร์ คอฟฟี่ มิกซ์ พลัส", en: "Mikeo Veggie Fiber Coffee Mix Plus" },
    description: { th: "กาแฟปรุงสำเร็จชนิดผง สูตรคาปูชิโน ผสมผักและสมุนไพร ไม่เติมน้ำตาลทราย", en: "Instant coffee mix powder, cappuccino style, blended with vegetables and herbs, no added sugar." },
    packSize: { th: "30 ซอง × 10 กรัม (300 กรัม)", en: "30 sachets × 10 g (300 g)" },
    extractsTotal: { th: "สารสกัดตามฉลาก 36 ชนิด", en: "36 extracts listed on the pack" },
    keyExtracts: [
      { th: "ครีมเทียมจากน้ำมันรำข้าว", en: "Rice bran oil non-dairy creamer" },
      { th: "ผงเคล", en: "Kale powder" },
      { th: "ปวยเล้ง", en: "Spinach" },
      { th: "โสม", en: "Ginseng" },
      { th: "หล่อฮังก๊วย", en: "Monk fruit" },
      { th: "วิตามินบี 12 และโคเอนไซม์คิวเท็น", en: "Vitamin B12 and coenzyme Q10" },
    ],
    directions: drinkDirections,
    image: {
      src: "/images/products/veggie-fiber-coffee.webp",
      width: 1600,
      height: 1120,
      alt: { th: "บรรจุภัณฑ์ Mikeo Veggie Fiber Coffee Mix Plus", en: "Mikeo Veggie Fiber Coffee Mix Plus product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "pistachio-coffee",
    categoryId: "drinks",
    name: { th: "มิเกว พิสตาชิโอ คอฟฟี่ มิกซ์ พลัส", en: "Mikeo Pistachio Coffee Mix Plus" },
    description: { th: "กาแฟปรุงสำเร็จชนิดผง สไตล์เอสเพรสโซ จากกาแฟอาราบิก้าและโรบัสต้า ไม่เติมน้ำตาลทราย", en: "Instant coffee mix powder, espresso style, from arabica and robusta beans, no added sugar." },
    packSize: { th: "30 ซอง × 10 กรัม (300 กรัม)", en: "30 sachets × 10 g (300 g)" },
    extractsTotal: { th: "สารสำคัญตามฉลาก 29 ชนิด", en: "29 key ingredients listed on the pack" },
    keyExtracts: [
      { th: "กาแฟอาราบิก้าและโรบัสต้า", en: "Arabica and robusta coffee" },
      { th: "ถั่งเช่าสีทอง", en: "Golden cordyceps" },
      { th: "เห็ดหลินจือ", en: "Reishi mushroom" },
      { th: "โสมเกาหลี", en: "Korean ginseng" },
      { th: "ตังกุย", en: "Dong quai" },
      { th: "คอลลาเจนไดเปปไทด์", en: "Collagen dipeptide" },
    ],
    directions: drinkDirections,
    image: {
      src: "/images/products/pistachio-coffee.webp",
      width: 1600,
      height: 1120,
      alt: { th: "บรรจุภัณฑ์ Mikeo Pistachio Coffee Mix Plus", en: "Mikeo Pistachio Coffee Mix Plus product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "coffee-bird-nest",
    categoryId: "drinks",
    name: { th: "มิเกว คอฟฟี่ เบิร์ด เนสท์", en: "Mikeo Coffee Bird Nest" },
    description: { th: "กาแฟปรุงสำเร็จชนิดผง ผสมผงรังนกและคอลลาเจน ไม่เติมน้ำตาลทราย", en: "Instant coffee mixed powder with bird's nest powder and collagen, no added sugar." },
    packSize: { th: "30 ซอง × 10 กรัม (300 กรัม)", en: "30 sachets × 10 g (300 g)" },
    extractsTotal: { th: "สารสกัดตามเอกสารแบรนด์ 14 ชนิด", en: "14 extracts listed in brand materials" },
    keyExtracts: [
      { th: "ผงรังนก", en: "Bird's nest powder" },
      { th: "กาแฟอาราบิก้า", en: "Arabica coffee" },
      { th: "คอลลาเจนไดเปปไทด์และไตรเปปไทด์", en: "Collagen dipeptide and tripeptide" },
      { th: "ถั่งเช่า", en: "Cordyceps" },
      { th: "สารสกัดเมล็ดองุ่น", en: "Grape seed extract" },
      { th: "แอล-กลูต้าไธโอน", en: "L-glutathione" },
    ],
    directions: drinkDirections,
    image: {
      src: "/images/products/coffee-bird-nest.webp",
      width: 1600,
      height: 1120,
      alt: { th: "บรรจุภัณฑ์ Mikeo Coffee Bird Nest", en: "Mikeo Coffee Bird Nest product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "matcha-latte-xs",
    categoryId: "drinks",
    name: { th: "มิเกว มัทฉะ ลาเต้ เอ็กซ์เอส มิกซ์ พลัส", en: "MIKEO Matcha Latte XS Mix Plus" },
    description: { th: "ผลิตภัณฑ์เสริมอาหารชนิดผงชงดื่ม มัทฉะอุจิเกียวโตจากญี่ปุ่น สูตรเข้มข้น ไม่เติมน้ำตาลทราย", en: "Powdered dietary supplement drink with Uji Kyoto matcha from Japan, concentrated formula, no added sugar." },
    packSize: { th: "30 ซอง × 10 กรัม (300 กรัม)", en: "30 sachets × 10 g (300 g)" },
    extractsTotal: { th: "สารสกัดสำคัญตามฉลาก 18 ชนิด", en: "18 key extracts listed on the pack" },
    keyExtracts: [
      { th: "ผงมัทฉะชาเขียวอุจิ เกียวโต", en: "Uji Kyoto matcha green tea powder" },
      { th: "น้ำมันเอ็มซีทีชนิดผง", en: "MCT oil powder" },
      { th: "ผงน้ำนมข้าวโอ๊ต", en: "Oat milk powder" },
      { th: "แอล-คาร์นิทีน", en: "L-carnitine" },
      { th: "สารสกัดชาเขียว", en: "Green tea extract" },
    ],
    directions: drinkDirections,
    image: {
      src: "/images/products/matcha-latte-xs.webp",
      width: 1600,
      height: 1120,
      alt: { th: "บรรจุภัณฑ์ MIKEO Matcha Latte XS Mix Plus", en: "MIKEO Matcha Latte XS Mix Plus product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "cacao-cocoa-mix-plus",
    categoryId: "drinks",
    name: { th: "มิเกว คาเคา แอนด์ โกโก้ มิกซ์ พลัส", en: "MIKEO Cacao & Cocoa Mix Plus" },
    description: { th: "ผลิตภัณฑ์เสริมอาหารชนิดผงชงดื่ม สูตรโกโก้เข้มข้น (อัลคาไลซ์โกโก้) ไม่เติมน้ำตาลทราย", en: "Powdered dietary supplement drink, concentrated alkalized cocoa, no added sugar." },
    packSize: { th: "20 ซอง × 10 กรัม (200 กรัม)", en: "20 sachets × 10 g (200 g)" },
    extractsTotal: { th: "สารสกัดรวมกว่า 26 ชนิด (ตามฉลาก)", en: "Over 26 extracts listed on the pack" },
    keyExtracts: [
      { th: "อัลคาไลซ์โกโก้ (ดับเบิลช็อกโก)", en: "Alkalized cocoa (double choco)" },
      { th: "โปรตีนจากเมล็ดอัลมอนด์", en: "Almond seed protein" },
      { th: "น้ำมันเอ็มซีทีชนิดผง", en: "MCT oil powder" },
      { th: "แอล-คาร์นิทีน", en: "L-carnitine" },
      { th: "วิตามินบี 12", en: "Vitamin B12" },
    ],
    directions: drinkDirections,
    image: {
      src: "/images/products/cacao-cocoa-mix-plus.webp",
      width: 1600,
      height: 1120,
      alt: { th: "บรรจุภัณฑ์ MIKEO Cacao & Cocoa Mix Plus", en: "MIKEO Cacao & Cocoa Mix Plus product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "gluta-collagen-tomato",
    categoryId: "supplements",
    name: { th: "มิเกว กลูต้า โทเมโท", en: "MIKEO Gluta Collagen Tomato" },
    description: { th: "ผลิตภัณฑ์เสริมอาหารชนิดผงชงดื่ม ผสมแอล-กลูต้าไธโอนและผงมะเขือเทศ ไม่เติมน้ำตาลทราย", en: "Powdered dietary supplement drink mixed with L-glutathione and tomato powder, no added sugar." },
    packSize: { th: "30 ซอง × 10 กรัม (300 กรัม)", en: "30 sachets × 10 g (300 g)" },
    extractsTotal: { th: "สารสกัดตามเอกสารแบรนด์ 12 ชนิด", en: "12 extracts listed in brand materials" },
    keyExtracts: [
      { th: "คอลลาเจนไดเปปไทด์และไตรเปปไทด์จากปลา", en: "Fish collagen dipeptide and tripeptide" },
      { th: "แอล-กลูต้าไธโอน", en: "L-glutathione" },
      { th: "ผงมะเขือเทศ", en: "Tomato powder" },
      { th: "สารสกัดอะเซโรลาเชอร์รี", en: "Acerola cherry extract" },
      { th: "วิตามินซี", en: "Vitamin C" },
      { th: "ซิงค์อะมิโนแอซิดคีเลต", en: "Zinc amino acid chelate" },
    ],
    directions: glutaDirections,
    image: {
      src: "/images/products/gluta-collagen-tomato.webp",
      width: 1600,
      height: 1120,
      alt: { th: "บรรจุภัณฑ์ MIKEO Gluta Collagen Tomato", en: "MIKEO Gluta Collagen Tomato product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "blood-orange-c",
    categoryId: "supplements",
    name: { th: "มิเกว บลัด ออเร้นจ์ ซี", en: "MIKEO Blood Orange C" },
    description: { th: "ผลิตภัณฑ์เสริมอาหาร คอลลาเจน วิตามิน ซี มิกซ์ พลัส วิตามินซี 1,000 มก. (ตามฉลาก) ไม่เติมน้ำตาลทราย", en: "Collagen Vitamin C Mix Plus dietary supplement, vitamin C 1,000 mg per label, no added sugar." },
    packSize: { th: "35 ซอง × 10 กรัม (350 กรัม)", en: "35 sachets × 10 g (350 g)" },
    extractsTotal: { th: "สารสกัดตามเอกสารแบรนด์ 30 ชนิด", en: "30 extracts listed in brand materials" },
    keyExtracts: [
      { th: "ไลโปโซมอลวิตามินซี", en: "Liposomal vitamin C" },
      { th: "สารสกัดส้มสีเลือดจากอิตาลี", en: "Blood orange extract from Italy" },
      { th: "ผงส้มซัตสึมะแมนดารินจากญี่ปุ่น", en: "Satsuma mandarin orange powder from Japan" },
      { th: "คอลลาเจนไดเปปไทด์จากปลา", en: "Fish collagen dipeptide" },
      { th: "สารสกัดเอลเดอร์เบอร์รี", en: "Elderberry extract" },
      { th: "ซิงค์อะมิโนแอซิดคีเลตจากสหรัฐอเมริกา", en: "Zinc amino acid chelate from the USA" },
    ],
    directions: [
      { th: "ทานตอนเช้า 2 ซอง ต่อน้ำ 120 มล. หรือหลังอาหารเช้า 2 ซอง ต่อน้ำ 120 มล.", en: "Take 2 sachets with 120 ml of water in the morning, or 2 sachets with 120 ml of water after breakfast." },
      { th: "สูตรปกติ: ครั้งละ 1 ซอง · สูตรเร่งด่วน: ครั้งละ 2 ซอง", en: "Regular: 1 sachet per serving · Intensive: 2 sachets per serving." },
    ],
    image: {
      src: "/images/products/blood-orange-c.webp",
      width: 1600,
      height: 1120,
      alt: { th: "บรรจุภัณฑ์ MIKEO Blood Orange C", en: "MIKEO Blood Orange C product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "gluta-collagen-sakura-peach",
    categoryId: "supplements",
    name: { th: "มิเกว กลูต้า ซากุระ พีช", en: "MIKEO Gluta Collagen Sakura Peach" },
    description: { th: "ผลิตภัณฑ์เสริมอาหาร คอลลาเจน ไดเปปไทด์ วิตามิน มิกซ์ พลัส แอล-กลูต้า 250 มก. (ตามฉลาก) ไม่เติมน้ำตาลทราย", en: "Collagen Dipeptide Vitamin Mix Plus dietary supplement, L-gluta 250 mg per label, no added sugar." },
    packSize: { th: "35 ซอง × 10 กรัม (350 กรัม)", en: "35 sachets × 10 g (350 g)" },
    extractsTotal: { th: "สารสกัดตามเอกสารแบรนด์ 22 ชนิด", en: "22 extracts listed in brand materials" },
    keyExtracts: [
      { th: "แอล-กลูต้าไธโอน 250 มก. (ตามฉลาก)", en: "L-glutathione 250 mg per label" },
      { th: "คอลลาเจนไดเปปไทด์", en: "Collagen dipeptide" },
      { th: "ไฮโดรไลซ์คอลลาเจน", en: "Hydrolyzed collagen" },
      { th: "สารสกัดซากุระ", en: "Sakura extract" },
      { th: "พีช", en: "Peach" },
      { th: "แอสตาแซนธิน", en: "Astaxanthin" },
    ],
    directions: glutaDirections,
    image: {
      src: "/images/products/gluta-collagen-sakura-peach.webp",
      width: 1600,
      height: 1200,
      alt: { th: "บรรจุภัณฑ์ MIKEO Gluta Sakura Peach", en: "MIKEO Gluta Sakura Peach product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "collagen-berry-zinc",
    categoryId: "supplements",
    name: { th: "มิเกว คอลลาเจน เบอร์รี ซิงค์", en: "Mikeo Collagen Berry Zinc" },
    description: { th: "ผลิตภัณฑ์เสริมอาหาร มัลติ วิตามิน มิกซ์ พลัส ผสมไฮโดรไลซ์คอลลาเจนและเซราไมด์ ไม่เติมน้ำตาลทราย", en: "Multi Vitamin Mix Plus dietary supplement with hydrolyzed collagen and ceramide, no added sugar." },
    packSize: { th: "35 ซอง × 10 กรัม (350 กรัม)", en: "35 sachets × 10 g (350 g)" },
    extractsTotal: { th: "สารสกัดตามเอกสารแบรนด์ 23 ชนิด", en: "23 extracts listed in brand materials" },
    keyExtracts: [
      { th: "ไฮโดรไลซ์คอลลาเจน", en: "Hydrolyzed collagen" },
      { th: "แอล-กลูต้าไธโอน 250 มก. (ตามฉลาก)", en: "L-glutathione 250 mg per label" },
      { th: "เซราไมด์", en: "Ceramide" },
      { th: "สารสกัดโรสฮิป", en: "Rose hips extract" },
      { th: "เบอร์รีรวมและองุ่น", en: "Mixed berries and grape" },
      { th: "ซิงค์", en: "Zinc" },
    ],
    directions: glutaDirections,
    image: {
      src: "/images/products/collagen-berry-zinc.webp",
      width: 1600,
      height: 1200,
      alt: { th: "บรรจุภัณฑ์ Mikeo Collagen Berry Zinc", en: "Mikeo Collagen Berry Zinc product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "fiber-xs-green-apple",
    categoryId: "supplements",
    name: { th: "มิเกว ไฟเบอร์ เอ็กซ์เอส", en: "Mikeo Fiber XS (Green Apple)" },
    description: { th: "ผลิตภัณฑ์เสริมอาหารไฟเบอร์ชนิดผงชงดื่ม พร้อมพรีไบโอติกและโพรไบโอติก ไม่เติมน้ำตาลทราย", en: "Powdered fiber dietary supplement drink with prebiotics and probiotics, no added sugar." },
    packSize: { th: "30 ซอง × 10 กรัม (300 กรัม)", en: "30 sachets × 10 g (300 g)" },
    extractsTotal: { th: "ส่วนประกอบสำคัญตามเอกสารแบรนด์ 13 ชนิด", en: "13 key components listed in brand materials" },
    keyExtracts: [
      { th: "ฟรุกโตโอลิโกแซ็กคาไรด์ (FOS)", en: "Fructooligosaccharides (FOS)" },
      { th: "อินูลิน", en: "Inulin" },
      { th: "ผงเทียนเกล็ดหอย (ไซเลียมฮัสก์)", en: "Psyllium husk powder" },
      { th: "บาซิลลัส โคแอกกูแลนส์ (โพรไบโอติก)", en: "Bacillus coagulans (probiotic)" },
      { th: "สารสกัดแอปเปิล", en: "Apple extract" },
      { th: "วิตามินซี", en: "Vitamin C" },
    ],
    directions: fiberDirections,
    image: {
      src: "/images/products/fiber-xs-green-apple.webp",
      width: 1600,
      height: 1120,
      alt: { th: "บรรจุภัณฑ์ Mikeo Fiber XS", en: "Mikeo Fiber XS product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "fiber-xs-plus-berry-zinc",
    categoryId: "supplements",
    name: { th: "มิเกว ไฟเบอร์ เอ็กซ์เอส พลัส เบอร์รี ซิงค์", en: "MIKEO Fiber XS Plus Berry Zinc" },
    description: { th: "ผลิตภัณฑ์เสริมอาหารไฟเบอร์ รสเบอร์รีรวม 7 ชนิด พร้อมพรีไบโอติกและโพรไบโอติก ไม่เติมน้ำตาลทราย", en: "Fiber dietary supplement with a 7-berry blend, prebiotics, and probiotics, no added sugar." },
    packSize: { th: "30 ซอง × 10 กรัม (300 กรัม)", en: "30 sachets × 10 g (300 g)" },
    keyExtracts: [
      { th: "ไฟบรูโลส (Fibrulose)", en: "Fibrulose" },
      { th: "พรีไบโอติกและโพรไบโอติก", en: "Prebiotics and probiotics" },
      { th: "เบอร์รี 7 ชนิด", en: "7-berry blend" },
      { th: "ไลโปโซมอลวิตามินซี", en: "Liposomal vitamin C" },
      { th: "แอล-คาร์นิทีน แอล-ทาร์เทรต", en: "L-carnitine L-tartrate" },
      { th: "ซิงค์", en: "Zinc" },
    ],
    directions: fiberDirections,
    image: {
      src: "/images/products/fiber-xs-plus-berry-zinc.webp",
      width: 1600,
      height: 1120,
      alt: { th: "บรรจุภัณฑ์ MIKEO Fiber XS Plus Berry Zinc", en: "MIKEO Fiber XS Plus Berry Zinc product packaging" },
    },
    visual: "pouch",
  },
  {
    slug: "jimmi-glowy-probiotic",
    categoryId: "supplements",
    name: { th: "มิเกว จิมมี่ โกลว์วี่", en: "Mikeo Jimmi Glowy Probiotic Balance" },
    description: { th: "ผลิตภัณฑ์เสริมอาหารโพรไบโอติกชนิดผงทานได้ทันที รสสตรอว์เบอร์รี สูตรอินเนอร์ โพรไบโอติก บาลานซ์ ไม่เติมน้ำตาลทราย", en: "Ready-to-eat probiotic powder supplement, strawberry flavour, Inner Probiotic Balance formula, no added sugar." },
    packSize: { th: "15 ซอง × 3 กรัม (45 กรัม)", en: "15 sachets × 3 g (45 g)" },
    keyExtracts: [
      { th: "โพรไบโอติก 12 สายพันธุ์ (24,000 ล้าน CFU ตามฉลาก)", en: "12 probiotic strains (24,000 million CFU per label)" },
      { th: "อินูลินและ GOS (พรีไบโอติก)", en: "Inulin and GOS (prebiotics)" },
      { th: "ไลโปโซมอล แอล-กลูต้าไธโอน", en: "Liposomal L-glutathione" },
      { th: "ไลโปโซมอลวิตามินซี", en: "Liposomal vitamin C" },
      { th: "ไลโคปีนจากมะเขือเทศ", en: "Lycopene from tomato" },
      { th: "สารสกัดแครนเบอร์รีและโคเอนไซม์คิวเท็น", en: "Cranberry extract and coenzyme Q10" },
    ],
    directions: jimmiDirections,
    image: {
      src: "/images/products/jimmi-glowy-probiotic.webp",
      width: 1600,
      height: 1131,
      alt: { th: "กล่อง Mikeo Jimmi Glowy Inner Probiotic Balance Formula", en: "Mikeo Jimmi Glowy Inner Probiotic Balance Formula box" },
    },
    visual: "box",
  },
  {
    slug: "jimmi-fitty-probiotic",
    categoryId: "supplements",
    name: { th: "มิเกว จิมมี่ ฟิตตี้", en: "Mikeo Jimmi Fitty Probiotic Balance" },
    description: { th: "ผลิตภัณฑ์เสริมอาหารโพรไบโอติกชนิดผงทานได้ทันที รสเบอร์รีรวม สูตรอินเนอร์ โพรไบโอติก บาลานซ์ ไม่เติมน้ำตาลทราย", en: "Ready-to-eat probiotic powder supplement, mixed berry flavour, Inner Probiotic Balance formula, no added sugar." },
    packSize: { th: "15 ซอง × 3 กรัม (45 กรัม)", en: "15 sachets × 3 g (45 g)" },
    keyExtracts: [
      { th: "โพรไบโอติก 12 สายพันธุ์ (24,000 ล้าน CFU ตามฉลาก)", en: "12 probiotic strains (24,000 million CFU per label)" },
      { th: "อินูลินและ GOS (พรีไบโอติก)", en: "Inulin and GOS (prebiotics)" },
      { th: "สารสกัดแครนเบอร์รี", en: "Cranberry extract" },
      { th: "สารสกัดลูกซัด (เฟนูกรีก)", en: "Fenugreek extract" },
      { th: "สารสกัดตังกุย", en: "Dong quai extract" },
      { th: "สารสกัดเมล็ดแฟลกซ์และผงกวาวเครือ", en: "Flaxseed extract and pueraria powder" },
    ],
    directions: jimmiDirections,
    image: {
      src: "/images/products/jimmi-fitty-probiotic.webp",
      width: 1600,
      height: 1131,
      alt: { th: "กล่อง Mikeo Jimmi Fitty Inner Probiotic Balance Formula", en: "Mikeo Jimmi Fitty Inner Probiotic Balance Formula box" },
    },
    visual: "box",
  },
];

export const products: Product[] = productRecords.map((product) => ({
  ...product,
  ...productShowcaseContent[product.slug],
  advisoryImages: productEvidenceContent[product.slug]?.advisoryImages ?? [],
}));

export function getCategory(categoryId: CategoryId) {
  return categories.find((category) => category.id === categoryId);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
