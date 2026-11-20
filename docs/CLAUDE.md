# Project rules — Digital Metrya website

You are building digitalmetrya.com. Read `/docs/01-brand-system.md` and `/docs/04-design-direction.md` before writing any UI.

## Always
- Use ONLY the brand colors as CSS variables (purple #6D28D9, #A78BFA, lavender #EDE9FE, navy #24104F, white). No other hues in UI chrome.
- Fonts: Poppins (headings), Inter (body), Noto Sans Ethiopic (Amharic). Load via next/font or local files.
- Spacing: 12-col grid, 60/32px margins, 20/16px gutters.
- Use the official logo from /public/brand. Never redraw, recolor, stretch or add effects to it.
- Mobile-first. Most visitors arrive from Instagram/Telegram on a phone.
- All copy comes from `/docs/03-sitemap-and-copy.md`. Do not invent marketing copy; ask if missing.
- Build bilingual-ready (EN + አማርኛ) with a simple i18n dictionary.
- Accessibility: contrast ≥ 4.5:1, visible focus, alt text, tap targets ≥ 44px.

## Never
- No generic gradient blobs/orbs, glassmorphism, neon glows, or floating emoji.
- No rows of 3 identical icon-cards as the main layout.
- No stock "people at laptop" imagery. No lorem ipsum, no "Acme".
- No extra libraries without asking. Keep dependencies minimal.

## Working style
- One phase at a time from `/docs/05-tech-and-build-plan.md`. Finish, run, show what to test, then stop.
- Keep components small, typed, and named by purpose (`OccasionTabs`, `PhoneFrame`, `PackageCard`).
