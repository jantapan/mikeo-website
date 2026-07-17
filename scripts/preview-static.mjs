import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../out/", import.meta.url)));
const port = Number.parseInt(process.argv[2] ?? process.env.PORT ?? "3000", 10);
const mimeTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function safePath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const relativePath = decoded.endsWith("/") ? `${decoded}index.html` : decoded;
  const filePath = resolve(root, `.${relativePath}`);

  return filePath === root || filePath.startsWith(`${root}${sep}`) ? filePath : null;
}

async function findFile(pathname) {
  const candidates = [
    safePath(pathname),
    safePath(`${pathname}/index.html`),
    safePath(`${pathname}.html`),
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      if ((await stat(candidate)).isFile()) {
        return candidate;
      }
    } catch {
      // Try the next static-export path shape.
    }
  }

  return safePath("/404.html");
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", "http://localhost");
    const filePath = await findFile(url.pathname);

    if (!filePath) {
      response.writeHead(400).end("Bad request");
      return;
    }

    if (filePath.endsWith("404.html")) {
      response.statusCode = 404;
    }

    response.setHeader("Content-Type", mimeTypes[extname(filePath)] ?? "application/octet-stream");
    response.setHeader("Cache-Control", "no-store");
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(500).end("Unable to serve the static export");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`MIKEO static export: http://localhost:${port}`);
});
