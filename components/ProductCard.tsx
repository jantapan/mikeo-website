import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { getCategory, type Product } from "@/lib/catalog";
import { localePath, localize, type Locale } from "@/lib/i18n";
import { ProductVisual } from "./ProductVisual";

export function ProductCard({ product, locale, dictionary: d }: { product: Product; locale: Locale; dictionary: Dictionary }) {
  const label = localize(product.name, locale);
  const displayLabel = locale === "th" && product.name.en ? product.name.en : label;
  const category = getCategory(product.categoryId);
  return <article className={`product-card product-card-theme-${product.accent} product-card-locale-${locale}`}><Link href={localePath(locale,`/products/${product.slug}`)} aria-label={`${d.common.viewDetails}: ${displayLabel}`}>
    <ProductVisual product={product} visual={product.visual} locale={locale} compact /><div className="product-card-copy"><h3>{displayLabel}</h3>{locale === "th" && displayLabel !== label && <p className="product-card-local-name">{label}</p>}{category && <p>{localize(category.name,locale)}</p>}<span className="text-link">{d.common.viewDetails} <span aria-hidden="true">→</span></span></div>
  </Link></article>;
}
