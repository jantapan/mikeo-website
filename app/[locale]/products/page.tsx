import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProductExplorer } from "@/components/ProductExplorer";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";

export async function generateMetadata({params}:PageProps<"/[locale]/products">):Promise<Metadata>{const{locale}=await params;if(!hasLocale(locale))return{};return{title:getDictionary(locale).nav.products,description:getDictionary(locale).products.intro};}
export default async function ProductsPage({params}:PageProps<"/[locale]/products">){const{locale}=await params;if(!hasLocale(locale))notFound();const d=getDictionary(locale);return <><PageHero title={d.products.title} intro={d.products.intro}/><section className="section"><div className="shell"><div className="notice-box" role="note"><strong>{d.products.noticeTitle}</strong><p>{d.products.noticeBody}</p></div><Suspense fallback={<p className="filter-status">{d.states.loading}</p>}><ProductExplorer locale={locale} dictionary={d}/></Suspense></div></section></>;}
