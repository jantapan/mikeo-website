import { readFile, readdir, stat } from "node:fs/promises";
import { extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const outputRoot = resolve(fileURLToPath(new URL("../out/", import.meta.url)));
const productionOrigin = "https://mikeocosmetic.com";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(entryPath));
    } else {
      files.push(entryPath);
    }
  }

  return files;
}

function localOutputPath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const relativePath = decoded === "/"
    ? "index.html"
    : decoded.endsWith("/")
      ? `${decoded.slice(1)}index.html`
      : decoded.slice(1);
  const filePath = resolve(outputRoot, relativePath);

  if (filePath !== outputRoot && !filePath.startsWith(`${outputRoot}${sep}`)) {
    throw new Error(`Path escapes static output: ${pathname}`);
  }

  return filePath;
}

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

async function resolvesLocally(pathname) {
  const directPath = localOutputPath(pathname);
  if (await isFile(directPath)) {
    return true;
  }

  if (!extname(pathname)) {
    return isFile(localOutputPath(`${pathname.replace(/\/$/, "")}/`));
  }

  return false;
}

const files = await walk(outputRoot);
const htmlFiles = files.filter((file) => extname(file) === ".html");
const brokenReferences = [];
const localReferences = new Set();

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const references = html.matchAll(/(?:href|src)=["']([^"']+)["']/g);

  for (const [, reference] of references) {
    if (
      reference.startsWith("#")
      || reference.startsWith("//")
      || /^(?:data|https?|mailto|tel|javascript):/i.test(reference)
    ) {
      continue;
    }

    const pathname = new URL(reference, productionOrigin).pathname;
    localReferences.add(pathname);
    if (!await resolvesLocally(pathname)) {
      brokenReferences.push({ file: htmlFile.slice(outputRoot.length + 1), reference });
    }
  }
}

const sitemapPath = join(outputRoot, "sitemap.xml");
const sitemap = await readFile(sitemapPath, "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const brokenSitemapUrls = [];

for (const sitemapUrl of sitemapUrls) {
  const url = new URL(sitemapUrl);
  if (url.origin !== productionOrigin || !await resolvesLocally(url.pathname)) {
    brokenSitemapUrls.push(sitemapUrl);
  }
}

const rootHtml = await readFile(join(outputRoot, "index.html"), "utf8");
const legacyIndexPhp = await readFile(join(outputRoot, "index.php"), "utf8");
const textFiles = files.filter((file) => [".css", ".html", ".js", ".txt", ".webmanifest", ".xml"].includes(extname(file)));
const localhostFiles = [];

for (const textFile of textFiles) {
  if ((await readFile(textFile, "utf8")).includes("localhost:3000")) {
    localhostFiles.push(textFile.slice(outputRoot.length + 1));
  }
}

const errors = [];
if (sitemapUrls.length !== 36) errors.push(`Expected 36 sitemap URLs, found ${sitemapUrls.length}`);
if (brokenReferences.length) errors.push(`Found ${brokenReferences.length} broken local HTML references`);
if (brokenSitemapUrls.length) errors.push(`Found ${brokenSitemapUrls.length} invalid sitemap URLs`);
if (localhostFiles.length) errors.push(`Found localhost metadata in ${localhostFiles.length} exported files`);
if (!rootHtml.includes("url=/en/")) errors.push("Root page is missing the static /en/ forwarding instruction");
if (!legacyIndexPhp.includes('header("Location: /en/", true, 301)')) {
  errors.push("Legacy /index.php is missing the permanent /en/ redirect");
}

console.log(JSON.stringify({
  files: files.length,
  htmlFiles: htmlFiles.length,
  localReferences: localReferences.size,
  sitemapUrls: sitemapUrls.length,
  brokenReferences,
  brokenSitemapUrls,
  localhostFiles,
}, null, 2));

if (errors.length) {
  throw new Error(errors.join("; "));
}
