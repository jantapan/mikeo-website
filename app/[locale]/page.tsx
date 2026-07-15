import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductExplorer } from "@/components/ProductExplorer";
import { ProductVisual } from "@/components/ProductVisual";
import { categories } from "@/lib/catalog";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, localePath, localize } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const {locale}=await params; if(!hasLocale(locale)) notFound(); const d=getDictionary(locale); const h=d.home;
  return <>
    <section className="home-hero red-field"><div className="shell hero-grid"><div className="hero-copy"><p className="hero-note">{h.note}</p><h1>{h.title}</h1><p>{h.intro}</p><div className="button-row"><Link className="button button-inverse" href={localePath(locale,"/products")}>{d.common.viewProducts}</Link><Link className="button button-on-red" href={localePath(locale,"/contact")}>{d.common.contact}</Link></div></div><div className="hero-stage" aria-label={h.heroVisual}><div className="hero-sun" aria-hidden="true"/><div className="hero-packages" aria-hidden="true"><ProductVisual visual="pouch"/><ProductVisual visual="jar" compact/><ProductVisual visual="bottle"/></div><span className="visual-caption">{h.visualCaption}</span></div></div></section>
    <section className="verification-strip" aria-label={h.verificationTitle}><div className="shell verification-inner"><span className="info-mark" aria-hidden="true">i</span><p><strong>{h.verificationTitle}</strong> {h.verificationBody}</p><Link href={localePath(locale,"/standards")}>{h.verificationLink} <span aria-hidden="true">→</span></Link></div></section>
    <section className="section product-discovery"><div className="shell"><div className="section-heading split-heading"><div><h2>{h.discoveryTitle}</h2><p>{h.discoveryIntro}</p></div><Link className="text-link" href={localePath(locale,"/products")}>{h.catalogLink} <span aria-hidden="true">→</span></Link></div><Suspense fallback={<p className="filter-status">{d.states.loading}</p>}><ProductExplorer locale={locale} dictionary={d} limit={4}/></Suspense></div></section>
    <section className="category-collections" aria-labelledby="category-title"><div className="shell section-heading"><h2 id="category-title">{h.categoriesTitle}</h2><p>{h.categoriesIntro}</p></div><div className="shell category-grid">{categories.map((category,index)=><Link href={`${localePath(locale,"/products")}?category=${category.id}`} className={`category-panel category-panel-${index+1}`} key={category.id}><h3>{localize(category.name,locale)}</h3><p>{d.common.updating}</p><span className="category-arrow" aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="story-split"><div className="shell story-grid"><div className="story-copy"><h2>{h.storyTitle}</h2><p>{h.storyBody}</p><Link className="button button-secondary" href={localePath(locale,"/about")}>{h.storyLink}</Link></div><div className="brand-image-placeholder" role="img" aria-label={h.brandImage}><span className="story-sun" aria-hidden="true"/><strong>{h.brandImageTitle}</strong><small>{h.brandImageNote}</small></div></div></section>
    <section className="section standards-home"><div className="shell standards-layout"><div><h2>{h.standardsTitle}</h2><p>{h.standardsBody}</p><Link className="text-link" href={localePath(locale,"/standards")}>{h.standardsLink} <span aria-hidden="true">→</span></Link></div><div className="standards-list">{h.standardsPoints.map((point,index)=><div key={point}><span aria-hidden="true">0{index+1}</span><p>{point}</p></div>)}</div></div></section>
    <section className="distributor-callout red-field"><div className="shell callout-grid"><div><h2>{h.distributorTitle}</h2><p>{h.distributorBody}</p></div><Link className="button button-inverse" href={localePath(locale,"/distributors")}>{h.distributorLink}</Link></div></section>
    <section className="contact-handoff"><div className="shell contact-handoff-inner"><div><h2>{h.contactTitle}</h2><p>{d.common.contactUpdating}</p></div><Link className="button button-primary" href={localePath(locale,"/contact")}>{d.common.contact}</Link></div></section>
  </>;
}
