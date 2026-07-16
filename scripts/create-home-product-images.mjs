import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const slugs = [
  "cacao-cocoa-mix-plus",
  "gluta-collagen-sakura-peach",
  "pistachio-coffee",
  "blood-orange-c",
  "jimmi-glowy-probiotic",
];

const sourceRoot = path.resolve("public", "images", "products");
const outputRoot = path.resolve("public", "images", "products", "home");

await mkdir(outputRoot, { recursive: true });

const results = [];

for (const slug of slugs) {
  const source = path.join(sourceRoot, `${slug}.webp`);
  const output = path.join(outputRoot, `${slug}.webp`);

  const info = await sharp(source)
    .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .webp({ quality: 86, alphaQuality: 92, effort: 6, smartSubsample: true })
    .toFile(output);

  results.push({ slug, width: info.width, height: info.height, bytes: info.size });
}

console.table(results);
