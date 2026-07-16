import type { MetadataRoute } from "next";
import { products } from "@/lib/catalog";
import { localePath, locales, type Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

const publicPaths = ["", "/about", "/products", "/contact"];

function absoluteUrl(locale: Locale, path: string) {
  return new URL(localePath(locale, path), getSiteUrl()).toString();
}

function alternateLanguages(path: string) {
  return {
    en: absoluteUrl("en", path),
    th: absoluteUrl("th", path),
    "x-default": absoluteUrl("en", path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = publicPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(locale, path),
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : path === "/products" ? 0.9 : 0.7,
      alternates: { languages: alternateLanguages(path) },
    })),
  );

  const productPages = products.flatMap((product) => {
    const path = `/products/${product.slug}`;
    return locales.map((locale) => ({
      url: absoluteUrl(locale, path),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: alternateLanguages(path) },
    }));
  });

  return [...staticPages, ...productPages];
}
