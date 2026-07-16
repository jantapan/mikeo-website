import Image from "next/image";
import type { ReactNode } from "react";
import { SocialOrbit } from "./SocialOrbit";

type PageHeroVariant = "default" | "products" | "about" | "contact" | "distributors";

const productArtwork = [
  {
    src: "/images/products/home/gluta-collagen-sakura-peach.webp",
    width: 699,
    height: 850,
  },
  {
    src: "/images/products/home/pistachio-coffee.webp",
    width: 707,
    height: 685,
  },
  {
    src: "/images/products/home/cacao-cocoa-mix-plus.webp",
    width: 707,
    height: 685,
  },
  {
    src: "/images/products/home/blood-orange-c.webp",
    width: 707,
    height: 708,
  },
] as const;

function HeroArtwork({ variant }: { variant: PageHeroVariant }) {
  if (variant === "products" || variant === "distributors") {
    return (
      <div className={`page-hero-product-collage page-hero-product-collage-${variant}`} aria-hidden="true">
        {productArtwork.map((image, index) => (
          <Image
            className={`page-hero-product page-hero-product-${index + 1}`}
            src={image.src}
            width={image.width}
            height={image.height}
            sizes="(max-width: 620px) 32vw, 15vw"
            alt=""
            preload={index === 2}
            key={image.src}
          />
        ))}
      </div>
    );
  }

  if (variant === "about") {
    return (
      <Image
        className="page-hero-botanical page-hero-botanical-about"
        src="/images/decor/about-botanical-orbit.webp"
        width={1717}
        height={916}
        sizes="(max-width: 620px) 100vw, 58vw"
        alt=""
        preload
      />
    );
  }

  if (variant === "contact") {
    return <SocialOrbit />;
  }

  return <div className="page-hero-mark" aria-hidden="true"><span /></div>;
}

export function PageHero({
  title,
  intro,
  children,
  variant = "default",
}: {
  title: string;
  intro: string;
  children?: ReactNode;
  variant?: PageHeroVariant;
}) {
  return (
    <section className={`page-hero red-field page-hero-${variant}`}>
      <div className="shell page-hero-inner">
        <div className="page-hero-copy">
          <h1>{title}</h1>
          <p>{intro}</p>
          {children}
        </div>
        <div className="page-hero-visual" aria-hidden="true">
          <HeroArtwork variant={variant} />
        </div>
      </div>
    </section>
  );
}
