import Link from "next/link";

export default function NotFound() {
  return (
    <section className="state-page">
      <div className="shell state-card">
        <span className="state-code">404</span>
        <h1>ไม่พบหน้าที่คุณกำลังมองหา</h1>
        <p>ตรวจสอบ URL อีกครั้ง หรือกลับไปเริ่มต้นจากหน้าหลัก</p>
        <Link className="button button-primary" href="/">กลับหน้าหลัก</Link>
      </div>
    </section>
  );
}
