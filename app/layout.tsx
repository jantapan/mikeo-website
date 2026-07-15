import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MIKEO | แบรนด์และผลิตภัณฑ์",
    template: "%s | MIKEO",
  },
  description: "เว็บไซต์แสดงข้อมูลแบรนด์และโครงสร้างผลิตภัณฑ์ MIKEO สำหรับตัวแทนและผู้จัดจำหน่าย",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
