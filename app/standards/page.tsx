import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "ข้อมูลและมาตรฐาน" };

export default function StandardsPage() {
  return (
    <>
      <PageHero title="ข้อมูลที่ตรวจสอบได้ สื่อสารอย่างตรงไปตรงมา" intro="พื้นที่สำหรับเอกสาร มาตรฐาน และข้อมูลรายผลิตภัณฑ์ที่ได้รับการตรวจสอบแล้ว โดยไม่สร้างหลักฐานหรือข้อกล่าวอ้างทดแทนข้อมูลจริง" />
      <section className="section">
        <div className="shell standards-page-grid">
          <div className="status-board">
            <h2>สถานะข้อมูลปัจจุบัน</h2>
            <p>เอกสารและข้อมูลเฉพาะผลิตภัณฑ์กำลังอยู่ระหว่างการรวบรวมและยืนยัน</p>
            <span className="status-label">กำลังอัปเดตข้อมูล</span>
          </div>
          <div className="verification-steps">
            <h2>หลักการเผยแพร่ข้อมูล</h2>
            <ol>
              <li><strong>รับข้อมูลต้นทาง</strong><span>รอเอกสารหรือข้อมูลจากเจ้าของข้อมูลที่เกี่ยวข้อง</span></li>
              <li><strong>ตรวจสอบความครบถ้วน</strong><span>แยกข้อมูลที่ตรวจสอบได้ออกจากเนื้อหาที่ยังไม่ยืนยัน</span></li>
              <li><strong>เผยแพร่พร้อมสถานะ</strong><span>แสดงเฉพาะข้อมูลที่เหมาะสม พร้อมบริบทที่เข้าใจง่าย</span></li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
