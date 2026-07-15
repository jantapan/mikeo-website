"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="state-page">
      <div className="shell state-card">
        <span className="state-code">!</span>
        <h1>ไม่สามารถแสดงข้อมูลได้ในขณะนี้</h1>
        <p>เกิดข้อผิดพลาดที่ไม่คาดคิด กรุณาลองโหลดหน้านี้อีกครั้ง</p>
        <button className="button button-primary" type="button" onClick={() => unstable_retry()}>ลองอีกครั้ง</button>
      </div>
    </section>
  );
}
