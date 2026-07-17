import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProductGallery } from "@/components/ProductGallery";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/site";

const contactChannels = [
  {
    id: "instagram",
    href: "https://www.instagram.com/mikeobrandofficial/",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/share/1BQQbzPvzQ/?mibextid=wwXIfr",
  },
  {
    id: "line",
    href: "https://line.me/ti/p/~mikeo.789",
  },
] as const;

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
        <div className="shell">
          <header className="contact-channel-heading">
            <h2>{c.channelsTitle}</h2>
            <p>{c.channelsBody}</p>
          </header>
          <div className="contact-channel-grid">
            <div className="contact-method-list">
              {contactChannels.map((channel) => {
                const label = c.channels[channel.id].label;
                const value = c.channels[channel.id].value;

                return (
                  <a
                    className={`contact-method contact-method-${channel.id}`}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${c.openChannel}: ${label} ${value}`}
                    key={channel.id}
                  >
                    <span className="contact-method-mark" aria-hidden="true">
                      {channel.id === "instagram" ? "IG" : channel.id === "facebook" ? "f" : "LINE"}
                    </span>
                    <span className="contact-method-copy">
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </span>
                    <span className="contact-method-arrow" aria-hidden="true">↗</span>
                  </a>
                );
              })}
            </div>

            <article className="contact-channel-artwork">
              <header className="contact-whatsapp-copy">
                <h3>{c.whatsappTitle}</h3>
                <p>{c.whatsappBody}</p>
              </header>
              <ProductGallery
                images={[{
                  src: "/images/contact/whatsapp-contact.webp",
                  width: 868,
                  height: 1885,
                  alt: c.imageAlt,
                }]}
                copy={{
                  openImage: d.product.openImage,
                  closeImage: d.product.closeImage,
                  previousImage: d.product.previousImage,
                  nextImage: d.product.nextImage,
                }}
              />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
