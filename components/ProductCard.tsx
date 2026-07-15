import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { getCategory } from "@/lib/catalog";
import { ProductVisual } from "./ProductVisual";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.categoryId);
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} aria-label={`ดู ${product.placeholderLabel.th}`}>
        <ProductVisual visual={product.visual} compact />
        <div className="product-card-copy">
          <span className="placeholder-tag">ข้อมูลตัวอย่าง</span>
          <h3>{product.placeholderLabel.th}</h3>
          <p>{category?.name.th}</p>
          <span className="text-link">ดูโครงสร้างข้อมูล <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
