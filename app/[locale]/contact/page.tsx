import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProductGallery } from "@/components/ProductGallery";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const d = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: d.nav.contact,
    description: d.contact.intro,
  });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const d = getDictionary(locale);
  const c = d.contact;

  return (
    <>
      <PageHero title={c.title} intro={c.intro} variant="contact" />
      <section className="contact-channel">
        <div className="shell contact-channel-grid">
          <header className="contact-channel-copy">
            <h2>{c.lineTitle}</h2>
            <p>{c.lineBody}</p>
          </header>
          <div className="contact-channel-artwork">
            <ProductGallery
              images={[{
                src: "/images/contact/line-contact.webp",
                width: 1074,
                height: 1524,
                alt: c.imageAlt,
              }]}
              copy={{
                openImage: d.product.openImage,
                closeImage: d.product.closeImage,
                previousImage: d.product.previousImage,
                nextImage: d.product.nextImage,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
