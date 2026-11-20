# 04 · Design Direction (eye-catching, not AI-looking)

## Core idea
**An invitation, not a SaaS landing page.** The site should feel like opening a beautifully made invitation: confident type, generous space, real artifacts. The product *is* the visual, so show the product everywhere.

## What makes sites look AI-generated (avoid)
- Purple/blue gradient blobs and glowing orbs
- Glassmorphism cards over blurred backgrounds
- Three identical icon-cards in a row
- Centered everything, same section rhythm top to bottom
- Emoji as icons, generic stock photos
- Vague copy: "Elevate your experience", "Seamless solutions"
- Perfect symmetry, no texture, no imperfection

## What to do instead
1. **Real artifacts as heroes.** Phone frames with real invitation designs, real QR codes, real link bars. Overlap and rotate them slightly (±3°) like cards laid on a table.
2. **Brand purple used with restraint.** White and lavender are the canvas. Purple is for actions and one big moment (final CTA band). Navy for confident headlines.
3. **Type does the work.** Poppins Bold at large sizes, tight tracking, a mix of weights inside one headline (e.g., "Your event." SemiBold + "Our digital touch." Bold purple).
4. **Variety in section layouts.** Alternate: full hero → split → horizontal scroll gallery → bento → timeline → dark band. No two adjacent sections share a layout.
5. **Texture.** The feather pattern at 4–6% opacity on lavender sections; paper-grain on the occasion demos if suitable.
6. **Occasion artwork carries color.** Wedding sample might be ivory/gold, graduation navy/gold, birthday playful. They appear inside phone frames so the UI stays on-brand.
7. **Specific copy**, specific numbers, specific examples (names like "Selam & Dawit", real dates).
8. **Motion with purpose.** See below.

## Hero spec (desktop)
- 12-col grid. Left cols 1–6: eyebrow, H1, sub, 2 CTAs, reassurance line.
- Right cols 7–12: composition of 3 elements
  - Main phone (wedding invite, live scrolling loop or short video)
  - Smaller phone behind, rotated (birthday invite)
  - QR code card + link chip `digitalmetrya.com/selam-and-dawit` floating bottom-left of the phone
- Background: white with a lavender rounded shape behind phones, faint feather pattern
- Mobile: text first, phones below, one phone only.

## Components to build
`Header` `Footer` `PhoneFrame` `QRCard` `LinkChip` `OccasionTabs` `SampleCard` `BentoGrid` `StepTimeline` `PackageCard` `CompareTable` `FAQAccordion` `CTABand` `LangSwitch` `OrderForm`

### Buttons
- Primary: `#6D28D9` fill, white text, 999px radius, 48px height. Hover: shift to `#A78BFA` fill with navy text, or lift 2px. Stay inside the palette.
- Secondary: navy outline.
- Focus ring: 3px `#A78BFA`.

### Cards
White or lavender, 16–24px radius, 1px lavender border, soft shadow (`0 8px 24px rgba(36,16,79,.08)`).

## Motion
- Entrance: fade + 12px rise, 400ms, once, staggered 60ms
- Hero phones: slow float (6s ease, 8px) — one element only
- Occasion tabs: crossfade the phone content
- Hover on sample cards: lift 4px
- Respect `prefers-reduced-motion`
- No parallax, no scroll-jacking, no cursor effects

## Imagery plan
| Need | Source |
|---|---|
| 6 sample invitations (real, designed by you) | Build as actual pages; capture screens + short screen recordings |
| Phone mockups | Pure CSS/SVG frame, no photo mockups |
| People photos | Real photography with permission, or none. Skip stock |
| QR codes | Generated live (real, scannable to the demo) |
| Icons | Lucide outline, brand colors |

## Page rhythm (home)
1. Hero (white + lavender shape)
2. 3-step strip (white, horizontal)
3. Occasion tabs (lavender, large demo)
4. Paper vs digital (white, split)
5. Bento "inside every invitation" (white, mixed sizes)
6. How it works (lavender, timeline)
7. Pricing teaser (white)
8. FAQ (white)
9. Final CTA (brand gradient, reversed logo)
10. Footer (navy)

## Performance
LCP < 2.5s on 4G. Images AVIF/WebP, lazy below fold, hero video under 1MB (or CSS-animated loop). Total JS < 150KB on home. Test on a low-end Android.

## Accessibility
Contrast ≥ 4.5:1, keyboard-navigable tabs/accordion, alt text, language attributes (`lang="am"` on Amharic).
