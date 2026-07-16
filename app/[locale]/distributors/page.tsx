import type { Metadata } from "next";
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
    robots: { index: false, follow: true },
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
            <span className="showcase-eyebrow">MIKEO</span>
            <h2>{c.sectionTitle}</h2>
            <p>{c.sectionBody}</p>
          </header>
          <div className="distributor-empty-grid" aria-label={c.emptyLabel}>
            {[1, 2, 3].map((index) => (
              <div className="distributor-empty-card" key={index}>
                <span aria-hidden="true">MIKEO</span>
                <span className="sr-only">{c.emptyLabel} {index}</span>
              </div>
            ))}
          </div>
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
