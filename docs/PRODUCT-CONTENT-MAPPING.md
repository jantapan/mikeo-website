# MIKEO product-content mapping

This document records the source-to-product mapping used by the image-first
product showcase. Source files remain unchanged under `incoming/`. Only rows
marked **confirmed** are converted and published under
`public/images/product-content/<product-slug>/`.

Mapping status describes product identity only. It does not independently
verify prices, claims, registration numbers, ingredients, dosage, or contact
details printed inside supplied artwork.

## Confirmed mapping for the 13 current products

| Product / slug | Key-extract artwork (`ingredientImages`) | Composition artwork (`compositionImages`) | How-to artwork (`usageImages`) | Status / notes |
| --- | --- | --- | --- | --- |
| Mikeo Veggie Fiber Coffee Mix Plus<br>`veggie-fiber-coffee` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_15.jpg` → `ingredient-overview.webp` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_19.jpg` → `composition-grid.webp` | `incoming/usage/ผัก 5.jpg` → `usage-guide.webp` | **confirmed**; file `_8.jpg` remains pending because its count differs from the pack/other artwork |
| Mikeo Pistachio Coffee Mix Plus<br>`pistachio-coffee` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_17.jpg` → `ingredient-overview.webp` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_18.jpg` → `composition-grid.webp` | `incoming/usage/LINE_ALBUM_✅หน้าที่ 5_260427_13.jpg` → `usage-guide.webp` | **confirmed**; file `_10.jpg` remains pending because its count differs from the pack/other artwork |
| Mikeo Coffee Bird Nest<br>`coffee-bird-nest` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_7.jpg` → `ingredient-overview.webp` | — | `incoming/usage/05.jpg` → `usage-guide.webp` | **confirmed**; no separate composition artwork found |
| MIKEO Matcha Latte XS Mix Plus<br>`matcha-latte-xs` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_4.jpg` → `ingredient-overview.webp` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_28.jpg` → `composition-grid.webp` | `incoming/usage/LINE_ALBUM_✅หน้าที่ 5_260427_2.jpg` → `usage-guide.webp` | **confirmed**; distinct from Matcha Fiber XS |
| MIKEO Cacao & Cocoa Mix Plus<br>`cacao-cocoa-mix-plus` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_9.jpg` → `ingredient-overview.webp` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_16.jpg` → `composition-overview.webp`<br>`incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_20.jpg` → `composition-grid.webp` | `incoming/usage/LINE_ALBUM_✅หน้าที่ 5_260427_14.jpg` → `usage-guide.webp` | **confirmed** |
| MIKEO Gluta Collagen Tomato<br>`gluta-collagen-tomato` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_5.jpg` → `ingredient-overview.webp` | — | `incoming/usage/LINE_ALBUM_✅หน้าที่ 5_260427_5.jpg` → `usage-guide.webp` | **confirmed**; no separate composition artwork found |
| MIKEO Blood Orange C<br>`blood-orange-c` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_13.jpg` → `ingredient-overview.webp` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_24.jpg` → `composition-grid.webp` | `incoming/usage/LINE_ALBUM_✅หน้าที่ 5_260427_11.jpg` → `usage-guide.webp` | **confirmed** |
| MIKEO Gluta Collagen Sakura Peach<br>`gluta-collagen-sakura-peach` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_12.jpg` → `ingredient-overview.webp` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_22.jpg` → `composition-grid.webp` | `incoming/usage/ชม5.jpg` → `usage-guide.webp` | **confirmed**; combined regimen file `บซทาน.jpeg` remains pending |
| MIKEO Collagen Berry Zinc<br>`collagen-berry-zinc` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_11.jpg` → `ingredient-overview.webp` | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_23.jpg` → `composition-grid.webp` | `incoming/usage/ม่วง5.jpg` → `usage-guide.webp` | **confirmed**; combined regimen file `บซทาน.jpeg` remains pending |
| MIKEO Fiber XS Green Apple<br>`fiber-xs-green-apple` | — | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_14.jpg` → `composition-grid.webp` | `incoming/usage/5.jpg` → `usage-guide.webp` | **confirmed**; `_6.jpg` remains pending because the headline names another product |
| MIKEO Fiber XS Plus Berry Zinc<br>`fiber-xs-plus-berry-zinc` | — | `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_21.jpg` → `composition-grid.webp` | `incoming/usage/LINE_ALBUM_✅หน้าที่ 5_260427_12_0.jpg` → `usage-guide.webp` | **confirmed**; no separate key-extract artwork found |
| Jimmi Glowy Probiotic<br>`jimmi-glowy-probiotic` | — | — | `incoming/usage/ปกตะกร้า-3-01.jpg` → `usage-guide.webp` | **confirmed**; no key-extract or composition artwork found |
| Jimmi Fitty Probiotic<br>`jimmi-fitty-probiotic` | — | — | `incoming/usage/ปกตะกร้า23-4-01-01.jpg` → `usage-guide.webp` | **confirmed**; no key-extract or composition artwork found |

Confirmed publication set: **32 files** — 19 key-extract/composition
artworks and 13 product-specific how-to artworks.

## Pending verification — not published

| Source | Reason |
| --- | --- |
| `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_6.jpg` | Fiber XS pack is shown, but the main headline names MIKEO Gluta Tomato |
| `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_8.jpg` | Veggie Fiber Coffee artwork says 38 while pack/other artwork says 36 |
| `incoming/ingredients/LINE_ALBUM_สารสกัดสำคัญ_260506_10.jpg` | Pistachio Coffee artwork says 32 while pack/other artwork says 29 |
| `incoming/usage/บซทาน.jpeg` | Combined Sakura Peach + Collagen Berry regimen conflicts with the individual product cards |
| `incoming/usage/005.jpg` | Pair-promotion artwork for Pistachio + Veggie; it is not a product-specific direction card |

## Outside the current 13-product catalog — not published

- Ingredient artwork: `_1.jpg` Jelly Red, `_2.jpg` Jelly Fiber Yogurt,
  `_3.jpg` Jelly Gluta, `_25.jpg` Pink Milk, `_26.jpg` Matcha Fiber XS,
  `_27.jpg` Thai Tea.
- Usage artwork: `0005.jpg` Jelly Fiber, `_6.jpg` Jelly Red, `_10.jpg`
  Jelly Gluta, `_17.jpg` Matcha Fiber XS, `_19.jpg` Thai Tea, and
  `LINE_ALBUM_✅หน้าที่ 5_260521_1.jpg` Pink Milk.

Inventory reconciliation: 49 reviewed files = 32 confirmed + 5 pending +
12 outside the current catalog.

## Evidence artwork delivery (2026-07-16)

The following mapping covers the three additional ZIP deliveries copied, without
modifying the ZIP originals, into `incoming/evidence/`:

- `ใบรับรอง ฮาลาล-20260716T045451Z-1-001.zip`
- `ข้อมูลโภชนาการ-20260716T045533Z-1-001.zip`
- `ข้อมูลไว้แจ้งลูกค้า-20260716T045601Z-1-001.zip`

Product identity was matched from the product name and current package visible
inside each supplied image. This mapping does **not** validate the claims,
certificate status or date, nutrition values, ingredients, registration data,
dosage, prices, or contact details printed in the artwork. The website displays
the artwork as received and does not transcribe those statements into page copy.

| Product / slug | Nutrition source | Halal source | Customer-information source(s) | Mapping status |
| --- | --- | --- | --- | --- |
| MIKEO Cacao & Cocoa Mix Plus<br>`cacao-cocoa-mix-plus` | nutrition `_1.jpg` | — | customer info `_14.jpg` | **confirmed identity** |
| MIKEO Matcha Latte XS Mix Plus<br>`matcha-latte-xs` | nutrition `_2.jpg` | halal `_4.jpg` | — | **confirmed identity**; Matcha Fiber files excluded |
| MIKEO Collagen Berry Zinc<br>`collagen-berry-zinc` | nutrition `_3.jpg` | halal `_6.jpg` | customer info `_1.jpg`; `LINE_NOTE_260506_1.jpg` | **confirmed identity** |
| MIKEO Gluta Collagen Sakura Peach<br>`gluta-collagen-sakura-peach` | nutrition `_4.jpg` | halal `_5.jpg` | customer info `_3.jpg`; `LINE_NOTE_260506_1.jpg` | **confirmed identity** |
| Mikeo Veggie Fiber Coffee Mix Plus<br>`veggie-fiber-coffee` | nutrition `_5.jpg` | — | customer info `_15.jpg` | **confirmed identity** |
| MIKEO Blood Orange C<br>`blood-orange-c` | nutrition `_6.jpg` | — | customer info `_2.jpg` | **confirmed identity** |
| Mikeo Pistachio Coffee Mix Plus<br>`pistachio-coffee` | nutrition `_7.jpg` | — | customer info `_13.jpg` | **confirmed identity** |
| MIKEO Fiber XS Plus Berry Zinc<br>`fiber-xs-plus-berry-zinc` | nutrition `_10.jpg` | halal `_7.jpg` | customer info `_7.jpg` | **confirmed identity**; legal product type checked in the certificate image |
| MIKEO Gluta Collagen Tomato<br>`gluta-collagen-tomato` | nutrition `_12.jpg` | halal `_1.jpg` | customer info `_11.jpg`, `_21.jpg` | **confirmed identity** |
| Mikeo Coffee Bird Nest<br>`coffee-bird-nest` | nutrition `_13.jpg` | halal `_2.jpg` | customer info `_6.jpg` | **confirmed identity** |
| MIKEO Fiber XS Green Apple<br>`fiber-xs-green-apple` | nutrition `_14.jpg` | halal `_3.jpg` | customer info `_12.jpg`, `_19.jpg`, `_22.jpg` | **confirmed identity** |
| Jimmi Glowy Probiotic<br>`jimmi-glowy-probiotic` | — | — | — | **pending / no exact file in this delivery** |
| Jimmi Fitty Probiotic<br>`jimmi-fitty-probiotic` | — | — | — | **pending / no exact file in this delivery** |

Published evidence set: **33 WebP files** — 11 nutrition images, 7 halal
document images, and 15 customer-information images. Outputs use lowercase
kebab-case names under `public/images/product-evidence/<product-slug>/`.

### Excluded from this delivery

- Nutrition `_8.jpg`, `_9.jpg`, and `_11.jpg`: Jelly products outside the
  current 13-product catalog.
- Customer-information `_5.jpg` and `_9.jpg`: Matcha Fiber XS, not the current
  Matcha Latte XS product.
- Jelly, Thai Tea, and Pink Milk artwork: outside the current catalog.
- Shipping-delay and preorder announcements: not product evidence and not
  published.

## Contact channel artwork (2026-07-16)

The supplied customer-information image
`incoming/evidence/ข้อมูลไว้แจ้งลูกค้า/LINE_ALBUM_เอกสารไว้แจ้งลูกค้า_260506_18.jpg`
visibly identifies MIKEO and contains its LINE QR code. It is published only on
the contact page as `public/images/contact/line-contact.webp`; it is not attached
to any product record. The source JPG remains unchanged. The reproducible,
uncropped WebP conversion is `scripts/import-contact-image.mjs` and preserves
the original 1074×1524 aspect ratio.
