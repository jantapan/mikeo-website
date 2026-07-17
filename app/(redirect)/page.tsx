import Link from "next/link";

export default function IndexPage() {
  return (
    <main
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        justifyContent: "center",
        minHeight: "100svh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#e60012", fontWeight: 800, letterSpacing: "0.16em" }}>MIKEO</p>
      <h1 style={{ fontSize: "clamp(2rem, 8vw, 5rem)", margin: 0 }}>Choose your language</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
        <Link href="/en/">English</Link>
        <span aria-hidden="true">/</span>
        <Link href="/th/" lang="th">ภาษาไทย</Link>
      </div>
    </main>
  );
}
