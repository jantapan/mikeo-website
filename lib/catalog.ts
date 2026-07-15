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

export type Product = {
  slug: string;
  categoryId: CategoryId;
  placeholderLabel: LocalizedText;
  status: "placeholder";
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

const placeholderProducts: Array<[CategoryId, Product["visual"]]> = [
  ["drinks", "pouch"],
  ["drinks", "box"],
  ["drinks", "bottle"],
  ["supplements", "jar"],
  ["supplements", "box"],
  ["supplements", "bottle"],
  ["jelly", "pouch"],
  ["jelly", "tube"],
  ["beauty", "bottle"],
  ["beauty", "tube"],
];

export const products: Product[] = placeholderProducts.map(
  ([categoryId, visual], index) => ({
    slug: `placeholder-${String(index + 1).padStart(2, "0")}`,
    categoryId,
    placeholderLabel: {
      th: `ข้อมูลตัวอย่าง ${String(index + 1).padStart(2, "0")}`,
      en: `Placeholder ${String(index + 1).padStart(2, "0")}`,
    },
    status: "placeholder",
    visual,
  }),
);

export function getCategory(categoryId: CategoryId) {
  return categories.find((category) => category.id === categoryId);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
