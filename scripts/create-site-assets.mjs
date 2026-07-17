import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicBannerSource = path.resolve(
  "public",
  "images",
  "banners",
  "mikeo-international-banner-desktop.jpg",
);
const archivedBannerSource = path.resolve(
  "incoming",
  "source-assets",
  "mikeo-international-banner-desktop.jpg",
);
const logoSource = path.resolve("public", "images", "mikeo-logo.png");
const socialDirectory = path.resolve("public", "images", "social");
const MIKEO_RED = "#eb0000";

async function createBrandMark(size) {
  const wordmark = await sharp(logoSource)
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const wordmarkWidth = Math.max(12, Math.round(size * 0.78));
  const wordmarkHeight = Math.max(8, Math.round(size * 0.58));
  const resizedWordmark = await sharp(wordmark)
    .resize(wordmarkWidth, wordmarkHeight, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .flatten({ background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toBuffer();
  const wordmarkLeft = Math.round((size - wordmarkWidth) / 2);
  const wordmarkTop = Math.round((size - wordmarkHeight) / 2);
  const strokeWidth = Math.max(1, Math.round(size * 0.035));
  const strokeInset = strokeWidth / 2;
  const roundedSquare = Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg"><rect x="${strokeInset}" y="${strokeInset}" width="${size - strokeWidth}" height="${size - strokeWidth}" rx="${Math.round(size * 0.22)}" fill="#ffffff" stroke="${MIKEO_RED}" stroke-width="${strokeWidth}"/></svg>`,
  );

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([
      { input: roundedSquare, top: 0, left: 0 },
      { input: resizedWordmark, top: wordmarkTop, left: wordmarkLeft },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function createIco(images) {
  const headerSize = 6;
  const entrySize = 16;
  const directory = Buffer.alloc(headerSize + entrySize * images.length);
  directory.writeUInt16LE(0, 0);
  directory.writeUInt16LE(1, 2);
  directory.writeUInt16LE(images.length, 4);

  let offset = directory.length;
  images.forEach(({ size, buffer }, index) => {
    const entryOffset = headerSize + entrySize * index;
    directory.writeUInt8(size === 256 ? 0 : size, entryOffset);
    directory.writeUInt8(size === 256 ? 0 : size, entryOffset + 1);
    directory.writeUInt8(0, entryOffset + 2);
    directory.writeUInt8(0, entryOffset + 3);
    directory.writeUInt16LE(1, entryOffset + 4);
    directory.writeUInt16LE(32, entryOffset + 6);
    directory.writeUInt32LE(buffer.length, entryOffset + 8);
    directory.writeUInt32LE(offset, entryOffset + 12);
    offset += buffer.length;
  });

  return Buffer.concat([directory, ...images.map(({ buffer }) => buffer)]);
}

await mkdir(socialDirectory, { recursive: true });
if (!existsSync(archivedBannerSource)) {
  await mkdir(path.dirname(archivedBannerSource), { recursive: true });
  await copyFile(publicBannerSource, archivedBannerSource);
}

const bannerSource = archivedBannerSource;

const webBanner = await sharp(bannerSource)
  .rotate()
  .resize({ width: 2400, withoutEnlargement: true })
  .webp({ quality: 86, effort: 6, smartSubsample: true })
  .toFile(path.resolve("public", "images", "banners", "mikeo-international-banner-desktop.webp"));

const socialImage = await sharp(bannerSource)
  .rotate()
  .resize(1200, 630, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255 },
  })
  .jpeg({ quality: 86, progressive: true, chromaSubsampling: "4:4:4" })
  .toFile(path.join(socialDirectory, "mikeo-og.jpg"));

const iconBuffer = await createBrandMark(512);
const appleIconBuffer = await createBrandMark(180);
const faviconImages = await Promise.all(
  [16, 32, 48, 256].map(async (size) => ({ size, buffer: await createBrandMark(size) })),
);
const faviconBuffer = createIco(faviconImages);

await writeFile(path.resolve("app", "icon.png"), iconBuffer);
await writeFile(path.resolve("app", "apple-icon.png"), appleIconBuffer);
await writeFile(path.resolve("app", "favicon.ico"), faviconBuffer);

console.table([
  { asset: "web banner", width: webBanner.width, height: webBanner.height, bytes: webBanner.size },
  { asset: "social preview", width: socialImage.width, height: socialImage.height, bytes: socialImage.size },
  { asset: "site icon", width: 512, height: 512, bytes: iconBuffer.length },
  { asset: "apple icon", width: 180, height: 180, bytes: appleIconBuffer.length },
  { asset: "favicon", width: 256, height: 256, bytes: faviconBuffer.length },
]);
