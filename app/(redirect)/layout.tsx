import "../globals.css";

export default function RedirectLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en/" />
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Discover MIKEO health and beauty products and official brand information."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <title>MIKEO | Health &amp; Beauty Products</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
