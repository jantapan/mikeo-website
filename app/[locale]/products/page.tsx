import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ProductExplorer } from "@/components/ProductExplorer";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/products">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const d = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/products",
    title: d.nav.products,
    description: d.products.intro,
  });
}

export default async function ProductsPage({ params }: PageProps<"/[locale]/products">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <>
      <PageHero title={d.products.title} intro={d.products.intro} variant="products" />
      <section className="section products-catalog-section">
        <div className="shell">
          <Suspense fallback={<p className="filter-status">{d.states.loading}</p>}>
            <ProductExplorer locale={locale} dictionary={d} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
