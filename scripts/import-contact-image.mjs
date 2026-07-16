import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const source = path.resolve(
  "incoming",
  "evidence",
  "ข้อมูลไว้แจ้งลูกค้า",
  "LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_18.jpg",
);
const outputDirectory = path.resolve("public", "images", "contact");
const output = path.join(outputDirectory, "line-contact.webp");

await mkdir(outputDirectory, { recursive: true });

const result = await sharp(source, { failOn: "error" })
  .rotate()
  .webp({ quality: 88, effort: 5, smartSubsample: true })
  .toFile(output);

console.log({ output: path.relative(process.cwd(), output), width: result.width, height: result.height });
