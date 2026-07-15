import type { ReactNode } from "react";

export function PageHero({ title, intro, children }: { title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="page-hero red-field">
      <div className="shell page-hero-inner">
        <div>
          <h1>{title}</h1>
          <p>{intro}</p>
          {children}
        </div>
        <div className="page-hero-mark" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}
