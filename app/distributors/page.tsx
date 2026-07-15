import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "สำหรับตัวแทนและผู้จัดจำหน่าย" };

export default function DistributorsPage() {
  return (
    <>
      <PageHero title="สำรวจโอกาสทางธุรกิจกับ MIKEO" intro="หน้าข้อมูลเบื้องต้นสำหรับตัวแทน ผู้จัดจำหน่าย และพันธมิตรในต่างประเทศ โดยไม่มีการกล่าวอ้างรายได้หรือเงื่อนไขที่ยังไม่ได้รับการยืนยัน" />
      <section className="section">
        <div className="shell partner-layout">
          <div>
            <h2>ข้อมูลที่จะจัดเตรียมสำหรับคู่ค้า</h2>
            <ul className="plain-list">
              <li>ภาพรวมแบรนด์และกลุ่มผลิตภัณฑ์</li>
              <li>ข้อมูลผลิตภัณฑ์และเอกสารที่ผ่านการตรวจสอบ</li>
              <li>ขอบเขตตลาดและรูปแบบความร่วมมือ</li>
              <li>กระบวนการติดต่อและพิจารณาเบื้องต้น</li>
            </ul>
          </div>
          <aside className="partner-status">
            <strong>สถานะเอกสารสำหรับตัวแทน</strong>
            <h3>กำลังอัปเดตข้อมูล</h3>
            <p>ข้อกำหนด เงื่อนไข และเอกสารประกอบยังไม่ได้รับการยืนยันสำหรับการเผยแพร่</p>
            <Link className="button button-secondary" href="/contact">ติดต่อเรา</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
