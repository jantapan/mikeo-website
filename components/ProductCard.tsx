import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { getCategory, type Product } from "@/lib/catalog";
import { localePath, localize, type Locale } from "@/lib/i18n";
import { ProductVisual } from "./ProductVisual";

export function ProductCard({ product, locale, dictionary: d }: { product: Product; locale: Locale; dictionary: Dictionary }) {
  const label = localize(product.placeholderLabel, locale);
  const category = getCategory(product.categoryId);
  return <article className="product-card"><Link href={localePath(locale,`/products/${product.slug}`)} aria-label={`${d.common.viewDetails}: ${label}`}>
    <ProductVisual visual={product.visual} compact /><div className="product-card-copy"><span className="placeholder-tag">{d.common.sample}</span><h3>{label}</h3><p>{category ? localize(category.name,locale) : d.common.updating}</p><span className="text-link">{d.common.viewDetails} <span aria-hidden="true">→</span></span></div>
  </Link></article>;
}
