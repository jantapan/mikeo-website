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
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const d = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/about",
    title: d.nav.about,
    description: d.about.intro,
  });
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const d = getDictionary(locale);
  const a = d.about;

  return (
    <>
      <PageHero title={a.title} intro={a.intro} variant="about" />
      <section className="section about-story-section">
        <div className="shell about-story-layout">
          <h2>
            {a.values.split("\n").map((line) => (
              <span className="value-line" key={line}>{line}</span>
            ))}
          </h2>
          <div className="prose">
            <h3>{a.philosophyTitle}</h3>
            <p>{a.philosophyBody}</p>
            <h3>{a.priorityTitle}</h3>
            <p>{a.priorityBody}</p>
            <Link className="button button-primary" href={localePath(locale, "/products")}>
              {d.common.viewProducts}
            </Link>
          </div>
          <Image
            className="about-story-botanical"
            src="/images/decor/contact-botanical-ribbon.webp"
            width={864}
            height={1821}
            sizes="(max-width: 900px) 32vw, 20vw"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
