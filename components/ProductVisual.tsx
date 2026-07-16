import Image from "next/image";
import type { Product } from "@/lib/catalog";
import { localize, type Locale } from "@/lib/i18n";

export function ProductVisual({ product, visual, locale, compact = false, preload = false }: { product?: Product; visual: Product["visual"]; locale?: Locale; compact?: boolean; preload?: boolean }) {
  if (product?.image && locale) {
    return (
      <div className={`product-visual product-visual-real ${compact ? "product-visual-compact" : ""}`}>
        <Image
          src={product.image.src}
          width={product.image.width}
          height={product.image.height}
          sizes={compact ? "(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw" : "(max-width: 760px) 100vw, 50vw"}
          alt={localize(product.image.alt, locale)}
          className="product-packshot"
          preload={preload}
        />
      </div>
    );
  }

  return (
    <div className={`product-visual ${compact ? "product-visual-compact" : ""}`} aria-hidden="true">
      <div className="sun-disc" />
      <div className={`package package-${visual}`}>
        <span>ข้อมูลตัวอย่าง</span>
      </div>
      <div className="product-plinth" />
    </div>
  );
}
