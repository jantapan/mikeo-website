<!-- SEED: re-run $impeccable document once there's code to capture the actual tokens and components. -->
---
name: MIKEO
description: Spirited, transparent daily care for real Thai routines.
---

# Design System: MIKEO

## 1. Overview

**Creative North Star: "The Everyday Pep Talk"**

MIKEO should feel like an encouraging presence in a real morning routine: bright daylight, products within reach, and enough energy to make self-care enjoyable without turning it into a performance. The system is spirited and product-forward, combining confident red-led brand moments with calm, highly legible information surfaces. It welcomes first, then becomes quieter and more precise wherever visitors compare details or evaluate trust.

The aesthetic synthesizes OLIPOP's approachable energy, Glossier's product-first restraint, Ritual's evidence-aware clarity, and Jennie Moon Thailand's navigable catalog and distributor journey without copying any reference's visual expression. It explicitly rejects generic AI wellness templates, clinical supplement severity, black-and-gold cosmetic luxury, and noisy social-commerce or MLM urgency.

Motion is responsive rather than choreographed. Tactile state changes and purposeful transitions make the interface feel alive, but content is visible by default and every effect has a reduced-motion alternative.

**Key Characteristics:**

- Committed, red-led identity balanced by clear neutral reading surfaces
- Spirited product presentation that becomes calm around evidence and instructions
- Expressive display typography paired with effortless Thai-language readability
- Mobile-first hierarchy, generous touch targets, and direct official-channel paths
- Product photography and verified content used as evidence, never decoration or hype

## 2. Colors

The palette is confidently red-led, with neutral space creating clarity for dense Thai product information.

### Primary

- **MIKEO Red** (`#EB0000`; `rgb(235, 0, 0)`; `oklch(59.03% 0.2422 29.23)`): The verified primary brand color sampled from `public/images/mikeo-logo.png`. The sample contained 26,043 fully opaque logo pixels; transparent pixels and partially transparent anti-aliased edge pixels were excluded. Use it across approximately 30–60% of key marketing surfaces, including decisive brand moments and primary actions.

### Neutral

- **Clear Background** (`[to be resolved during implementation]`): A chroma-neutral light background for product details, ingredients, directions, cautions, and long Thai text.
- **Quiet Surface** (`[to be resolved during implementation]`): A subtle neutral layer that separates information without creating a grid of floating cards.
- **Readable Ink** (`[to be resolved during implementation]`): A near-black text color chosen to exceed required contrast and remain comfortable for prolonged mobile reading.
- **Supporting Ink** (`[to be resolved during implementation]`): Secondary text that remains at least 4.5:1 against its background.

**The Sample, Never Guess Rule.** The primary red is resolved from the official MIKEO logo asset as `#EB0000` / `rgb(235, 0, 0)` / `oklch(59.03% 0.2422 29.23)`. This verified value comes from 26,043 fully opaque logo pixels, excluding transparent pixels and partially transparent anti-aliased edges. All other colors, fonts, spacing, radii, and component tokens remain provisional until they are selected, implemented, and documented.

**The Committed Red Rule.** MIKEO red carries roughly 30–60% of key marketing surfaces. It is identity, not a tiny decorative accent; neutral surfaces take over when comprehension and trust require calm.

**The Evidence Contrast Rule.** Normal text must reach at least 4.5:1 contrast, large text and interface components at least 3:1, and meaning must never depend on color alone.

## 3. Typography

**Display Font:** Expressive display sans (`[family to be chosen during implementation]`)

**Body Font:** Highly readable Thai sans (`[family to be chosen during implementation]`)

**Character:** Headlines are spirited, distinctive, and confidently shaped without becoming novelty typography. Product information is calm, open, and effortless to scan in Thai on a mobile screen. The pairing must contrast through voice while sharing compatible proportions and rendering cleanly together.

### Hierarchy

- **Display** (`[weight and fluid scale to be resolved]`): Hero and major campaign statements only; maximum size must never exceed `6rem`, with letter spacing no tighter than `-0.04em`.
- **Headline** (`[weight and scale to be resolved]`): Product-category and story-section headings, balanced across lines and tested against long Thai copy.
- **Title** (`[weight and scale to be resolved]`): Product names, information-group headings, and navigation landmarks.
- **Body** (`17–18px`, approximately `1.6` line height): Product descriptions, directions, cautions, ingredients, and supporting content; prose should generally remain within `65–75ch`.
- **Label** (`[weight and scale to be resolved]`): Concise controls, prices, statuses, and metadata. Labels use natural case; repeated tiny uppercase tracked labels are prohibited.

**The Thai First Rule.** Choose and test the body family for Thai legibility before judging its Latin styling. Dense product information must remain clear at mobile widths and at 200% browser zoom.

**The Two Voices Rule.** Display type supplies MIKEO's spirited character; body type supplies trust. Never force expressive display styling into ingredients, directions, cautions, certifications, form help, or error messages.

## 4. Elevation

MIKEO is flat by default. Depth comes from color fields, spacing, scale, and clear surface changes rather than decorative glass or stacks of floating cards. Responsive interactions may use a compact structural shadow or slight translation when it materially clarifies hover or pressed state; exact elevation tokens will be resolved during implementation.

**The Grounded Surface Rule.** Surfaces rest on the page instead of hovering above it. Never combine a one-pixel decorative border with a wide soft shadow, and never use blur as a substitute for hierarchy.

**The Responsive Motion Rule.** Use tactile feedback and purposeful transitions without full-page choreography. Avoid animating layout properties, use decisive ease-out curves, keep content visible by default, and replace motion with an instant state change or gentle crossfade under `prefers-reduced-motion: reduce`.

## 5. Components

Component tokens and canonical patterns are intentionally unresolved in this seed. Define them during implementation from verified colors, selected typefaces, real product content, and responsive testing; then re-run `$impeccable document` to extract the implemented system.

Buttons must provide an obvious primary “Order now” action, visible keyboard focus, tactile hover and pressed states, and a preferred minimum target of `44×44px`. Product containers must prioritize comparison and disclosure over repetitive card decoration. Forms must use persistent labels, clear instructions, and plain-language errors.

## 6. Do's and Don'ts

### Do:

- **Do** use the verified MIKEO red (`#EB0000`) as a committed brand field across approximately 30–60% of key marketing surfaces.
- **Do** label every color other than the verified MIKEO red as provisional until it is deliberately selected and documented.
- **Do** shift from lively brand expression to calm neutral surfaces around ingredients, directions, cautions, evidence, and certification details.
- **Do** use original, approved product and lifestyle photography when available; image choices must make daily care feel approachable rather than clinical.
- **Do** design mobile-first with Thai body text around `17–18px`, approximately `1.6` line height, robust zoom behavior, semantic structure, keyboard access, and visible focus states.
- **Do** use motion for feedback and orientation, keep content visible without animation, and provide a reduced-motion alternative for every effect.
- **Do** distinguish verified facts, pending information, and placeholders in words, not through color alone.

### Don't:

- **Don't** guess official logo colors or present a provisional red as a verified MIKEO brand value.
- **Don't** resemble a generic AI wellness template, a cold clinical supplement website, a black-and-gold luxury cosmetics label, or a noisy social-commerce and MLM sales page.
- **Don't** use predictable cream or pastel palettes, purple-blue gradients, gradient text, glassmorphism, or decorative grid and stripe backgrounds.
- **Don't** use excessive pill shapes, nested card grids, repeated identical icon-card grids, or cards rounded beyond `16px`.
- **Don't** repeat tiny uppercase tracked labels or numbered markers above every section heading.
- **Don't** use generic stock yoga imagery, flashing promotions, fake urgency, or before-and-after body photographs.
- **Don't** use miracle cures, guaranteed or rapid weight-loss claims, body shaming, fear tactics, unexplained scientific jargon, aggressive sales hype, or competitor imitation.
- **Don't** invent efficacy claims, ingredients, Thai FDA numbers, certification badges, test results, prices, testimonials, order links, or retailer links.
