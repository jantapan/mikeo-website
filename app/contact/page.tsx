import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "ติดต่อเรา" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="ติดต่อ MIKEO" intro="พื้นที่สำหรับช่องทางติดต่อทางธุรกิจที่ได้รับการยืนยันแล้ว ขณะนี้ยังไม่มีอีเมล หมายเลขโทรศัพท์ หรือ URL อย่างเป็นทางการสำหรับเผยแพร่" />
      <section className="section">
        <div className="shell contact-page-grid">
          <div className="contact-unavailable" role="status">
            <span className="info-mark" aria-hidden="true">i</span>
            <div>
              <h2>กำลังอัปเดตช่องทางติดต่ออย่างเป็นทางการ</h2>
              <p>เมื่อได้รับข้อมูลที่ยืนยันแล้ว หน้านี้จะแสดงช่องทางสำหรับการสอบถามทางธุรกิจโดยตรง</p>
            </div>
          </div>
          <div className="contact-guidance">
            <h2>เตรียมข้อมูลสำหรับการติดต่อ</h2>
            <p>เพื่อให้การพูดคุยมีประสิทธิภาพ คู่ค้าสามารถเตรียมข้อมูลเบื้องต้นเกี่ยวกับประเทศ ตลาด และรูปแบบความร่วมมือที่สนใจไว้ล่วงหน้า</p>
            <p className="small-note">เว็บไซต์นี้ยังไม่มีแบบฟอร์มส่งข้อมูล และจะไม่แสดงปุ่มส่งที่ไม่ทำงาน</p>
          </div>
        </div>
      </section>
    </>
  );
}
