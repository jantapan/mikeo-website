# MIKEO Product Image Inventory

## Update 2026-07-16 — clean mockups delivered and 13 products imported

The advertisement-image delivery reviewed on 2026-07-15 (archived below) has been replaced in `incoming/` by a new set of brand-supplied materials:

| Folder | Contents | Role |
|---|---|---|
| `incoming/current-product-mockups/` | 21 transparent 3D packshot PNGs | Source for website product images |
| `incoming/product-images/` | Same 21 files (duplicate set) | Mirror of the above |
| `incoming/ingredients/` | 28 "สารสกัดสำคัญ" cards (TH/EN) | Source for per-product key-extract data |
| `incoming/usage/` | 22 "วิธีรับประทาน / How to use" cards | Source for per-product directions |

### Imported products (13) — optimized to `public/images/products/`

Conversion: sharp, width 1600 px, transparency preserved (all sources verified to have real alpha), webp quality 82.

| Product (slug) | Source mockup | Output | Size |
|---|---|---|---|
| `gluta-collagen-tomato` | `tomato.png` | `gluta-collagen-tomato.webp` 1600×1120 | 119 KB (pre-existing) |
| `veggie-fiber-coffee` | `Mikeo กาแฟ Veggie Fiber 3D-6-6-01.png` | `veggie-fiber-coffee.webp` 1600×1120 | 94 KB |
| `pistachio-coffee` | `Mikeo กาแฟ Pistachio 3D.png` | `pistachio-coffee.webp` 1600×1120 | 94 KB |
| `blood-orange-c` | `Mikeo Blood Orange C 3D-1.png` | `blood-orange-c.webp` 1600×1120 | 106 KB |
| `coffee-bird-nest` | `กาแฟ-01.png` | `coffee-bird-nest.webp` 1600×1120 | 103 KB |
| `gluta-collagen-sakura-peach` | `S__8765463-01.png` | `gluta-collagen-sakura-peach.webp` 1600×1200 | 112 KB |
| `collagen-berry-zinc` | `collagen-berry-zing (1)-01.png` | `collagen-berry-zinc.webp` 1600×1200 | 150 KB |
| `fiber-xs-green-apple` | `ปัจจุบันใช้อันนี้ Fiber Xs.png` | `fiber-xs-green-apple.webp` 1600×1120 | 70 KB |
| `matcha-latte-xs` | `Mikeo Matcha 3D PNG-1.png` | `matcha-latte-xs.webp` 1600×1120 | 76 KB |
| `fiber-xs-plus-berry-zinc` | `FiberXS Berry 3D-2.png` | `fiber-xs-plus-berry-zinc.webp` 1600×1120 | 102 KB |
| `cacao-cocoa-mix-plus` | `Mikeo โกโก้คาเดา Cacao Cocoa 3D.png` | `cacao-cocoa-mix-plus.webp` 1600×1120 | 89 KB |
| `jimmi-glowy-probiotic` | `Jimmi Glowy (Holo) 3D-1.png` | `jimmi-glowy-probiotic.webp` 1600×1131 | 128 KB |
| `jimmi-fitty-probiotic` | `Jimmi Fitty (Holo) 3D-1.png` | `jimmi-fitty-probiotic.webp` 1600×1131 | 123 KB |

All 13 catalog entries are marked `status: "pending-verification"` and rendered with a "ข้อมูลรอการตรวจสอบ / Pending verification" label. No prices, health claims, registration numbers, or certifications were transcribed.

### Mockups NOT imported (8) — products not on the approved import list

`Mikeo Jelly CollaGluta 3D-1.png`, `Mikeo Jelly Red C 3D-1.png`, `แบบเปลี่ยนใหม่ ใช้อันนี้ 18-3-69-1.png` (Jelly Fiber Yogurt Mixberry), `Mikeo ชาไทย Fiber 3D-1.png` (Thai Tea Fiber XS), `Mikeo นมชมพู Fiber 3D-1.png` (Pink Milk Hokkaido XS), `Mikeo นมมัทฉะ Fiber 3D-1.png` (Matcha Fiber XS), `Mikeo กาแฟดำ Black Coffee Veggie Harb 3D-1.png`, `Mikeo กาแฟดำ Super Black Coffee Glod 3D-1.png`. Ingredient/usage cards for several of these exist in the albums and can be imported later on owner instruction.

### Discrepancies found in supplied materials (require owner confirmation)

1. **Pistachio Coffee** — pack front and Thai card say **29** key ingredients; the English ingredient card says **32**. Website uses 29 (pack).
2. **Veggie Fiber Coffee** — pack front and Thai card say **36** extracts; the English ingredient card says **38**. Website uses 36 (pack).
3. **Fiber XS (green apple)** — the English ingredient card's headline is mislabeled "MIKEO GLUTA TOMATO" although the artwork and list are for Fiber XS.
4. **Fiber XS (green apple)** — the flavour "Green Apple" does not appear in English on the pack; it is indicated by the Japanese リンゴ (apple) and the apple artwork only.
5. **Gluta Sakura Peach** — the main pack name is "GLUTA SAKURA PEACH" (the word "Collagen" appears only in the subtitle "Collagen Dipeptide Vitamin Mix Plus"), while the approved import list uses "MIKEO Gluta Collagen Sakura Peach".
6. **Collagen Berry Zinc** — source filename is misspelled "zing"; the pack spells **ZINC**.
7. **Jimmi Glowy / Jimmi Fitty** — no ingredient cards exist in the album; key components were transcribed from the box front only.
8. **Matcha** — two distinct matcha products exist in the materials: **Matcha Latte XS Mix Plus** (imported, 30 sachets) and **Matcha Fiber XS** (not imported, 20 sachets). Do not mix their data.

### Still missing / pending per product

- Full ingredient lists (only headline extracts + totals are published; full lists await source-document verification).
- Thai FDA numbers, certifications, manufacturer details, lab reports — none supplied; none published.
- Prices and official contact channels — none supplied; none published.
- Approved product descriptions beyond on-pack legal names.
- Cautions/warnings text — the usage cards contain directions only; no caution text was supplied.

---

## Archived review 2026-07-15 (superseded — the delivery below has been replaced in `incoming/`)

Reviewed: 2026-07-15
Source: `incoming/product-images/`
Scope: 99 raster images in 8 provisionally named folders (about 363.4 MB total).

## Important status and review rules

- Every folder name and every name visible on packaging is **provisional** until the owner explicitly approves it.
- This review identifies what is visibly present; it does **not** validate or infer benefits, ingredients, directions, cautions, prices, Thai FDA numbers, certifications, manufacturer details, or official contact information.
- All visible product, ingredient, quantity, origin, nutrition, health, beauty, weight, digestion, and performance statements require source verification before publication.
- No image in this delivery qualifies as a clean, verification-safe product packshot. Nearly all are finished advertisements or AI-composited promotional scenes with embedded text.
- Files whose names begin `ChatGPT Image` are explicitly AI-generated. Many other files also show likely generative/compositing artifacts, including synthetic people, inconsistent package geometry, malformed or contradictory text, and variant packaging.
- No price, contact detail, or QR code was visually observed in this set. This does not validate any other embedded text or mark.
- Certification-style, origin, nutrition, premium, or other badge-like graphics are recorded as **marks requiring verification**, not accepted certifications.

### Compact notation used below

- **Role:** `Ad` advertisement; `Lifestyle` lifestyle advertisement; `Product-led ad` promotional composition dominated by packaging; `Unsuitable` should not be considered for the website without replacement.
- **Verify:** `C` claims; `T` other embedded text/product data; `M` certification-, origin-, nutrition-, or premium-style marks. `P/O/Q` would indicate price/contact/QR; none were observed.
- **AI/accuracy:** `Explicit AI` means the filename identifies ChatGPT generation; `Likely AI/composite` means visual artifacts or synthetic composition are apparent. Both require packaging/text comparison with approved originals.
- **Recommendation:** selections are only the least unsuitable candidates for owner review. They are **not approved for publishing**.

## Conditional selection summary

| Provisional folder | Conditional primary | Conditional supporting images | Reason / restriction |
|---|---|---|---|
| Collagen Berry Zinc | `13-02.jpg` | None | Product-led, but still an ad with claims, marks, and unverified packaging. |
| Gluta Sakura Peach | `ลงแล้ว 3-1.png` | None | Product-led composition; AI-like model and all copy/packaging require verification. |
| Pink milk | `ลงแล้ว23-1-01.jpg` | `ลงแล้ว23-2.jpg`, `ลงแล้ว6.jpg` | Most product/routine-oriented set; still AI-like promotional artwork with unverified text and package variants. |
| Thai tea XS | `23-2.jpg` | `23-3.jpg` | Product-forward among the set, but includes claims and unverified packaging text. |
| ไฟเบอร์ XS | `25-2-01.jpg` | `ChatGPT Image May 25, 2026, 01_24_28 PM.png`, `ChatGPT Image May 28, 2026, 02_57_00 PM (1).jpg` | Product/routine compositions; supporting images are explicitly AI-generated and all contain embedded claims. |
| กาแฟผัก | `22-4-01.jpg` | None | Most product-led candidate; very large advertisement with extensive unverified text and marks. |
| กาแฟรังนก | `ChatGPT Image May 22, 2026, 06_26_28 PM (1)-01.jpg` | None | Sachet-led flat-lay, but explicitly AI-generated with unverified claims and marks. |
| รวมกาแฟ | `ChatGPT Image May 21, 2026, 04_50_32 PM-01.jpg` | None | Category/group advertisement only; explicitly AI-generated and not suitable as an individual product image. |

**Recommended total:** 13 images, approximately **103.1 MiB** (105,598.5 KB). This is a review shortlist only. For production, request original clean packshots and approved lifestyle photography before copying anything to `public/`.

## Full inventory

### Collagen Berry Zinc (provisional folder name)

| Filename | Dimensions / format | Size | Likely role | Verify | AI / packaging accuracy | Duplicate or near-duplicate note | Recommendation |
|---|---:|---:|---|---|---|---|---|
| `13-01.jpg` | 1772×1772 JPG | 1,778.6 KB | Ad | C,T,M | Likely AI/composite | Same campaign family as `13-02`–`13-7` | No |
| `13-02.jpg` | 1772×1772 JPG | 1,604.1 KB | Product-led ad | C,T,M | Likely AI/composite | Same campaign family | **Conditional primary** |
| `13-03.jpg` | 1772×1772 JPG | 1,925.5 KB | Ad | C,T,M | Likely AI/composite | Same campaign family | No |
| `13-04-01.jpg` | 1772×1772 JPG | 1,572.8 KB | Lifestyle ad | C,T,M | Likely AI/composite; synthetic model | Same campaign family | No |
| `13-5-01.jpg` | 1772×1772 JPG | 2,027.8 KB | Lifestyle ad | C,T,M | Likely AI/composite; synthetic model | Same campaign family | No |
| `13-6-01.jpg` | 1772×1772 JPG | 1,464.3 KB | Lifestyle ad | C,T,M | Likely AI/composite; synthetic model | Same campaign family | No |
| `13-7-01.jpg` | 1772×1772 JPG | 1,664.8 KB | Lifestyle ad | C,T,M | Likely AI/composite; synthetic model | Same campaign family | No |
| `ChatGPT Image May 19, 2026, 06_51_37 PM.png` | 1254×1254 PNG | 2,064.5 KB | Ad | C,T,M | Explicit AI; package/text inconsistent | Near-duplicate campaign concept | No |
| `ChatGPT Image May 30, 2026, 01_14_19 PM.jpg` | 1254×1254 JPG | 529.5 KB | Lifestyle ad | C,T,M | Explicit AI | Near-duplicate with other May 30 scenes | No |
| `ChatGPT Image May 30, 2026, 01_30_42 PM.jpg` | 1254×1254 JPG | 500.1 KB | Lifestyle ad | C,T,M | Explicit AI | Near-duplicate with `01_38_51` | No |
| `ChatGPT Image May 30, 2026, 01_38_51 PM.jpg` | 1254×1254 JPG | 527.0 KB | Lifestyle ad | C,T,M | Explicit AI | Near-duplicate with `01_30_42` | No |
| `ChatGPT Image May 30, 2026, 02_09_24 PM.jpg` | 1254×1254 JPG | 589.1 KB | Lifestyle ad | C,T,M | Explicit AI | Same May 30 campaign | No |

### Gluta Sakura Peach (provisional folder name)

All files in this folder are advertisements and appear AI-generated or heavily AI-composited. Several show mirrored, malformed, or changing packaging/text. All contain `C,T,M`; no `P/O/Q` was observed.

| Filename | Dimensions / format | Size | Likely role | AI / accuracy | Duplicate / recommendation |
|---|---:|---:|---|---|---|
| `ChatGPT Image Jul 3, 2026, 04_46_02 PM-01.png` | 5226×5225 PNG | 6,826.5 KB | Lifestyle ad | Explicit AI | Same campaign; no |
| `ChatGPT Image Jul 3, 2026, 06_01_59 PM.png` | 1254×1254 PNG | 1,853.9 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image Jul 3, 2026, 06_13_06 PM (1).png` | 1254×1254 PNG | 1,929.0 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image Jul 3, 2026, 06_18_19 PM.png` | 1254×1254 PNG | 1,908.4 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image Jul 3, 2026, 06_23_34 PM.png` | 1254×1254 PNG | 2,011.4 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image Jul 3, 2026, 06_30_55 PM.png` | 1254×1254 PNG | 2,063.0 KB | Unsuitable ad | Explicit AI; mirrored/malformed pack | Near-duplicate series; no |
| `ChatGPT Image Jul 3, 2026, 06_46_09 PM.png` | 1254×1254 PNG | 2,059.3 KB | Unsuitable ad | Explicit AI; mirrored/malformed pack | Near-duplicate series; no |
| `ChatGPT Image Jul 3, 2026, 07_22_33 PM (1)-01.png` | 5226×5225 PNG | 6,545.2 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image Jul 3, 2026, 07_37_23 PM.png` | 1254×1254 PNG | 2,024.3 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image Jul 3, 2026, 07_46_21 PM (1).png` | 1254×1254 PNG | 2,073.3 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image Jul 3, 2026, 07_52_34 PM.png` | 1254×1254 PNG | 2,087.0 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image Jul 3, 2026, 07_57_00 PM (1).png` | 1254×1254 PNG | 1,937.2 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image Jul 3, 2026, 10_11_57 AM.png` | 1254×1254 PNG | 2,204.1 KB | Lifestyle ad | Explicit AI | Jul 3 series; no |
| `ChatGPT Image May 30, 2026, 02_26_51 PM.jpg` | 1254×1254 JPG | 569.3 KB | Lifestyle ad | Explicit AI | May 30 near-duplicate set; no |
| `ChatGPT Image May 30, 2026, 02_34_51 PM.jpg` | 1254×1254 JPG | 603.4 KB | Lifestyle ad | Explicit AI | May 30 near-duplicate set; no |
| `ChatGPT Image May 30, 2026, 02_49_11 PM.jpg` | 1254×1254 JPG | 608.4 KB | Lifestyle ad | Explicit AI | May 30 near-duplicate set; no |
| `ChatGPT Image May 30, 2026, 03_01_40 PM.jpg` | 1254×1254 JPG | 592.1 KB | Lifestyle ad | Explicit AI | May 30 near-duplicate set; no |
| `ChatGPT Image May 30, 2026, 03_14_01 PM.jpg` | 1254×1254 JPG | 578.8 KB | Lifestyle ad | Explicit AI | May 30 near-duplicate set; no |
| `ลงแล้ว 3-1.png` | 5226×5226 PNG | 6,212.2 KB | Product-led lifestyle ad | Likely AI/composite | Same product campaign; **conditional primary** |

### Pink milk (provisional folder name)

All files are advertisements with `C,T,M`; no `P/O/Q` was observed. Models and scenes appear synthetic or heavily composited, and visible package/text variants require comparison with an approved original.

| Filename | Dimensions / format | Size | Likely role | AI / accuracy | Duplicate / recommendation |
|---|---:|---:|---|---|---|
| `ลงแล้ว 30-6.png` | 4001×4001 PNG | 11,890.4 KB | Product-led ad | Likely AI/composite | Similar to other pack/drink layouts; no |
| `ลงแล้ว 7.jpg` | 5226×5226 JPG | 6,289.6 KB | Unsuitable ad | Likely AI/composite; concerning body/medical-style claim | Same campaign; no |
| `ลงแล้ว.jpg` | 1254×1254 JPG | 666.0 KB | Lifestyle ad | Likely AI/composite; synthetic model | Near-duplicate model set; no |
| `ลงแล้ว1.jpg` | 1254×1254 JPG | 688.7 KB | Lifestyle ad | Likely AI/composite; synthetic model | Near-duplicate model set; no |
| `ลงแล้ว2.jpg` | 1254×1254 JPG | 640.2 KB | Lifestyle ad | Likely AI/composite; synthetic model | Near-duplicate model set; no |
| `ลงแล้ว23-1-01.jpg` | 5226×5226 JPG | 17,168.1 KB | Product-led lifestyle ad | Likely AI/composite | Near-duplicate with `23-2`; **conditional primary** |
| `ลงแล้ว23-2.jpg` | 5226×5226 JPG | 15,911.7 KB | Product-led lifestyle ad | Likely AI/composite | Near-duplicate with `23-1-01`; **conditional support** |
| `ลงแล้ว23-3.jpg` | 1254×1254 JPG | 742.7 KB | Product-led ad | Likely AI/composite | Claim variant of `ลงแล้ว`; no |
| `ลงแล้ว23-4.jpg` | 1254×1254 JPG | 717.1 KB | Unsuitable ad | Likely AI/composite; absorption/biological claim | Same product campaign; no |
| `ลงแล้ว3.jpg` | 1254×1254 JPG | 682.8 KB | Lifestyle ad | Likely AI/composite; synthetic model | Near-duplicate model set; no |
| `ลงแล้ว4.jpg` | 5226×5226 JPG | 5,314.7 KB | Product-led ad | Likely AI/composite | Ingredient/claim-heavy set; no |
| `ลงแล้ว5.jpg` | 5226×5226 JPG | 5,561.2 KB | Product-led ad | Likely AI/composite | Ingredient/claim-heavy set; no |
| `ลงแล้ว6.jpg` | 5226×5226 JPG | 4,715.8 KB | Lifestyle image / ad | Likely AI/composite; package text malformed | Routine-oriented; **conditional support** |
| `ลงแล้ว7.png` | 1254×1254 PNG | 2,076.0 KB | Unsuitable ad | Likely AI/composite; strong satiety/body claims | Similar routine scene; no |

### Thai tea XS (provisional folder name)

All files contain `C,T,M`; no `P/O/Q` was observed.

| Filename | Dimensions / format | Size | Likely role | AI / accuracy | Duplicate / recommendation |
|---|---:|---:|---|---|---|
| `23-1.jpg` | 1254×1254 JPG | 1,656.4 KB | Ad | Likely AI/composite | Numbered campaign; no |
| `23-2.jpg` | 1254×1254 JPG | 1,439.1 KB | Product-led ad | Likely AI/composite | Numbered campaign; **conditional primary** |
| `23-3.jpg` | 1254×1254 JPG | 1,491.8 KB | Product-led ad | Likely AI/composite | Numbered campaign; **conditional support** |
| `23-4.jpg` | 1254×1254 JPG | 1,377.0 KB | Ad | Likely AI/composite | Numbered campaign; no |
| `ChatGPT Image Jun 11, 2026, 01_15_56 PM.jpg` | 1254×1254 JPG | 612.2 KB | Lifestyle ad | Explicit AI | Jun 11 near-duplicate set; no |
| `ChatGPT Image Jun 11, 2026, 01_48_17 PM.jpg` | 1254×1254 JPG | 577.6 KB | Lifestyle ad | Explicit AI | Jun 11 near-duplicate set; no |
| `ChatGPT Image Jun 11, 2026, 02_11_45 PM.jpg` | 1254×1254 JPG | 541.7 KB | Lifestyle ad | Explicit AI | Jun 11 near-duplicate set; no |
| `ChatGPT Image Jun 11, 2026, 02_19_58 PM.jpg` | 1254×1254 JPG | 582.2 KB | Lifestyle ad | Explicit AI | Jun 11 near-duplicate set; no |

### ไฟเบอร์ XS (provisional folder name)

All files contain `C,T,M`; no `P/O/Q` was observed. Body-focused model images and disease/weight/detox claim layouts are classified as unsuitable.

| Filename | Dimensions / format | Size | Likely role | AI / accuracy | Duplicate / recommendation |
|---|---:|---:|---|---|---|
| `1-1.jpg` | 886×886 JPG | 165.7 KB | Unsuitable ad | Likely AI/composite; synthetic model/body claims | Numbered set; no |
| `1-2-01-01.jpg` | 1772×1772 JPG | 363.5 KB | Unsuitable ad | Likely AI/composite; synthetic model/body claims | Numbered set; no |
| `1-3-01.jpg` | 886×886 JPG | 149.2 KB | Unsuitable ad | Likely AI/composite; synthetic model/body claims | Numbered set; no |
| `1-4-01.jpg` | 1772×1772 JPG | 403.7 KB | Unsuitable ad | Likely AI/composite; synthetic model/body claims | Numbered set; no |
| `14224887-0200-44f1-8011-939958eb9923.png` | 1254×1254 PNG | 2,058.7 KB | Product-led ad | Likely AI/composite | Related generated set; no |
| `192fd578-1884-4ee9-8e99-7c4213a29b25.png` | 1254×1254 PNG | 2,351.5 KB | Ad | Likely AI/composite | Related generated set; no |
| `25-1-01.jpg` | 5226×5226 JPG | 2,310.1 KB | Product-led ad | Likely AI/composite | Numbered product set; no |
| `25-2-01.jpg` | 5226×5226 JPG | 2,379.9 KB | Product-led lifestyle ad | Likely AI/composite | Numbered product set; **conditional primary** |
| `25-3.jpg` | 1254×1254 JPG | 617.2 KB | Ad | Likely AI/composite | Numbered product set; no |
| `4b35eb32-584b-48cb-90e6-f7f1ec35e144.png` | 1254×1254 PNG | 2,051.0 KB | Product-led ad | Likely AI/composite | Related generated set; no |
| `ChatGPT Image May 17, 2026, 01_55_09 PM.png` | 1254×1254 PNG | 2,148.0 KB | Unsuitable ad | Explicit AI; disease/weight claims | May 17 set; no |
| `ChatGPT Image May 17, 2026, 01_59_26 PM.png` | 1254×1254 PNG | 2,330.8 KB | Unsuitable ad | Explicit AI; disease/weight claims | May 17 set; no |
| `ChatGPT Image May 17, 2026, 03_05_10 PM.png` | 1254×1254 PNG | 1,948.0 KB | Ad | Explicit AI; long digestive claims | May 17 set; no |
| `ChatGPT Image May 18, 2026, 10_00_40 AM.png` | 1254×1254 PNG | 2,075.8 KB | Ad | Explicit AI; contradictory product heading/text | May 18 set; no |
| `ChatGPT Image May 18, 2026, 10_16_42 AM.png` | 1254×1254 PNG | 2,177.1 KB | Unsuitable ad | Explicit AI; extensive health/detox claims | May 18 set; no |
| `ChatGPT Image May 25, 2026, 01_24_28 PM.png` | 1254×1254 PNG | 2,587.5 KB | Product-led lifestyle ad | Explicit AI | Near-duplicate product/routine set; **conditional support** |
| `ChatGPT Image May 25, 2026, 02_02_10 PM.png` | 1254×1254 PNG | 2,714.7 KB | Unsuitable ad | Explicit AI; weight/body claims | May 25 set; no |
| `ChatGPT Image May 25, 2026, 11_46_44 AM.png` | 1254×1254 PNG | 2,326.4 KB | Ad | Explicit AI; digestive/wellness claims | May 25 set; no |
| `ChatGPT Image May 28, 2026, 02_57_00 PM (1).jpg` | 1254×1254 JPG | 1,656.4 KB | Product-led lifestyle ad | Explicit AI | Product array scene; **conditional support** |
| `ChatGPT Image May 28, 2026, 04_24_43 PM.jpg` | 1254×1254 JPG | 1,209.8 KB | Unsuitable ad | Explicit AI; synthetic model/body claims | May 28 model set; no |
| `ChatGPT Image May 28, 2026, 04_37_50 PM.jpg` | 1254×1254 JPG | 532.0 KB | Unsuitable ad | Explicit AI; synthetic model/body claims | May 28 model set; no |
| `ChatGPT Image May 28, 2026, 05_32_36 PM.png` | 1254×1254 PNG | 2,058.3 KB | Unsuitable lifestyle ad | Explicit AI; synthetic body-focused model | May 28 model set; no |
| `ChatGPT Image May 28, 2026, 05_36_02 PM.jpg` | 1254×1254 JPG | 1,186.2 KB | Unsuitable lifestyle ad | Explicit AI; synthetic model/oversized pack | May 28 model set; no |
| `ChatGPT Image May 30, 2026, 05_01_24 PM (1).jpg` | 1254×1254 JPG | 570.6 KB | Unsuitable lifestyle ad | Explicit AI; synthetic model and claims | Model campaign; no |

### กาแฟผัก (provisional folder name)

All files are advertisements with extensive `C,T,M`; no `P/O/Q` was observed. Packaging, ingredient counts/origins, and health statements require verification.

| Filename | Dimensions / format | Size | Likely role | AI / accuracy | Duplicate / recommendation |
|---|---:|---:|---|---|---|
| `22-1-01.jpg` | 5226×5226 JPG | 16,728.0 KB | Ad | Likely AI/composite | Numbered campaign; no |
| `22-2-01.jpg` | 5226×5226 JPG | 14,883.1 KB | Ad | Likely AI/composite | Numbered campaign; no |
| `22-3-01.jpg` | 5226×5226 JPG | 15,848.4 KB | Unsuitable ad | Likely AI/composite; medical-style claims | Numbered campaign; no |
| `22-4-01.jpg` | 5226×5226 JPG | 18,885.2 KB | Product-led ad | Likely AI/composite | Numbered campaign; **conditional primary** |
| `ChatGPT Image May 21, 2026, 02_38_38 PM-01.jpg` | 5226×5226 JPG | 13,569.3 KB | Unsuitable ad | Explicit AI; digestive claims | Same generated campaign; no |
| `ChatGPT Image May 21, 2026, 03_28_18 PM (1)-01.jpg` | 5226×5226 JPG | 14,131.2 KB | Unsuitable ad | Explicit AI; blood-sugar/health claims | Same generated campaign; no |
| `ChatGPT Image May 21, 2026, 10_08_01 AM-01-01.jpg` | 5227×5227 JPG | 12,282.9 KB | Unsuitable lifestyle ad | Explicit AI; body-focused scene and claims | Same generated campaign; no |

### กาแฟรังนก (provisional folder name)

All files are advertisements with `C,T,M`; no `P/O/Q` was observed. Several display a certification-style mark that must not be treated as verified.

| Filename | Dimensions / format | Size | Likely role | AI / accuracy | Duplicate / recommendation |
|---|---:|---:|---|---|---|
| `22-1.jpg` | 1254×1254 JPG | 1,506.8 KB | Product-led ad | Likely AI/composite | Same product campaign; no |
| `ChatGPT Image Jun 13, 2026, 10_36_06 AM.jpg` | 1254×1254 JPG | 614.2 KB | Ad | Explicit AI | Jun 13 set; no |
| `ChatGPT Image Jun 13, 2026, 10_39_11 AM.jpg` | 1254×1254 JPG | 581.1 KB | Unsuitable ad | Explicit AI; metabolism/weight claims | Jun 13 set; no |
| `ChatGPT Image Jun 13, 2026, 10_48_06 AM.jpg` | 1254×1254 JPG | 610.8 KB | Unsuitable ad | Explicit AI; fat/lean-body claims | Jun 13 set; no |
| `ChatGPT Image Jun 13, 2026, 10_57_56 AM.jpg` | 1254×1254 JPG | 651.2 KB | Unsuitable ad | Explicit AI; appetite/weight claims | Jun 13 set; no |
| `ChatGPT Image May 21, 2026, 03_48_09 PM-01.jpg` | 5226×5226 JPG | 14,002.2 KB | Product-led ad | Explicit AI | May 21/22 product set; no |
| `ChatGPT Image May 21, 2026, 04_19_23 PM-01.jpg` | 5226×5226 JPG | 13,532.6 KB | Unsuitable lifestyle ad | Explicit AI; joint/bone medical-style claims | May 21 set; no |
| `ChatGPT Image May 22, 2026, 06_02_32 PM.png` | 1254×1254 PNG | 2,082.1 KB | Product-led ad | Explicit AI | Near-duplicate with `06_26_28`; no |
| `ChatGPT Image May 22, 2026, 06_26_28 PM (1)-01.jpg` | 5226×5226 JPG | 16,476.4 KB | Product-led lifestyle ad | Explicit AI | Near-duplicate with `06_02_32`; **conditional primary** |
| `ChatGPT Image May 22, 2026, 08_53_00 AM.png` | 1254×1254 PNG | 2,196.4 KB | Preparation ad | Explicit AI; directions/claims unverified | May 22 set; no |
| `ChatGPT Image May 22, 2026, 09_02_52 AM (1).jpg` | 1254×1254 JPG | 1,244.0 KB | Lifestyle ad | Explicit AI; origin/ingredient claims | May 22 set; no |
| `ChatGPT Image May 22, 2026, 09_32_20 AM.jpg` | 1254×1254 JPG | 1,161.4 KB | Unsuitable lifestyle ad | Explicit AI; blood-sugar/joint claims | May 22 set; no |

### รวมกาแฟ (provisional category folder name)

These are category/group advertisements, not individual catalog packshots. All contain `C,T,M`; no `P/O/Q` was observed.

| Filename | Dimensions / format | Size | Likely role | AI / accuracy | Duplicate / recommendation |
|---|---:|---:|---|---|---|
| `ChatGPT Image May 21, 2026, 04_50_32 PM-01.jpg` | 5226×5226 JPG | 15,070.3 KB | Category image / ad | Explicit AI; multiple unverified packages | Same three-product campaign; **conditional category primary** |
| `ChatGPT Image May 21, 2026, 05_05_53 PM.jpg` | 1254×1254 JPG | 1,263.8 KB | Unsuitable category ad | Explicit AI; body/weight claims | Same three-product campaign; no |
| `ChatGPT Image May 21, 2026, 06_02_27 PM-01.jpg` | 5226×5226 JPG | 14,151.0 KB | Unsuitable category ad | Explicit AI; fat/collagen claims | Same three-product campaign; no |

## Recommendation before website use

Request, per approved product, at minimum: one front-facing clean packshot on a neutral or transparent background; one approved alternate angle; and one original lifestyle photo without embedded text. Obtain written approval for the exact packaging version and separate verified source copy for every regulated or commercial statement. Until then, keep this entire source tree ignored and do not publish the shortlist.

## Additional evidence delivery — 2026-07-16

Three user-supplied ZIP archives added 44 JPG source images: 7 halal-document
images, 14 nutrition images, and 23 customer-information images. The source
files are preserved under ignored `incoming/evidence/` directories and are not
overwritten.

After product-identity review, 33 images were published as WebP under
`public/images/product-evidence/<product-slug>/`: 11 nutrition, 7 halal, and 15
customer-information images. Conversion uses the existing `sharp` package at
quality 88 with near-lossless mode. All output dimensions and aspect ratios
match their source files; no crop is applied. The source files are JPG and
therefore contain no alpha channel to preserve.

The reproducible import is `scripts/import-product-evidence.mjs`. Publication
means only that the image-to-product identity mapping was confirmed. Claims,
certificate validity and dates, nutrition values, ingredients, dosage,
registration data, prices, and contact information inside the artwork remain
pending source-document verification.

For the image-first homepage, five existing transparent packshots also receive
trimmed, non-destructive WebP derivatives under `public/images/products/home/`.
This removes only transparent outer padding so the real packages render larger
on small screens. The originals remain unchanged; the reproducible transform is
`scripts/create-home-product-images.mjs`.

The supplied MIKEO LINE QR artwork is published separately as
`public/images/contact/line-contact.webp` for the contact page. It is an
uncropped 1074×1524 WebP derivative of
`incoming/evidence/ข้อมูลไว้แจ้งลูกค้า/LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_18.jpg`.
The original remains unchanged; the reproducible conversion is
`scripts/import-contact-image.mjs`.

Two AI-generated botanical decorations are published under
`public/images/decor/` for the About presentation. They contain only
generic flowers, fruit, coffee, cacao, pistachios and leaves—no product
packaging, logo, text, dosage, certification or product claim. Their chroma-key
sources are preserved under ignored `incoming/generated-decoration/`, and the
reproducible alpha-WebP conversion is
`scripts/import-generated-decoration.mjs`. These decorative images must not be
treated as product evidence. The Products page hero uses only the existing real
packshot derivatives under `public/images/products/home/`.

Ten additional AI-generated atmosphere frames are published as transparent
1536 x 1024 WebP files under `public/images/product-atmosphere/`. They are
decorative only and sit behind real MIKEO packshots on Thai product-detail
pages. The frames cover vegetable/coffee, pistachio, bird's nest/coffee,
matcha, cocoa, tomato, blood orange, sakura/peach, mixed berry, and green apple
themes. The mixed-berry frame is reused only for products whose supplied names
or flavour labels identify a berry, strawberry, or cranberry theme. No
generated packaging, logo, dosage, certification, benefit statement, or
product claim is used. The source PNGs remain under ignored
`incoming/generated-decoration/product-atmosphere/`; the same reproducible
`scripts/import-generated-decoration.mjs` chroma-key pipeline creates the
alpha-WebP files. The mapping lives in `components/ProductAtmosphere.tsx` and
must not be treated as product evidence.
