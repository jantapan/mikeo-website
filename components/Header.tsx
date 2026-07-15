"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/products", label: "ผลิตภัณฑ์" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/standards", label: "มาตรฐาน" },
  { href: "/distributors", label: "สำหรับตัวแทน" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        ข้ามไปยังเนื้อหาหลัก
      </a>
      <div className="announcement" role="status">
        เว็บไซต์สำหรับข้อมูลแบรนด์และผลิตภัณฑ์ ข้อมูลรายละเอียดอยู่ระหว่างการตรวจสอบ
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <button
            ref={triggerRef}
            type="button"
            className="icon-button menu-trigger"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="เปิดเมนูหลัก"
            onClick={() => setOpen(true)}
          >
            <span aria-hidden="true" className="menu-lines" />
          </button>

          <Link href="/" className="logo-link" aria-label="MIKEO หน้าหลัก">
            <Image
              src="/images/mikeo-logo.png"
              alt="MIKEO brand"
              width={547}
              height={420}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="desktop-nav" aria-label="เมนูหลัก">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="button button-primary header-cta" href="/products">
            ดูผลิตภัณฑ์
          </Link>
        </div>
      </header>

      {open && (
        <div className="menu-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <div
            id="mobile-navigation"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="เมนูหลัก"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu-head">
              <Image
                src="/images/mikeo-logo.png"
                alt=""
                width={547}
                height={420}
                className="brand-logo"
              />
              <button
                ref={closeButtonRef}
                type="button"
                className="icon-button close-button"
                aria-label="ปิดเมนูหลัก"
                onClick={() => {
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <nav aria-label="เมนูหลักบนมือถือ" className="mobile-nav-links">
              <Link href="/" onClick={() => setOpen(false)}>หน้าหลัก</Link>
              {navigation.map((item) => (
                <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)}>ติดต่อเรา</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
