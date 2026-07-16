import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
import "../globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params; if (!hasLocale(locale)) return {};
  const d=getDictionary(locale); return {
    metadataBase: getSiteUrl(),
    title: { default:d.meta.title, template:`%s | MIKEO` },
    description:d.meta.description,
    applicationName: "MIKEO",
    generator: "Next.js",
    creator: "MIKEO",
    publisher: "MIKEO",
    referrer: "strict-origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    icons: { icon: "/icon.png", apple: "/apple-icon.png" },
    manifest: "/manifest.webmanifest",
    robots: { index: true, follow: true },
  };
}
export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale }=await params; if(!hasLocale(locale)) notFound(); const d=getDictionary(locale);
  return <html lang={locale}><body><Header locale={locale} dictionary={d}/><main id="main-content">{children}</main><Footer locale={locale} dictionary={d}/></body></html>;
}
