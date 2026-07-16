import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, localePath } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/distributors">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const d = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/distributors",
    title: d.nav.distributors,
    description: d.distributors.intro,
  });
}

export default async function DistributorsPage({
  params,
}: PageProps<"/[locale]/distributors">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const d = getDictionary(locale);
  const c = d.distributors;

  return (
    <>
      <PageHero title={c.title} intro={c.intro} variant="distributors" />
      <section className="section distributor-directory">
        <div className="shell distributor-directory-layout">
          <header className="distributor-directory-heading">
            <span className="distributor-region">MIKEO × GCC</span>
            <h2>{c.sectionTitle}</h2>
            <p>{c.sectionBody}</p>
          </header>
          <article className="distributor-feature">
            <div className="distributor-profile">
              <div className="distributor-identity">
                <div className="distributor-status">
                  <span aria-hidden="true" />
                  {c.status}
                </div>
                <h2>ARK SHINY<br />TRADING L.L.C.</h2>
                <p className="distributor-market">Dubai, United Arab Emirates · GCC Region</p>
              </div>

              <dl className="distributor-facts">
                <div>
                  <dt>{c.roleLabel}</dt>
                  <dd>{c.role}</dd>
                </div>
                <div>
                  <dt>{c.territoryLabel}</dt>
                  <dd>{c.territory}</dd>
                </div>
                <div>
                  <dt>{c.validityLabel}</dt>
                  <dd>{c.validity}</dd>
                </div>
              </dl>

              <div className="distributor-vision">
                <p>{c.visionLabel}</p>
                <blockquote>{c.vision}</blockquote>
              </div>
            </div>

            <div className="distributor-media-gallery">
              <figure className="distributor-partner-artwork">
                <Image
                  src="/images/distributors/ark-shiny-trading-official-partner.webp"
                  width={1087}
                  height={1447}
                  sizes="(max-width: 900px) calc(100vw - 40px), 34vw"
                  alt={c.photoAlt}
                />
                <figcaption>{c.photoCaption}</figcaption>
              </figure>

              <figure className="distributor-certificate">
                <a
                  className="distributor-certificate-link"
                  href="/images/distributors/ark-shiny-trading-certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={c.certificateOpenLabel}
                >
                  <Image
                    src="/images/distributors/ark-shiny-trading-certificate.webp"
                    width={2200}
                    height={1556}
                    sizes="(max-width: 900px) calc(100vw - 40px), 60vw"
                    alt={c.certificateAlt}
                  />
                </a>
                <figcaption>
                  <span>{c.certificateCaption}</span>
                  <a
                    href="/images/distributors/ark-shiny-trading-certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {c.certificateLink} <span aria-hidden="true">↗</span>
                  </a>
                </figcaption>
              </figure>
            </div>
          </article>
          <div className="distributor-contact-card">
            <div>
              <h3>{c.contactTitle}</h3>
              <p>{c.contactBody}</p>
            </div>
            <Link className="button button-primary" href={localePath(locale, "/contact")}>
              {d.common.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
