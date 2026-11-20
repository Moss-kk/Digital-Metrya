# 06 · Vibe Coding Prompts (run in order)

Before the first prompt: put `CLAUDE.md` in the project root and the `/docs` folder in the repo. Start every session with:
> Read CLAUDE.md and the docs it references. Confirm the phase you're doing, then build only that phase.

---

### Prompt 1 — Foundation
> Create a Next.js (App Router) + TypeScript + Tailwind project for Digital Metrya. Add brand tokens from `/docs/01-brand-system.md` to Tailwind (colors, radii, shadows, spacing, font sizes). Load Poppins, Inter and Noto Sans Ethiopic. Build the global layout with Header (horizontal logo from /public/brand, nav, language switch EN | አማ, "Order yours" button) and Footer (reversed logo, links, @digitalmetrya). Use a 12-column container with 60/32px margins. Show me how to run and what to check.

### Prompt 2 — Core components
> Build `PhoneFrame` (CSS/SVG, accepts children/iframe/image), `QRCard` (real scannable QR from a URL prop, using `qrcode`), `LinkChip`, `Button` (primary/secondary), `SectionHeading`, `Card`. Create a `/dev/components` page that shows each one so I can review.

### Prompt 3 — Hero
> Build the Home hero per `/docs/04-design-direction.md` "Hero spec" and copy in `/docs/03-sitemap-and-copy.md` section 1. Composition: two overlapping phones (slightly rotated), QR card, link chip. Placeholder invite artwork for now. Mobile layout stacks. No gradient blobs.

### Prompt 4 — Rest of Home
> Build sections 2–10 of Home one at a time with the exact copy. Follow the "Page rhythm" so no two adjacent sections share a layout. Use data from `/src/content` files (create `occasions.ts`, `packages.ts`, `faq.ts`).

### Prompt 5 — Sample invitations
> Create 6 invitation templates in `/src/invites` (wedding, birthday, graduation, baby shower, book release, custom). Each one is a real mobile-first page: cover, details, countdown, map link, gallery, RSVP button, share. Each has its own artwork/color inside the invite only. Route them at `/samples/[slug]`, and build `/samples` with occasion filter. Use fictional but realistic names and dates.

### Prompt 6 — Occasion tabs
> Wire `OccasionTabs` on Home to show each sample inside `PhoneFrame` (iframe or live component). Add "Open this sample" links. Update the hero QR to point to the wedding demo.

### Prompt 7 — Info pages
> Build `/how-it-works`, `/pricing`, `/about`, `/faq`, `/contact` from `/docs/03-sitemap-and-copy.md`. Pricing reads from `packages.ts` and shows "From ___ ETB" placeholders.

### Prompt 8 — Order flow
> Build `/order` with the form fields listed in the docs, validation (zod), file upload (≤ 5 images), and save to Supabase `orders` table. On success send a Telegram bot message with the summary and show a thank-you page with a prefilled Telegram/WhatsApp link. Give me the SQL and env variables I need.

### Prompt 9 — Amharic
> Move all copy to `en.json` and `am.json`. Add the language switch behavior (persist in cookie). I'll provide the Amharic text; use placeholders marked `TODO_AM` until then. Check line breaks and font sizes for Ethiopic script.

### Prompt 10 — Polish
> Add entrance animations per the Motion section (respect reduced motion), hover states, focus rings, skeletons, 404 page. Run a mobile Lighthouse and fix issues under 90.

### Prompt 11 — SEO and launch prep
> Add metadata per page, OG image, sitemap.xml, robots.txt, favicon from the app icon, structured data (Organization), analytics script behind env var, privacy page.

### Prompt 12 — Brand audit
> Audit the whole site against `/docs/01-brand-system.md` and the "avoid" list in `/docs/04-design-direction.md`. List every violation with file and line, then fix them.

---

## Tips
- After each prompt: run it, look at it on your phone, then commit.
- If output looks generic, say: "Too templated. Re-do this section using the Design Direction rules: real artifacts, varied layout, tighter headline type."
- Paste screenshots when asking for fixes.
- Never ask for "make it beautiful". Ask for specifics (spacing, size, overlap, weight).
