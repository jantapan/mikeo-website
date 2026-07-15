"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";

function useLocale(): Locale { return usePathname().split("/")[1] === "th" ? "th" : "en"; }
export function LoadingState(){const d=getDictionary(useLocale());return <div className="loading-page" role="status" aria-live="polite"><span className="loading-mark" aria-hidden="true"/><p>{d.states.loading}</p></div>;}
export function ErrorState({retry}:{retry:()=>void}){const d=getDictionary(useLocale());return <section className="state-page"><div className="shell state-card"><span className="state-code" aria-hidden="true">!</span><h1>{d.states.errorTitle}</h1><p>{d.states.errorBody}</p><button className="button button-primary" type="button" onClick={retry}>{d.states.retry}</button></div></section>;}
export function NotFoundState(){const locale=useLocale(),d=getDictionary(locale);return <section className="state-page"><div className="shell state-card"><span className="state-code" aria-hidden="true">404</span><h1>{d.states.notFoundTitle}</h1><p>{d.states.notFoundBody}</p><Link className="button button-primary" href={localePath(locale)}>{d.states.home}</Link></div></section>;}
