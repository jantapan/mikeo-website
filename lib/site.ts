import type { Metadata } from "next";
import { localePath, type Locale } from "@/lib/i18n";

const LOCAL_SITE_URL = "http://localhost:3000";
const PRODUCTION_SITE_URL = "https://mikeocosmetic.com";
const DEFAULT_SOCIAL_IMAGE = {
  url: "/images/social/mikeo-og.jpg",
  width: 1200,
  height: 630,
  alt: "MIKEO brand and product showcase",
};

function normalizeSiteUrl(value: string) {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  const url = new URL(withProtocol);
  url.pathname = "/";
  url.search = "";
  url.hash = "";
  return url;
}

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const deploymentUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
    ?? process.env.VERCEL_URL?.trim();
  const fallbackUrl = process.env.NODE_ENV === "production"
    ? PRODUCTION_SITE_URL
    : LOCAL_SITE_URL;

  return normalizeSiteUrl(configuredUrl || deploymentUrl || fallbackUrl);
}

export function getLocalizedUrl(locale: Locale, path = "") {
  return new URL(localePath(locale, path), getSiteUrl()).toString();
}

export function buildPageMetadata({
  locale,
  path = "",
  title,
  description,
  absoluteTitle = false,
  robots,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
  robots?: Metadata["robots"];
}): Metadata {
  const canonical = getLocalizedUrl(locale, path);
  const englishUrl = getLocalizedUrl("en", path);
  const thaiUrl = getLocalizedUrl("th", path);
  const socialImageUrl = new URL(DEFAULT_SOCIAL_IMAGE.url, getSiteUrl()).toString();
  const socialTitle = absoluteTitle ? title : `${title} | MIKEO`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        en: englishUrl,
        th: thaiUrl,
        "x-default": englishUrl,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "MIKEO",
      title: socialTitle,
      description,
      locale: locale === "th" ? "th_TH" : "en_US",
      alternateLocale: [locale === "th" ? "en_US" : "th_TH"],
      images: [{ ...DEFAULT_SOCIAL_IMAGE, url: socialImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImageUrl],
    },
    robots,
  };
}
