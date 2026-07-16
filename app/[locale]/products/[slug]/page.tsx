import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductAtmosphere } from "@/components/ProductAtmosphere";
import { ProductGallery } from "@/components/ProductGallery";
import {
  getCategory,
  getProduct,
  products,
  type ProductContentImage,
} from "@/lib/catalog";
import type { Dictionary } from "@/lib/dictionaries";
import { getDictionary } from "@/lib/dictionaries";
import {
  hasLocale,
  localePath,
  localize,
  locales,
  type Locale,
} from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/products/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) return {};
  const d = getDictionary(locale);
  const product = getProduct(slug);

  return buildPageMetadata({
    locale,
    path: `/products/${slug}`,
    title: product ? localize(product.name, locale) : d.product.missingTitle,
    description: product?.description
      ? localize(product.description, locale)
      : d.meta.description,
  });
}

function getDisplayTitleLines(displayLabel: string) {
  const words = displayLabel
    .replace(/^MIKEO\s*/i, "")
    .replace(/\s*&\s*/g, " ")
    .trim()
    .split(/\s+/);

  if (words.length <= 3) return words;
  if (words.length === 4) return [words[0], words[1], words.slice(2).join(" ")];
  if (words.length === 5) {
    return [words.slice(0, 2).join(" "), words[2], words.slice(3).join(" ")];
  }
  return [
    words.slice(0, 2).join(" "),
    words.slice(2, 4).join(" "),
    words.slice(4).join(" "),
  ];
}

function GallerySection({
  id,
  title,
  images,
  locale,
  copy,
  tone,
  evidence = false,
}: {
  id: string;
  title: string;
  images: ProductContentImage[];
  locale: Locale;
  copy: Dictionary["product"];
  tone: "accent" | "paper" | "red" | "evidence";
  evidence?: boolean;
}) {
  const localizedImages = images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
    alt: localize(image.alt, locale),
  }));

  return (
    <section id={id} className={`showcase-gallery-section showcase-tone-${tone}`}>
      <div className="shell showcase-section-grid">
        <header className="showcase-section-heading">
          <h2>{title}</h2>
          <p className="showcase-heading-meta">
            {evidence ? copy.evidenceArtwork : copy.suppliedArtwork}
          </p>
        </header>
        <div className="showcase-gallery-content">
          <ProductGallery
            images={localizedImages}
            variant={evidence ? "evidence" : "content"}
            copy={{
              openImage: copy.openImage,
              closeImage: copy.closeImage,
              previousImage: copy.previousImage,
              nextImage: copy.nextImage,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default async function ProductPage({
  params,
}: PageProps<"/[locale]/products/[slug]">) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();

  const product = getProduct(slug);
  if (!product) notFound();

  const d = getDictionary(locale);
  const category = getCategory(product.categoryId);
  const label = localize(product.name, locale);
  const displayLabel = locale === "th" && product.name.en ? product.name.en : label;
  const titleLines = getDisplayTitleLines(displayLabel);
  const description = product.description
    ? localize(product.description, locale)
    : null;
  const keyExtracts = (product.keyExtracts ?? []).slice(0, 3);
  const relatedProducts = [
    ...products.filter(
      (item) => item.slug !== product.slug && item.categoryId === product.categoryId,
    ),
    ...products.filter(
      (item) => item.slug !== product.slug && item.categoryId !== product.categoryId,
    ),
  ].slice(0, 6);
  const productImage = product.image
    ? [{
        src: product.image.src,
        width: product.image.width,
        height: product.image.height,
        alt: localize(product.image.alt, locale),
      }]
    : [];
  const galleryCopy = {
    openImage: d.product.openImage,
    closeImage: d.product.closeImage,
    previousImage: d.product.previousImage,
    nextImage: d.product.nextImage,
  };
  const hasEvidence = product.nutritionImages.length > 0
    || product.certificationImages.length > 0
    || product.advisoryImages.length > 0;

  return (
    <article className={`product-showcase product-theme-${product.accent} product-locale-${locale}`}>
      <nav className="product-section-nav" aria-label={d.product.pageTitle}>
        <div className="shell product-section-nav-inner">
          <Link className="product-section-nav-name" href={localePath(locale, "/products")}>
            <span aria-hidden="true">←</span> {displayLabel}
          </Link>
          <div className="product-section-nav-links">
            {keyExtracts.length > 0 && <a href="#highlights">{d.product.sections[0]}</a>}
            {product.ingredientImages.length > 0 && (
              <a href="#key-extracts">{d.product.sections[1]}</a>
            )}
            {product.compositionImages.length > 0 && (
              <a href="#composition">{d.product.sections[2]}</a>
            )}
            {product.usageImages.length > 0 && (
              <a href="#how-to-use">{d.product.sections[3]}</a>
            )}
            {product.nutritionImages.length > 0 && (
              <a href="#nutrition-information">{d.product.nutritionTitle}</a>
            )}
            {product.certificationImages.length > 0 && (
              <a href="#certification-documents">{d.product.certificationTitle}</a>
            )}
            {product.advisoryImages.length > 0 && (
              <a href="#customer-information">{d.product.advisoryTitle}</a>
            )}
            <a href="#related-products">{d.product.related}</a>
            <a href="#contact">{d.common.contact}</a>
          </div>
        </div>
      </nav>

      <section className="product-showcase-hero">
        <div className="shell product-showcase-hero-grid">
          <div className="product-showcase-copy">
            <span className="showcase-eyebrow">MIKEO</span>
            <h1 aria-label={displayLabel}>
              {titleLines.map((line, index) => (
                <span
                  className={`product-title-line ${index === 1 ? "product-title-line-accent" : ""}`}
                  key={`${line}-${index}`}
                >
                  {line}
                </span>
              ))}
            </h1>
            {locale === "th" && displayLabel !== label && (
              <p className="product-showcase-local-name">{label}</p>
            )}
            {description && <p className="product-showcase-intro">{description}</p>}
          </div>

          {productImage.length > 0 && (
            <div className="product-showcase-packshot">
              {locale === "th" ? (
                <ProductAtmosphere
                  effect={product.effect}
                  label={d.product.playEffect}
                  hint={d.product.effectHint}
                >
                  <ProductGallery
                    images={productImage}
                    variant="hero"
                    preload
                    copy={galleryCopy}
                  />
                </ProductAtmosphere>
              ) : (
                <ProductGallery
                  images={productImage}
                  variant="hero"
                  preload
                  copy={galleryCopy}
                />
              )}
            </div>
          )}

          {keyExtracts.length > 0 && (
            <div id="highlights" className="product-hero-highlights">
              <h2>{d.product.sections[0]}</h2>
              <ul>
                {keyExtracts.map((extract) => (
                  <li key={localize(extract, locale)}>
                    <span aria-hidden="true">✓</span>
                    {localize(extract, locale)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <dl className="product-hero-meta">
            <div>
              <dt>{d.product.category}</dt>
              {category && <dd>{localize(category.name, locale)}</dd>}
            </div>
            {product.packSize && (
              <div>
                <dt>{d.product.packSize}</dt>
                <dd>{localize(product.packSize, locale)}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {product.ingredientImages.length > 0 && (
        <GallerySection
          id="key-extracts"
          title={d.product.sections[1]}
          images={product.ingredientImages}
          locale={locale}
          copy={d.product}
          tone="accent"
        />
      )}
      {product.compositionImages.length > 0 && (
        <GallerySection
          id="composition"
          title={d.product.sections[2]}
          images={product.compositionImages}
          locale={locale}
          copy={d.product}
          tone="paper"
        />
      )}
      {product.usageImages.length > 0 && (
        <GallerySection
          id="how-to-use"
          title={d.product.sections[3]}
          images={product.usageImages}
          locale={locale}
          copy={d.product}
          tone="red"
        />
      )}

      {hasEvidence && (
        <div className="product-evidence-theatre" aria-label={d.product.evidenceArtwork}>
          {product.nutritionImages.length > 0 && (
            <GallerySection
              id="nutrition-information"
              title={d.product.nutritionTitle}
              images={product.nutritionImages}
              locale={locale}
              copy={d.product}
              tone="evidence"
              evidence
            />
          )}
          {product.certificationImages.length > 0 && (
            <GallerySection
              id="certification-documents"
              title={d.product.certificationTitle}
              images={product.certificationImages}
              locale={locale}
              copy={d.product}
              tone="evidence"
              evidence
            />
          )}
          {product.advisoryImages.length > 0 && (
            <GallerySection
              id="customer-information"
              title={d.product.advisoryTitle}
              images={product.advisoryImages}
              locale={locale}
              copy={d.product}
              tone="evidence"
              evidence
            />
          )}
        </div>
      )}

      <section id="related-products" className="showcase-related">
        <div className="shell showcase-related-layout">
          <header className="showcase-related-heading">
            <h2>{d.product.related}</h2>
            <p>{d.product.relatedIntro}</p>
          </header>
          <div className="showcase-related-rail">
            {relatedProducts.map((relatedProduct) => relatedProduct.image && (
              <Link
                className="showcase-related-item"
                href={localePath(locale, `/products/${relatedProduct.slug}`)}
                key={relatedProduct.slug}
              >
                <Image
                  src={relatedProduct.image.src}
                  width={relatedProduct.image.width}
                  height={relatedProduct.image.height}
                  sizes="(max-width: 620px) 28vw, 9rem"
                  alt={localize(relatedProduct.image.alt, locale)}
                />
                <span>{locale === "th" && relatedProduct.name.en
                  ? relatedProduct.name.en
                  : localize(relatedProduct.name, locale)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="showcase-contact">
        <div className="shell showcase-contact-grid">
          <div>
            <span className="showcase-eyebrow">MIKEO</span>
            <h2>{d.product.contactTitle}</h2>
          </div>
          <div className="showcase-contact-copy">
            <p>{d.product.contactBody}</p>
            <Link className="showcase-contact-link" href={localePath(locale, "/contact")}>
              <span className="sr-only">{d.common.contact}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
