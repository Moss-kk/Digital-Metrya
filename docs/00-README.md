# Digital Metrya — Website Build Pack

**Brand line:** Your Event. Our Digital Touch.
**Flow line:** Ideas → Digital → Memories
**Domain:** digitalmetrya.com (confirm spelling before buying)

This folder is the single source of truth for building the site. Feed these files to your vibe-coding tool (Claude Code / Cursor / Lovable) in the order below.

## Files
| # | File | Purpose |
|---|------|---------|
| 01 | `01-brand-system.md` | Colors, fonts, logo rules, layout tokens. Non-negotiable. |
| 02 | `02-strategy.md` | Who it's for, what we sell, positioning, what to say |
| 03 | `03-sitemap-and-copy.md` | Every page + section + real copy |
| 04 | `04-design-direction.md` | How it should look and feel, plus the anti-"AI look" rules |
| 05 | `05-tech-and-build-plan.md` | Stack, folder structure, data model, phases |
| 06 | `06-vibe-coding-prompts.md` | Copy-paste prompts, in order |
| 07 | `07-marketing-launch.md` | Launch plan, content, channels, metrics |
| — | `CLAUDE.md` | Rules file — drop in project root so the AI always follows the brand |
| — | `assets/` | Logo reference (replace with official SVG/PNG files) |

## Build order
1. Put `CLAUDE.md` + `01-brand-system.md` + `04-design-direction.md` in the repo root `/docs`.
2. Add official logo files to `/public/brand/`.
3. Run prompts in `06` one at a time. Test after each.
4. Run launch checklist in `07` one week before release.

## Open decisions (fill these before coding)
- [ ] Final domain + email address
- [ ] Packages and prices (ETB) — see `02-strategy.md`
- [ ] Payment method(s) at launch (Telebirr / CBE Birr / bank transfer / manual)
- [ ] Languages at launch: English + አማርኛ recommended
- [ ] Real sample invitations (need 6 minimum, one per occasion) — **the site lives or dies on these**
- [ ] Official logo files (SVG, PNG, reversed/white version, icon)
- [ ] WhatsApp / Telegram / phone number for orders
