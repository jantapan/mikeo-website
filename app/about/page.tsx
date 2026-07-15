import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "เกี่ยวกับ MIKEO" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="MIKEO ในทุกวันของการดูแลตัวเอง" intro="แบรนด์ไทยที่นำเวลเนส บอดี้แคร์ สกินแคร์ และความงามมารวมไว้ในกิจวัตรประจำวันที่เข้าถึงง่าย" />
      <section className="section">
        <div className="shell editorial-grid">
          <h2>Spirited.<br />Encouraging.<br />Transparent.</h2>
          <div className="prose">
            <h3>แนวคิดของแบรนด์</h3>
            <p>MIKEO เชื่อว่าการดูแลตัวเองไม่จำเป็นต้องซับซ้อน แบรนด์จึงมุ่งสร้างประสบการณ์ที่เป็นมิตร สนุก และสอดคล้องกับกิจวัตรจริงของผู้บริโภคชาวไทย</p>
            <h3>สิ่งที่เราให้ความสำคัญ</h3>
            <p>การสื่อสารต้องชัดเจน เคารพผู้บริโภค และแยกข้อมูลที่ยืนยันแล้วออกจากข้อมูลที่ยังอยู่ระหว่างการตรวจสอบเสมอ</p>
            <div className="unverified-inline">ข้อมูลผู้ก่อตั้งและรายละเอียดประวัติแบรนด์ฉบับเต็มกำลังอัปเดต</div>
            <Link className="button button-primary" href="/products">ดูผลิตภัณฑ์</Link>
          </div>
        </div>
      </section>
    </>
  );
}
