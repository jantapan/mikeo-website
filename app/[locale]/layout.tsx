import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, locales } from "@/lib/i18n";
import "../globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params; if (!hasLocale(locale)) return {};
  const d=getDictionary(locale); return { title: { default:d.meta.title, template:`%s | MIKEO` }, description:d.meta.description };
}
export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale }=await params; if(!hasLocale(locale)) notFound(); const d=getDictionary(locale);
  return <html lang={locale}><body><Header locale={locale} dictionary={d}/><main id="main-content">{children}</main><Footer locale={locale} dictionary={d}/></body></html>;
}
