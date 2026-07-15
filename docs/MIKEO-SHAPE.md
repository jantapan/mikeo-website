# MIKEO Website Shape Brief

Status: Confirmed and approved

Approved visual implementation reference: [`docs/references/mikeo-homepage-north-star.png`](references/mikeo-homepage-north-star.png)

This responsive homepage north-star mock is the authoritative visual reference for implementation. Preserve its macro composition, hierarchy, section rhythm, responsive re-composition, hero treatment, product-first flow, and calm verification presentation while keeping the semantic structure, accessibility behavior, verified-content safeguards, and exact requirements in this brief authoritative. Do not literalize placeholder copy, generated packaging, or any visual detail that could be mistaken for verified product or regulatory information.

## 1. Feature Summary

A production-ready, Thai-language marketing and product-catalog website for MIKEO. It serves mobile-first Thai consumers exploring daily wellness and beauty products, while providing secondary journeys for product advice and distributor enquiries.

The approved reference supplies structural inspiration only. Its content, colors, typography, components, and commercial patterns must not be copied.

## 2. Primary User Action

Help visitors find a relevant product, understand its verified information, and continue safely to an official MIKEO ordering channel.

When no verified channel exists, show:

> กำลังอัปเดตช่องทางอย่างเป็นทางการ

No direct checkout, cart, wishlist, or fake destination.

## 3. Design Direction

- Color strategy: committed MIKEO red, `#EB0000`, covering roughly 30–60% of key marketing surfaces.
- Theme: light and morning-bright—“A Thai customer opens MIKEO on her phone while getting ready for her day, under bright natural morning light, feeling energized, understood, and reassured.”
- Visual lane: bold product-first hierarchy, generous scale, alternating full-width sections, expressive Thai typography, calm evidence areas, and flat surfaces.
- Reference qualities:
  - Approved supplied layout: macro-layout and information rhythm only
  - OLIPOP: approachable product energy
  - Glossier: product-first restraint
  - Ritual: evidence-aware clarity
- Corners remain restrained at 12–16px. Pill shapes are reserved for controls that genuinely benefit from them.
- Responsive feedback replaces full-page choreography; reduced-motion alternatives are mandatory.

The visual probe supported a hybrid direction: Direction A’s campaign-scale hero and Direction C’s calmer trust presentation. The user-supplied sequence now supersedes the probes as the definitive macro-layout.

Every non-red visual token remains provisional until deliberately selected, tested, implemented, and documented. MIKEO red (`#EB0000`) is the only verified color token.

## 4. Scope

- Fidelity: production-ready
- Breadth:
  - Homepage
  - Product catalog
  - Reusable product-detail routes
  - About MIKEO
  - Standards and verified information
  - Distributor information
  - Contact and official ordering channels
- Launch catalog: four categories and approximately 8–12 products, both provisional
- Interactivity:
  - Sticky accessible header
  - Mobile navigation
  - Accessible category filters
  - Responsive catalog
  - Product-detail disclosures
  - Verified external links when available
- Language: Thai only at launch, with architecture that can support English later
- Commerce: external handoff only; no checkout
- Quality intent: polish until suitable for release

## 5. Layout Strategy

Homepage sequence:

1. Slim announcement bar for concise, verified notices only—never autoplaying
2. Sticky accessible header using the official undistorted logo
3. Large campaign hero pairing a clear Thai message and CTA with an immersive product or lifestyle visual
4. Static trust and verification strip
5. Best-seller and product-discovery section with category filters and a responsive product grid
6. Large category collection panels for the four launch categories
7. Split brand-story section
8. Calm standards and verified-information section
9. Distributor invitation
10. Official contact/order handoff and footer

The rhythm alternates energetic red brand fields with quieter white or near-white information sections. Product discovery appears early; story and institutional trust support rather than interrupt it.

Desktop may use asymmetry and expansive imagery. Mobile preserves the same narrative order with compact navigation, horizontal filter overflow where necessary, single-column reading flow, and minimum 44×44px controls.

Product pages should prioritize:

1. Product identity and verified status
2. Intended role in a routine
3. Verified information disclosures
4. Directions and cautions
5. Official order or advice handoff
6. Related products from verified catalog data

## 6. Key States

- Default: verified content is presented without promotional pressure.
- Loading: use stable reserved space or simple skeletons; no layout shift or hidden content.
- Empty catalog/category: explain that products are being prepared and offer navigation back to available categories.
- Missing product: plain Thai not-found state with catalog recovery action.
- Data error: acknowledge that information could not be loaded and provide retry/navigation options.
- Unverified content: explicitly label it as awaiting verified source material.
- Missing order channel: show “กำลังอัปเดตช่องทางอย่างเป็นทางการ” with no inert fake link.
- No best sellers verified: omit the ranking claim and present neutral product discovery instead.
- No certifications verified: explain that verified documents are being prepared; never render empty badge silhouettes.
- Filter with no matches: identify the selected category and provide a clear reset action.
- External-link handoff: clearly identify that the visitor is leaving for an official MIKEO channel.
- Reduced motion: instant state changes or gentle crossfades, with identical information and functionality.
- Keyboard and zoom: complete interaction at 200% zoom without clipping, hover dependence, or lost focus.

## 7. Interaction Model

- Header remains available during exploration without consuming excessive mobile height.
- Mobile menu opens with focus management, keyboard dismissal, scroll containment, and a visible close control.
- Category filters behave as a labeled single-selection control with programmatic selected state.
- Product tiles link to details; they do not contain cart or wishlist controls.
- Product-detail information uses semantic sections or accessible disclosure controls where collapsing genuinely helps mobile comprehension.
- External CTAs activate only for verified URLs.
- Hover, pressed, and focus-visible feedback is tactile and immediate.
- No autoplay marquees, carousels, flashing promotions, fake countdowns, or scroll-gated content.

## 8. Content Requirements

Required verified or clearly placeholder-labeled data:

- Product categories
- Product names and imagery
- Intended benefits and approved claims
- Ingredients
- Directions
- Cautions
- Prices
- Thai FDA or regulatory details
- Certifications and supporting documents
- Manufacturer or sourcing information
- Official ordering and contact links
- Distributor requirements and contact process
- Testimonials with publication permission and authenticity records

Media roles:

- Official logo: `public/images/mikeo-logo.png`, preserving aspect ratio
- Hero: original product/lifestyle photography or an approved generated campaign asset
- Product grid: consistent original product packshots
- Category panels: product-led category imagery
- Brand story: founder/team or authentic MIKEO environment imagery
- Standards: verified document previews or restrained informational graphics—not invented badges
- Distributor section: authentic people or brand-operation imagery, avoiding MLM visual language

All temporary content must announce its placeholder status. Placeholder copy must not resemble a real efficacy claim, certification, registration number, testimonial, price, or purchasing destination.

Only verified content may be presented as factual or actionable. Product and proof placeholders, unavailable-channel safeguards, and the prohibition on invented claims or links are mandatory throughout implementation.

## 9. Recommended Implementation References

- `reference/craft.md` — end-to-end build flow
- `reference/brand.md` — distinctive marketing execution
- `reference/layout.md` — alternating full-width section rhythm
- `reference/typeset.md` — expressive display and readable Thai pairing
- `reference/interaction-design.md` — navigation, filters, disclosures, and external handoffs
- `reference/adapt.md` — mobile-first responsiveness and zoom behavior
- `reference/harden.md` — missing data, unavailable links, loading, empty, and error states
- `reference/animate.md` — responsive motion with reduced-motion parity
- `reference/audit.md` — WCAG 2.2 AA, performance, and responsive verification

## 10. Open Questions

No blocking design questions remain. Exact non-red colors, font families, spacing, radii, component tokens, product content, photography, proof, and external URLs remain provisional until selected or supplied during implementation.
