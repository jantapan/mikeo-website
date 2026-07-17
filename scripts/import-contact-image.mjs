import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const source = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve("incoming", "contact", "whatsapp-contact.jpg");
const outputDirectory = path.resolve("public", "images", "contact");
const output = path.join(outputDirectory, "whatsapp-contact.webp");

await mkdir(outputDirectory, { recursive: true });

const result = await sharp(source, { failOn: "error" })
  .rotate()
  .resize({ width: 960, withoutEnlargement: true })
  .webp({ quality: 88, effort: 5, smartSubsample: true })
  .toFile(output);

console.log({ output: path.relative(process.cwd(), output), width: result.width, height: result.height });
