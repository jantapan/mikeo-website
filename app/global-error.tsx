"use client";

import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="th">
      <body>
        <title>MIKEO | เกิดข้อผิดพลาด</title>
        <main id="main-content" className="state-page">
          <div className="shell state-card">
            <span className="state-code" aria-hidden="true">!</span>
            <h1>ไม่สามารถแสดงเว็บไซต์ได้</h1>
            <p>เกิดข้อผิดพลาดชั่วคราว กรุณาลองอีกครั้ง<br />Something went wrong. Please try again.</p>
            <button className="button button-primary" type="button" onClick={unstable_retry}>
              ลองอีกครั้ง · Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
