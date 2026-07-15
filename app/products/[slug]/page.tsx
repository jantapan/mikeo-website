import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductVisual } from "@/components/ProductVisual";
import { getCategory, getProduct, products } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? product.placeholderLabel.th : "ไม่พบผลิตภัณฑ์" };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.categoryId);

  return (
    <article className="product-detail">
      <div className="shell product-detail-hero">
        <ProductVisual visual={product.visual} />
        <div className="product-detail-copy">
          <Link href="/products" className="back-link"><span aria-hidden="true">←</span> กลับไปยังผลิตภัณฑ์</Link>
          <span className="placeholder-tag">ข้อมูลตัวอย่าง</span>
          <h1>{product.placeholderLabel.th}</h1>
          <p className="category-name">{category?.name.th}</p>
          <p>หน้าตัวอย่างนี้แสดงโครงสร้างข้อมูลเท่านั้น ไม่ใช่ผลิตภัณฑ์หรือบรรจุภัณฑ์จริง</p>
          <Link className="button button-primary" href="/contact">ติดต่อเรา</Link>
        </div>
      </div>

      <div className="shell detail-sections">
        <section>
          <h2>รายละเอียดผลิตภัณฑ์</h2>
          <div className="unverified-content"><strong>กำลังอัปเดตข้อมูล</strong><p>ชื่อผลิตภัณฑ์ คำอธิบาย และข้อมูลสำหรับตลาดต่างประเทศยังไม่ได้รับการยืนยัน</p></div>
        </section>
        <details>
          <summary>ข้อมูลส่วนประกอบ</summary>
          <p>กำลังอัปเดตข้อมูล — จะเผยแพร่เมื่อได้รับเอกสารต้นทางที่ตรวจสอบแล้ว</p>
        </details>
        <details>
          <summary>วิธีใช้และข้อควรระวัง</summary>
          <p>กำลังอัปเดตข้อมูล — ไม่มีการสร้างข้อความตัวอย่างที่อาจถูกเข้าใจว่าเป็นคำแนะนำจริง</p>
        </details>
        <details>
          <summary>เอกสารและข้อมูลกำกับดูแล</summary>
          <p>กำลังอัปเดตข้อมูล — ยังไม่มีเลขทะเบียน การรับรอง หรือเอกสารใดที่ยืนยันสำหรับเผยแพร่</p>
        </details>
      </div>
    </article>
  );
}
