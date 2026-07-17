import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = path.resolve("incoming", "evidence");
const outputRoot = path.resolve("public", "images", "product-evidence");

const mappings = [
  // Nutrition artwork matched by the product name and package shown in-frame.
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_1.jpg", "cacao-cocoa-mix-plus", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_2.jpg", "matcha-latte-xs", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_3.jpg", "collagen-berry-zinc", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_4.jpg", "gluta-collagen-sakura-peach", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_5.jpg", "veggie-fiber-coffee", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_6.jpg", "blood-orange-c", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_7.jpg", "pistachio-coffee", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_10.jpg", "fiber-xs-plus-berry-zinc", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_12.jpg", "gluta-collagen-tomato", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_13.jpg", "coffee-bird-nest", "nutrition-information.webp"],
  ["ข้อมูลโภชนาการ", "LINE_ALBUM_ข้อมูลโภชนาการ_260506_14.jpg", "fiber-xs-green-apple", "nutrition-information.webp"],

  // Halal artwork matched by the legal product type and current package.
  ["ใบรับรอง ฮาลาล", "LINE_ALBUM_ฮาลาลภาษาอังกฤษ_260506_1.jpg", "gluta-collagen-tomato", "halal-certificate.webp"],
  ["ใบรับรอง ฮาลาล", "LINE_ALBUM_ฮาลาลภาษาอังกฤษ_260506_2.jpg", "coffee-bird-nest", "halal-certificate.webp"],
  ["ใบรับรอง ฮาลาล", "LINE_ALBUM_ฮาลาลภาษาอังกฤษ_260506_3.jpg", "fiber-xs-green-apple", "halal-certificate.webp"],
  ["ใบรับรอง ฮาลาล", "LINE_ALBUM_ฮาลาลภาษาอังกฤษ_260506_4.jpg", "matcha-latte-xs", "halal-certificate.webp"],
  ["ใบรับรอง ฮาลาล", "LINE_ALBUM_ฮาลาลภาษาอังกฤษ_260506_5.jpg", "gluta-collagen-sakura-peach", "halal-certificate.webp"],
  ["ใบรับรอง ฮาลาล", "LINE_ALBUM_ฮาลาลภาษาอังกฤษ_260506_6.jpg", "collagen-berry-zinc", "halal-certificate.webp"],
  ["ใบรับรอง ฮาลาล", "LINE_ALBUM_ฮาลาลภาษาอังกฤษ_260506_7.jpg", "fiber-xs-plus-berry-zinc", "halal-certificate.webp"],

  // Customer guidance. No text is transcribed; the supplied artwork is shown as-is.
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_15.jpg", "veggie-fiber-coffee", "customer-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_13.jpg", "pistachio-coffee", "customer-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_6.jpg", "coffee-bird-nest", "customer-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_14.jpg", "cacao-cocoa-mix-plus", "customer-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_11.jpg", "gluta-collagen-tomato", "customer-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_21.jpg", "gluta-collagen-tomato", "ingredient-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_2.jpg", "blood-orange-c", "customer-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_3.jpg", "gluta-collagen-sakura-peach", "customer-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_NOTE_260506_1.jpg", "gluta-collagen-sakura-peach", "combined-usage-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_1.jpg", "collagen-berry-zinc", "customer-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_NOTE_260506_1.jpg", "collagen-berry-zinc", "combined-usage-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_12.jpg", "fiber-xs-green-apple", "customer-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_19.jpg", "fiber-xs-green-apple", "color-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_22.jpg", "fiber-xs-green-apple", "appearance-guidance.webp"],
  ["ข้อมูลไว้แจ้งลูกค้า", "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_7.jpg", "fiber-xs-plus-berry-zinc", "customer-guidance.webp"],
].filter(([, , , outputName]) => (
  outputName !== "nutrition-information.webp"
  && outputName !== "halal-certificate.webp"
));

const results = [];

for (const [folder, sourceName, slug, outputName] of mappings) {
  const source = path.join(sourceRoot, folder, sourceName);
  const outputDirectory = path.join(outputRoot, slug);
  const output = path.join(outputDirectory, outputName);

  await mkdir(outputDirectory, { recursive: true });

  const image = sharp(source, { failOn: "error" }).rotate();
  const sourceMetadata = await image.metadata();

  await image
    .webp({ quality: 88, nearLossless: true, effort: 5, smartSubsample: false })
    .toFile(output);

  const outputMetadata = await sharp(output).metadata();
  const outputStat = await stat(output);

  results.push({
    slug,
    output: path.relative(process.cwd(), output),
    sourceSize: `${sourceMetadata.width}x${sourceMetadata.height}`,
    outputSize: `${outputMetadata.width}x${outputMetadata.height}`,
    bytes: outputStat.size,
  });
}

console.table(results);
