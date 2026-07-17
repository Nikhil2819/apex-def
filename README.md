# apexdef.in — APEX D.E.F website

Premium product-display website for APEX D.E.F (Diesel Exhaust Fluid), manufactured by
Apex Environment Solutions, Bulandshahr, UP. No e-commerce — every conversion path is
call / WhatsApp / enquiry form.

## Stack

Astro 7 (static output) · GSAP + ScrollTrigger + SplitText · Lenis · one vanilla Three.js
hero island (procedural 20 L bucket — no GLB assets) · View Transitions API · Web3Forms.
All visuals are authored inline SVG (zero stock photography, zero licensing exposure).

## Commands

| Command | Does |
|---|---|
| `npm run dev` | Dev server at localhost:4321 |
| `npm run build` | Production build → `dist/` + **forbidden-strings legal check** |
| `npm run preview` | Preview the production build |

The build **fails** if any page contains "AdBlue" branding (outside the two whitelisted
legal sentences), "Apex Ad Blue", price patterns, cart/checkout language, or a
"BIS certified" claim (banned until the CM/L licence number exists — DECISIONS.md #1).

## Architecture notes

- **Render tiers** (`src/scripts/tier.js`, inline in `<head>`): `full` (WebGL + all motion)
  / `lite` (no WebGL) / `static` (Save-Data, slow network, or reduced-motion → CSS-only).
  Gate anything heavy on `document.documentElement.dataset.tier`.
- **Reveal system**: `[data-reveal]` + IO in `src/scripts/app.js`; an inline bootstrap in
  `BaseLayout` reveals above-the-fold content at `readyState: interactive` so the LCP never
  waits for the JS bundle. Page-hero sections use pure-CSS entrance (`hero-rise`).
- **Copy is law**: all wording comes from `content.md` (decision-locked). Change copy there
  first, then in the page. Brand/legal rules: `content.md` §1. All assumptions: `DECISIONS.md`.
- **Site facts** (phones, address, GST, WhatsApp messages, SKUs, config flags for
  email-rows/social-row): `src/data/site.js` — never hardcode these in pages.
- **Design system**: `src/styles/tokens.css` (LOCKED palette/type/spacing per `design.md` §2).

## Planning documents

`roadmap.md` (phase plan + QA checklists) · `content.md` (copy deck) · `design.md`
(design spec) · `DECISIONS.md` (assumption register + swap-later triggers) ·
`master-brief.md` (source of truth) · `research/` (verified industry/design research).

## Quality gates (last verified)

Lighthouse mobile (local, uncompressed server — production brotli improves these):
perf 89–99, accessibility 100, best-practices 100, SEO 100, CLS 0 on all pages.
axe-core: 0 violations on all 8 pages. See `DEPLOY.md` for the launch runbook.
