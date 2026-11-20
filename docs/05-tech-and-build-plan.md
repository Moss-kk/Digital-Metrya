# 05 · Tech and Build Plan

## Recommended stack (simple, fast, free to start)
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS with brand tokens in `tailwind.config`
- **Animation:** CSS + Framer Motion (only if needed)
- **i18n:** simple `en.json` / `am.json` dictionary (or next-intl)
- **Forms/DB:** Supabase (orders table, storage for uploads) or Formspree for MVP
- **QR codes:** `qrcode` npm package (client-side SVG)
- **Hosting:** Vercel; domain on digitalmetrya.com
- **Analytics:** Plausible or GA4 + Meta Pixel (later)
- **Notifications:** Telegram bot webhook on new order (cheap and instant for Ethiopian workflow)

Alternative for fastest MVP: static Astro/Next site + Telegram/WhatsApp order buttons, no backend. Upgrade later.

## Folder structure
```
/docs                 ← these md files
/public/brand         ← logo svg/png, favicon, og-image
/public/samples       ← sample screenshots/videos
/src/app              ← routes (page.tsx per route)
/src/components       ← UI components
/src/content          ← en.json, am.json, samples.ts, packages.ts, faq.ts
/src/styles           ← globals.css (tokens)
/src/lib              ← helpers (qr, telegram, dates)
/src/invites          ← actual invitation templates (rendered at /samples/[slug])
```

## Data model (when backend is added)
- `orders`: id, name, contact, occasion, event_date, package, language, notes, files[], status, created_at
- `invitations`: id, order_id, slug, template, data(json), live_from, live_until, published
- `rsvps`: id, invitation_id, guest_name, response, count, message, created_at

## Phases (each = one work session)
**Phase 0 — Prep (before coding)**
Logo files, 6 sample invites designed, copy approved, packages priced.

**Phase 1 — Foundation**
Repo, Tailwind tokens, fonts, layout, Header/Footer, logo, language switch skeleton.
✅ Test: site runs, fonts and colors match brand.

**Phase 2 — Home page**
Hero with PhoneFrame/QRCard/LinkChip, all 10 sections with final copy.
✅ Test: 5-second test with 3 friends; phone view.

**Phase 3 — Samples**
`/samples` gallery + `/samples/[slug]` live demos, occasion tabs wired.
✅ Test: every demo opens on mobile; QR in hero scans to a demo.

**Phase 4 — Info pages**
How it works, Pricing, About, FAQ, Contact.

**Phase 5 — Order flow**
Order form, validation, save/send, Telegram notification, thank-you page.
✅ Test: submit real order end to end.

**Phase 6 — Amharic + polish**
Translate, Ethiopic font, check line-breaks, motion, a11y, performance.

**Phase 7 — SEO + analytics + launch prep**
Meta, OG image, sitemap.xml, robots, favicon, analytics, 404, privacy page.

**Phase 8 — Launch** (see `07`)

**Later:** customer dashboard, RSVP, guest list tools, payment integration, template editor.

## Definition of done (every phase)
- No console errors, Lighthouse ≥ 90 mobile (performance, a11y, SEO)
- Matches `01-brand-system.md`
- Responsive at 360, 768, 1280
- Copy matches `03-sitemap-and-copy.md`
