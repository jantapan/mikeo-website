import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductExplorer } from "@/components/ProductExplorer";

export const metadata: Metadata = { title: "ผลิตภัณฑ์" };

export default function ProductsPage() {
  return (
    <>
      <PageHero title="โครงสร้างผลิตภัณฑ์ MIKEO" intro="สำรวจหมวดหมู่เบื้องต้นสำหรับตัวแทนและผู้จัดจำหน่าย ข้อมูลผลิตภัณฑ์จริงกำลังอยู่ระหว่างการรวบรวมและตรวจสอบ" />
      <section className="section">
        <div className="shell">
          <div className="notice-box" role="note">
            <strong>สถานะข้อมูล: ตัวอย่างโครงสร้าง</strong>
            <p>รายการด้านล่างไม่ใช่ชื่อหรือบรรจุภัณฑ์ผลิตภัณฑ์จริง และไม่มีการแสดงราคา ข้อกล่าวอ้าง หรือข้อมูลกำกับดูแล</p>
          </div>
          <ProductExplorer />
        </div>
      </section>
    </>
  );
}
