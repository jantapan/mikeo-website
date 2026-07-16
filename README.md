# MIKEO Website

เว็บไซต์สองภาษา (ไทย/อังกฤษ) สำหรับนำเสนอแบรนด์และผลิตภัณฑ์ MIKEO จำนวน 13 รายการ พัฒนาด้วย Next.js 16 และเน้นภาพจริงที่ได้รับจากแบรนด์เป็นหลัก เว็บไซต์นี้เป็น Product Showcase และไม่มีราคา ตะกร้า หรือ Checkout

## เริ่มต้นใช้งาน

ต้องใช้ Node.js 20.9.0 ขึ้นไป จากนั้นติดตั้งและเริ่ม development server:

```bash
npm ci
npm run dev
```

เปิด `http://localhost:3000` ระบบจะพาไปภาษาอังกฤษอัตโนมัติ หรือเปิด `/th` สำหรับภาษาไทย

## Production checks

รันชุดตรวจทั้งหมดและ production build ก่อน deploy ทุกครั้ง:

```bash
npm run check
npm run build
```

คำสั่ง `check` ครอบคลุม TypeScript, ESLint และการตรวจ asset/slug ของสินค้า

## Environment

คัดลอก `.env.example` เป็น `.env.local` และกำหนดโดเมนจริง:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

ค่านี้ใช้สร้าง canonical URL, hreflang, sitemap และ social sharing metadata หาก deploy บน Vercel โดยยังไม่ได้ตั้งค่า ระบบจะใช้ deployment URL เป็น fallback แต่ควรตั้งโดเมนจริงเสมอ

## รายการที่รอข้อมูลทางการ

- ลิงก์ช่องทางติดต่อและ social media: ยังไม่มีการฝังลิงก์ที่คาดเดา ไอคอนในหน้า Contact เป็นองค์ประกอบตกแต่งเท่านั้น
- รายชื่อตัวแทนผู้จัดจำหน่ายอย่างเป็นทางการ: หน้า `/th/distributors` และ `/en/distributors` แสดงพื้นที่รอยืนยัน และถูกตั้ง `noindex` พร้อมตัดออกจาก sitemap จนกว่าจะมีข้อมูลจริง

เมื่อได้รับข้อมูล ให้ตรวจสอบชื่อ ปลายทาง URL และสิทธิ์การใช้โลโก้/ข้อมูลก่อนเผยแพร่ แล้วจึงนำ `noindex` ออกจาก metadata ของหน้าตัวแทนและเพิ่ม route กลับเข้า sitemap

## Production notes

- `robots.txt`, `sitemap.xml`, web app manifest, canonical/hreflang และ Open Graph ถูกสร้างโดย App Router
- Security headers พื้นฐานถูกตั้งใน `next.config.ts`
- รูป social preview และ favicon สร้างใหม่ได้ด้วย `npm run assets:site`
- ไม่ควรใส่ราคา คำเคลม เลข อย. ส่วนประกอบ หรือช่องทางติดต่อเพิ่มเติมหากไม่มีเอกสารยืนยันจากแบรนด์
