"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const hrefFor = (nextLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  };

  const switchLanguage = (event: React.MouseEvent<HTMLAnchorElement>, nextLocale: Locale) => {
    event.preventDefault();
    router.push(`${hrefFor(nextLocale)}${window.location.search}`);
  };

  return (
    <nav className="language-switcher" aria-label={label}>
      <Link href={hrefFor("en")} hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined} onClick={(event)=>switchLanguage(event,"en")}>EN</Link>
      <span aria-hidden="true">/</span>
      <Link href={hrefFor("th")} hrefLang="th" lang="th" aria-current={locale === "th" ? "page" : undefined} onClick={(event)=>switchLanguage(event,"th")}>ไทย</Link>
    </nav>
  );
}
