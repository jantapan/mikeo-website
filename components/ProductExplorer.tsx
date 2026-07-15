"use client";

import { useMemo, useState } from "react";
import { categories, products, type CategoryId } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

type Filter = "all" | CategoryId;

export function ProductExplorer({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(() => {
    const filtered = filter === "all" ? products : products.filter((product) => product.categoryId === filter);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  return (
    <div className="product-explorer">
      <div className="filter-row" role="group" aria-label="กรองผลิตภัณฑ์ตามหมวดหมู่">
        <button type="button" className={filter === "all" ? "is-active" : ""} aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          ทั้งหมด
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            className={filter === category.id ? "is-active" : ""}
            aria-pressed={filter === category.id}
            onClick={() => setFilter(category.id)}
          >
            {category.name.th}
          </button>
        ))}
      </div>
      <p className="filter-status" aria-live="polite">
        แสดง {visible.length} รายการ — ข้อมูลทั้งหมดเป็นตัวอย่างโครงสร้าง
      </p>
      {visible.length > 0 ? (
        <div className="product-grid">
          {visible.map((product) => <ProductCard product={product} key={product.slug} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h3>ยังไม่มีข้อมูลในหมวดหมู่นี้</h3>
          <p>กำลังอัปเดตข้อมูลผลิตภัณฑ์</p>
          <button type="button" className="button button-secondary" onClick={() => setFilter("all")}>ดูทุกหมวดหมู่</button>
        </div>
      )}
    </div>
  );
}
