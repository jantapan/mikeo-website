import Link from "next/link";

export default function ProductNotFound() {
  return (
    <section className="state-page">
      <div className="shell state-card">
        <span className="state-code">404</span>
        <h1>ไม่พบข้อมูลผลิตภัณฑ์นี้</h1>
        <p>รายการอาจยังไม่ได้เพิ่มเข้าสู่โครงสร้างแคตตาล็อก หรือ URL ไม่ถูกต้อง</p>
        <Link className="button button-primary" href="/products">กลับไปยังผลิตภัณฑ์</Link>
      </div>
    </section>
  );
}
