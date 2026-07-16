# APEX D.E.F — Website Design Plan

Companion to `master-brief.md` (LOCKED source of truth) and `content.md`. Audience: site developer/designer + client review. Every token, slug, section ID, and SKU id below matches the brief exactly. Tech stack assumed throughout: Astro (static) + GSAP 3.13+ (ScrollTrigger, SplitText) + Lenis + one vanilla Three.js hero island (procedural, code-built at launch; GLB/Draco is the post-launch upgrade path — see §6) + Rive (or CSS/GSAP) for 2D process motion + View Transitions API.

---

## 1. Design vision & principles

### 1.1 Concept: "Clean Fluid, Clean Fields"

One idea drives every visual decision: **a precision-made blue fluid that keeps India's engines legal and its air clean — from national highways to wheat fields.** Two worlds meet on every page:

- **Clean Fluid** — the industrial-chemical world: near-black navy (`--ink-950`), electric DEF-blue liquid light (`--def-400`), laboratory precision, tabular numerals, hairline rules, 3D packaging, particle chemistry.
- **Clean Fields** — the agricultural-environmental world: porcelain-light sections (`--porcelain-50`), daylight photography of tractors and harvests, the parent-brand leaf (`--leaf-500`) used sparingly as a certification of intent.

The page rhythm alternates between the two: **dark-cinematic chapters** (hero, SCR chemistry, stats, dealer CTA) and **clean-light chapters** (products, applications, quality, FAQ). The alternation itself is a brand device — the site literally moves between exhaust-dark and clean-light, mirroring what DEF does.

### 1.2 Principles (binding for all decisions below)

1. **Trust before theatre.** The #1 job is to make a fleet owner, farmer, dealer, or purchase manager call. Every animated flourish must carry information (chemistry, spec, pack size) or proof (certification, numbers). No decoration that delays a phone number.
2. **Mobile-first narrative.** The primary visitor is on a mid-range Android on 4G in Uttar Pradesh. The mobile experience is designed first; desktop adds cinema on top. Sticky Call/WhatsApp/Enquire bar is always one thumb away.
3. **Numbers > adjectives, motion > metaphor.** Stats count, particles transform (NOx → N₂), liquids fill. We show the chemistry rather than claim "premium quality".
4. **Three tiers, one design.** Every section is designed simultaneously in `full` / `lite` / `static` renditions. The static rendition must stand alone as a handsome page — it is the design, not a degraded copy.
5. **Category-legal by construction.** No AdBlue branding anywhere in art, labels, alt text, or file names (asset file names use `def-`, never `adblue-`). No prices, no cart/checkout iconography. CTAs are Call / WhatsApp / Enquire only.
6. **One accent at a time.** `--def-400` owns liquid/tech highlights; `--leaf-500` appears only for eco/agri meaning and never as body text. They co-occur only in the Phosphor Duotone icon treatment and the NOx→N₂ outro.

### 1.3 Mood references (from research digest)

Terminal Industries (restrained dark industrial type-led), Lando Norris/OFF+BRAND (scroll-rotated 3D object with a single accent), iCOMAT (manufacturing process as visual journey), LX Hausys (fluid/shader motifs for a chemical brand), Trionn (GSAP+Three+Lenis coordination architecture). We borrow patterns, never aesthetics wholesale — palette and motifs stay APEX.

---

## 2. Design system

### 2.1 Color tokens & usage rules

Core tokens are LOCKED from the brief. Derived tokens (marked *derived*) are tints/alphas of core tokens for implementation convenience.

| Token | Hex / value | Role | Usage rules |
|---|---|---|---|
| `--ink-950` | `#060B14` | Dark section background, dark buttons' text on `--def-400` | Never used as text on navy (too low contrast); base of all "cinematic" sections |
| `--navy-800` | `#0A1B3D` | Deep apex blue — card surfaces on dark, gradient start | Secondary dark surface; hairline-separated panels on `--ink-950` |
| `--blue-600` | `#1B4F9C` | Primary brand blue — headings on light, primary buttons on light, links | Text on `--porcelain-50`/white only (7.5:1 ✓ AA/AAA). Not for text on dark |
| `--def-400` | `#2FB6E9` | Electric DEF accent — liquid, glows, highlights, key numerals on dark | Text on `--ink-950` = 8.4:1 ✓, on `--navy-800` = 7.3:1 ✓. **On light backgrounds: graphics only, never text** (2.4:1 vs white ✗). Buttons filled `--def-400` must use `--ink-950` text (8.4:1 ✓), never white (2.3:1 ✗) |
| `--leaf-500` | `#1F9D55` | Eco/agri accent — leaf motif, agri chips, N₂/H₂O "clean" beat | Never body text (brief rule). On dark: 5.7:1 ✓ for short labels/icons. On light: 3.5:1 — icons & ≥24px text only (AA-large/UI 3:1 ✓) |
| `--porcelain-50` | `#F6F9FC` | Light section background | Default light bg; pure white reserved for cards on porcelain |
| `--slate-500` | `#5B6B7F` | Secondary text on light | 5.2:1 on porcelain ✓ AA. Not for text below 14px |
| `--white` | `#FFFFFF` | Body text on dark, cards on light | On `--blue-600` 7.9:1 ✓ |
| `--ink-900` *derived* | `#0B1524` | Body text on light (instead of pure black) | ≥15:1 on porcelain ✓ |
| `--hairline-dark` *derived* | `rgba(255,255,255,.08)` | 1px rules/borders on dark | The signature hairline; use for card borders, dividers, table rules on dark |
| `--hairline-light` *derived* | `rgba(10,27,61,.10)` | 1px rules on light | Light-section equivalent |
| `--def-glow` *derived* | `0 0 24px rgba(47,182,233,.35)` | Glow shadow | Only on dark sections: liquid highlights, active states, hero accents |
| `--def-tint` *derived* | `rgba(47,182,233,.12)` | Duotone icon fill, chip bg on dark | |
| `--leaf-tint` *derived* | `rgba(31,157,85,.12)` | Agri chip bg | |
| `--grad-liquid` | `linear-gradient(105deg, #0A1B3D 0%, #1B4F9C 45%, #2FB6E9 100%)` | "Liquid sweep" signature gradient | Hero wash, section transition bands, primary CTA hover sheen, text-clip on 1–2 hero words max per page |
| `--scrim-dark` *derived* | `linear-gradient(180deg, rgba(6,11,20,.85), rgba(6,11,20,.45))` | Photo overlay on dark full-bleed imagery | Guarantees white text ≥4.5:1 over any photo |

Semantic states (verified ratios): success `--leaf-500`; **error on light** `--error-on-light #C42B30` *derived* — 5.3:1 on `--porcelain-50` ✓ AA — used for ALL error text/borders on light or white surfaces (including white form cards); **error on dark** `#E5484D` *derived* — 5.0:1 on `--ink-950` ✓, but only 3.9:1 on white / 3.7:1 on porcelain ✗ — dark sections only, never on light; **warning** `#F5A524` *derived* — pairs ONLY with `--ink-950` text/icons (9.7:1 ✓), never with white (2.0:1 ✗). Used in forms and inline callouts.

**Section alternation map (default):** dark (`--ink-950`) → light (`--porcelain-50`) → dark → light… Never two identical adjacent backgrounds without a hairline or gradient seam. Transition seam: a 1px `--hairline-*` rule or an 8–12rem `--grad-liquid` fade band on signature transitions (hero → intro). Deliberate dark-chapter continuations (e.g. Home `#applications` → `#how-it-works`) are allowed but ALWAYS carry a 1px `--hairline-dark` seam (or a short `--grad-liquid` fade band) at the shared boundary.

### 2.2 Typography

- **Display: Clash Display** (Fontshare — ITF Free Font License, free commercial; self-hosted `woff2`, weights 500/600 subset to Latin). Headlines, nav wordmark, big numerals accompanying stats labels.
- **Body/UI: Inter variable** (self-hosted variable `woff2`, `wght` 400–700 axis, Latin subset). All body copy, UI, forms, tables. `font-variant-numeric: tabular-nums` on every stat counter, spec table, and phone number.
- Fallback stacks: `"Clash Display", "Arial Narrow", Impact, sans-serif` with `size-adjust`-tuned `@font-face` fallback metrics; `Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

**Responsive type scale** (clamp between 360px and 1440px viewports):

| Token | clamp() | Line-height | Tracking | Face/weight |
|---|---|---|---|---|
| `--fs-display-1` (hero h1) | `clamp(2.75rem, 1.55rem + 5.35vw, 6.5rem)` | 1.02 | −0.03em | Clash 600 |
| `--fs-display-2` (section h2) | `clamp(2rem, 1.33rem + 3vw, 4rem)` | 1.06 | −0.025em | Clash 600 |
| `--fs-h3` | `clamp(1.5rem, 1.25rem + 1.1vw, 2.25rem)` | 1.15 | −0.02em | Clash 500 |
| `--fs-h4` | `clamp(1.25rem, 1.16rem + 0.4vw, 1.5rem)` | 1.25 | −0.01em | Clash 500 |
| `--fs-stat` (counters) | `clamp(2.5rem, 2rem + 2.2vw, 4.25rem)` | 1.0 | −0.01em | Inter 700 tabular |
| `--fs-lead` | `clamp(1.125rem, 1.06rem + 0.3vw, 1.375rem)` | 1.5 | 0 | Inter 400 |
| `--fs-body` | `clamp(1rem, 0.98rem + 0.1vw, 1.0625rem)` | 1.65 | 0 | Inter 400 |
| `--fs-small` | `0.875rem` | 1.5 | 0 | Inter 400/500 |
| `--fs-overline` | `0.75rem` | 1.3 | +0.14em, uppercase | Inter 600 |

Rules: max heading measure 18ch (display), body measure 65ch; overline kickers (`--fs-overline`, `--def-400` on dark / `--blue-600` on light) precede every h2; negative tracking never applied to Inter; no faux bold/italic (Clash has no italic — don't italicize display).

### 2.3 Spacing, radius, elevation

- **Spacing scale (4px base):** `--sp-1` 4 · `--sp-2` 8 · `--sp-3` 12 · `--sp-4` 16 · `--sp-5` 24 · `--sp-6` 32 · `--sp-7` 48 · `--sp-8` 64 · `--sp-9` 96 · `--sp-10` 128 · `--sp-11` 160.
- **Section padding:** dark-cinematic `padding-block: clamp(5rem, 10vw, 10rem)`; light-utility `clamp(3.5rem, 8vw, 7.5rem)`; pre-footer strips `clamp(2.5rem, 6vw, 5rem)`.
- **Radius:** `--r-xs` 4px (chips, table cells), `--r-sm` 8px (inputs, small cards), `--r-md` 12px (cards), `--r-lg` 16px (feature cards, media), `--r-xl` 24px (hero media, section frames), `--r-pill` 999px (buttons, badges).
- **Elevation — light sections (shadows):** `--e-1: 0 1px 2px rgba(10,27,61,.06)`; `--e-2: 0 4px 16px rgba(10,27,61,.08)`; `--e-3: 0 12px 40px rgba(10,27,61,.12)`.
- **Elevation — dark sections (glows + hairlines):** no drop shadows; depth = `--hairline-dark` border + `--def-glow` on interactive/highlight elements + subtle `--navy-800` surface steps.

### 2.4 Grid & breakpoints (mobile-first)

| Breakpoint token | Min-width | Columns | Gutter | Margin |
|---|---|---|---|---|
| base | 360px design floor | 4 | 16px | 20px |
| `--bp-sm` | 480px | 4 | 16px | 24px |
| `--bp-md` | 768px | 8 | 24px | 40px |
| `--bp-lg` | 1024px | 12 | 24px | 56px |
| `--bp-xl` | 1280px | 12 | 32px | auto |
| `--bp-2xl` | 1536px | 12 | 32px | auto |

Containers: `--container-max` 1440px (full-bleed media may exceed); `--container-text` 1200px (standard sections); `--container-narrow` 760px (FAQ, long copy). CSS grid with named lines; full-bleed sections use the "breakout grid" pattern (content column + full-bleed track) so imagery can bleed while text stays in the container.

### 2.5 Iconography

- **Phosphor Duotone (MIT)** for feature/USP/benefit grids and application chips. Duotone recolor rule: back layer `--def-tint` (or `--leaf-tint` on agri items), front stroke `--blue-600` on light / `--def-400` on dark. Size 32–40px in grids, 24px in chips. Agri items may use leaf-green front stroke on light only at ≥24px.
- **Lucide-style 1.5px strokes (ISC)** for UI chrome: nav arrows, accordion chevrons, form icons, close, external-link, phone, map-pin. `stroke-width: 1.5`, `currentColor`, 20–24px, rounded caps.
- **Custom icons (6, drawn to Phosphor 256-grid, 1.5px stroke):** DEF nozzle-in-filler-neck, urea hexagon molecule, SCR canister (honeycomb cutaway), droplet-with-check, tractor silhouette, 210L drum. These cover the category gaps no library has.
- Never mix stroke weights in one grid; never use emoji as icons; WhatsApp uses the official glyph shape (drawn as mono-stroke to match) on `#25D366` only in the floating button and sticky bar.

### 2.6 Motif library (reusable graphic elements)

Each motif ships as an optimized inline SVG partial (and, where noted, a Rive/GSAP-animated variant). All are drawn on the same 1.5px stroke grid, currentColor-driven.

1. **Droplet** — the brand mark's atom. A teardrop with a specular notch, filled `--grad-liquid` (dark sections) or stroked `--blue-600` (light). Uses: list bullets on feature lists, favicon, section kickers, loading indicator (droplet fills bottom-to-top). Animated variant: 400ms fill rise.
2. **Flowing-liquid line** — a 2px sinusoidal path with a traveling gradient stroke (`--def-400` head fading to transparent tail). Uses: section connectors on dark (SVG `stroke-dashoffset` scroll-scrubbed), underline accent beneath key display words, timeline spine. Static tier renders it as a fixed gradient stroke, no travel.
3. **Urea hexagon nodes** — a honeycomb cluster of thin-stroke hexagons with node dots at vertices, opacity 6–10%, used as background texture on dark sections (`#quality`, `#spec-table`, lab contexts) and as the "chemistry" badge frame. Never above 10% opacity; never on light photos.
4. **Leaf** — simplified single leaf from the Apex Environment Solutions parent logo, redrawn to the 1.5px grid. Uses: parent-brand mentions, eco proof points, agri chips, the final "clean" beat of the SCR animation. `--leaf-500` only. Max one leaf per viewport-height of content — scarcity keeps it meaningful.
5. **NOx→N₂ particle transform** — the signature chemistry glyph: three red-orange particles (`#E5484D` at 80%) entering left, a droplet interceptor, two white + one leaf-tinted particles exiting right (N₂ + H₂O). Exists as: (a) static SVG diagram, (b) Rive micro-loop 3–4s for cards, (c) full WebGL/GSAP particle system in the SCR scrollytelling. Uses: `#how-it-works` teaser, `#scr`, OG imagery, dealer pitch "the market driver" card.

### 2.7 Component specs

All interactive components: visible focus ring `outline: 2px solid --def-400; outline-offset: 3px` (light sections: `--blue-600`); touch targets ≥48×48px; `:active` scale 0.97 with 120ms spring on touch.

**Buttons**
- **Primary (dark sections):** pill, `--def-400` bg, `--ink-950` text (8.4:1), Inter 600 15–16px, padding 14px 28px. Hover (desktop): bg lightens 6%, `--def-glow`, magnetic attraction (see §5.5), arrow icon nudges 4px. Active: scale .97. Focus: ring as above.
- **Primary (light sections):** `--blue-600` bg, white text (7.9:1). Hover: `--grad-liquid` sheen sweeps 105° once (600ms), elevation `--e-2`.
- **Secondary:** transparent, 1.5px border (`--hairline-dark` at 100% alpha on dark → `rgba(255,255,255,.32)`; `--blue-600` on light), text matches border. Hover: border brightens to `--def-400`/fills 8% tint.
- **Tertiary/link-button:** text + arrow, underline grows from 0→100% on hover (250ms), arrow translates 4px.
- **Call button variant:** phone icon + number in tabular Inter; on mobile it is a `tel:` link occupying ≥48px height. WhatsApp variant: `#25D366` bg, white glyph + label, same pill geometry.
- Touch: no magnetic/hover states; pressed state = scale .97 + 8% brightness shift.

**Links (inline):** `--blue-600` on light / `--def-400` on dark, 1px underline offset 3px, hover thickens to 2px. Visited not differentiated (marketing site).

**Cards**
- *Product card:* white on light (radius `--r-lg`, `--e-1`→`--e-2` hover, pack render on 4:5 media area, SKU name Clash h4, buyer-type `--fs-small` slate, CTA row: Call for price / WhatsApp / Enquire). Hover (desktop): media zooms 1.04 (600ms expo), card lifts 4px. Touch: whole card tappable to SKU anchor; CTAs remain individually tappable.
- *Application card:* full-bleed photo card, `--scrim-dark` overlay, white h3 + overline, radius `--r-lg`. Hover: photo scale 1.05, scrim lightens 10%, arrow chip appears. Touch: arrow chip always visible.
- *USP/feature card (dark):* `--navy-800` surface, `--hairline-dark` border, Phosphor Duotone icon, hover: border → 24% white, icon back-layer tint brightens.
- Focus-within on all cards: same ring as buttons.

**Forms** (Contact `#form`, Dealers `#dealer-form`)
- Inputs: 52px height, `--r-sm`, white bg + `--hairline-light` border on light (dark variant: `rgba(255,255,255,.04)` bg + `--hairline-dark`), 16px Inter (prevents iOS zoom), floating label from placeholder position → 12px overline on focus/filled. Focus: border `--def-400` 2px + ring. Error: `--error-on-light #C42B30` border + 13px message with icon below on light/white form surfaces (both site forms sit on white cards — `#E5484D` is reserved for the rare dark-surface field variant only, per §2.1), `aria-describedby` wired; never color-only (icon + text).
- Dropdown (need type): native `<select>` styled with custom chevron (Lucide), native picker retained on touch.
- Textarea 5 rows min. Submit = Primary button full-width on mobile. Success state: inline panel with droplet-check motif + "We'll call you back" + WhatsApp deep link fallback.

**Accordion (FAQ)**
- Row: `--hairline-*` top border, question Inter 500 17px, chevron rotates 180° (250ms `--ease-out-quint`). Panel: `grid-template-rows 0fr→1fr` height animation (300ms), answer `--slate-500` on light. Only one open at a time on mobile; multiple allowed ≥1024px. Full keyboard support: `button[aria-expanded]` per row, arrow-key roving optional. Static tier: same (CSS-only, no JS dependency — `<details>` progressive base).

**Badges/chips** (cert chips ISO 22241 / IS 17042 / BIS*)
- Pill, `--fs-overline` text, 1px border. Dark: `--def-tint` bg + `--def-400` text. Light: white bg + `--blue-600` text + `--hairline-light`. Agri chip variant: `--leaf-tint` + leaf icon. **BIS interim state (the single site-wide rule, shared verbatim with content.md and roadmap.md):** the chip always ships as `BIS*`, and its footnote reads only: "Manufactured to IS 17042 (Part 1); BIS licence details will be displayed on grant." No "certified" claim is made anywhere before the number exists. This interim state is the shipped state (DECISIONS.md #1). Once the BIS licence CM/L number is granted, the footnote switches to "BIS licence No. CM/L-XXXXX".

**Tables** (`#spec-table`, storage shelf-life table)
- Inter 15px tabular-nums, row height 48px, `--hairline-*` row rules only (no vertical rules), parameter column left, value/unit right-aligned, header row `--fs-overline`. Zebra: none (hairlines suffice). On mobile: table keeps two-column layout (parameter/value fits); if wider (norms matrix), wrap in `overflow-x:auto` scroller with fade-edge masks + "swipe" affordance. Sticky header row ≥768px. Downloadable PDF button adjacent (secondary button + file icon).

---

## 3. Motion system

### 3.1 Easing & duration tokens

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) | Entrances, reveals — default |
| `--ease-out-soft` | `cubic-bezier(0.22, 1, 0.36, 1)` (quint-out) | Accordions, chevrons, small UI |
| `--ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` | Position swaps, selector transitions |
| `--ease-linear` | `linear` | Scrubbed timelines only (scroll maps progress; easing lives in the mapping) |
| spring | `gsap.quickTo(..., {duration:.4, ease:"power3"})` | Magnetic buttons, cursor trail |

| Duration token | ms | Use |
|---|---|---|
| `--t-fast` | 150 | Hovers, color/border shifts |
| `--t-base` | 250 | Chevrons, underlines, chips |
| `--t-med` | 400 | Card lifts, icon morphs, droplet fill |
| `--t-slow` | 600 | Section entrances, media zooms, selector swap core |
| `--t-cine` | 900 | Hero beats, SplitText masters |
| `--t-epic` | 1200 | Page-load hero choreography only |

**Stagger rules:** list/grid children stagger 0.06–0.08s, capped at 0.6s total (`stagger: {each: .07, from: "start"}`); SplitText: words 0.04s / lines 0.09s; counters run 1.2s with expo-out value mapping. Nothing animates longer than 1.2s except scroll-scrubbed timelines (which have no duration).

**Signature reveal:** SplitText line-mask + `filter: blur(8px)→0` + `opacity 0→1` + `y: 24→0`, per-line stagger 0.09s — "comes into focus", not "fades in". `will-change` applied at animation start, removed on complete (Trionn pattern). Used on every h2/h1; body copy gets a simple 400ms fade-rise (no splitting body text).

### 3.2 Render tiers & detection (exact logic — from brief, non-negotiable)

```js
const saveData = navigator.connection?.saveData;
const slowNet = ['slow-2g','2g','3g'].includes(navigator.connection?.effectiveType);
const lowCPU  = navigator.hardwareConcurrency <= 4;
const lowRAM  = navigator.deviceMemory <= 4;        // Chromium only
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const tier = (saveData || slowNet || reducedMotion) ? 'static'
           : (lowCPU || lowRAM || !hasWebGL2()) ? 'lite' : 'full';
document.documentElement.dataset.tier = tier;
```

Runs as an inline `<head>` script before any asset decision; `data-tier` gates CSS and every dynamic `import()`. Absence of Network Information API (Safari/Firefox) = treat as full-capable but still honor `prefers-reduced-motion`.

| Tier | Gets | Never gets |
|---|---|---|
| `full` | Three.js hero island, particle systems, Lenis, all GSAP incl. pins/scrubs, video loops, image-sequence scrubs | — |
| `lite` | GSAP reveals/counters, marquee as constant-speed pure-CSS loop (no velocity reactivity), AVIF posters instead of canvas/video, simplified parallax (single-layer translate), pins allowed but shortened | WebGL, Lenis (native scroll), video autoplay, image sequences |
| `static` | AVIF posters, CSS-only fades (`@media` gated `animation: fade-in .4s` on section entry via `animation-timeline: view()` where supported, else none), native scroll, `<details>` accordions | All JS motion, all canvas, all video |

Poster image is ALWAYS the LCP on every tier; `<noscript><img></noscript>` behind every canvas; hero canvas mounts only on `full` after `requestIdleCallback` + WebGL warm-up (compile shaders before reveal).

### 3.3 `gsap.matchMedia()` strategy

One global `gsap.matchMedia()` instance with named conditions:

```js
mm.add({
  isDesktop: "(min-width: 1024px)",
  isMobile:  "(max-width: 1023px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
  noHover:   "(hover: none)"
}, (ctx) => { /* every ScrollTrigger/timeline built here */ });
```

- Desktop context: pins, horizontal scrubs, magnetic buttons, custom cursor.
- Mobile context: same narratives re-authored — shorter pin distances (≤150vh), horizontal pins become scroll-snap swipe carousels, parallax collapses to single-layer ≤6% translate, hover logic skipped.
- `reduceMotion` context: kills all tweens (falls through to static-tier CSS), but *state-communicating* motion (accordion open, selector swap) becomes instant/opacity-only rather than removed.
- Everything registered inside `mm.add` for automatic cleanup on breakpoint flips; ScrollTriggers use `invalidateOnRefresh: true`.

### 3.4 Reduced-motion policy

`prefers-reduced-motion: reduce` ⇒ tier `static` (per detection above): no autoplay video, no parallax, no pinned scrub, no counters (final values render immediately), no marquee drift (items wrap into a static grid/row), View Transitions become instant cross-fade ≤150ms or none. Ambient brand life is allowed only as non-moving glow/gradient. This is WCAG 2.1 baseline and overrides everything, including client requests for "always-on" animation.

### 3.5 View Transitions spec

- Cross-document View Transitions via CSS `@view-transition { navigation: auto; }` (Astro static output; no SPA router). Browsers without support fall back to instant navigation — harmless.
- Default transition: old page fades out 150ms; new page `opacity 0→1` + `translateY(12px)→0` 300ms `--ease-out` on `main`. Header and mobile sticky bar get `view-transition-name: header` / `cta-bar` so they persist un-animated across navigations.
- Named element continuity: product card media → product page hero image share `view-transition-name: sku-{id}` (e.g. `sku-def-20l`) for a seamless pack "carry" from Home `#products` / Products `#selector` into per-SKU anchors.
- Reduced motion/static tier: transitions disabled via media query inside the `::view-transition-*` rules.

---
## 4. Per-page × per-section specifications

Format per section: **Layout** (desktop → mobile) / **Background** / **Assets** — each with (a) depicts, (b) exact source, (c) format & optimization, (d) fallback / **Motion** — entrance, scroll, interaction, lite tier, static tier, mobile adaptation. Signature pieces are storyboarded with scroll-progress ranges.

### 4.1 Home `/`

#### `#hero` — SIGNATURE: cinematic 3D hero ★

**Layout.** Desktop: full-viewport (100svh) dark stage; left 5 columns — overline chip "DEF · AUS 32 · Made in India", display-1 headline, one-line sub, dual CTA (Primary "Call Now" `tel:` + Secondary "Explore Products") — all copy verbatim per content.md §3.1 `#hero` — certification chips (`ISO 22241-1` / `IS 17042 (Part 1)` / `BIS*` — the `BIS*` chip ALWAYS ships, with the interim asterisk footnote per §2.7's single site-wide rule — the shipped state per DECISIONS.md #1; the CM/L number, once granted, only switches the footnote wording, never the chip). Right 6–7 columns: the 3D pack stage. Scroll cue: droplet motif + "scroll" overline bottom-center. Mobile: stacked — chips row, headline, sub, CTAs (full-width, stacked), pack visual below text at ~55vw height; total ≤ 130svh before `#intro`.

**Background.** `--ink-950` base; radial `--navy-800` vignette behind the pack; faint urea-hexagon motif at 6% top-right; `--grad-liquid` seam at the very bottom fading into `#intro`.

**Assets.**
1. *Hero 3D scene* — (a) APEX 20L bucket (`def-20l`, the confirmed SKU) with real label art, floating over a liquid-particle field of `--def-400` droplets; (b) **procedural, code-built in Three.js at launch (§6 launch art direction / DECISIONS.md #17)**: lathe/cylinder geometry for the bucket body, lid and torus bail handle, PBR HDPE-look material, in-house label art applied as an SVG-derived texture, `--def-400` liquid particle field — no GLB/Draco pipeline at launch (the Blender-modeled GLB per §6.1 is the post-launch upgrade); (c) geometry is code, not download — the deferred Three.js chunk stays far under the ≤ 1.2 MB scene cap reserved for the GLB upgrade; lazy `import()` on `full` tier post-idle; (d) fallback = poster below.
2. *Hero poster (the LCP on all tiers)* — (a) identical framing: still of the same 20L pack + particle field; (b) at launch: build-time raster export of the crafted SVG pack illustration composited over the particle-field/gradient backdrop, framed to match the procedural scene; post-launch: Blender Cycles still render of the §6.1 scene; (c) AVIF 1600w/1200w/800w + WebP fallback via `<picture>`, `fetchpriority="high"`, explicit dimensions, target ≤ 90 KB AVIF @1600w; (d) WebP → JPEG ladder.
3. *Certification chip icons* — (b) Phosphor Duotone `seal-check`, custom hexagon badge; (c) inline SVG; (d) n/a.

**Motion storyboard.**
- *Load choreography (all tiers get a version):* 0ms poster visible (LCP) → 200ms chips fade-rise stagger → 350ms h1 SplitText blur-reveal (lines, 0.09s stagger, `--t-cine`) → 700ms sub + CTAs rise → 900ms scroll cue fades in, droplet fill loops. On `full`: canvas mounts invisibly post-idle, shaders pre-compiled, then cross-fades over the poster in 400ms with a one-time particle "bloom" (droplets scatter outward 20px and settle).
- *Scroll scrub (full tier, desktop):* hero pinned 180vh, one `scrollProgress` 0→1 drives:
  - **0.00–0.25** — pack rotates −18°→+12° on Y; particle field drifts upward slowly; headline holds.
  - **0.25–0.55** — camera dollies in 12%; pack tilts 6° toward viewer; headline lines translate up and fade (staggered exit); particles begin flowing toward the pack (converge).
  - **0.55–0.85** — "liquid sweep" gradient band rises from bottom; pack settles to final ¾ pose; chips exit; sub-copy for `#intro` pre-enters below the fold line.
  - **0.85–1.00** — canvas cross-fades to 0 as `#intro` background takes over; Three.js renderer pauses (on-demand rendering stops when ScrollTrigger leaves).
- *Idle interaction (desktop, full):* pointer-move parallax ±4° on pack, ±8px on particle layer (lerped, `gsap.quickTo`); no interaction on touch (gyroscope NOT used).
- *Lite tier:* poster only; same load choreography for text; on scroll the poster gets a single-layer translateY parallax (−6%) and a subtle scale 1.0→1.04 scrub; no pin — hero scrolls away naturally.
- *Static tier:* poster + CSS fade-in text; no pin, no parallax, no scroll cue animation.
- *Mobile (full tier) — one unambiguous rule:* the hero canvas NEVER mounts on mobile, on any tier (WebGL on a mid-range Android violates the LCP budget), and no Lottie/Rive alternative is produced for the mobile hero. But the hero still visibly animates on phones — the client requirement is that animation scales to mobile, not PC-only: (1) the full load choreography above runs (chips stagger, h1 SplitText blur-reveal, CTAs rise); (2) the poster gets the lite-tier scroll treatment — single-layer translateY parallax (−6%) + scale 1.0→1.04 scrub, no pin; (3) particle CSS shimmer over the poster (2 layered radial gradients, 6s opacity pulse); (4) one designed post-idle motion beat: a `--def-400` liquid-sheen sweep across the pack poster (CSS mask animation, 1200ms, fires once ~2s after LCP, ≤1 KB CSS) while the scroll-cue droplet runs its fill loop (§2.6.1). Zero additional assets or runtimes.
- *Mobile (lite tier):* same as mobile full minus the sheen beat. *Mobile (static tier):* static poster + CSS fade-in text only; shimmer and sheen removed.

#### `#intro` — "What is APEX D.E.F" brand strip

**Layout.** Desktop: centered `--container-text`; overline "What is APEX D.E.F", display-2 "Agriculture first. Every SCR engine after." with 1–2 words gradient-clipped (`--grad-liquid`), 2-column supporting paragraph mentioning parent brand Apex Environment Solutions with leaf motif chip; link-button "Know the company →" → `/about`. All copy verbatim per content.md §3.1 `#intro`. Mobile: single column, same order.

**Background.** Light (`--porcelain-50`); the hero's gradient seam bleeds in at top.

**Assets.** Leaf motif inline SVG (§2.6.4) beside the parent-brand mention; no photography (typographic palate-cleanser). Fallback n/a.

**Motion.** Entrance: h2 SplitText blur-reveal on 30% viewport entry (IntersectionObserver); paragraphs fade-rise stagger. Scroll: none (no pin). Interaction: gradient-clipped words get a slow background-position drift (8s loop, full/lite only). Lite: identical (this is a lite-native section). Static: CSS fade only. Mobile: same, stagger tightened.

#### `#stats` — counter band

**Layout.** Desktop: dark band, 4 stat cells in a hairline-divided row, mirroring content.md §3.1 `#stats` verbatim (the authoritative set per DECISIONS.md #5 — all true by construction; same values, same units): **18** "parameters in our published ISO 22241-1 spec" · **6** "pack sizes, 5 L to tanker" · **48 h** "doorstep delivery — most orders same-day or next-day" · **100%** "of batches refractometer + density-checked before dispatch" (per-batch test scope per DECISIONS.md #6). Only the numeral animates; units and labels render statically. Each: Inter 700 tabular `--fs-stat` numeral + overline label. Mobile: 2×2 grid, hairline cross.

**Background.** `--ink-950`; flowing-liquid line motif runs horizontally behind cells at 8% opacity.

**Assets.** None beyond motifs (inline SVG). Fallback n/a.

**Motion.** Entrance: cells fade-rise stagger 0.08s. Counters count up 1.2s expo-out on first entry (IntersectionObserver, fire-once) — every cell counts a numeral (18 · 6 · 48 · 100), with the "h" and "%" units rendered statically beside their numerals; liquid line dash-offset scrubs slowly with scroll. Interaction: none. Lite: identical. Static: final values rendered in HTML (counters are progressive enhancement — real numbers always in markup for SEO/noscript). Mobile: same; counters trigger per-cell.

#### `#products` — product range rail (6 SKUs)

**Layout.** Desktop: light section; header row — h2 "One fluid. Six packs. Every duty cycle." + rail CTA "See all packs & full spec →" (`/products`); card titles, one-liners and the "Call for Price" CTA verbatim per content.md §3.1 `#products`. Below, a horizontally scrubbed rail of 6 product cards (`def-5l`→`def-bulk`) inside a pinned container — cards ~320px wide, 4:5 media. Mobile: native scroll-snap swipe carousel with progress dots + edge-fade masks; no pin.

**Background.** `--porcelain-50`; hairline top rule.

**Assets.** Per-card pack visual — (a) each SKU pack on seamless light-grey, consistent framing; (b) **crafted SVG pack illustrations at launch (§6 launch art direction / DECISIONS.md #17)** — one shared geometry system, brand gradients, real label art as SVG; `def-bulk` card uses the authored tanker-silhouette treatment in the same 1.5px-stroke + gradient style; post-launch upgrade: Blender Cycles renders per §6.1 (licence-verified tanker photo per §6.3 optional); (c) inline SVG or AVIF 640w exports ≤ 35 KB each + WebP fallback, `loading="lazy"` except first two cards; (d) vector art is the shipped default — SVG is its own fallback.

**Motion.** Entrance: header SplitText; cards slide in from right with 0.07s stagger. Scroll (desktop full/lite): pinned horizontal scrub, rail translates `x` mapped to progress with 0.5vw over-drag ease; card media get −3% counter-parallax for depth. Interaction: card hover per §2.7; click → View Transition carry (`sku-*` names) to `/products#def-*`. Lite: pin retained (transform-only, cheap) but parallax off. Static: no pin — cards render as a 2-col (mobile) / 3-col (desktop) grid instead of a rail (CSS `data-tier` swap). Mobile: swipe carousel, `scroll-snap-align: center`, dots = 24px targets, arrows hidden.

#### `#applications` — 4-segment teaser

**Layout.** Desktop: dark section; asymmetric 2×2 grid of application cards — row 1: Agriculture (7 columns — largest visual weight per the brief's agriculture-first positioning) + Transport (5); row 2 mirrors: Construction & Mining (5) + Gensets (7). Each card: full-bleed scene art (authored vector/gradient illustration at launch — §6; photography is the post-launch path), scrim, overline (segment), h3, one-line norms hook + "Since …" date chip — titles, one-liners and chips verbatim per content.md §3.1 `#applications` (section h2 "Wherever diesel works, DEF works."). Mobile: vertical stack, Agriculture first, 16:10 cards.

**Background.** `--ink-950`.

**Assets.**
1. *Agriculture* — (a) tractor working a golden-hour field, India; (b) **launch: authored vector/gradient scene illustration** — tractor silhouette scene in the brand palette, consistent 1.5px-stroke + gradient style (§6 launch art direction / DECISIONS.md #18); licence-verified stock may substitute only if fetchable + logged (§6.3: Pexels `tractor field india` / `indian farmer tractor`, no-face, no-brand frame); (c) inline SVG ≤ 30 KB gz (stock, if used: AVIF 1200w ≤ 110 KB, lazy); (d) the vector scene is the design, not a stopgap.
2. *Transport* — same rule: authored truck-convoy silhouette scene at dusk gradient (stock option §6.3: Pexels `truck in india` / Unsplash `indian truck highway`, rear/side frames, de-badge if needed).
3. *Construction & Mining* — same rule: authored excavator/loader silhouette scene (stock option §6.3: Pexels `excavator construction site`).
4. *Gensets* — same rule: authored genset plant-room silhouette scene (stock option §6.3: Pexels `diesel generator industrial`; the FLUX genset prompt lives in §6.2's post-launch path).

**Motion.** Entrance: cards clip-path reveal (inset 12%→0) stagger 0.08s + scene art scales 1.08→1. Scroll: scene art gets slow single-layer parallax (−8% desktop full, −4% lite, off static). Interaction: hover per application card spec; whole card links to `/applications#segment`. Lite: entrance kept, parallax reduced. Static: photos render plainly, CSS fade. Mobile: stacked cards, entrance per-card on entry; parallax off (touch).

#### `#how-it-works` — SCR teaser

**Layout.** Desktop: dark, split — left: overline "The Science", h2 "NOx goes in. Nitrogen and water come out.", body paragraph, link-button **Learn How SCR Works** → `/what-is-def#scr` — all copy verbatim per content.md §3.1 `#how-it-works`. No numbered micro-step list (content.md defines none — the three phases live inside the animation itself). Right: the NOx→N₂ particle-transform motif as an auto-playing loop in a hairline-framed panel, with the caption beneath it ("Red NOx particles meet DEF droplets and leave the tailpipe as N₂ + H₂O." — per content.md). Mobile: motif panel above text.

**Background.** `--ink-950` continuing from `#applications` — the shared boundary ALWAYS carries the 1px `--hairline-dark` seam required by §2.1's alternation rule for deliberate dark-chapter continuations; hexagon motif 6% behind the panel.

**Assets.** *Particle transform loop* — (a) red NOx particles → droplet interception → white/leaf N₂+H₂O exit (§2.6.5); (b) Rive file authored in-house (preferred; ~60fps, tiny) or GSAP-animated inline SVG; (c) `.riv` ≤ 60 KB, mounts on visibility; (d) static SVG diagram of the same 3 states (also the noscript image).

**Motion.** Entrance: panel border draws (SVG stroke 600ms), text block fade-rises. Scroll: none (teaser is not pinned — the full scrollytelling lives on `/what-is-def`). Interaction: the Rive state machine auto-cycles the loop's three phases; hovering (desktop) or tapping (touch) the panel replays the transform once. Lite: Rive still allowed (cheap, no WebGL) — else GSAP SVG version. Static: static SVG diagram, no loop. Mobile: loop autoplays on entry; tap replays.

#### `#why-apex` — USP grid

**Layout.** Desktop: light section; h2 "Every batch lab-tested. Every litre traceable." + 4 USP cards in a row — Fresh-batch manufacturing / Lab-tested, every batch / 48-hour delivery, emergency dispatch / Dealer & fleet support — titles and card copy verbatim per content.md §3.1 `#why-apex` (4 cards exactly, per its alignment note: emergency/scheduled supply is merged into card 3; the packaging USP lives at Products `#packaging-quality`; delivery claims per DECISIONS.md #4 — "48 h doorstep" kept, "24/7, 365" downgraded to "emergency dispatch for regular customers — call us"). Mobile: 2×2 at ≥480px, else stacked.

**Background.** `--porcelain-50`.

**Assets.** Phosphor Duotone icons (blue+green rule §2.5): `factory`, `flask`, `truck`, `handshake`; custom droplet-check for the lab card if `flask` reads generic. Inline SVG; no fallback needed.

**Motion.** Entrance: cards fade-rise stagger; icons draw their duotone back-layer (opacity 0→.12, 400ms). Scroll: none. Interaction: hover lifts card `--e-2`, icon front stroke shifts `--blue-600`→`--def-400`… on light def-400 is graphics-only (allowed — icon, not text). Lite: identical. Static: CSS fade. Mobile: stagger on entry, no hover (pressed state only).

#### `#quality` — quality & compliance band

**Layout.** Desktop: dark band, split — left: h2 "We publish our spec. Ask others for theirs." + body with COA mention (copy verbatim per content.md §3.1 `#quality`), badges row `ISO 22241-1` · `IS 17042 (Part 1)` · `BIS*` (interim footnote per §2.7), link-button "See the full spec table →" → `/products#spec-table`. Right: spec-table "peek" — a hairline-framed card showing exactly content.md's 4 visible rows (urea 31.8–33.2% · density @20 °C 1.0870–1.0930 g/cm³ · refractive index @20 °C 1.3814–1.3843 · biuret ≤0.3%) with a fade-out mask at the bottom concealing the 5th, revealed row: Copper ≤0.2 mg/kg + caption "the catalyst poison we hold to a fifth of a ppm" (per content.md). Mobile: stacked, peek card second.

**Background.** `--ink-950`; urea hexagon motif 8% right half.

**Assets.** *Background:* motif-only at launch (urea hexagons per Background above) — the optional lab-detail photo strip is a **post-launch upgrade** (DECISIONS.md #18; plant/lab shoot per roadmap 7.1): real Bulandshahr lab photo, or interim FLUX render per §6.2 — prompt (retained for that path): `laboratory technician's gloved hand holding a digital refractometer over a small sample of clear liquid, white laboratory bench, soft daylight, shallow depth of field, 85mm, photorealistic, no visible face`; if added: AVIF 1200w ≤ 70 KB, lazy, behind left column at 10% opacity.

**Motion.** Entrance: h2 SplitText; peek-card rows cascade in 0.06s stagger with their values counting to spec numbers (tabular). Scroll: none. Interaction — desktop: hovering the peek card raises the fade mask 20% (reveals the Copper row); click navigates to `/products#spec-table`. Touch: tapping the card body ONLY toggles the mask reveal — it never navigates; navigation on touch happens exclusively via the always-visible "See the full spec table →" link-button. Lite: identical minus value count-up. Static: all 5 rows rendered, CSS fade. Mobile: same stacked.

#### `#marquee` — scroll-velocity certification strip

**Layout.** Thin full-bleed band (~96px desktop / 72px mobile) between `#quality` and `#faq`, doubling as the dark chapter's closing seam before the light `#faq` (placement per content.md §3.1 `#marquee`, which recommends exactly this slot). One row of certification/standards chips drifting horizontally; the track is duplicated once for a seamless loop. Chip content verbatim per content.md §3.1 `#marquee`: `ISO 22241-1` · `IS 17042 (Part 1)` · `AUS 32` · `32.5% urea · 67.5% demin water` · `Lab-tested every batch` · `COA with every supply` · `Batch + expiry printed on every pack` · `Made in Bulandshahr, UP`. Rules (per content.md + roadmap dependency 4's fallback): certification/standards chips only — no client names/logos until testimonials are confirmed; no "BIS certified" wording in any chip (the `BIS*` chip lives in `#hero`/`#quality` only, with its footnote).

**Background.** `--ink-950`, bounded top and bottom by 1px `--hairline-dark` rules.

**Assets.** None — text chips per §2.7 dark chip spec (`--def-tint` bg + `--def-400` text), chip labels Clash 500 uppercase at `--fs-h4`, separated by droplet-motif dividers (inline SVG §2.6.1).

**Motion.** Full tier: base drift ~40px/s leftward; Lenis scroll velocity multiplies drift speed (clamped ×4) and applies `skewX` ±3° (`gsap.quickTo`, decaying to base over 600ms after scroll stops); pauses when off-screen (IntersectionObserver) and on hover (desktop). Lite tier: constant-speed pure-CSS keyframe loop — no velocity reactivity, no JS. Static/reduced-motion tier: NO movement of any kind — the chips wrap into a static multi-line row per §3.4 (a CSS loop on the static tier would violate the WCAG reduced-motion commitment). Matches roadmap task 3.5 verbatim.

#### `#faq` — top FAQs

**Layout.** `--container-narrow`, light section; h2 "Straight answers." left-aligned, 5 accordion rows (Qs/As verbatim per content.md §3.1 `#faq`, accordion per §2.7), link-button "All 14 FAQs →" to `/what-is-def#faqs`. Mobile: identical.

**Background.** `--porcelain-50`.

**Assets.** None (typographic). 

**Motion.** Entrance: rows fade-rise stagger. Interaction: accordion spec §2.7. Lite/static: `<details>`-based, fully functional. Mobile: single-open behavior.

#### `#dealer-cta` — distributor banner

**Layout.** Desktop: full-bleed dark banner inside rounded `--r-xl` frame with `--grad-liquid` border glow; h2 "DEF demand is compounding. Be the supplier your district calls.", one-line support pitch, Primary CTA **Apply for Dealership** → `/dealers` — copy verbatim per content.md §3.1 `#dealer-cta`. (Recorded joint decision: the brief's section description says "Become a distributor" banner; the drafted microcopy set standardises the dealer CTA label as **Apply for Dealership**, used identically everywhere — one conversion label site-wide.) Mobile: same, stacked center-aligned.

**Background.** `--navy-800` panel on `--ink-950` section; flowing-liquid line crosses behind text at 10%.

**Assets.** Optional right-edge visual — (a) stacked blue drums in warehouse; (b) **launch: authored vector drum-stack illustration** (brand palette, 1.5px-stroke + gradient style) or motif-only; licence-verified stock optional (§6.3: Pexels `blue barrels stacked warehouse`); FLUX warehouse render = §6.2 post-launch path; (c) inline SVG (stock, if used: AVIF 800w ≤ 50 KB lazy); (d) omit image, keep motif.

**Motion.** Entrance: frame border-glow sweeps once (gradient rotation 900ms), text rises. Scroll: none. Interaction: primary button magnetic (desktop). Lite: glow static, entrance kept. Static: plain panel, CSS fade. Mobile: same stacked.

#### `#contact-strip` — pre-footer contact strip

**Layout.** Desktop: light strip — h2 "Talk to a person, not a portal." over 3 columns: phones (tap-to-call, tabular Inter, click-to-copy icon), address + **Get Directions** map link (Bulandshahr, GST line small), enquiry mini-CTA (Primary **Send Enquiry** → `/contact#form`, WhatsApp secondary) — copy verbatim per content.md §3.1 `#contact-strip` + §2.5 microcopy set. Mobile: stacked; phones first.

**Background.** `--porcelain-50`, hairline top rule.

**Assets.** Lucide icons `phone`, `map-pin`, `chat` (mono-stroke WhatsApp glyph). Inline SVG.

**Motion.** Entrance: columns fade-rise stagger. Interaction: click-to-copy shows 1.5s "Copied" chip. Lite/static: identical/CSS fade. Mobile: phone rows are ≥56px `tel:` targets.

### 4.2 About `/about`

#### `#story`

**Layout.** Desktop: dark page-hero (60svh): overline "Our Story", display-2 "From Bulandshahr's fields to every SCR engine.", founding narrative in 2 columns beneath — Apex Environment Solutions parentage with leaf chip, founder Naveen Singh named, pull-quote "The number on the label is the number in the can." — all copy verbatim per content.md §3.2 `#story`; a vertical flowing-liquid line runs down the left margin connecting story beats. Mobile: single column, line hidden.

**Background.** `--ink-950` → fades to light within the section's end.

**Assets.** *Parent-brand mark* — (a) Apex Environment Solutions green leaf logo; (b) redrawn in-house to the 1.5px motif grid from brochure reference (DECISIONS.md #17); a client-supplied vector swaps in whenever it arrives; (c) inline SVG mono-tinted `--leaf-500`; (d) redrawn leaf motif. Optional backdrop (licence-verified stock only, per DECISIONS.md #18 — the design does not depend on it): Unsplash `wheat field harvest india` at 8% opacity behind heading; AVIF ≤ 60 KB; fallback none.

**Motion.** Entrance: display SplitText; story paragraphs fade-rise as they enter; liquid line dash-offset scrubs with scroll (desktop full/lite). Static: line renders complete. Mobile: no line.

#### `#mission`

**Layout.** Light section; h2 "Why we exist." — Mission and Vision statement cards side by side, then a row of 3 value cards (Purity is non-negotiable / Farmer-first, always / Say only what we can supply) — copy verbatim per content.md §3.2 `#mission`. Mobile: stacked.

**Background.** `--porcelain-50`.

**Assets.** Phosphor Duotone `target`, `eye`, `leaf` (values card uses leaf per eco-meaning rule). Inline SVG.

**Motion.** Cards fade-rise stagger; duotone back-layers bloom. Lite same; static CSS fade; mobile stacked stagger.

#### `#plant` — Bulandshahr facility & process walk

**Layout.** Desktop: dark; intro row (h2 "A DEF plant is a water plant first." + address line Plot No. 415, Industrial Area, Bulandshahr — copy per content.md §3.2 `#plant`), then a **5-step** horizontal process walk using content.md's exact authoritative step labels — 1. Demineralise water → 2. Dissolve automotive-grade urea → 3. Filter & circulate → 4. Lab clearance → 5. Fill, seal, batch-code — as a pinned horizontal scrub of full-height panels, each panel: photo + step overline + 2-line copy. Mobile: vertical steps with a connecting liquid line, native scroll.

**Background.** `--ink-950`.

**Assets.** Per-step imagery (5 scenes, one per panel) — (a) plant interior stages; (b) **launch: authored vector/gradient process-scene illustrations** (§6 launch art direction — DM skid / mixing tanks / filtration / lab clearance / filling line as silhouette scenes, 1.5px-stroke + gradient style, brand palette); **post-launch upgrade path:** real plant photos via the roadmap 7.1 Bulandshahr shoot (DECISIONS.md #18), or interim FLUX renders — prompts (referenced by §6.2's scene set): step 1 `reverse osmosis water treatment skid, clean industrial room, stainless steel pipes, blue accent lighting, photorealistic, 24mm`; step 2 `stainless steel mixing tanks in a clean urea solution production plant, modern industrial interior, photorealistic`; step 3 `industrial filtration unit with cartridge housings, clean plant floor, cool light, photorealistic`; step 4 (Lab clearance) `laboratory bench beside a production line, digital refractometer and density meter over clear liquid samples, gloved hands, no visible face, cool clean light, photorealistic, 50mm`; step 5 `automatic liquid filling line for blue plastic pails, blank labels, bright factory, photorealistic` (blank labels → composite APEX art §6.2); (c) inline SVG ≤ 30 KB gz each (photo/render upgrade: AVIF 1400w ≤ 120 KB each, lazy with 600px rootMargin); (d) vector scenes are the shipped default (licence-verified stock per §6.3 optional: Pexels `factory interior stainless steel` / `bottling plant` / `quality control lab`).

**Motion.** Desktop full: pin 375vh (≈75vh per panel × 5), panels translate horizontally, step overlines counter-slide; a progress liquid-line fills along the top (0→1). Lite: pin kept, parallax off, images posterized. Static: vertical stacked steps, no pin. Mobile: vertical timeline with per-step entry reveals — the horizontal pin NEVER ships on touch (native swipe conflicts).

#### `#quality-lab`

**Layout.** Desktop: light; split — left: lab copy per content.md §3.2 `#quality-lab` (h2 "No batch ships until the lab says so.", body, callout chip "Refractometer + density check on 100% of batches"), with the body's key claims rendered as a droplet-check checklist; right: tall image card. Mobile: image after copy.

**Background.** `--porcelain-50`; hexagon motif 5% behind image card.

**Assets.** *Lab visual* — (a) refractometer/density QC in action; (b) **launch: authored vector lab-scene illustration** (refractometer + sample motif, same 1.5px-stroke + gradient style); **post-launch:** real lab photo via the roadmap 7.1 shoot (DECISIONS.md #18), or FLUX §4.1-quality prompt reuse (§6.2), or licence-verified stock (§6.3: Pexels `quality control lab` / `chemist testing sample`, no faces); (c) inline SVG (photo upgrade: AVIF 900w ≤ 80 KB); (d) motif-only panel.

**Motion.** Checklist items check themselves sequentially on entry (droplet fills, 0.1s stagger); image clip-path reveal. Lite identical; static rendered checked; mobile same.

#### `#certifications`

**Layout.** Centered light section: h2 "Certified, not just claimed." + body per content.md §3.2 `#certifications`, row of certification cards — ISO 22241-1 conformity, IS 17042 (Part 1), BIS / ISI Mark (interim: content.md's explicit "application under process" block until the CM/L number is granted — the shipped state per DECISIONS.md #1 and §2.7's single site-wide rule), GSTIN 09BJNPN5877K1Z7 — each a hairline card with badge icon + number line; COA small-print note below. (No VDA footnote here — that line ships unconditionally in the mega-footer §5.2 on every page.)

**Background.** `--porcelain-50`.

**Assets.** Custom hexagon-badge SVG frames + Phosphor `seal-check`. Inline SVG. BIS logo appears only once the licence is granted (BIS mark rules; DECISIONS.md #1 — the interim state ships without it).

**Motion.** Cards fade-rise stagger; badge stroke draws 600ms. Lite/static as usual. Mobile: 2-col grid.

#### `#leadership`

**Layout.** Desktop: **text-only editorial block — no portrait (DECISIONS.md #19: never fake a person)**: h2 "Naveen Singh, Founder.", bio line, and the quote "'A farmer who buys our can once should never need to check it twice.' — Naveen Singh" as a `--fs-h3` (Clash 500) pull-quote with oversized droplet quote-mark — copy verbatim per content.md §3.2 `#leadership`; generous whitespace + a hairline frame carry the visual weight. Mobile: same, stacked.

**Background.** Light, hairline rules.

**Assets.** None (typographic). Swap-later: if the client supplies a real founder portrait post-launch (roadmap 7.1), the block becomes a split layout with a 4:5 portrait card (AVIF 800w ≤ 60 KB).

**Motion.** Quote SplitText reveal. All tiers simple. Mobile stacked.

#### `#cta`

**Layout.** Dark closing band: h2 "See the fluid behind the words." (styled `--fs-h3`) + support line, **Call Now** + **Send Enquiry** buttons row — copy verbatim per content.md §3.2 `#cta`. Mobile: stacked full-width buttons.

**Background.** `--navy-800` panel, liquid-line motif.

**Assets.** None. **Motion.** Fade-rise; magnetic buttons desktop. Static: plain. 

### 4.3 Products `/products`

#### `#overview`

**Layout.** Desktop: dark page-hero (50svh): overline "Products", H1 "One fluid. Six packs." + body per content.md §3.3 `#overview`, chips "Same spec in every pack" · "Batch + expiry printed" · "COA on request" (verbatim per content.md). Mobile: same stacked.

**Background.** `--ink-950`, hexagon motif 6%.

**Assets.** *Family lineup visual* — (a) all 5 packs + tanker silhouette in a row, scale-true; (b) **launch: authored SVG family-lineup illustration** (shared geometry system, real label art as SVG — §6 launch art direction); post-launch: Blender single-scene render (§6.1); (c) inline SVG or AVIF 1600w export ≤ 110 KB, `fetchpriority="high"` (page LCP); (d) vector art is self-fallback.

**Motion.** Load: SplitText + lineup packs rise individually 0.08s stagger (masked image slices or 6 separate cutout images). Scroll: subtle −4% parallax on lineup. Lite/static: single image, fade. Mobile: lineup scrolls horizontally (overflow scroll, snap).

#### `#selector` — SIGNATURE: interactive pack selector ★

**Layout.** Desktop: full-viewport light stage; h2 "Pick your pack." + selector labels/helper line per content.md §3.3 `#selector`; left rail: 6 SKU tabs (`def-5l`, `def-10l`, `def-20l`, `def-210l`, `def-1000l`, `def-bulk`) as pill list with pack thumbnails; center: large pack visual on seamless porcelain with soft contact shadow; right panel: Capacity / Best for / Fitment & handling rows, CTA row (**Call for Price** `tel:` / WhatsApp / Enquire). Mobile: horizontal SKU chip scroller on top, visual center (~60vw), info card below with the CTA row rendered **inline inside the info card — never sticky**. The global §5.4 bar is the sole sticky CTA on mobile (two stacked sticky bars would eat ~128px of a small screen); while `#selector` is in view, the global bar's [WhatsApp] segment deep-links with the product-page prefilled message for the active SKU (content.md §2.4).

**Background.** `--porcelain-50`; radial white spotlight behind pack.

**Assets.**
1. *Per-SKU pack visuals (all tiers — the launch set, §6 launch art direction / DECISIONS.md #17):* crafted SVG pack illustrations — one shared geometry system, brand gradients, real label art as SVG — same framing across SKUs; shipped inline or as AVIF 1000w exports ≤ 60 KB each + WebP. The liquid-fill storyboard below runs on these via its clip-path branch (no spinner ever).
2. *Per-SKU 3D models — post-launch upgrade (§6.1):* 5 Blender GLBs lazy-loaded per selection, ≤ 450 KB each (IBC ≤ 900 KB), Draco+KTX2; only the active + next-likely model kept in memory (LRU of 2). At launch the full tier uses the illustration path; the storyboard's GLB branches activate only when the GLB set lands.
3. *`def-bulk`*: no model ever — (a) tanker/loose-supply treatment: authored tanker-silhouette line-drawing (custom icon set) over a soft gradient panel; (b) licence-verified stock photo optional (§6.3: Pexels `fuel tanker truck`, unbranded frame); (c) inline SVG (photo, if used: AVIF 1000w ≤ 70 KB); (d) icon-only panel.

**Interaction storyboard (SKU switch = the "liquid-fill transition", 600ms total):**
1. **0–120ms** — outgoing pack: liquid inside drains downward (GLB: shader fill-level uniform 1→0; render fallback: a `--def-400` clip-path rectangle over the pack image collapses to bottom); info panel text exits (y −12, fade).
2. **120–300ms** — pack cross-morphs: outgoing scales to 0.94 + fades; incoming enters at 1.06 scaling to 1 (`--ease-inout`); contact shadow width tweens to the new pack's footprint; selected tab pill fills `--blue-600`, thumbnail ring glows.
3. **300–520ms** — incoming pack's liquid fills bottom-to-top with a 6px meniscus wave (shader sine on fill plane; fallback: clip-path with SVG wave edge translating upward).
4. **520–600ms** — info panel values swap in with per-line stagger; capacity numeral counts from old→new value (tabular); CTA row persists (never re-animates — always tappable).
- Desktop full: drag-rotate ±30° Y (pointer, spring return) and 4°/s idle rotation are **GLB-upgrade behaviors (post-launch)**; at launch the illustration gets the cross-morph + clip-path liquid treatment only.
- Deep links: `/products#def-210l` pre-selects that SKU on load (hash routing); View Transition names carry from Home cards.
- Lite tier: renders (no GLB); the same storyboard runs with clip-path liquid + image cross-fade — visually ~90% identical. Static tier: selector becomes a simple tab switcher with instant image + text swap (no animation), fully functional; also rendered as 6 static blocks for noscript/SEO (below).
- Mobile: chips scroll-snap; swipe left/right on the visual also switches SKU; drag-rotate disabled; transition shortened to 400ms.

#### Per-SKU anchors `#def-5l` `#def-10l` `#def-20l` `#def-210l` `#def-1000l` `#def-bulk`

**Layout (shared template, alternating left/right).** Each anchor: compact split block — pack illustration (or tanker treatment for bulk), SKU name h3, capacity + fitment + target-buyer rows (from brief's lineup table), handling notes (e.g. drum: dedicated pump, HDPE/SS304 compatible), CTA row. All six SKUs ship per DECISIONS.md #3 — each card/anchor is one config entry, trivially removable if the client trims the range. These double as the static/noscript representation of the selector and as SEO-indexable content. Mobile: stacked cards.

**Background.** Alternating white/porcelain cards, hairline rules.

**Assets.** Reuse §selector renders (same files, browser-cached). No new assets.

**Motion.** Simple: fade-rise on entry, media clip reveal; no pins. All tiers near-identical. Mobile: same.

#### `#spec-table`

**Layout.** `--container-text` dark section: h2 "The specification. In full." — intro line and the full 18-row parameter table (with units, limits and test-method column) verbatim per content.md §3.3 `#spec-table`, rendered per §2.7 table spec; secondary button **Download Datasheet (PDF)** (generated from this spec table as a print-styled page → PDF at build; DECISIONS.md #24). Mobile: table wraps in `overflow-x:auto` scroller (4 columns) with fade-edge masks.

**Background.** `--ink-950`, hexagon motif 8% behind table edges.

**Motion.** Rows cascade 0.05s stagger on entry; values do NOT count (spec precision — no playful numbers here); PDF button standard. Static: plain table. 

#### `#packaging-quality`

**Layout.** Light; h2 "The pack protects the spec." + 3 feature cards: HDPE packs (compatible-materials note — plain "HDPE" wording per DECISIONS.md #15: no "virgin"/"food-grade" resin claim, no spout or UN-grade claims; the pack illustrations follow the same rule), tamper-evident caps/seals, batch + expiry printing (traceability) — body and feature chips verbatim per content.md §3.3 `#packaging-quality`. Photo strip beneath: macro shots of cap seal / batch code.

**Assets.** *Macro details* — (a) tamper ring + inkjet batch code on blue HDPE; (b) **launch: authored vector macro illustrations** (cap-seal + batch-code detail vignettes, same 1.5px-stroke + gradient style); post-launch: Blender close-up renders of the §6.1 models (batch-code decal texture) — more controllable than stock; (c) inline SVG (raster upgrade: AVIF 800w ≤ 50 KB each); (d) FLUX macro prompt (§6.2 post-launch path): `macro photo of tamper-evident cap seal on blue HDPE canister, inkjet-printed batch code and expiry date, softbox light, photorealistic` + label composite.

**Motion.** Cards stagger; macros clip-reveal. All tiers simple. Mobile stacked.

#### `#how-to-buy`

**Layout.** Light→dark gradient band; h2 "Buying takes three steps. None of them is a website." + 3-step row: ① Call or WhatsApp → ② Confirm quantity & location → ③ Doorstep delivery — step titles, step copy and under-steps line verbatim per content.md §3.3 `#how-to-buy` — numbered circles connected by flowing-liquid line, each step icon + 1 line; CTA row beneath. Mobile: vertical steps, line vertical.

**Assets.** Phosphor Duotone `phone-call`, `clipboard-text`, `truck`. Inline SVG.

**Motion.** Line draws across (scrubbed 0→1 over section entry), steps pop sequentially. Lite: same. Static: line pre-drawn. Mobile: vertical draw.

#### `#faq-products`

Same spec as Home `#faq` (narrow container, accordion §2.7), product-specific Qs. Light bg. All tiers identical behavior.

### 4.4 Applications `/applications`

Page pattern: 4 full-bleed segment chapters, each ~90svh, alternating scrim-scene (dark) and light info sub-band. Each segment: (1) full-bleed scene art (authored vector/gradient illustration at launch — §6 launch art direction; photography is the post-launch path) with `--scrim-dark`, overline chip + display-2 + norms hook; (2) info band: norms context copy, dosing/consumption note, recommended packs row (mini product cards linking to `/products#def-*`), segment CTA (Call + WhatsApp). All copy — page H1/intro, per-segment H2s, overline chips, bodies, dosing lines, image captions, CTAs — verbatim per content.md §3.4, and the recommended-pack lists below mirror content.md §3.4's authoritative per-segment lists exactly. Mobile: photo band 60svh, then stacked info. In-page sticky sub-nav (chips: Agriculture / Transport / Construction / Gensets) under the header, scroll-spy active state — becomes a horizontal chip scroller on mobile.

#### `#agriculture`

**Assets.** *Chapter scene* — (a) tractor + implement in field, golden hour, India; (b) **launch: authored vector/gradient scene illustration** — tractor silhouette scene, golden-hour gradient in the brand palette, 1.5px-stroke + gradient style (§6 / DECISIONS.md #18); licence-verified stock may substitute only if fetchable + logged (§6.3: Pexels `tractor field india`, alt `plowing field punjab`, no faces/brands); (c) inline SVG ≤ 30 KB gz (stock, if used: AVIF 1800w ≤ 160 KB, eager for first chapter — page LCP, explicit dims); (d) the vector scene is the shipped default. *Optional ambient video (full tier desktop only, licence-verified only)* — (b) Pexels Videos `tractor plowing` / Coverr `tractor field aerial`, 8–12 s loop; (c) H.264+WebM ≤ 3 MB, no audio, `muted playsinline loop`, poster = chapter scene; (d) scene art.
**Content specifics.** TREM Stage IV for >50 HP tractors (since Jan 2023; TREM V "being phased in" — no hard dates), harvesters; dosing 5–10% of diesel for high-load agri duty; recommended packs per content.md §3.4: `def-5l` (spare-behind-the-seat) / `def-10l` (per-season starter) / `def-20l` (harvesters, farm workshops). Leaf-chip accent allowed here.
**Motion.** Scene art scale 1.08→1 on entry + headline SplitText; scrim scene has slow −6% parallax (full), −3% (lite), none (static/touch). Pack mini-cards slide-stagger. Video only after idle + in-view on full desktop.

#### `#transport`

**Assets.** (a) BS-VI truck convoy / highway dusk; (b) **launch: authored truck-convoy silhouette scene** — dusk gradient, brand palette, 1.5px-stroke + gradient style (§6 / DECISIONS.md #18); licence-verified stock optional (§6.3: Pexels `truck in india`, Unsplash `indian truck highway` / `truck convoy india`, rear-side angles, logos cropped; video option, licence-verified only: Pexels Videos ID 30104783 ≤ 3 MB loop); (c) inline SVG ≤ 30 KB gz (stock, if used: AVIF 1800w ≤ 160 KB lazy); (d) vector scene default.
**Content specifics.** BS-VI derate warning callout (amber chip — `#F5A524` bg with `--ink-950` text/icon per §2.1's warning rule; callout copy drawn from content.md §3.4 `#transport` body, no invented microcopy), consumption ~5 L per 100 L diesel; recommended packs per content.md §3.4: `def-20l` (in-cab spare) / `def-210l` (fleet yard) / `def-1000l` (depot) / `def-bulk` (pump/terminal storage).
**Motion.** Same chapter pattern; derate callout gets a one-time attention pulse (border glow 2×) on entry — disabled reduced-motion.

#### `#construction`

**Assets.** (a) excavator/wheel-loader on dusty site, CEV IV/V machines context; (b) **launch: authored excavator/loader silhouette scene** — warm dust gradient, brand palette, 1.5px-stroke + gradient style (§6 / DECISIONS.md #18); licence-verified stock optional (§6.3: Pexels `excavator construction site`, `wheel loader quarry`; Pixabay `construction machinery`); (c) inline SVG ≤ 30 KB gz (stock, if used: AVIF 1800w ≤ 160 KB lazy); (d) vector scene default.
**Content specifics.** CEV IV (Oct 2021) context; recommended packs per content.md §3.4: `def-20l` (per-machine) / `def-210l` (site store) / `def-1000l` (large sites); site-storage handling note (away from sunlight — links `/what-is-def#storage-handling`).
**Motion.** Chapter pattern; no extras.

#### `#gensets`

**Assets.** (a) diesel genset plant room / rooftop DG set, clean industrial; (b) **launch: authored genset plant-room silhouette scene** — cool industrial gradient, brand palette, 1.5px-stroke + gradient style (§6 / DECISIONS.md #18); licence-verified stock optional (§6.3: Pexels `diesel generator industrial`); FLUX genset render = §6.2 post-launch path; (c) inline SVG ≤ 30 KB gz (stock, if used: AVIF 1800w ≤ 160 KB lazy); (d) icon-led band (custom genset line icon).
**Content specifics.** CPCB IV+ (since Jul 2023); recommended packs per content.md §3.4: `def-20l` (standby sets) / `def-210l` (prime power) / `def-1000l` (multi-genset facilities) — content.md's genset list deliberately favours smaller packs over bulk (standby sets consume DEF slowly; with a 6–18-month shelf life, bulk stock expires before use — freshness beats bulk convenience); institutional buyer CTA emphasis (enquiry form deep link).
**Motion.** Chapter pattern; closing cross-segment CTA band after this section.

### 4.5 Knowledge `/what-is-def`

#### `#what-is-def`

**Layout.** Desktop: dark page-hero: page H1 "What is DEF? Everything a diesel owner should know." + page intro, then section h2 "DEF, defined." with the definition lead and fact chips ("32.5% urea" · "Freezes at −11 °C" · "Non-toxic, non-flammable" · "Not a fuel additive") — all copy verbatim per content.md §3.5; composition diagram right: a large droplet outline filled 32.5/67.5 as two liquid layers with labeled hairline callouts. Mobile: diagram below lead at full width.

**Background.** `--ink-950`, hexagon motif 6%.

**Assets.** *Composition droplet diagram* — (a) 32.5% urea / 67.5% demin water split inside droplet motif; (b) custom inline SVG (motif §2.6.1 + labels); animated fill via GSAP; (c) inline SVG ≤ 8 KB; (d) same SVG static.

**Motion.** Load: SplitText; droplet fills to 32.5% line with meniscus wobble (900ms), callouts draw. Lite: same (SVG cheap). Static: pre-filled SVG. Mobile: same.

#### `#scr` — SIGNATURE: SCR pipeline scrollytelling ★ (the educational showpiece)

**Layout.** Desktop: pinned full-viewport dark stage, ~400vh scroll length; section h2 "How SCR works. Scroll the pipeline." (per content.md §3.5 `#scr`). Stage = stylized side-view exhaust pipeline (SVG/canvas hybrid): engine block silhouette left → exhaust pipe → DEF injector (dosing module) → SCR catalyst honeycomb → tailpipe right. A caption column (left, 4 cols) swaps narrative beats — all six step captions verbatim per content.md §3.5 `#scr` (Steps 1–6); the pipeline occupies 8 cols. Progress rail bottom: 6 chapter dots (one per content.md step) + flowing-liquid progress line. Mobile: NOT pinned — the same narrative as 6 stacked full-width scenes (one per step caption), each a self-contained animated SVG that plays on entry (IntersectionObserver), swipeable chapter dots become anchor links.

**Background.** `--ink-950`; stage floor reflection gradient; pipeline stroked in hairlines + `--navy-800` fills.

**Assets.**
1. *Pipeline stage* — (a) engine→injector→catalyst→tailpipe schematic; (b) custom inline SVG authored to the motif grid (no stock possible/wanted); (c) SVG ≤ 40 KB gz; (d) same SVG, static labeled poster.
2. *Particle system* — (a) NOx (red `#E5484D`), DEF droplets (`--def-400`), NH₃ (hexagon nodes), N₂ (white), H₂O (pale `--def-400` at 50%); (b) full tier: canvas 2D particle engine (~200 particles desktop / 80 mobile-full, GSAP-ticked, spawned along SVG path coordinates); lite tier: Rive file of the same beats (~80 KB) or GSAP-tweened SVG particle clones (~24 pre-placed circles); (c) canvas code ≤ 8 KB, no textures; (d) static SVG with particle positions frozen mid-transform + printed legend.
3. *Stat chip* — "~90% NOx reduction vs BS-IV" rendered as badge at the outro.

**Motion storyboard (one `scrollProgress` 0→1 drives everything; scrub 0.8s lag; step titles/captions verbatim per content.md §3.5 `#scr`):**
- **0.00–0.12 · Step 1 "The problem leaves the engine"** — engine silhouette pulses subtly (1% scale at ~10Hz-feel via 3 keyframes — reads as running, cheap); red NOx particles stream from engine into pipe, dense and turbulent; caption 1 blur-reveals. Pipeline camera at left third.
- **0.12–0.20** — camera pans right (stage translates −x) following the particle stream; caption 1 exits up.
- **0.20–0.36 · Step 2 "DEF is injected"** — injector highlights with `--def-glow`; DEF droplets spray in at 45° (spawn rate mapped to progress); droplets and NOx co-mingle; a fine mist zone renders as animated gradient. Caption 2 in. The injector's feed line traces back to a mini APEX pack pictogram that glows — brand moment, subtle.
- **0.36–0.48 · Step 3 "Heat splits urea into ammonia"** — droplets morph: each droplet cross-fades into a small urea-hexagon node (scale-up + shape swap), hexagons pulse once. Caption 3 (hydrolysis in plain words).
- **0.48–0.68 · Step 4 "The catalyst does the swap"** — camera pans to catalyst; honeycomb cross-section wipes open (clip-path reveal); red particles + hexagons enter cells; per-cell flashes (tiny 2-frame glow) mark reactions; emerging from the right: white N₂ particles + pale H₂O droplets, flow becomes laminar/calm. Caption 4.
- **0.68–0.82 · Step 5 "Clean air comes out"** — tailpipe emits calm white/leaf-tinted stream that drifts upward and fades; background `--ink-950` warms slightly toward `--navy-800` with a `--leaf-tint` wash top-right; leaf motif draws once (the only leaf on the page); "~90% NOx reduction" badge counts up.
- **0.82–1.00 · Step 6 "Why purity decides everything" + outro** — pipeline scales down 6% and fades to 40%; caption 6 (ppm-level catalyst poisons — why the spec exists) rises with the post-animation CTA "See the spec we test against →" (`/products#spec-table`, per content.md); pin releases.
- *Interaction:* chapter dots clickable (scrolls to mapped progress); hovering pipeline parts shows tooltip labels (title attr equivalent, focusable). 
- *Lite tier:* pin retained (transform-only), canvas replaced by Rive/SVG-clone particles at 30% density; per-cell flashes dropped; everything else identical.
- *Static tier:* no pin — renders as 6 stacked labeled SVG scenes (the mobile layout) with zero motion; every caption + legend fully readable. This static version is ALSO the noscript and print rendition.
- *Mobile (full/lite):* stacked scenes each play a 2–3s one-shot on entry (no scrub — thumb-scroll speed varies too much); replay button per scene (48px); pin never used on touch.

#### `#norms-india` — SIGNATURE: norms timeline ★

**Layout.** Desktop: pinned light section (~250vh): horizontal timeline spine (flowing-liquid line at 100% opacity) with **7 milestone nodes** — the single milestone set locked in content.md §3.5 `#norms-india` (entry copy verbatim from there; roadmap task 4.4 matches): **BS-VI (Apr 2020, ~90% NOx cut vs BS-IV)** → **CEV IV (Oct 2021, construction)** → **TREM IV (Jan 2023, >50 HP tractors)** → **BS-VI OBD Phase-II (Apr 2023, real-time DEF level/quality policing)** → **CPCB IV+ (Jul 2023, gensets)** → **BIS QCO mandatory certification (Aug 2024, S.O. 922(E))** → **TREM V ("being phased in" — no hard date, per brief)**. Each node: year chip, norm name h4, 1-line effect, affected-segment icon. Above the spine a large ghost year numeral (Clash, 8% opacity) scrubs through values. Mobile: horizontal swipe carousel of 7 milestone cards, scroll-snap, 7 dots; spine becomes per-card top border segment.

**Background.** `--porcelain-50`; ghost numerals `--navy-800` at 8%.

**Assets.** Milestone segment icons (7): Phosphor Duotone `truck`, `crane` (custom), `tractor` (custom), `gauge` (OBD Phase-II — dashboard/diagnostics), `lightning`/genset (custom), `seal-check`, `arrow-up-right`. Inline SVG. No photos.

**Motion storyboard (scrub 0→1):**
- **0.00–0.10** — spine draws in from left (dash-offset), first node pops (scale 0→1 overshoot), ghost "2020" settles.
- **0.10–0.85** — progress maps linearly across the 7 nodes: as each node's position crosses the 40%-viewport line, it activates (chip fills `--blue-600`, icon duotone brightens, copy fades in); previous nodes stay lit (progress is cumulative — the market only grows); ghost numeral morphs 2020 → 2021 → 2023 → 2023 → 2023 → 2024 → 2026+ (7 values — the three 2023 milestones each get their own crossfade beat; tabular digits). Timeline translates −x so ~2.5 nodes are visible at a time.
- **0.85–1.00** — TREM V node renders with a dashed "phasing in" ring instead of a filled chip (visual honesty about no hard date); closing line "Every norm adds DEF demand." + link to `/dealers`.
- *Lite:* identical (SVG/transform only — this signature piece is deliberately WebGL-free).
- *Static:* spine + all nodes rendered lit, vertical list layout on narrow viewports; ghost numeral fixed at "2020–2026".
- *Mobile:* swipe carousel; each card activates on snap (dot + chip fill); ghost numeral hidden (<480px).

#### `#storage-handling`

**Layout.** Light section, 3 blocks (all copy verbatim per content.md §3.5 `#storage-handling`): (1) shelf-life table — 4 rows (18 mo ≤25 °C / 12 mo ≤30 °C / 6 mo ≤35 °C / >35 °C — test before use) + footnote claim line "12–18 months under proper Indian storage, away from sunlight" — per table spec; (2) materials DO/DON'T — two-column chip lists per content.md (compatible: HDPE, PP, SS304/316, FRP, EPDM/FKM seals — leaf-tinted chips with check; avoid: copper, brass, zinc, aluminium, mild/carbon steel, nickel plating, PVC, nitrile seals, tap water — chips tinted `--error-on-light` with cross, per §2.1's light-surface error token); (3) contamination warning callout (ppm-level metals kill SCR catalysts; dedicated dispensing equipment only) with freeze note (−11 °C, thaw = zero quality loss, ~7% expansion) and spill note. Mobile: stacked.

**Background.** `--porcelain-50`; hairlines.

**Assets.** Phosphor Duotone `thermometer`, `drop-slash` (custom), `warning-circle`; chips per §2.7. Inline SVG only.

**Motion.** Table rows cascade; do/don't chips flip in (rotateX 30°→0) staggered; callout pulses border once. Lite same; static plain; mobile stacked.

#### `#faqs`

**Layout.** `--container-narrow` light; h2 "Fourteen straight answers." — full accordion, 14 Qs verbatim per content.md §3.5 `#faqs` (§2.7 spec, `<details>` base); category kickers (Basics / Usage / Storage / Buying) as `--fs-overline` separators; page-bottom trademark footnote in `--fs-small` slate, verbatim per content.md: "AdBlue® is a registered trademark of Verband der Automobilindustrie e.V. (VDA). APEX D.E.F is an independent Indian brand and is not affiliated with, licensed by, or endorsed by VDA." Rule (matching brief + content.md): FAQ 2 here is the only place the word "AdBlue" may appear in **body copy** site-wide, always in educational context with the footnote — while the same footnote also ships unconditionally in the mega-footer (§5.2) on every page.

**Motion.** Rows fade-rise stagger; accordion behavior standard across tiers. FAQPage schema.org markup required.

### 4.6 Dealers `/dealers`

#### `#opportunity`

**Layout.** Desktop: dark page-hero: overline "Dealership & Distribution", H1 "Sell what every new diesel must buy." + body, 4 market-driver stat chips ("~5 L DEF per 100 L diesel" · "Tractors >50 HP: DEF since Jan 2023" · "Gensets ≤800 kW: DEF since Jul 2023" · "Market growing 6–8%/yr (est.)") — all copy verbatim per content.md §3.6 `#opportunity` — mini norms-timeline strip (static extract of `#norms-india` — **7 dots**, lit, matching the locked 7-milestone set) linking to `/what-is-def#norms-india`. Right: image card. Mobile: stacked, image last.

**Background.** `--ink-950`, liquid-line motif.

**Assets.** *Image card* — (a) drums/IBC warehouse or highway trucks (supply-chain feel); (b) **launch: authored vector supply-chain illustration** (drum/IBC warehouse silhouette scene, brand palette, 1.5px-stroke + gradient style — §6 / DECISIONS.md #18); licence-verified stock optional (§6.3: Pexels `warehouse pallets forklift` / `distribution center`); FLUX warehouse render = §6.2 post-launch path; (c) inline SVG (stock, if used: AVIF 1000w ≤ 90 KB, page hero region — eager); (d) motif-only panel.

**Motion.** SplitText + chips count/pop; mini-timeline dots light sequentially (0.1s stagger) on entry. Lite same; static lit. Mobile stacked.

#### `#support`

**Layout.** Light; h2 "What APEX puts behind you." + grid of **6 support cards** (3-col ≥1024px / 2-col ≥768px / stacked mobile) — Manufacturer pricing / Fresh-batch stock / Territory clarity / Marketing & education material / Technical backup / Supply reliability — copy verbatim per content.md §3.6 `#support` — generic-but-true per DECISIONS.md #23 (no margins/exclusivity/credit specifics; real commercial terms swap in when the client supplies them). Icons Phosphor Duotone `chart-line-up`, `package`, `map-trifold`, `megaphone`, `headset`, `truck`.

**Motion.** Standard card stagger + duotone bloom; all tiers simple.

#### `#requirements`

**Layout.** Light; h2 "What we look for." + **5-point checklist** (Covered storage / An opening order / Local reach / Basic handling discipline / GST registration) rendered as numbered hairline cards with droplet-check icons — copy verbatim per content.md §3.6 `#requirements` — values generic-but-true per DECISIONS.md #23 (firm storage/order/coverage minimums swap in when the client sets them). Desktop: single row of 5 compact cards (wraps 3+2 at `--bp-lg`); mobile: vertical.

**Motion.** Sequential check animation on entry (as `#quality-lab`). Static: pre-checked.

#### `#dealer-form`

**Layout.** Split dark section: left — h2 "Apply for a dealership." + intro line ("Two minutes. We respond within 2 working days." — dealer-desk response per DECISIONS.md #11; per content.md §3.6 `#dealer-form`), phone + WhatsApp direct alternatives; right — form card (white on dark, `--r-lg`, `--e-3`) with fields exactly per content.md §3.6 `#dealer-form` (roadmap QA tests this form field-by-field): Your name* (text) · Firm name (text) · Phone (WhatsApp)* (`type=tel`, `inputmode=tel`) · City / District* (text) · Current business (**free-text input** with example placeholder "e.g. lubricant distributor, tractor spares, fuel pump" — NOT a dropdown) · Expected monthly volume (dropdown: Under 500 L / 500–2,000 L / 2,000–10,000 L / 10,000 L+) · Message (textarea). Submit label **Apply for Dealership**; placeholder/helper/validation/success/error copy verbatim per content.md. Form spec per §2.7. Web3Forms/Formspree endpoint; success panel offers WhatsApp deep link with prefilled dealer-intent message (content.md §2.4). Mobile: form first, full-width.

**Background.** `--navy-800`; hexagon motif 6%.

**Motion.** Card rises on entry; field focus states per system; submit button shows droplet-fill progress state while posting. Static: plain functional form (forms never depend on JS beyond POST — native submit fallback to Formspree endpoint).

#### `#dealer-faq`

Standard accordion (§2.7), narrow container, light bg, dealer-specific Qs. All tiers standard.

### 4.7 Contact `/contact`

#### `#reach`

**Layout.** Desktop: light page-hero: H1 "Reach APEX D.E.F." + intro line, 3 contact cards — Call (+91 84495 07181 / +91 88002 54537, tabular, tap-to-call, click-to-copy), WhatsApp (deep link `wa.me` with prefilled message per content.md §2.4, `#25D366` accent), Email (info@ / sales@ / dealers@ apexdef.in — the email card is flag-gated OFF by default until the mailboxes exist, per DECISIONS.md #20) — plus hours line "Mon–Sat, 9:00 AM – 6:00 PM IST" (DECISIONS.md #11; emergency dispatch for regular customers — call) — all copy verbatim per content.md §3.7 `#reach`. Mobile: stacked cards, Call first.

**Background.** `--porcelain-50`.

**Assets.** Lucide `phone`, `mail`; mono-stroke WhatsApp glyph. Inline SVG.

**Motion.** Cards fade-rise stagger; copy-chip micro-interaction. All tiers simple. Mobile: cards are single-tap actions end-to-end.

#### `#form`

**Layout.** `--container-text` split: left — h2 "Send an enquiry." + expectations copy (what happens after you enquire; response window "within one working day" per DECISIONS.md #11); right — form with fields exactly per content.md §3.7 `#form`: Your name* (text) · Phone (WhatsApp)* (required, `type=tel`) · I want to* (dropdown: Buy DEF / Become a dealer / Bulk enquiry / Other) · Message (textarea). Submit **Send Enquiry** (submitting state "Sending…"); validation/success/error/privacy microcopy verbatim per content.md. Spec per §2.7; same endpoint strategy as dealer form. Mobile: form first.

**Motion.** As `#dealer-form`. Static: native form.

#### `#map`

**Layout.** Full-width band: h2 "Find the plant." + caption and **Get Directions** CTA per content.md §3.7 `#map` (address-based embed per DECISIONS.md #12; verifying the pin against the Plot No. 415 plot sits on the launch checklist); lazy-loaded Google Maps embed (Bulandshahr plant) behind a click-to-activate facade (static map image + "Open map" button — avoids third-party JS cost + consent noise). Mobile: facade 16:10, opens native maps app link.

**Assets.** *Facade image* — (a) static map tile of Plot No. 415, Industrial Area, Bulandshahr; (b) OpenStreetMap static render (attribution line kept, per OSM license) styled to brand duotone in post; (c) AVIF 1200w ≤ 60 KB, lazy; (d) plain bordered panel with address + "Get directions" link.

**Motion.** None beyond fade; embed loads only on click (all tiers).

#### `#registered`

**Layout.** Compact light strip above footer: registered address (Plot No. 415, Industrial Area, Bulandshahr, Uttar Pradesh — 203001) + GST 09BJNPN5877K1Z7 in tabular Inter + hairline frame. No motion beyond fade. Schema.org Organization block anchors here.

---
## 5. Global elements

### 5.1 Header (glass, shrink-on-scroll)

- Desktop: 88px tall at top → shrinks to 64px after 80px scroll (height + logo scale tween, 250ms). Surface: glass — `backdrop-filter: blur(14px) saturate(1.2)`, bg `rgba(6,11,20,.55)` over dark sections / `rgba(246,249,252,.72)` over light (switched via section `data-theme` sentinel + IntersectionObserver), bottom `--hairline-*`. Contents: wordmark "APEX D.E.F" (Clash 600, droplet replacing the dot in D.E.F as micro-brandmark), nav — order and labels verbatim per content.md §2.1, the authoritative set: **Home · Products · Applications · What is DEF? · About · Dealers · Contact** ("What is DEF?" is the label for `/what-is-def`; the concrete question outperforms the abstract "Knowledge" for the farmer/fleet audience), "Call Now" primary pill (tel:). Layout check: the wider "What is DEF?" label must still fit the 88px header at `--bp-lg` (1024px) alongside the Call Now pill — if the row is tight at 1024–1140px, reduce nav gap to 20px and nav tracking −0.01em before considering any label change (the label itself is locked to content.md). Nav link hover: underline grow + `--def-400` tint; active page: persistent underline. Header hides on fast down-scroll (>1200px/s), reveals on any up-scroll (GSAP ScrollTrigger direction).
- Mobile: 64px bar — wordmark + call icon-button + hamburger (48px targets). Menu: full-screen overlay `--ink-950`, nav items as display-size list with per-item stagger reveal (0.06s), contact block + WhatsApp at bottom, close 48px. Body scroll locked; focus trapped; `Esc` closes. Static tier: overlay opens instantly (no stagger).
- `backdrop-filter` fallback (older Android WebView): solid `--ink-950` at 92% opacity.

### 5.2 Footer (mega-footer)

Dark `--ink-950`, top `--grad-liquid` hairline seam. 4 columns (desktop) / accordion-free stack (mobile), column content verbatim per content.md §2.2: (1) wordmark + parent-brand leaf line + one-line positioning; (2) company navigation; (3) products (6 SKU anchor links + DEF Spec Sheet PDF); (4) contact: phones (tel:), emails (rows flag-gated OFF by default until the mailboxes exist — DECISIONS.md #20), address, GST, hours (Mon–Sat, 9:00 AM – 6:00 PM IST — DECISIONS.md #11). Full-width certification line above the legal row, shipped in exactly one of content.md §2.2's two states — the interim variant is the shipped state (DECISIONS.md #1) until the CM/L number lands, per §2.7's single site-wide BIS rule. Bottom bar: © line (verbatim per content.md §2.2), certification chips, social icon row hidden behind a config flag, OFF until handles exist (DECISIONS.md #13), the VDA trademark footnote as a **standing, unconditional element on every page** (brief's locked mega-footer spec; verbatim per content.md §2.2: "AdBlue® is a registered trademark of Verband der Automobilindustrie e.V. (VDA). APEX D.E.F is an independent Indian brand and is not affiliated with, licensed by, or endorsed by VDA."), "Made in Bulandshahr, U.P." line. Big low-opacity (5%) Clash "APEX" watermark spans the footer bottom — scroll-parallax drift 2% (full tier only). All link targets ≥44px rows on mobile.

### 5.3 Floating WhatsApp button (desktop)

56px circle, `#25D366`, mono glyph, fixed bottom-right 32px, `--e-3` + subtle glow; enters after 600px scroll (scale 0→1 overshoot); hover: expands to pill "WhatsApp us" (200ms); magnetic (desktop rules). Hidden on mobile (sticky bar covers it) and on `/contact`. `aria-label="Chat with APEX D.E.F on WhatsApp"`.

### 5.4 Sticky mobile CTA bar

<768px only: fixed bottom bar 64px + safe-area inset, glass dark surface, 3 equal segments — [Call] (phone icon + label, tel:) | [WhatsApp] (glyph, wa.me) | [Enquire] (form icon → nearest form/contact). Targets full-height ≥48px; labels `--fs-small` 600. Appears after the hero (400px) with translateY entrance; never overlaps form inputs (hides while any input is focused — keyboard collision). `view-transition-name: cta-bar` persists it across navigations. Static tier: always visible, no entrance.

### 5.5 Custom cursor + magnetic buttons (desktop-only)

- Rules: only `(hover: hover) and (pointer: fine)` and ≥1024px and tier ≠ static. Native cursor NEVER removed on: form fields, text selections, links inside body copy (accessibility-critical elements keep defaults).
- Cursor: 8px `--def-400` dot + 32px trailing ring (lerp 0.15). Context morphs: over primary CTAs → ring fills with label "Call"; over product cards → "View"; over the SCR stage → droplet shape; over draggable selector → "Drag". Implemented via `gsap.quickTo` on transform only.
- Magnetic buttons: primary/secondary CTAs within 120px radius attract translate (max 12px, spring release). Never on nav links or form controls.

### 5.6 Scrollbar, selection, misc chrome

- Scrollbar: styled thin (10px) — thumb `--blue-600` (hover `--def-400`), track transparent; `scrollbar-gutter: stable` to protect CLS. Never hidden.
- Selection: `::selection { background: #2FB6E9; color: #060B14; }` (8.4:1 ✓).
- Focus ring global per §2.7; `:focus-visible` only.
- 404 page: dark, droplet motif "spilled" animation (one droplet misses a container), display-2 "404. This page ran dry." + body line and CTAs **Go Home** · **Explore Products** · **Call +91 84495 07181** — copy verbatim per content.md §2.6. Static: still illustration.

### 5.7 Favicon / OG direction

- Favicon: droplet motif filled `--grad-liquid` on `--ink-950` rounded square; SVG favicon + 32/180/512 PNGs; maskable icon for PWA-adjacent metadata.
- OG images (1200×630, per-page templates rendered at build): dark `--ink-950` canvas, hexagon motif 6%, page-specific visual (hero pack illustration for Home/Products, particle-transform for Knowledge, tractor scene art for Applications), wordmark + one-line claim, cert chips. Text ≥48px for feed legibility. JPEG ≤ 180 KB.

---

## 6. Asset production pipeline

> **Launch art direction (v1) — per DECISIONS.md #17/#18.** At launch the site is illustration-led and licence-clean by construction:
> - **Product visuals = crafted SVG pack illustrations** — one shared geometry system across all six SKUs, brand gradients, real label art as SVG (the in-house label system of DECISIONS.md #17) — **plus ONE procedural Three.js hero**: a code-built 20 L bucket (lathe/cylinder geometry, HDPE-look material, `--def-400` liquid particle field). **No GLB pipeline at launch.**
> - **Application-chapter imagery = authored vector/gradient scene illustrations** — tractor / truck / excavator / genset silhouette scenes in the brand palette, consistent 1.5px-stroke + gradient style (the same style also covers the plant process walk, lab, warehouse and macro-detail scenes referenced in §4).
> - **Blender GLB models (§6.1), FLUX renders (§6.2) and real photography move to the post-launch upgrade path** (roadmap 7.1) — the tables below are retained as that upgrade spec, budgets intact.
> - **§6.3's stock shortlist is optional:** licence-verified stock may substitute where it can be fetched + logged, but the vector art is the shipped default, not a stopgap.

### 6.1 Blender packaging models — POST-LAUNCH UPGRADE PATH (not built at launch)

| Model | SKU | Modeling notes | GLB budget (Draco+KTX2) |
|---|---|---|---|
| 5 L can | `def-5l` | Rounded-rect HDPE can, integrated top handle (boolean), 38mm cap + tamper ring; label recess front | ≤ 400 KB |
| 10 L can | `def-10l` | Scaled variant of 5 L with widened base + side grip; distinct silhouette (not a pure scale — reads different at thumbnail size) | ≤ 400 KB |
| 20 L bucket/can | `def-20l` (hero) | CONFIRMED SKU — highest fidelity: cylinder + taper, lid with pour spout + tamper tabs, torus bail handle; hero-grade 2K label bake, others 1K | ≤ 450 KB |
| 210 L drum | `def-210l` | Cylinder + 2 rib loops, 2" + ¾" bungs, HDPE blue; subtle rotational-molding surface noise in normal map | ≤ 350 KB |
| 1000 L IBC | `def-1000l` | White HDPE bottle (cube, rounded), galvanized lattice cage (instanced tube geometry — keep instances, not merged), pallet base, top fill cap + bottom valve | ≤ 900 KB |
| Bulk tanker | `def-bulk` | NO 3D model — treated via custom tanker line-icon + stock/AI photography (§4.3 selector); a 3D tanker blows every budget for one card | — |

- Shared: real-world scale, origin at base center, Y-up on export, 1 material atlas per model (base/rough/normal, KTX2), no interior geometry, ≤ 60k tris each (IBC ≤ 120k with instancing).
- Pack geometry details in the table above (pour spouts, integrated handles, closure types, cage/valve construction) are modeling assumptions to be verified against real packs / reference photos before this post-launch pipeline starts (reference photos arriving = the trigger). Per DECISIONS.md #15, shipped copy and the launch illustrations use plain "HDPE" wording with **no spout, virgin/food-grade resin, or UN-grade claims**; no "UN-grade"/"food-grade" markings are modeled or rendered.
- **Label art needs:** vector label master (SVG) authored in-house from brochure brand facts (DECISIONS.md #17 — the same label system the launch SVG illustrations carry; client-supplied artwork swaps in if it ever arrives) — wordmark "APEX D.E.F", "Diesel Exhaust Fluid · AUS 32", 32.5% urea line, ISO 22241 / IS 17042 marks, no BIS mark until the CM/L number is granted (DECISIONS.md #1), net qty per SKU, batch/expiry print zone, manufacturer block (Apex Environment Solutions, Bulandshahr address), leaf mark. NO "AdBlue" anywhere on label. Sizes per pack die-line; UV-mapped so the front label is planar (zero distortion).
- **Lighting:** Poly Haven HDRIs (CC0): `studio_small_09` for product stills/selector; `industrial_workshop_foundry` (or similar industrial HDRI) for moody hero variants. Same HDRI + camera rig across all SKU renders (one .blend, model collections toggled) for perfect consistency.
- **Exports:** GLB + Draco (quantized), KTX2/BasisU textures; per-model caps above; hero scene total ≤ 1.2 MB. Stills: Cycles, 1600×2000 master PNG → AVIF/WebP ladder per §8.3.

### 6.2 AI render set (FLUX blank-label workflow) — POST-LAUNCH UPGRADE PATH

- Tool: FLUX (1.1 Pro / FLUX.2 Pro) for photoreal scenes; Ideogram v3 only if in-image text is unavoidable (avoid — we composite). Midjourney allowed for mood/backplates only. Verify commercial license tier at purchase; log tool + prompt + date per asset.
- **The one workflow rule:** always generate packaging with BLANK labels (`blank white label area` in prompt), then composite the real vector label in Photoshop/Figma (perspective warp + slight displacement to follow curvature + matched grain). Never let AI render the wordmark.
- Core prompt template: `studio product photography, [pack description] in deep blue HDPE, Pantone-style deep blue #1B4F9C body, blank white label area, [DEF-blue tinted liquid visible / condensation], softbox lighting, seamless light-grey background, 85mm lens, f/8, high detail, photorealistic`.
- Scene set (from §4 sections): plant process walk ×5 (prompts in §4.2 `#plant`, incl. the Lab clearance panel), lab QC (§4.1 `#quality`), warehouse drums/IBC (§4.1 `#dealer-cta`), genset room (§4.4), macro cap/batch-code (§4.3 `#packaging-quality`), nozzle-in-filler-neck: `diesel exhaust fluid dispensing nozzle inserted into blue-capped tank filler neck of an unbranded truck, shallow depth of field, workshop lighting, photorealistic`.
- Consistency levers: fixed seed per family, identical color/lighting language, FLUX Redux reference-conditioning off the Blender renders. Vehicles generic/distant (AI invents fake grilles). Replace progressively with real Bulandshahr photography via the post-launch shoot (roadmap 7.1; DECISIONS.md #18) — real photos beat all of this for trust.

### 6.3 Stock photo/video shortlist (+ license log)

Status per DECISIONS.md #18: **optional** — authored vector art is the shipped default; anything below may substitute only if fetched with a verified licence and logged.

| Need | Source + exact query | Notes |
|---|---|---|
| Agriculture chapter | Pexels `tractor field india`; alt `indian farmer tractor`, `plowing field punjab` | no faces, no brand decals |
| Transport chapter | Pexels `truck in india`; Unsplash `indian truck highway`, `truck convoy india`, `lorry india dusk` | rear/side frames; de-badge if needed |
| Construction chapter | Pexels `excavator construction site`, `wheel loader quarry` | |
| Gensets chapter | Pexels `diesel generator industrial` | weak pool — FLUX fallback ready |
| Dealer/warehouse | Pexels `blue barrels stacked`, `warehouse pallets forklift`, `distribution center` | |
| Lab (interim) | Pexels `quality control lab`, `chemist testing sample`, `laboratory beaker blue liquid` | no faces |
| Tanker (def-bulk) | Pexels `fuel tanker truck` | crop operator branding |
| Video: highway loop | Pexels Videos ID 30104783 "Busy Indian Highway with Trucks and Motorbikes"; Coverr `highway trucks dusk` | 8–12 s, ≤3 MB, no audio |
| Video: tractor loop | Pexels Videos `tractor plowing`; Coverr `tractor field aerial`; Mixkit `farmland sunrise` | same budget |
| Video: liquid macro (optional hero-adjacent) | Pexels Videos `blue liquid pour slow motion`; Mixkit `liquid closeup` | tint-grade to `--def-400` |

**License log (required, non-negotiable):** `assets/LICENSES.csv` — columns: file, source URL, license (Unsplash/Pexels/Pixabay/CC0/CC-BY/commercial-AI), author, date downloaded, credit-required?, credit-placed-where. Sketchfab: CC0/CC-BY only (credit in site colophon); **CC-NC prohibited** (both popular IBC models on Sketchfab are CC-NC — do not use; ours is Blender-built anyway).

### 6.4 Rive / CSS-GSAP motion pieces list

No Lottie anywhere: the brief's LOCKED stack allows Rive (or CSS/GSAP) for 2D process motion only — a Lottie/dotLottie runtime would be an unbudgeted stack addition.

| Piece | Tool | Used in | Budget |
|---|---|---|---|
| NOx→N₂ particle-transform loop | Rive (state machine: idle/step1/2/3 inputs) | `#how-it-works`, dealer pitch card | ≤ 60 KB .riv |
| SCR lite-tier particle beats | Rive (6 timelines, one per step) | `#scr` lite | ≤ 80 KB |
| Droplet fill (loader/bullets/checklists) | CSS/GSAP inline SVG (no runtime needed) | global | ≤ 3 KB |
| WhatsApp pulse (subtle ring) | CSS only | floating button | 0 |
| 48 h delivery truck micro-anim (optional) | Rive (drawn in-house on the §2.5 icon grid, single timeline — reuses the runtime already loaded for the pieces above) or GSAP-animated inline SVG | `#why-apex` | ≤ 20 KB .riv / ≤ 4 KB SVG |

Rive runtime (~78 KB WASM) loads once, only on pages using .riv, only full/lite tiers, after idle.

---

## 7. Accessibility

- **Contrast commitments:** all body text ≥4.5:1 (verified pairs in §2.1 — the risky pairs are codified: no `--def-400` text on light, no white on `--def-400`, no `--leaf-500` body text anywhere); large display text ≥3:1 minimum but in practice ≥7:1 on our dark/light pairings; UI components/borders ≥3:1 against adjacent colors. Text over photography always sits on `--scrim-dark` (checked against the *lightest* pixel region, not average).
- **Focus:** visible `:focus-visible` ring (2px `--def-400`/`--blue-600`, offset 3px) on every interactive element including cards, chips, accordion rows, selector tabs, timeline dots. Focus never removed, never `outline: none` without replacement. Skip-link ("Skip to content") first in DOM, visible on focus.
- **Keyboard nav:** full traversal — mobile menu focus-trapped with `Esc`; accordions are `<button aria-expanded>`; selector tabs follow WAI-ARIA tabs pattern (arrow keys, `aria-selected`); pinned scrollytelling never traps scroll/keyboard (pins are pure scroll-position mappings; chapter dots are real focusable buttons); carousels expose prev/next buttons for keyboard, not just swipe.
- **Reduced motion:** honored as tier `static` per §3.4 — decorative motion removed, state-communicating transitions become instant/opacity-only; parallax, counters, marquee, autoplay video, pinning all off; `<video autoplay>` never ships when `prefers-reduced-motion`.
- **Alt-text policy:** every content image gets specific alt ("APEX D.E.F 20-litre HDPE bucket with tamper-evident lid", not "product"); decorative motifs/backgrounds `alt=""` + `aria-hidden`; canvas scenes get `role="img"` + `aria-label` describing the scene, plus the `<noscript>` image equivalent; the SCR animation's full narrative exists as visible caption text (not alt-only), so the chemistry is readable by screen readers in reading order; SVG diagrams carry `<title>/<desc>`.
- **Tap targets:** ≥48×48px (mobile CTA bar segments ≥64px tall); ≥8px spacing between adjacent targets; accordion rows full-width tappable; carousel dots 24px visual within 48px hit area.
- **Misc:** `lang="en-IN"`; heading hierarchy strict (one h1/page); form errors announced via `aria-live="polite"`; phone numbers real links; color never the only signal (do/don't chips carry icons + words); Lenis respects native anchor jumps + `scroll-behavior` reduced-motion.

---

## 8. Performance design budgets

### 8.1 Core Web Vitals targets (all pages, mid-range Android on 4G)

- **LCP < 2.0 s** (hard target; <2.5 s absolute ceiling) — LCP element is ALWAYS a poster `<img>` or text, never canvas/video; hero poster preloaded, `fetchpriority="high"`.
- **INP < 200 ms** — no long tasks >50 ms on load path; Three.js/Rive/GSAP chunks dynamic-imported post-idle; listeners passive; IntersectionObserver only (no scroll listeners).
- **CLS < 0.1** — explicit dimensions on all media; `scrollbar-gutter: stable`; font fallbacks metric-tuned (`size-adjust`); pinned sections reserve their full height in layout; header shrink animates transform/height without reflowing content below (fixed positioning).

### 8.2 Per-page weight budgets (gzip/br transfer, first load)

| Page | static | lite | full |
|---|---|---|---|
| Home | ≤ 500 KB | ≤ 950 KB | ≤ 2.3 MB (the 1.2 MB deferred-scene allowance is reserved for the post-launch GLB; the launch procedural scene is code-built and far lighter) |
| Products | ≤ 500 KB | ≤ 900 KB | ≤ 2.0 MB (cap reserved for post-launch selector GLBs, lazy per-SKU, active+1 cached; launch selector uses SVG/AVIF illustrations, far lighter) |
| Applications | ≤ 550 KB | ≤ 1.0 MB | ≤ 1.6 MB + optional ≤3 MB video (idle, desktop, in-view only) |
| Knowledge | ≤ 450 KB | ≤ 750 KB | ≤ 1.1 MB (SCR is SVG/canvas — deliberately light) |
| About | ≤ 500 KB | ≤ 900 KB | ≤ 1.4 MB |
| Dealers / Contact | ≤ 400 KB | ≤ 650 KB | ≤ 900 KB |

**JS budgets:** static ≤ 80 KB (tier script + forms + details polyfill nothing); lite ≤ 200 KB (GSAP core+ScrollTrigger+SplitText ~70 KB + site code); full ≤ 380 KB before deferred Three.js chunk (~160 KB) which loads post-idle only. CSS ≤ 70 KB. `content-visibility: auto` on below-fold sections.

### 8.3 Image format ladder & loading rules

- Ladder: **AVIF → WebP → JPEG** via `<picture>`; widths 640/960/1280/1600/1800 as per slot; quality AVIF ~55, WebP ~72; renders with alpha: AVIF/WebP + PNG last resort.
- Eager (only): hero poster + first-chapter image per page (the LCP candidate). Everything else `loading="lazy" decoding="async"`, below-fold 3D/video via IntersectionObserver `rootMargin: 600px`.
- Video: poster-first always; `preload="none"`; mounts only full tier, desktop, in-view, post-idle; H.264 + WebM, ≤3 MB, 8–12 s, muted, no audio track.

### 8.4 Font loading strategy

- 3 files total, self-hosted, Latin-subset woff2: Clash Display 500, Clash Display 600 (~28 KB each), Inter variable 400–700 (~48 KB).
- `<link rel="preload" as="font" crossorigin>` for Clash 600 + Inter; `font-display: swap` with metric-tuned local fallbacks (`size-adjust`, `ascent-override`) to zero out CLS; no third-party font hosts (self-host from Fontshare/rsms distributions per their licenses).

### 8.5 Enforcement

Lighthouse CI budgets file in repo (`budget.json` mirrors §8.2); PRs fail on LCP/CLS/weight regression; WebPageTest 4G Moto-class profile monthly; license log audited at each content addition.

---

## 9. Resolved register (every former design-blocking item closed by decision — see DECISIONS.md)

1. BIS licence CM/L number — **decided (#1):** `BIS*` chip + interim footnote is the shipped state site-wide (`#hero`, `#quality`, `#certifications`, footer certification line). Swap-later trigger: CM/L grant → footnote/line wording switches, BIS/ISI mark unlocks on labels and renders.
2. Pack lineup — **decided (#3):** all six SKUs ship; each card/anchor is one config entry. Swap-later trigger: client trims the range → flag off the affected cards/anchors.
3. Label artwork — **decided (#17):** authored in-house vector label system from brochure brand facts. Swap-later trigger: client supplies existing label art → match/replace.
4. Founder portrait + parent-brand logo — **decided (#19/#17):** `#leadership` ships text-only; leaf mark redrawn in-house for `#story`. Swap-later trigger: real portrait / vector file arrives.
5. Plant/lab photography — **decided (#18):** authored vector scenes ship at launch. Swap-later trigger: post-launch Bulandshahr shoot (roadmap 7.1).
6. Delivery promises — **decided (#4):** "48 h doorstep" kept; "24/7, 365" downgraded to "emergency dispatch for regular customers — call us." Swap-later trigger: client confirms broader promises are operationally true.
7. Capacity / districts stats — **decided (#5):** replaced by the true-by-construction 4-cell set (18 · 6 · 48 h · 100%). Swap-later trigger: verified numbers arrive → cells swap (capacity in litres/day, one unit in both documents).
8. Dealer support/requirement specifics — **decided (#23):** generic-but-true copy ships. Swap-later trigger: real commercial terms arrive.
9. Social handles — **decided (#13):** footer ships without the social row, behind a config flag. Swap-later trigger: handles exist → flip flag + add `sameAs`.
10. Pack construction — **decided (#15):** plain "HDPE" wording; no spout/virgin/UN-grade claims; illustrations follow the same rule. Swap-later trigger: reference photos arrive → §6.1 geometry + `#packaging-quality` copy update.

*End of design plan.*
