import "../globals.css";

export default function RedirectLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en/" />
        <meta name="robots" content="noindex, follow" />
        <title>MIKEO</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
