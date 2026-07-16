"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories, products, type CategoryId } from "@/lib/catalog";
import type { Dictionary } from "@/lib/dictionaries";
import { localize, type Locale } from "@/lib/i18n";
import { ProductCard } from "./ProductCard";

type Filter = "all" | CategoryId;

export function ProductExplorer({
  locale,
  dictionary: d,
  limit,
  featuredSlugs,
}: {
  locale: Locale;
  dictionary: Dictionary;
  limit?: number;
  featuredSlugs?: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sourceProducts = useMemo(() => {
    if (!featuredSlugs) return products;
    const bySlug = new Map(products.map((product) => [product.slug, product]));
    return featuredSlugs.flatMap((slug) => {
      const product = bySlug.get(slug);
      return product ? [product] : [];
    });
  }, [featuredSlugs]);
  const availableCategories = useMemo(
    () => categories.filter((category) => sourceProducts.some((product) => product.categoryId === category.id)),
    [sourceProducts],
  );
  const requested = searchParams.get("category");
  const filter: Filter = availableCategories.some((category) => category.id === requested)
    ? requested as CategoryId
    : "all";
  const visible = useMemo(() => {
    const filterSource = filter === "all" ? sourceProducts : products;
    const filtered = filter === "all"
      ? filterSource
      : filterSource.filter((product) => product.categoryId === filter);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [filter, limit, sourceProducts]);

  const setFilter = (next: Filter) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "all") params.delete("category");
    else params.set("category", next);
    router.replace(`${pathname}${params.size ? `?${params}` : ""}`, { scroll: false });
  };

  return (
    <div className="product-explorer">
      <div className="filter-row" role="group" aria-label={d.products.filterLabel}>
        <button
          type="button"
          className={filter === "all" ? "is-active" : ""}
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
        >
          {d.common.all}
        </button>
        {availableCategories.map((category) => (
          <button
            type="button"
            key={category.id}
            className={filter === category.id ? "is-active" : ""}
            aria-pressed={filter === category.id}
            onClick={() => setFilter(category.id)}
          >
            {localize(category.name, locale)}
          </button>
        ))}
      </div>
      <p className="filter-status" aria-live="polite">
        {d.products.showing.replace("{count}", String(visible.length))}
      </p>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((product) => (
            <ProductCard product={product} locale={locale} dictionary={d} key={product.slug} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>{d.products.emptyTitle}</h3>
          <p>{d.products.emptyBody}</p>
          <button type="button" className="button button-secondary" onClick={() => setFilter("all")}>
            {d.products.reset}
          </button>
        </div>
      )}
    </div>
  );
}
