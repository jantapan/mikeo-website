import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

const catalog = readFileSync("lib/catalog.ts", "utf8");
const evidenceReferences = [...catalog.matchAll(/evidenceImage\("([^"]+)", "([^"]+)"/g)]
  .map((match) => `/images/product-evidence/${match[1]}/${match[2]}`);
const evidenceFiles = walk("public/images/product-evidence")
  .map((file) => `/${file.split(path.sep).join("/").replace("public/", "")}`);
const missingEvidence = evidenceReferences
  .filter((reference) => !existsSync(path.join("public", reference.slice(1))));
const unusedEvidence = evidenceFiles
  .filter((file) => !evidenceReferences.includes(file));
const evidenceMetadata = await Promise.all(evidenceFiles.map(async (file) => {
  const metadata = await sharp(path.join("public", file.slice(1))).metadata();
  return {
    file,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    alpha: metadata.hasAlpha,
  };
}));

const contentReferences = [...catalog.matchAll(/contentImage\("([^"]+)", "([^"]+)"/g)]
  .map((match) => `/images/product-content/${match[1]}/${match[2]}`);
const contentFiles = walk("public/images/product-content")
  .map((file) => `/${file.split(path.sep).join("/").replace("public/", "")}`);
const missingContent = contentReferences
  .filter((reference) => !existsSync(path.join("public", reference.slice(1))));
const unusedContent = contentFiles
  .filter((file) => !contentReferences.includes(file));

const productImageReferences = [...catalog.matchAll(/src: "(\/images\/products\/[^/]+\.webp)"/g)]
  .map((match) => match[1]);
const productImageFiles = readdirSync("public/images/products", { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => `/images/products/${entry.name}`);
const missingProductImages = productImageReferences
  .filter((reference) => !existsSync(path.join("public", reference.slice(1))));
const unusedProductImages = productImageFiles
  .filter((file) => !productImageReferences.includes(file));

const productRecords = catalog.slice(
  catalog.indexOf("const productRecords"),
  catalog.indexOf("export const products"),
);
const productSlugs = [...productRecords.matchAll(/slug: "([^"]+)"/g)]
  .map((match) => match[1]);
const duplicateSlugs = productSlugs
  .filter((slug, index) => productSlugs.indexOf(slug) !== index);

const homeImages = await Promise.all(walk("public/images/products/home").map(async (file) => {
  const metadata = await sharp(file).metadata();
  return {
    file,
    width: metadata.width,
    height: metadata.height,
    alpha: metadata.hasAlpha,
    bytes: statSync(file).size,
  };
}));

const generatedDecorations = await Promise.all(walk("public/images/decor").map(async (file) => {
  const metadata = await sharp(file).metadata();
  return {
    file,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    alpha: metadata.hasAlpha,
    bytes: statSync(file).size,
  };
}));

const productAtmospheres = await Promise.all(walk("public/images/product-atmosphere").map(async (file) => {
  const metadata = await sharp(file).metadata();
  return {
    file,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    alpha: metadata.hasAlpha,
    bytes: statSync(file).size,
  };
}));

const contactImagePath = "public/images/contact/whatsapp-contact.webp";
const contactImageMetadata = await sharp(contactImagePath).metadata();
const contactImage = {
  file: contactImagePath,
  width: contactImageMetadata.width,
  height: contactImageMetadata.height,
  format: contactImageMetadata.format,
  alpha: contactImageMetadata.hasAlpha,
  bytes: statSync(contactImagePath).size,
};

const distributorCertificateImagePath = "public/images/distributors/ark-shiny-trading-certificate.webp";
const distributorCertificateImageMetadata = await sharp(distributorCertificateImagePath).metadata();
const distributorCertificatePdfPath = "public/images/distributors/ark-shiny-trading-certificate.pdf";
const distributorCertificate = {
  preview: {
    file: distributorCertificateImagePath,
    width: distributorCertificateImageMetadata.width,
    height: distributorCertificateImageMetadata.height,
    format: distributorCertificateImageMetadata.format,
    bytes: statSync(distributorCertificateImagePath).size,
  },
  pdf: {
    file: distributorCertificatePdfPath,
    signature: readFileSync(distributorCertificatePdfPath).subarray(0, 5).toString("ascii"),
    bytes: statSync(distributorCertificatePdfPath).size,
  },
};

const distributorPartnerArtworkPath = "public/images/distributors/ark-shiny-trading-official-partner.webp";
const distributorPartnerArtworkMetadata = await sharp(distributorPartnerArtworkPath).metadata();
const distributorPartnerArtwork = {
  file: distributorPartnerArtworkPath,
  width: distributorPartnerArtworkMetadata.width,
  height: distributorPartnerArtworkMetadata.height,
  format: distributorPartnerArtworkMetadata.format,
  bytes: statSync(distributorPartnerArtworkPath).size,
};

const siteAssetPaths = [
  "public/images/banners/mikeo-international-banner-desktop.webp",
  "public/images/social/mikeo-og.jpg",
  "app/icon.png",
  "app/apple-icon.png",
];
const siteAssets = await Promise.all(siteAssetPaths.map(async (file) => {
  const metadata = await sharp(file).metadata();
  return {
    file,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    bytes: statSync(file).size,
  };
}));

const report = {
  evidence: {
    files: evidenceFiles.length,
    references: evidenceReferences.length,
    missing: missingEvidence,
    unused: unusedEvidence,
    formats: [...new Set(evidenceMetadata.map((image) => image.format))],
    alphaFiles: evidenceMetadata.filter((image) => image.alpha).length,
    dimensions: [...new Set(evidenceMetadata.map((image) => `${image.width}x${image.height}`))],
  },
  productContent: {
    files: contentFiles.length,
    references: contentReferences.length,
    missing: missingContent,
    unused: unusedContent,
  },
  productImages: {
    files: productImageFiles.length,
    references: productImageReferences.length,
    missing: missingProductImages,
    unused: unusedProductImages,
  },
  products: {
    count: productSlugs.length,
    duplicateSlugs: [...new Set(duplicateSlugs)],
  },
  homeImages,
  generatedDecorations,
  productAtmospheres,
  contactImage,
  distributorCertificate,
  distributorPartnerArtwork,
  siteAssets,
};

console.log(JSON.stringify(report, null, 2));

if (
  missingEvidence.length > 0
  || unusedEvidence.length > 0
  || missingContent.length > 0
  || unusedContent.length > 0
  || missingProductImages.length > 0
  || unusedProductImages.length > 0
  || duplicateSlugs.length > 0
  || evidenceFiles.length !== 15
  || homeImages.length !== 5
  || homeImages.some((image) => !image.alpha)
  || generatedDecorations.length !== 2
  || generatedDecorations.some((image) => image.format !== "webp" || !image.alpha)
  || productAtmospheres.length !== 10
  || productAtmospheres.some((image) => image.format !== "webp" || !image.alpha || image.width !== 1536 || image.height !== 1024)
  || contactImage.format !== "webp"
  || contactImage.width !== 868
  || contactImage.height !== 1885
  || distributorCertificate.preview.format !== "webp"
  || distributorCertificate.preview.width !== 2200
  || distributorCertificate.preview.height !== 1556
  || distributorCertificate.preview.bytes > 600_000
  || distributorCertificate.pdf.signature !== "%PDF-"
  || distributorPartnerArtwork.format !== "webp"
  || distributorPartnerArtwork.width !== 1087
  || distributorPartnerArtwork.height !== 1447
  || distributorPartnerArtwork.bytes > 250_000
  || siteAssets.some((asset) => asset.bytes > 500_000)
  || siteAssets[0]?.format !== "webp"
  || siteAssets[0]?.width !== 2400
  || siteAssets[1]?.format !== "jpeg"
  || siteAssets[1]?.width !== 1200
  || siteAssets[1]?.height !== 630
  || siteAssets[2]?.width !== 512
  || siteAssets[2]?.height !== 512
  || siteAssets[3]?.width !== 180
  || siteAssets[3]?.height !== 180
) {
  process.exitCode = 1;
}
