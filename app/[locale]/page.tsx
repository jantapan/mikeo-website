import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductAtmosphere } from "@/components/ProductAtmosphere";
import { ProductExplorer } from "@/components/ProductExplorer";
import { categories, products } from "@/lib/catalog";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, localePath, localize } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/site";

const heroSlugs = [
  "cacao-cocoa-mix-plus",
  "gluta-collagen-sakura-peach",
  "pistachio-coffee",
  "blood-orange-c",
  "jimmi-glowy-probiotic",
];

const homeHeroImages: Record<string, { src: string; width: number; height: number }> = {
  "cacao-cocoa-mix-plus": { src: "/images/products/home/cacao-cocoa-mix-plus.webp", width: 707, height: 685 },
  "gluta-collagen-sakura-peach": { src: "/images/products/home/gluta-collagen-sakura-peach.webp", width: 699, height: 850 },
  "pistachio-coffee": { src: "/images/products/home/pistachio-coffee.webp", width: 707, height: 685 },
  "blood-orange-c": { src: "/images/products/home/blood-orange-c.webp", width: 707, height: 708 },
  "jimmi-glowy-probiotic": { src: "/images/products/home/jimmi-glowy-probiotic.webp", width: 1141, height: 688 },
};

const discoverySlugs = [
  "cacao-cocoa-mix-plus",
  "gluta-collagen-sakura-peach",
  "blood-orange-c",
  "jimmi-glowy-probiotic",
];

const categoryRepresentatives = [
  { categoryId: "drinks", productSlug: "cacao-cocoa-mix-plus" },
  { categoryId: "supplements", productSlug: "gluta-collagen-sakura-peach" },
] as const;

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const d = getDictionary(locale);
  return buildPageMetadata({
    locale,
    title: d.meta.title,
    description: d.meta.description,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const d = getDictionary(locale);
  const h = d.home;
  const heroProducts = heroSlugs.flatMap((slug) => {
    const product = products.find((item) => item.slug === slug);
    if (!product?.image) return [];
    return [product];
  });
  const heroArtwork = products.find((item) => item.slug === "cacao-cocoa-mix-plus")
    ?.ingredientImages[0];
  const categoryShowcase = categoryRepresentatives.flatMap(({ categoryId, productSlug }) => {
    const category = categories.find((item) => item.id === categoryId);
    const product = products.find((item) => item.slug === productSlug);
    if (!category || !product?.image) return [];
    return [{ category, product }];
  });
  const storyProducts = [
    products.find((item) => item.slug === "jimmi-glowy-probiotic"),
    products.find((item) => item.slug === "blood-orange-c"),
  ].filter((product) => product?.image);

  return (
    <>
      <section className="home-brand-banner home-brand-banner-top" aria-label={h.bannerAlt}>
        <div className="home-brand-banner-frame">
          <Image
            className="international-banner"
            src="/images/banners/mikeo-international-banner-desktop.webp"
            width={2400}
            height={914}
            sizes="100vw"
            alt={h.bannerAlt}
            preload
          />
        </div>
      </section>

      <section className="home-editorial-hero" aria-labelledby="home-editorial-title">
        <ProductAtmosphere
          effect="portfolio"
          label={d.product.playEffect}
          hint={d.product.effectHint}
          showControl={false}
          className="home-atmosphere"
        >
          <div className="shell home-editorial-stage">
          <div className="home-editorial-products" aria-label={h.heroVisual}>
            {heroProducts.map((product, index) => product.image && (
              <Link
                className={`home-editorial-product home-editorial-product-${index + 1}`}
                href={localePath(locale, `/products/${product.slug}`)}
                key={product.slug}
              >
                <Image
                  src={homeHeroImages[product.slug]?.src ?? product.image.src}
                  width={homeHeroImages[product.slug]?.width ?? product.image.width}
                  height={homeHeroImages[product.slug]?.height ?? product.image.height}
                  sizes="(max-width: 760px) 28vw, 14vw"
                  alt={localize(product.image.alt, locale)}
                />
                <span>{locale === "th" && product.name.en
                  ? product.name.en
                  : localize(product.name, locale)}</span>
              </Link>
            ))}
          </div>

          <div className="home-editorial-copy">
            <span className="home-editorial-kicker">{h.note}</span>
            <h1 id="home-editorial-title">
              <span>MIKEO</span>
              {h.constellationTitle}
            </h1>
            <p>{h.constellationIntro}</p>
            <div className="home-editorial-actions">
              <Link className="button button-primary" href={localePath(locale, "/products")}>
                {d.common.viewProducts}
              </Link>
              <Link className="text-link" href={localePath(locale, "/contact")}>
                {d.common.contact} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {heroArtwork && (
            <div className="home-editorial-artwork">
              <Image
                src={heroArtwork.src}
                width={heroArtwork.width}
                height={heroArtwork.height}
                sizes="(max-width: 760px) 84vw, 25vw"
                alt={localize(heroArtwork.alt, locale)}
              />
              <span aria-hidden="true">MIKEO</span>
            </div>
          )}
          </div>
        </ProductAtmosphere>
      </section>

      <section className="section product-discovery">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <h2>{h.discoveryTitle}</h2>
              <p>{h.discoveryIntro}</p>
            </div>
            <Link className="text-link" href={localePath(locale, "/products")}>{h.catalogLink} <span aria-hidden="true">→</span></Link>
          </div>
          <Suspense fallback={<p className="filter-status">{d.states.loading}</p>}>
            <ProductExplorer locale={locale} dictionary={d} featuredSlugs={discoverySlugs} />
          </Suspense>
        </div>
      </section>

      <section className="category-collections" aria-labelledby="category-title">
        <div className="shell section-heading">
          <h2 id="category-title">{h.categoriesTitle}</h2>
          <p>{h.categoriesIntro}</p>
        </div>
        <div className="shell category-grid category-grid-image-led">
          {categoryShowcase.map(({ category, product }, index) => (
            <Link
              href={`${localePath(locale, "/products")}?category=${category.id}`}
              className={`category-panel category-panel-image-led category-panel-${index + 1}`}
              key={category.id}
            >
              <div className="category-panel-copy">
                <h3>{localize(category.name, locale)}</h3>
                <p>{d.common.viewProducts}</p>
              </div>
              <Image
                src={product.image!.src}
                width={product.image!.width}
                height={product.image!.height}
                sizes="(max-width: 760px) 86vw, 42vw"
                alt={localize(product.image!.alt, locale)}
                className="category-product-image"
              />
              <span className="category-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-split">
        <div className="shell story-grid">
          <div className="story-copy">
            <h2>{h.storyTitle}</h2>
            <p>{h.storyBody}</p>
            <Link className="button button-secondary" href={localePath(locale, "/about")}>{h.storyLink}</Link>
          </div>
          <div className="story-product-collage" aria-label={h.brandImage}>
            <span className="story-sun" aria-hidden="true" />
            {storyProducts.map((product, index) => product?.image && (
              <Image
                key={product.slug}
                src={product.image.src}
                width={product.image.width}
                height={product.image.height}
                sizes="(max-width: 760px) 70vw, 34vw"
                alt={localize(product.image.alt, locale)}
                className={`story-product story-product-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="contact-handoff">
        <div className="shell contact-handoff-inner">
          <h2>{h.contactTitle}</h2>
          <Link className="button button-primary" href={localePath(locale, "/contact")}>{d.common.contact}</Link>
        </div>
      </section>
    </>
  );
}
