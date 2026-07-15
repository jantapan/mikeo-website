import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Image
            src="/images/mikeo-logo.png"
            width={547}
            height={420}
            alt="MIKEO brand"
            className="footer-logo"
          />
          <p>ให้ทุกวันของการดูแลตัวเอง ง่ายขึ้น สนุกขึ้น และมั่นใจขึ้น</p>
        </div>
        <nav aria-label="เมนูส่วนท้าย">
          <Link href="/products">ผลิตภัณฑ์</Link>
          <Link href="/about">เกี่ยวกับ MIKEO</Link>
          <Link href="/standards">ข้อมูลและมาตรฐาน</Link>
          <Link href="/distributors">สำหรับตัวแทนและผู้จัดจำหน่าย</Link>
          <Link href="/contact">ติดต่อเรา</Link>
        </nav>
        <div className="footer-status">
          <strong>ช่องทางติดต่อ</strong>
          <p>กำลังอัปเดตช่องทางติดต่ออย่างเป็นทางการ</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© MIKEO</span>
        <span>เว็บไซต์แสดงข้อมูลแบรนด์และผลิตภัณฑ์</span>
      </div>
    </footer>
  );
}
