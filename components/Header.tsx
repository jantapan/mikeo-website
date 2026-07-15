"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dictionary: d }: { locale: Locale; dictionary: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigation = [
    { path: "/products", label: d.nav.products }, { path: "/about", label: d.nav.about },
    { path: "/standards", label: d.nav.standards }, { path: "/distributors", label: d.nav.distributors },
  ];

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
      if (event.key === "Tab") {
        const menu = document.getElementById("mobile-navigation");
        const focusable = menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!focusable?.length) return;
        const first = focusable[0]; const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", handleKeyDown); };
  }, [open]);

  return <>
    <a className="skip-link" href="#main-content">{d.nav.skip}</a>
    <div className="announcement" role="status">{d.announcement}</div>
    <header className="site-header"><div className="shell header-inner">
      <button ref={triggerRef} type="button" className="icon-button menu-trigger" aria-expanded={open} aria-controls="mobile-navigation" aria-label={d.nav.open} onClick={() => setOpen(true)}><span aria-hidden="true" className="menu-lines" /></button>
      <Link href={localePath(locale)} className="logo-link" aria-label={`MIKEO · ${d.nav.home}`}><Image src="/images/mikeo-logo.png" alt="MIKEO" width={547} height={420} priority className="brand-logo" /></Link>
      <nav className="desktop-nav" aria-label={d.nav.main}>{navigation.map((item) => { const href=localePath(locale,item.path); return <Link href={href} key={item.path} aria-current={pathname === href ? "page" : undefined}>{item.label}</Link>; })}</nav>
      <div className="header-actions"><LanguageSwitcher locale={locale} label={d.nav.language} /><Link className="button button-primary header-cta" href={localePath(locale,"/products")}>{d.common.viewProducts}</Link></div>
    </div></header>
    {open && <div className="menu-backdrop" role="presentation" onMouseDown={() => setOpen(false)}><div id="mobile-navigation" className="mobile-menu" role="dialog" aria-modal="true" aria-label={d.nav.mobile} onMouseDown={(e) => e.stopPropagation()}>
      <div className="mobile-menu-head"><Image src="/images/mikeo-logo.png" alt="" width={547} height={420} className="brand-logo" /><button ref={closeButtonRef} type="button" className="icon-button close-button" aria-label={d.nav.close} onClick={() => { setOpen(false); triggerRef.current?.focus(); }}><span aria-hidden="true">×</span></button></div>
      <LanguageSwitcher locale={locale} label={d.nav.language} />
      <nav aria-label={d.nav.mobile} className="mobile-nav-links"><Link href={localePath(locale)} onClick={()=>setOpen(false)}>{d.nav.home}</Link>{navigation.map((item) => <Link href={localePath(locale,item.path)} key={item.path} onClick={()=>setOpen(false)}>{item.label}</Link>)}<Link href={localePath(locale,"/contact")} onClick={()=>setOpen(false)}>{d.nav.contact}</Link></nav>
    </div></div>}
  </>;
}
