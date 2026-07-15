import type { Product } from "@/lib/catalog";

export function ProductVisual({ visual, compact = false }: { visual: Product["visual"]; compact?: boolean }) {
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
