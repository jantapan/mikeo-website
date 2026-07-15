import Link from "next/link";
import { ProductExplorer } from "@/components/ProductExplorer";
import { ProductVisual } from "@/components/ProductVisual";
import { categories } from "@/lib/catalog";

export default function Home() {
  return (
    <>
      <section className="home-hero red-field">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="hero-note">MIKEO · Brand & product showcase</p>
            <h1>ให้ทุกวันของการดูแลตัวเอง <span>ง่ายขึ้น สนุกขึ้น และมั่นใจขึ้น</span></h1>
            <p>ทำความรู้จักแบรนด์ MIKEO และสำรวจโครงสร้างกลุ่มผลิตภัณฑ์สำหรับตัวแทนและผู้จัดจำหน่าย</p>
            <div className="button-row">
              <Link className="button button-inverse" href="/products">ดูผลิตภัณฑ์</Link>
              <Link className="button button-on-red" href="/contact">ติดต่อเรา</Link>
            </div>
          </div>
          <div className="hero-stage" aria-label="ภาพจำลองพื้นที่แสดงผลิตภัณฑ์ ข้อมูลจริงอยู่ระหว่างการอัปเดต">
            <div className="hero-sun" aria-hidden="true" />
            <div className="hero-packages" aria-hidden="true">
              <ProductVisual visual="pouch" />
              <ProductVisual visual="jar" compact />
              <ProductVisual visual="bottle" />
            </div>
            <span className="visual-caption">ภาพผลิตภัณฑ์ตัวอย่างเพื่อแสดงโครงสร้างเท่านั้น</span>
          </div>
        </div>
      </section>

      <section className="verification-strip" aria-label="สถานะข้อมูล">
        <div className="shell verification-inner">
          <span className="info-mark" aria-hidden="true">i</span>
          <p><strong>ข้อมูลจริงอยู่ระหว่างการตรวจสอบ</strong> รายละเอียดผลิตภัณฑ์ เอกสาร และมาตรฐานจะเผยแพร่เมื่อได้รับการยืนยันเท่านั้น</p>
          <Link href="/standards">ดูแนวทางการตรวจสอบ <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section product-discovery">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <h2>เลือกดูโครงสร้างผลิตภัณฑ์</h2>
              <p>สำรวจหมวดหมู่เบื้องต้น ข้อมูลทั้งหมดในส่วนนี้เป็นตัวอย่างและกำลังอัปเดต</p>
            </div>
            <Link className="text-link" href="/products">ดูแคตตาล็อกทั้งหมด <span aria-hidden="true">→</span></Link>
          </div>
          <ProductExplorer limit={4} />
        </div>
      </section>

      <section className="category-collections" aria-labelledby="category-title">
        <div className="shell section-heading">
          <h2 id="category-title">กลุ่มผลิตภัณฑ์เบื้องต้น</h2>
          <p>สี่หมวดหมู่สำหรับวางโครงสร้างแคตตาล็อก รายการจริงจะอัปเดตเมื่อได้รับข้อมูลที่ยืนยันแล้ว</p>
        </div>
        <div className="shell category-grid">
          {categories.map((category, index) => (
            <Link href={`/products?category=${category.id}`} className={`category-panel category-panel-${index + 1}`} key={category.id}>
              <h3>{category.name.th}</h3>
              <p>กำลังอัปเดตข้อมูล</p>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-split">
        <div className="shell story-grid">
          <div className="story-copy">
            <h2>การดูแลตัวเองที่เข้ากับทุกวันจริง</h2>
            <p>MIKEO นำเวลเนส บอดี้แคร์ สกินแคร์ และความงามมารวมไว้ในกิจวัตรประจำวันที่เข้าถึงง่าย ด้วยผลิตภัณฑ์ที่ตั้งใจสร้างให้เข้ากับชีวิตจริงของผู้บริโภคชาวไทย</p>
            <Link className="button button-secondary" href="/about">รู้จัก MIKEO</Link>
          </div>
          <div className="brand-image-placeholder" role="img" aria-label="พื้นที่สำหรับภาพแบรนด์ MIKEO ซึ่งกำลังรอภาพที่ได้รับอนุมัติ">
            <span className="story-sun" aria-hidden="true" />
            <strong>ภาพแบรนด์กำลังอัปเดต</strong>
            <small>จะแสดงเมื่อได้รับไฟล์ที่ได้รับอนุมัติ</small>
          </div>
        </div>
      </section>

      <section className="section standards-home">
        <div className="shell standards-layout">
          <div>
            <h2>ความชัดเจนก่อนการกล่าวอ้าง</h2>
            <p>MIKEO จะเผยแพร่ข้อมูลผลิตภัณฑ์ เอกสาร และมาตรฐานเฉพาะรายการที่ตรวจสอบแหล่งที่มาแล้วเท่านั้น</p>
            <Link className="text-link" href="/standards">ดูสถานะข้อมูลและมาตรฐาน <span aria-hidden="true">→</span></Link>
          </div>
          <div className="standards-list">
            <div><span aria-hidden="true">01</span><p>แยกข้อมูลตัวอย่างออกจากข้อมูลที่ยืนยันแล้วอย่างชัดเจน</p></div>
            <div><span aria-hidden="true">02</span><p>ไม่แสดงเลขทะเบียน เอกสาร หรือข้อกล่าวอ้างที่ยังไม่มีแหล่งอ้างอิง</p></div>
            <div><span aria-hidden="true">03</span><p>อัปเดตข้อมูลรายผลิตภัณฑ์เมื่อได้รับเอกสารต้นทาง</p></div>
          </div>
        </div>
      </section>

      <section className="distributor-callout red-field">
        <div className="shell callout-grid">
          <div>
            <h2>สนใจร่วมเติบโตกับ MIKEO</h2>
            <p>ข้อมูลสำหรับตัวแทนและผู้จัดจำหน่ายอยู่ระหว่างการจัดเตรียม คุณสามารถดูโครงสร้างความร่วมมือเบื้องต้นได้ในหน้าสำหรับธุรกิจ</p>
          </div>
          <Link className="button button-inverse" href="/distributors">ข้อมูลสำหรับตัวแทน</Link>
        </div>
      </section>

      <section className="contact-handoff">
        <div className="shell contact-handoff-inner">
          <div>
            <h2>เริ่มต้นบทสนทนาทางธุรกิจ</h2>
            <p>กำลังอัปเดตช่องทางติดต่ออย่างเป็นทางการ</p>
          </div>
          <Link className="button button-primary" href="/contact">ติดต่อเรา</Link>
        </div>
      </section>
    </>
  );
}
