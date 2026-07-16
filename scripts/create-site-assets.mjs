import { copyFile, mkdir } from "node:fs/promises";
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

const iconBase = sharp(logoSource)
  .resize(448, 448, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  })
  .extend({ top: 32, bottom: 32, left: 32, right: 32, background: { r: 255, g: 255, b: 255, alpha: 0 } });

const icon = await iconBase.clone().png({ compressionLevel: 9 }).toFile(path.resolve("app", "icon.png"));
const appleIcon = await sharp(logoSource)
  .resize(156, 156, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255 },
  })
  .extend({ top: 12, bottom: 12, left: 12, right: 12, background: { r: 255, g: 255, b: 255 } })
  .png({ compressionLevel: 9 })
  .toFile(path.resolve("app", "apple-icon.png"));

console.table([
  { asset: "web banner", width: webBanner.width, height: webBanner.height, bytes: webBanner.size },
  { asset: "social preview", width: socialImage.width, height: socialImage.height, bytes: socialImage.size },
  { asset: "site icon", width: icon.width, height: icon.height, bytes: icon.size },
  { asset: "apple icon", width: appleIcon.width, height: appleIcon.height, bytes: appleIcon.size },
]);
