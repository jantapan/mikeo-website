import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = [
  {
    input: "incoming/generated-decoration/about-botanical-orbit-chroma.png",
    output: "public/images/decor/about-botanical-orbit.webp",
  },
  {
    input: "incoming/generated-decoration/contact-botanical-ribbon-chroma.png",
    output: "public/images/decor/contact-botanical-ribbon.webp",
  },
  ...[
    "veggie-bloom",
    "pistachio-orbit",
    "birdnest-steam",
    "matcha-mist",
    "cocoa-splash",
    "tomato-burst",
    "citrus-burst",
    "sakura-fall",
    "berry-orbit",
    "apple-crisp",
  ].map((name) => ({
    input: `incoming/generated-decoration/product-atmosphere/${name}-chroma.png`,
    output: `public/images/product-atmosphere/${name}.webp`,
  })),
];

const clampByte = (value) => Math.max(0, Math.min(255, Math.round(value)));
const smoothstep = (value) => value * value * (3 - (2 * value));

async function removeMagentaKey(input, output) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let index = 0; index < data.length; index += 4) {
    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];
    const sourceAlpha = data[index + 3] / 255;
    const distance = Math.hypot(255 - red, green, 255 - blue);
    const matte = distance <= 50
      ? 0
      : distance >= 155
        ? 1
        : smoothstep((distance - 50) / 105);
    const alpha = sourceAlpha * matte;

    if (matte > 0.06 && matte < 1) {
      data[index] = clampByte((red - ((1 - matte) * 255)) / matte);
      data[index + 1] = clampByte(green / matte);
      data[index + 2] = clampByte((blue - ((1 - matte) * 255)) / matte);
    }

    data[index + 3] = clampByte(alpha * 255);
  }

  await mkdir(path.dirname(output), { recursive: true });
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .webp({ quality: 90, alphaQuality: 100, effort: 5 })
    .toFile(output);

  const metadata = await sharp(output).metadata();
  return {
    output,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    alpha: metadata.hasAlpha,
  };
}

const report = await Promise.all(
  assets.map(({ input, output }) => removeMagentaKey(input, output)),
);

console.log(JSON.stringify(report, null, 2));
