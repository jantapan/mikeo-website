import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";

export function Footer({ locale, dictionary: d }: { locale: Locale; dictionary: Dictionary }) {
  const links = [["/products",d.nav.products],["/about",d.nav.about],["/standards",d.nav.standards],["/distributors",d.nav.distributors],["/contact",d.nav.contact]];
  return <footer className="site-footer"><div className="shell footer-grid">
    <div><Image src="/images/mikeo-logo.png" width={547} height={420} alt="MIKEO" className="footer-logo" /><p>{d.footer.tagline}</p></div>
    <nav aria-label={d.nav.footer}>{links.map(([path,label]) => <Link href={localePath(locale,path)} key={path}>{label}</Link>)}</nav>
    <div className="footer-status"><strong>{d.footer.channels}</strong><p>{d.common.contactUpdating}</p></div>
  </div><div className="shell footer-bottom"><span>© MIKEO</span><span>{d.footer.descriptor}</span></div></footer>;
}
