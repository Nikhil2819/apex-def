# APEX D.E.F Website — Development Roadmap (apexdef.in)

**Document status:** Draft for client + developer review. Aligned to the LOCKED Master Brief (v2). All page names, slugs, section IDs, SKU ids, and design tokens referenced here match the brief exactly and must not drift.

---

## 1. Project Summary

### What we are building
A premium, cinematic **product-display website** for **APEX D.E.F** (Diesel Exhaust Fluid), manufactured by Apex Environment Solutions, Bulandshahr (UP). Seven pages — Home `/`, About `/about`, Products `/products`, Applications `/applications`, Knowledge `/what-is-def`, Dealers `/dealers`, Contact `/contact` — built on **Astro (static output) + GSAP/ScrollTrigger/SplitText + Lenis + one vanilla Three.js hero island + View Transitions API**, hosted on **Cloudflare Pages**, with forms via **Web3Forms** and analytics via **Cloudflare Web Analytics** at launch (GA4 optional later) — per DECISIONS.md #22.

### For whom
Fleet owners, farmers (tractor/harvester operators), construction & genset operators, purchase managers, and prospective dealers/distributors — largely on mid-to-low-end Android phones over 4G in UP and surrounding states.

### The site's one job
Make a fleet owner, farmer, dealer, or purchase manager trust APEX enough to **call, WhatsApp, or send an enquiry**. Every phase below is judged against that. No prices, no cart, no checkout — ever.

### Definition of done (launch gate)
The site is "done" for launch when ALL of the following hold:

1. All 7 pages live at apexdef.in over HTTPS, matching the brief's site map (every section ID present, exact slugs).
2. All conversion paths verified on real devices: `tel:` links dial, `wa.me` deep links open WhatsApp with the prefilled message, both enquiry forms (`#form` on /contact, `#dealer-form` on /dealers) deliver email reliably to the designated inbox, and each of the three printed mailboxes (info@ / sales@ / dealers@apexdef.in) has received a test email — or its rows are hidden behind the config flag per §4 row 10 (never ship a dead printed address).
3. Core Web Vitals budgets met on a throttled 4G / low-end Android profile: **LCP < 2.0 s, INP < 200 ms, CLS < 0.1, ≤ 200 KB JS on the lite tier**.
4. Every signature animation degrades correctly: full tier (WebGL + all motion) → lite tier (posters + GSAP reveals) → static tier (AVIF posters + CSS fades), verified per feature.
5. Zero legal violations: no "AdBlue" branding anywhere (including titles, meta, alt text, JSON-LD, OG fields), no "Apex Ad Blue", no prices, no e-commerce language; VDA trademark footnote present as a standing mega-footer element on **every** page (per brief — the word itself appears in body copy only in the Knowledge educational FAQ); BIS worded per the single interim state defined in §4 dependency 1 until the CM/L number lands.
6. SEO baseline shipped: schema.org Organization/Product/FAQPage JSON-LD, sitemap.xml, per-page meta + OG images, Search Console verified.
7. Accessibility pass complete: keyboard navigable, reduced-motion audit clean, form labels/errors, contrast on both dark and light sections.

### Guiding principles

1. **Content-first build.** Every page ships complete and useful as plain semantic HTML before a single animation is added. Phases 2 → 3 → 4 are strictly ordered: a Phase-2 site with zero JS is already a launchable website.
2. **Fallback-first animation.** No effect is built without its degraded state existing first. The AVIF poster is always the LCP; `<noscript>` images sit behind every canvas; the tier system (`full` / `lite` / `static`) is decided pre-load, not retro-fitted.
3. **Mobile-first, India-first.** The primary user is on an Android phone on 4G. Sticky bottom bar [Call] [WhatsApp] [Enquire], ≥48 px tap targets, swipe carousels instead of horizontal pins, and budgets measured on throttled profiles — not on the dev machine.
4. **Never blocked by the client.** Every client dependency has a documented "proceed with meanwhile" path (Section 4). Placeholders are tracked, not forgotten.
5. **Legal rules are build-time checks, not review-time hopes.** A pre-deploy grep/CI check for forbidden strings ("AdBlue" as branding, "Apex Ad Blue", price patterns, cart/checkout language) runs on every build.

---

## 2. Scope

| In scope (launch) | Out of scope (permanently or for launch) | Phase-2 candidates (post-launch) |
|---|---|---|
| 7 static pages per locked site map | E-commerce of any kind (cart, checkout, prices, payment) | Hindi language toggle |
| Sticky glass header, mega-footer, floating WhatsApp button (desktop), sticky mobile bottom bar | CMS at launch (content lives in the repo as Markdown/JSON collections) | Blog / news & knowledge articles |
| Enquiry + dealer forms → Web3Forms (decision 22) → email; WhatsApp deep links | User accounts, logins, dashboards | Dealer portal (locator, lead tracking) |
| One Three.js hero island; SCR scrollytelling; pack selector; norms timeline — each with poster fallbacks | Backend/server code, databases | Headless CMS (if client wants self-serve edits) |
| Full motion layer (Lenis, GSAP reveals, counters, marquee) under 3-tier system | Live chat widgets, chatbots | Real plant/lab photo & video shoot integration |
| ISO 22241-1 / IS 17042 spec table + downloadable PDF datasheet | Multi-currency/pricing tools, quote calculators | Google Business Profile content expansion |
| Schema.org JSON-LD, sitemap, meta/OG, custom 404 | Native apps | COA (certificate of analysis) download archive |
| Hosting, DNS for apexdef.in, SSL, analytics, Search Console, uptime monitoring | Paid media landing pages | Testimonials/logos section (once client confirms usable names) |

---

## 3. Phase Plan

> Estimates assume **one developer + Claude Code**, working days. Ranges reflect asset/client-input uncertainty. Phases 0 and 1 can partially overlap (asset work is largely non-dev). **Total: 29–43 working days (~6–9 calendar weeks) from kickoff to launch**, plus ongoing Phase 7.

### Phase 0 — Brand & Assets Prep — **4–7 days**

Goal: everything the build consumes exists in an organized, licensed, versioned asset library before Phase 2 needs it.

| # | Task | Notes |
|---|---|---|
| 0.1 | Logo cleanup & vectorization | APEX D.E.F wordmark + Apex Environment Solutions leaf logo as clean SVGs; dark/light variants; favicon set |
| 0.2 | Label art per SKU | Vector label layouts for `def-5l`, `def-10l`, `def-20l`, `def-210l`, `def-1000l` (+ generic bulk visual for `def-bulk`); must carry ISO 22241 / IS 17042 references, batch/expiry zones, GST/address block. Label system authored in-house (DECISIONS.md #17); no BIS/ISI mark on labels or illustrations until the CM/L number is granted (DECISIONS.md #1 — see Dependency map row 1) |
| 0.3 | SVG pack illustration set + procedural Three.js hero | **Re-scoped (DECISIONS.md #17):** crafted SVG pack illustrations for all six SKUs (one shared geometry system, brand gradients, real label art as SVG) + ONE procedural, code-built Three.js hero (20 L bucket: lathe/cylinder geometry, HDPE-look material, `--def-400` liquid particle field). **Blender GLB pipeline = post-launch upgrade** — design.md §6.1 retains the per-model caps (cans ≤ 400 KB, hero bucket ≤ 450 KB, drum ≤ 350 KB, IBC ≤ 900 KB; hero scene ≤ 1.2 MB) for when that pipeline runs; the caps protect design.md §8.2 page-weight budgets either way |
| 0.4 | Poster/export set | **Re-scoped (DECISIONS.md #17):** AVIF poster exports at multiple sizes from the SVG illustration masters + the hero poster composite (these are the LCP images and the lite/static-tier visuals); Blender Cycles render set = post-launch upgrade (design.md §6.1) |
| 0.5 | Scene art + optional stock gathering | **Re-scoped (DECISIONS.md #18):** authored vector/gradient scene illustrations are the default — tractor/truck/excavator/genset chapters + plant process walk + lab + warehouse, consistent 1.5px-stroke + gradient style; licensed stock (and §6.2 FLUX renders) only where fetchable with a verified licence + logged (design.md §6.3/§6.2); 8–12 s hero video loops ≤3 MB optional-if-licensed; avoid visible truck-maker logos and recognizable faces in any raster |
| 0.6 | Asset licence log | Running log (URL, source, licence, date) for every downloaded asset; Sketchfab only CC0/CC-BY (credit noted), never CC-NC |
| 0.7 | Copy sign-off | **Resolved via DECISIONS.md — claims locked:** delivery promises, stats and QC scope are now true by construction per the register (#4/#5/#6/#7); client sign-off = a review of DECISIONS.md, not new drafting |
| 0.8 | Client confirmations round | **Resolved via DECISIONS.md** — every open question closed by decision on 2026-07-17; this task becomes: walk the client through DECISIONS.md + the swap-later register and record any overrides |
| 0.9 | PDF datasheet v1 | Shared ISO 22241-1 / IS 17042 spec table as branded downloadable PDF (linked from `/products#spec-table`) |

**Deliverables:** `/assets` library (SVG logos, label vectors, SVG pack-illustration + scene-art masters, AVIF poster/export sets, optional licensed stock picks), licence log, signed-off copy doc, datasheet PDF, DECISIONS.md walkthrough record.

**Acceptance criteria:** every Phase-2 section has at least a placeholder-quality visual assigned; all assets licence-logged; the procedural hero scene runs in a three.js viewer well under the deferred-scene budget (the design.md §6.1 caps are reserved for the post-launch GLB set); SVG illustration masters render crisp at card and hero sizes; copy contains zero forbidden terms; every former open question carried as a DECISIONS.md entry with a swap-later trigger, not a guess.

---

### Phase 1 — Foundation — **3–4 days**

Goal: a deployable skeleton with global chrome, tokens, and routing — CI green from day one.

| # | Task | Notes |
|---|---|---|
| 1.1 | Repo + tooling | Git repo, Astro (static output) scaffold, Prettier/ESLint, CI (build + link check + forbidden-strings check), preview deploys on the chosen host from the first commit |
| 1.2 | Design tokens | CSS custom properties exactly per brief: `--ink-950 #060B14`, `--navy-800 #0A1B3D`, `--blue-600 #1B4F9C`, `--def-400 #2FB6E9`, `--leaf-500 #1F9D55`, `--porcelain-50 #F6F9FC`, `--slate-500 #5B6B7F`; gradient signature navy-800 → blue-600 → def-400; 1px hairlines rgba(255,255,255,.08) on dark |
| 1.3 | Fonts | Self-hosted Clash Display (Fontshare) + Inter variable (tabular numerals enabled for stats/specs); Latin subset, `preload`, `font-display: swap`, size-adjust fallback metrics to kill FOUT CLS |
| 1.4 | Base layout | `BaseLayout.astro`: HTML shell, meta/OG slots, JSON-LD slot, dark/light section primitives, container/spacing scale, type scale (hero clamp(2.75rem→6.5rem)) |
| 1.5 | Global chrome | Sticky glass header (logo, nav, "Call Now" button); mega-footer (nav, products, contact, GST 09BJNPN5877K1Z7, certifications, social placeholders, VDA trademark footnote); floating WhatsApp button (desktop); sticky mobile bottom bar [Call] [WhatsApp] [Enquire] |
| 1.6 | Routing + transitions | All 7 routes stubbed with correct slugs; custom 404 stub; View Transitions API page fades (`@view-transition`, cross-document); Astro `<ClientRouter />` only if needed |
| 1.7 | Tier-system scaffold | The `full`/`lite`/`static` detection module (saveData, effectiveType, deviceMemory, hardwareConcurrency, WebGL2, prefers-reduced-motion) written and unit-tested now, wired to `gsap.matchMedia()` later — it is a Phase 1 primitive, not a Phase 3 afterthought |

**Deliverables:** deployed preview URL with 7 routes + 404, global chrome complete, tokens/fonts live, tier module merged, CI enforcing forbidden-strings check.

**Acceptance criteria:** preview deploy loads all routes; header/footer/mobile bar render correctly at 360 px, 768 px, 1440 px; `tel:` and `wa.me` links in chrome work from a real phone; fonts self-hosted with no layout shift; Lighthouse (empty pages) ≥ 95 across the board.

---

### Phase 2 — Pages: Static Content Complete — **7–9 days**

Goal: all 7 pages fully written, semantic, accessible, and convertible **with JavaScript disabled**. This is the launchable baseline.

| # | Task | Notes |
|---|---|---|
| 2.1 | Home `/` | All 11 sections in brief order: `#hero` (static poster version), `#intro`, `#stats`, `#products`, `#applications`, `#how-it-works` (teaser linking to /what-is-def), `#why-apex`, `#quality`, `#faq`, `#dealer-cta`, `#contact-strip` |
| 2.2 | About `/about` | `#story`, `#mission`, `#plant`, `#quality-lab`, `#certifications`, `#leadership`, `#cta` |
| 2.3 | Products `/products` | `#overview`, `#selector` (static version: pack grid with per-SKU renders), per-SKU anchors `#def-5l` … `#def-bulk`, `#spec-table` (full ISO 22241-1/IS 17042 table + PDF download), `#packaging-quality`, `#how-to-buy`, `#faq-products`. Every product card CTA = "Call for price" (tel:) + WhatsApp + enquiry |
| 2.4 | Applications `/applications` | `#agriculture`, `#transport`, `#construction`, `#gensets` — each with norms context, recommended packs, CTA |
| 2.5 | Knowledge `/what-is-def` | `#what-is-def`, `#scr` (static illustrated version of the pipeline), `#norms-india` (static timeline graphic), `#storage-handling`, `#faqs` (10–14 Qs), VDA trademark footnote |
| 2.6 | Dealers `/dealers` | `#opportunity`, `#support`, `#requirements`, `#dealer-form` (name, firm, city/district, current business, monthly volume, phone required), `#dealer-faq` (5 Q&As per content.md §3.6 — also feeds the Dealers FAQPage JSON-LD in 2.10) |
| 2.7 | Contact `/contact` | `#reach` (tap-to-call phones +91 84495 07181 / +91 88002 54537, WhatsApp deep link with prefilled message, emails, hours — email rows flag-gated per §4 row 10, hours row ships as Mon–Sat, 9:00 AM – 6:00 PM IST per §4 row 12 / DECISIONS.md #11), `#form` (name, phone required, need-type dropdown: Buy DEF / Become dealer / Bulk enquiry / Other, message), `#map` (Bulandshahr embed, lazy-loaded), `#registered` (address + GST) |
| 2.8 | Forms wiring | **Web3Forms free tier** (decision 22 — no dashboard account needed for client; client creates the access key at launch, env-var placeholder until then); honeypot + time-trap spam protection; success/error states without JS where possible (native POST + redirect) and enhanced with JS; forwarding to founder's inbox until domain mail exists (address itself never shown on site) |
| 2.9 | FAQ accordions | Native `<details>/<summary>` (works with zero JS), styled; enhanced animation later in Phase 3 |
| 2.10 | Structured data + SEO | JSON-LD per content.md §5 plan: Organization (+GST, address, phones — declared once on home, referenced by `@id` elsewhere); **one canonical Product** ("APEX D.E.F Diesel Exhaust Fluid (AUS 32)") with six `hasVariant`/`additionalProperty` pack entries — never one Product per SKU, and **no Offer node** (no price is published); FAQPage on /products (`#faq-products`), /what-is-def (full accordion), and /dealers (`#dealer-faq`) — max one FAQPage per URL, none on home; sitemap.xml; robots.txt; unique title/meta per page; OG images (template-generated per page). Meta/keyword content follows the same forbidden-strings rules as body copy: no "AdBlue", no unconfirmed "BIS certified" |
| 2.11 | Legal sweep | Automated + manual check: no "AdBlue" branding, VDA footnote present in the mega-footer on all pages, no prices, no cart/checkout vocabulary anywhere including alt text, meta tags, JSON-LD, and OG fields — the CI scan runs with **no exceptions** (SEO keyword targets never put "AdBlue" or unconfirmed "BIS certified" into page markup or metadata; any AdBlue-query capture belongs in a separate ad-campaign doc, never on-site) |

**Deliverables:** 7 complete pages + 404, both forms delivering email, PDF datasheet linked, JSON-LD validating, sitemap live.

**Acceptance criteria:** every section ID from the brief exists and is anchor-linkable; site is fully readable and convertible with JS disabled (forms POST, accordions open, all images visible); Rich Results test passes Organization/Product/FAQPage; forms deliver to inbox in < 2 min with all fields intact; axe DevTools reports no critical issues; forbidden-strings CI check green.

---

### Phase 3 — Motion Layer — **4–6 days**

Goal: the "standard premium layer" on top of the finished static site, entirely inside the tier system.

| # | Task | Notes |
|---|---|---|
| 3.1 | Tier wiring | Tier module (Phase 1.7) drives `gsap.matchMedia()` contexts: reduced-motion + breakpoint + tier variants in one API; `static` tier loads no GSAP/Lenis at all (CSS-only fades) |
| 3.2 | Lenis smooth scroll | Driven from `gsap.ticker`; disabled on `static` tier and for reduced-motion; verify no scroll-jank fights with iOS Safari momentum |
| 3.3 | SplitText reveals | Headline blur+opacity "comes into focus" reveals; `will-change` removed after animation; `#intro` split-text reveal per brief |
| 3.4 | Counters | `#stats` count-up on IntersectionObserver entry (tabular numerals); instant-set fallback on static tier |
| 3.5 | Marquee | Certification/standards chip strip on Home per content.md `#marquee` (chip list defined there; recommended placement between `#quality` and `#faq`, final placement per design.md; chip content per §4 dependency 4's fallback — certification/standards chips until client logos/testimonials are confirmed). Scroll-velocity-reactive on full tier; pure CSS loop on **lite tier only**; **static tier renders the items as a non-moving wrapped chip row** (static = reduced-motion tier — a CSS loop there would violate the WCAG commitment) |
| 3.6 | Magnetic buttons + custom cursor | Desktop pointer-fine only; native cursor preserved on accessibility-critical elements; fully absent on touch |
| 3.7 | Mobile adaptations | Remapped scroll distances, simpler trajectories via matchMedia; hover states replaced with visible labels / tap-to-expand / `:active` scale 0.97; transform+opacity-only motion |
| 3.8 | Accordion/selector polish | FAQ accordion height animation; pack-grid hover/tap states; View Transition polish between pages |
| 3.9 | Perf guardrail check | Re-run Lighthouse on throttled profile after motion layer; JS ≤ 200 KB on lite tier confirmed; IntersectionObserver (never scroll listeners) for all reveal triggers |

**Deliverables:** full motion layer live behind tiers; per-tier behavior documented in README (what plays where).

**Acceptance criteria:** with DevTools emulating reduced-motion → no decorative animation runs; with Save-Data on → static tier confirmed (no GSAP/Lenis in network tab); INP < 200 ms mid-scroll on a low-end Android profile; no CLS introduced by any reveal (elements reserve space); marquee/counters run at 60 fps on a mid-range phone.

---

### Phase 4 — Signature 3D & Scrollytelling — **8–11 days**

Goal: the four signature interactions. **Per-feature acceptance is dual: works fully on `full` tier AND degrades correctly on `lite` and `static` tiers.** Each feature is built poster-first: the fallback ships before the enhancement.

| # | Feature | Build notes | Est. |
|---|---|---|---|
| 4.1 | **Hero Three.js island** (`/#hero`) | One vanilla Three.js island; procedural code-built pack model at launch (GLB/Draco = post-launch upgrade per DECISIONS.md #17) + liquid particle field in `--def-400`; scroll-rotated; AVIF poster is the LCP with `fetchpriority="high"`; canvas mounts post-idle (`requestIdleCallback`) on full tier only; shader warm-up before visibility; `<noscript>` image; renderer paused when off-screen | 3–4 d |
| 4.2 | **SCR pipeline scrollytelling** (`/what-is-def#scr` + home `#how-it-works` teaser) | Pinned section, single shared scrollProgress 0–1; red NOx particles → DEF injection (def-400 droplets) → catalyst → white/green N₂+H₂O; Rive or CSS/GSAP implementation (decide by prototype — Rive if particle choreography needs it, GSAP+SVG if not); mobile: shorter pin or step-based swipe; lite/static: illustrated step sequence (the Phase-2 static version, upgraded art) | 3–4 d |
| 4.3 | **Product pack selector** (`/products#selector`, home `#products` rail) | SKU switch swaps the pack visual (SVG/AVIF illustration on all tiers at launch; 3D models when the post-launch GLB set lands) with liquid-fill transition; updates capacity/fitment/buyer copy per SKU id; all six SKUs incl. `def-bulk` generic visual; deep-linkable from per-SKU anchors | 2–3 d |
| 4.4 | **Norms timeline** (`/what-is-def#norms-india`) | **7 milestones, locked to content.md §3.5:** BS-VI (Apr 2020) / CEV IV (Oct 2021) / TREM IV (Jan 2023) / BS-VI OBD Phase-II (Apr 2023) / CPCB IV+ (Jul 2023) / BIS QCO — BIS certification mandatory for DEF (Aug 2024) / TREM V–CEV V "being phased in" (2026+). Node count, design.md's ghost-numeral morph sequence, and the Dealers mini-strip dot count must all match this 7-entry list. Horizontal scrub on desktop, native swipe with scroll-snap + progress dots (7) on mobile; static tier: vertical stacked timeline | 1–2 d |

**Deliverables:** four signature features live; tier-behavior matrix updated; Three.js chunk verified as tier-gated async import (absent from lite/static payloads).

**Acceptance criteria (each feature):** (a) full-tier behavior matches design.md spec at 60 fps on a mid-range laptop and a recent Android; (b) lite tier shows poster/2D version with no WebGL requested; (c) static tier shows still imagery, content fully readable; (d) poster is LCP in all tiers (verified in Lighthouse trace); (e) feature is skippable/ignorable by keyboard and screen-reader users without trapping scroll; (f) horizontal pin converts to swipe on touch.

---

### Phase 5 — Hardening — **4–5 days**

| # | Task | Notes |
|---|---|---|
| 5.1 | Accessibility pass | Keyboard walk of every page; focus states on dark and light sections; skip-link; form labels/errors/aria; contrast audit against tokens (esp. `--slate-500` on `--porcelain-50`, anything on `--ink-950`); `--leaf-500` never used as body text per brief; full reduced-motion audit |
| 5.2 | Performance budgets | Lighthouse CI on throttled 4G + low-end Android CPU profile (4× slowdown) for all 7 pages; enforce LCP < 2.0 s, INP < 200 ms, CLS < 0.1, ≤ 200 KB JS lite tier; `content-visibility: auto` on long below-fold sections; image `width`/`height` everywhere |
| 5.3 | Cross-browser/device | Matrix in Section 5; special attention: iOS Safari scroll/pin behavior, Android Chrome Data-Saver → static tier, older Android WebView via in-app browsers (WhatsApp/Facebook in-app opens!) |
| 5.4 | SEO audit | Crawl (Screaming Frog or similar): titles, metas, canonical, heading order, alt text, internal anchors to all section IDs, sitemap coverage, JSON-LD re-validation, OG image render check in WhatsApp/X/LinkedIn preview debuggers (WhatsApp preview matters most for this audience) |
| 5.5 | 404 + polish | Custom 404 finalized (nav + call CTA); favicon set + OG defaults; print stylesheet for `/products#spec-table` (dealers/purchase managers print spec sheets) |
| 5.6 | Security headers | CSP (tight; allow only self + form endpoint + analytics + map embed), HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy; no third-party JS beyond analytics + form endpoint; `npm audit` clean; dependency versions pinned |
| 5.7 | Content freeze + proofread | Final copy pass against master brief terminology; re-verify every DECISIONS.md decision against operational reality and swap in any client inputs that have arrived since |

**Deliverables:** audit reports (a11y, Lighthouse CI, SEO crawl), fixed issues, security headers live on preview, print stylesheet.

**Acceptance criteria:** all 7 pages pass CWV budgets on the throttled profile; zero critical/serious axe issues; keyboard-only user can reach every CTA and submit both forms; securityheaders.com grade A; OG previews render correctly in WhatsApp; spec table prints legibly on one A4 page.

---

### Phase 6 — Launch — **2–4 days** (elapsed time may be longer due to DNS/email propagation)

| # | Task | Notes |
|---|---|---|
| 6.1 | Production hosting | Production project on **Cloudflare Pages** (decision 22 — free, fast in India); preview → production promotion flow; deploy from `main` only |
| 6.2 | DNS + SSL | Point apexdef.in (A/CNAME per host); apex + www with redirect to canonical; SSL issued and forced HTTPS; verify no mixed content |
| 6.3 | Domain emails | info@ / sales@ / dealers@apexdef.in — **client creates these at the registrar / Google Workspace / Zoho** (provider is the client's call — DECISIONS.md #20); dev supplies exact MX/SPF/DKIM/DMARC records to add; until live, forms forward to founder's Gmail via Web3Forms (never displayed on site). **Hard go-live gate — this flag-gate IS the decided state (DECISIONS.md #20, §4 row 10):** the email rows (footer + `/contact#reach`) ship behind a config flag, OFF by default, and turn on only once the mailboxes are live and receiving — mirroring the social-icons pattern — never printing dead addresses |
| 6.4 | Form deliverability test | Real submissions from 2+ networks; confirm arrival incl. spam-folder check; SPF/DKIM alignment for the form sender; set reply-to = enquirer. **Also:** send a test email to each of the three printed addresses (info@ / sales@ / dealers@apexdef.in) and confirm receipt before go-live — if any mailbox is dead, trigger the 6.3 config-flag fallback |
| 6.5 | WhatsApp click-to-chat verification | Both numbers (+91 84495 07181, +91 88002 54537) verified receiving via `wa.me` links with prefilled messages, from Android + iPhone, in-app browser included. **Primary WhatsApp = +91 84495 07181 (DECISIONS.md #21), listed first everywhere** |
| 6.6 | Analytics | **Cloudflare Web Analytics at launch** (decision 22 — free, cookieless, no consent banner, native to the Cloudflare Pages host; fits the perf budget); **GA4 optional later** if event-level funnels are needed. Conversion events (tel: clicks, wa.me clicks, form submits per form, PDF datasheet downloads, pack-selector interactions) wired via a light first-party beacon or added with the optional GA4 layer — Cloudflare Web Analytics alone does not carry custom events |
| 6.7 | Search Console + indexing | Property verified, sitemap submitted, indexing requested for all 7 pages; Bing Webmaster as bonus |
| 6.8 | Uptime monitor | Free tier (UptimeRobot or host-native) on `/` + `/contact`; alert to developer + client |
| 6.9 | Launch-day smoke test | Full click-through of every CTA and form on production domain, on a real low-end Android over mobile data; includes `tel:`, `wa.me`, both forms, PDF download, and a received test email at each printed mailbox (or verification that the email rows are flag-hidden per 6.3) |

**Deliverables:** live site at https://apexdef.in, analytics dashboards, Search Console verified, monitoring active, launch checklist signed off.

**Acceptance criteria:** definition-of-done list (Section 1) fully green on the production domain; first real enquiry path proven end-to-end (test call + test WhatsApp + test form all received by client); all three printed mailboxes verified receiving, or their display rows confirmed hidden behind the 6.3 config flag.

---

### Phase 7 — Post-Launch — **ongoing; ~1–2 days per month initially, then quarterly cadence**

| # | Task | Cadence |
|---|---|---|
| 7.1 | Content iterations | Replace placeholders as client confirmations land (BIS CM/L number → certification chips + `#quality` + `#certifications`; real plant/lab photos → `/about#plant` `#quality-lab`; testimonials → `#why-apex`/home) | as inputs arrive |
| 7.2 | Google Business Profile | Create/claim for the Bulandshahr address; align NAP with `#registered`; link site; photos from render/plant library; drives "DEF manufacturer near me" local queries | first month |
| 7.3 | Analytics review | Monthly review of conversion events (Section 7); iterate CTA copy/placement on evidence | monthly → quarterly |
| 7.4 | Norms/content review | **Quarterly** check of norms copy: TREM V phasing (from Oct 2026 — update "being phased in" wording as dates firm up), CPCB/CEV changes, spec table against current IS 17042 revision | quarterly |
| 7.5 | Dependency & security updates | `npm audit`/renovate pass; redeploy; re-run Lighthouse CI | monthly |
| 7.6 | Phase-2 candidates | Prioritize from data: Hindi toggle (likely first — audience fit), blog/knowledge articles (SEO), dealer portal, headless CMS | scoped separately |

**Acceptance criteria:** no swap-later register item (DECISIONS.md) older than one quarter without a client decision; norms copy never stale past a quarter; CWV field data (CrUX) stays green.

---

### Effort summary

| Phase | Estimate (days) |
|---|---|
| 0 — Brand & Assets Prep | 4–7 |
| 1 — Foundation | 3–4 |
| 2 — Pages (static content complete) | 7–9 |
| 3 — Motion layer | 4–6 |
| 4 — Signature 3D & scrollytelling | 8–11 |
| 5 — Hardening | 4–5 |
| 6 — Launch | 2–4 |
| **Total to launch** | **29–43 working days (~6–9 weeks)** |
| 7 — Post-launch | ongoing (1–2 d/month → quarterly) |

---

## 4. Dependency Map — Client Inputs vs Phases

All 14 inputs below were resolved by decision on 2026-07-17 — see DECISIONS.md; the "proceed meanwhile" column is now the plan of record, and the table is retained as the swap-later map for when real client inputs arrive.

References the master brief's open-questions list (§7) plus the additional client inputs consolidated in content.md §6. Rule: **no dependency ever stops the build** — each has a "proceed with meanwhile" path. All swap-later items tracked in a single PLACEHOLDERS.md in the repo, which mirrors content.md §6's consolidated register (every item now resolved by decision); the table below tracks the build-blocking subset with needed-by phases.

| # | Client input (brief §7) | Blocks | Needed by | Proceed with meanwhile |
|---|---|---|---|---|
| 1 | **BIS licence (CM/L number) under IS 17042 Part 1 — held / applied?** | Final wording of certification chips (`/#hero`), `#quality`, `/about#certifications`, footer certification line, label art BIS mark, Product JSON-LD claims | Phase 2 copy; Phase 5 content freeze (hard gate for any "BIS certified" claim) | **Single interim state — mirrored verbatim in content.md and design.md:** chip renders "BIS*" with a footnote reading only *"Manufactured to IS 17042 (Part 1); BIS licence details will be displayed on grant"*; no "BIS certified" claim anywhere (copy, meta, or schema), no BIS/ISI mark on labels or renders; footer certification line uses content.md's explicit unconfirmed variant. Swap in CM/L number the day it arrives (7.1). **If not held: this is a legal sale issue beyond the website — flag to client in writing** |
| 2 | **Final pack lineup beyond 20 L** (5/10/210/1000/bulk?) | Which SKU cards/anchors ship; illustration set (0.3) + post-launch Blender model set; selector entries; label art count | Phase 0 illustration work; Phase 2 `/products` | **Resolved (DECISIONS.md #3):** build all six per locked lineup (`def-5l`…`def-bulk`) — `def-20l` is brochure-confirmed and each card is one config entry; hide SKU cards behind a one-line config flag if the client trims the range |
| 3 | **"5+ years experience", founding year, capacity, districts served** | `#stats` counter values, `/about#story`, `#opportunity` pitch numbers | Phase 2 copy; Phase 5 freeze | **Resolved (DECISIONS.md #5/#7):** `#stats` ships the true-by-construction set — 18 parameters published · 6 pack sizes 5 L→tanker · 48 h doorstep · 100% of batches refractometer+density-checked; no founding-year or years-of-experience claim (the story anchors on TREM IV, Jan 2023). Swap-later: verified capacity/districts numbers may replace cells when confirmed — **ask capacity in one unit only, litres/day** (content.md and design.md share the denomination) |
| 4 | **Real client names / testimonials / logos usable?** | Testimonial/logo strip (candidate for `#why-apex` or marquee) | Phase 3 marquee content; else Phase 7 | Ship marquee with certification/standards chips instead of client logos; add testimonials post-launch (7.1) |
| 5 | **Actual product/label photos, or proceed with 3D renders from label art?** | Whether Phase 0 render set is interim or final; photo shoot scheduling | Phase 0 | **Resolved (DECISIONS.md #17/#18):** launch art = crafted SVG pack illustrations + one procedural Three.js hero built from the in-house label art; Blender renders/GLBs and the half-day Bulandshahr plant/product shoot are the Phase 7 upgrade path |
| 6 | **Delivery promises to keep** (24/7? 48 h? emergency?) | `#stats`, `#why-apex`, `/products#how-to-buy`, Dealers pitch — every delivery claim | Phase 2 copy; Phase 5 freeze (hard gate: claims must be operationally true) | **Resolved (DECISIONS.md #4):** ship "48 h doorstep delivery, most orders same-day or next-day" (brochure-sourced; the 92% figure dropped); "24/7, 365" downgraded to "emergency dispatch for regular customers — call us." Swap-later: broaden only when the client confirms operations support it |
| 7 | **Social media handles** (link existing / create fresh?) | Footer social icons; Organization JSON-LD sameAs | Phase 2 footer; Phase 6 | **Resolved (DECISIONS.md #13):** footer ships without a social row (cleaner than dead links), hidden behind a config flag; flip the flag + add sameAs when handles exist |
| 8 | **Label art source files** (from client or created in Phase 0.2?) | SVG pack illustrations + hero label texture (0.3), poster exports (0.4), datasheet branding (post-launch: Blender UV texturing/renders per design.md §6.1) | Phase 0 | **Resolved (DECISIONS.md #17):** label art designed in-house in 0.2 from brief facts (address, GST, standards); client approves before the illustration/render batch; any existing client label design swaps in if supplied |
| 9 | **Plant photos** (existing photos of Bulandshahr facility?) | `/about#plant`, `#quality-lab` imagery | Phase 2 | **Resolved (DECISIONS.md #18):** authored vector/gradient process-scene illustrations ship at launch, captioned as process-illustrative (never claiming any visual is "our plant"); licence-verified stock/AI renders optional per design.md §6.3/§6.2; replace via Phase 7 shoot |
| 10 | **Email provider choice + mailbox creation** (Google Workspace / Zoho / registrar) | Phase 6.3 domain emails; form "to" addresses; the three printed addresses in footer + `/contact#reach` | **Phase 6 go-live (hard gate)** — a test email to each of info@/sales@/dealers@apexdef.in must be received before launch (6.4/6.9) | Forms forward to founder's Gmail meanwhile (never displayed); site copy prints info@/sales@/dealers@apexdef.in from day one since addresses are locked in brief — **but** if mailboxes aren't live at launch, the email rows are hidden behind a config flag (6.3) rather than shipping dead addresses |
| 11 | **Exact registered legal entity name** ("Apex Environment Solutions" — proprietorship/LLP/Pvt Ltd?) (content.md §6 item 2 — content-declared launch blocker) | Footer © line, `/contact#registered` block, Organization `legalName` in JSON-LD | Phase 2 (schema + footer); Phase 5 freeze | **Resolved (DECISIONS.md #2):** display brand line "Apex Environment Solutions" as-is; omit `legalName` from JSON-LD; the © line uses the brand line until the registered name is confirmed — never guess a suffix |
| 12 | **Business hours + response-time commitment** (content.md §6 item 13) | `/contact#reach` hours row, `openingHours` in ContactPage schema, form success-message response promise | Phase 2 copy; Phase 5 freeze | **Resolved (DECISIONS.md #11):** hours ship as **Mon–Sat, 9:00 AM – 6:00 PM IST** (with `openingHours` in schema); enquiry response promise "within one working day", dealer desk "within 2 working days" |
| 13 | **Verified Google Maps pin / plus code** for Plot No. 415 (content.md §6 item 14) | `/contact#map` embed accuracy | Phase 2 (/contact build); verify before Phase 6 launch | Embed the address-based map meanwhile (lazy-loaded either way); verify the pin against the plot with the client before go-live — a wrong pin actively misdirects visitors |
| 14 | **MOQ / retail route for single cans** (content.md §6 item 5) | Products FAQ 2, Home FAQ 5, `def-5l` CTA line | Phase 2 copy; Phase 5 freeze | **Resolved (DECISIONS.md #8):** content.md's soft wording ships ("workshop-scale orders upward; single cans via dealers — tell us what you need"); firm MOQ numbers swap in only when confirmed |

**Escalation rule:** any dependency unresolved 5 working days before its "needed by" phase gets a written flag to the client with the fallback we will ship.

---

## 5. Testing & QA Checklist

### Device / browser matrix

| Class | Representative targets | Network profile |
|---|---|---|
| Low-end Android (PRIMARY persona) | Android 11–13, 2–4 GB RAM (e.g. Redmi 9A / Galaxy A0x class), Chrome | Throttled 3G + 4G; also Data-Saver ON (must yield `static` tier) |
| Mid Android | Android 13–15, 6–8 GB, Chrome + Samsung Internet | 4G |
| iOS | iPhone SE/12-class + recent iPhone, Safari | 4G + Wi-Fi |
| In-app browsers | WhatsApp + Instagram/Facebook in-app on Android & iOS (huge share of arrivals from WhatsApp shares) | 4G |
| Desktop | Chrome, Firefox, Safari (macOS), Edge; 1366×768 and 1920×1080 | Broadband + throttled |

### Functional checks (every device class)

- [ ] `tel:` links dial the correct number (+91 84495 07181 / +91 88002 54537) from header, mobile bar, product cards, contact strip, footer
- [ ] `wa.me` deep links open WhatsApp with the correct prefilled message (test app-installed and not-installed paths; test from in-app browsers)
- [ ] Contact form: required validation (name, phone), need-type dropdown options exact per brief, success + error states, email arrives with all fields
- [ ] Dealer form: all fields exactly per content.md §3.6 field spec (brief-required set: `name, firm, city/district, current business, monthly volume, phone required`), delivery verified
- [ ] Spam protection does not block legitimate fast submissions
- [ ] PDF datasheet downloads on mobile (and opens in in-app browsers)
- [ ] All per-SKU anchors `#def-5l`…`#def-bulk` and every brief section ID scroll to the right place (with sticky-header offset)
- [ ] Map embed loads lazily and doesn't tank LCP on /contact
- [ ] 404 page reachable and helpful; broken-link crawl clean

### Performance & tier checks

- [ ] Lighthouse CI, all 7 pages, throttled 4G + 4× CPU: LCP < 2.0 s, INP < 200 ms, CLS < 0.1
- [ ] Lite tier total JS ≤ 200 KB gzip; Three.js chunk absent from lite/static network waterfalls
- [ ] Poster image is the LCP element on every tier (Lighthouse trace)
- [ ] Save-Data ON → static tier; `slow-2g/2g/3g` effectiveType → static tier; no-WebGL2 device → lite tier
- [ ] Canvas mounts only post-idle on full tier; renderer pauses off-screen
- [ ] Font loading: no FOUT-induced CLS

### iOS Safari specifics (scroll effects are the risk area)

- [ ] Pinned sections (SCR scrollytelling) don't jitter with momentum scroll / rubber-banding
- [ ] URL-bar collapse doesn't break 100vh sections (use svh/dvh units)
- [ ] Lenis doesn't fight native momentum; anchor links still work
- [ ] View Transitions degrade to instant nav where unsupported — no flash or double render
- [ ] `-webkit-tap-highlight` and `:active` states feel right; no 300 ms delays

### Accessibility & reduced-motion audit

- [ ] `prefers-reduced-motion: reduce` → no decorative animation anywhere (walk all 7 pages); counters set instantly; scrollytelling shows static steps
- [ ] Keyboard-only: full nav, mobile bar, accordions, pack selector, both forms; visible focus on dark AND light sections; no scroll traps in pinned sections
- [ ] Screen reader spot-check (VoiceOver iOS + TalkBack): headings order, form labels/errors, image alt, canvas has meaningful fallback content
- [ ] Contrast: all token pairings pass WCAG AA; `--leaf-500` never used as body text
- [ ] Tap targets ≥ 48 px on the mobile bottom bar and product-card CTAs

### Content & legal

- [ ] Forbidden-strings scan on the final build: no "AdBlue" as brand, no "Apex Ad Blue", no price patterns, no cart/checkout language — scan covers body copy, alt text, meta tags, JSON-LD, and OG fields with no exceptions (no "AdBlue" keyword targeting in any on-site markup)
- [ ] VDA trademark footnote present in the mega-footer on **all pages** (standing footer element per brief); the word "AdBlue" appears in body copy only in the Knowledge educational FAQ
- [ ] All swap-later register items (DECISIONS.md) reviewed at freeze — decided wording shipped as-is, client sign-off recorded
- [ ] Print check: `/products#spec-table` prints cleanly (A4, legible, no dark backgrounds wasting ink) — yes, keep the print stylesheet: dealers and purchase managers print spec sheets

---

## 6. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | **Heavy 3D vs Indian mobile networks** — hero + scrollytelling wreck load times for the core audience | High if unmanaged | High (conversion loss) | The non-negotiable 3-tier system: tier decided pre-load; AVIF poster always LCP; Three.js tier-gated async chunk; budgets enforced in CI on throttled profiles, not dev machines; Phase 2 static site is independently launchable so 3D can never delay a working site |
| 2 | **Client asset delays** (label art, photos, confirmations) | High | Medium (schedule) | Dependency map (§4) gives every input a "proceed meanwhile" path — now the plan of record; authored SVG/vector art covers all imagery at launch (DECISIONS.md #17/#18), with licensed stock/AI renders optional; PLACEHOLDERS.md + 5-day escalation rule prevents silent slippage |
| 3 | **BIS status unclear** — claiming certification we can't prove, or launching into a compliance gap | Medium | High (legal/trust) | Soft wording ("manufactured to IS 17042 / ISO 22241") until CM/L number is in hand; no BIS mark on labels/renders until confirmed; hard gate at Phase 5 content freeze; written flag to client that BIS is mandatory to sell since the QCO (~Aug 2024) |
| 4 | **Competitor-site security lesson** — small industrial sites get defaced/hacked (typically via CMS plugins) | Medium | Medium (trust) | Stay fully static: no CMS, no server code, no database = minimal attack surface; pinned + audited dependencies; strict CSP + security headers (Phase 5.6); hosting platform handles TLS/patching; forms are third-party POST endpoints, no stored data on our origin |
| 5 | **Scrollytelling underperforms on iOS Safari / mid Androids** | Medium | Medium | Prototype SCR pipeline early in Phase 4 on real devices before polishing; dual-phase pin kept short; mobile gets step-based swipe variant; if unfixable, lite-tier illustrated version becomes the universal touch version — the content survives |
| 6 | **Form deliverability failure** (free-tier endpoint flagged as spam) | Medium | High (lost leads) | Deliverability test from multiple networks in Phase 6.4; SPF/DKIM alignment; WhatsApp + tel: as co-primary conversion paths mean a form outage never blocks contact; uptime monitor + monthly test submission |
| 7 | **Scope creep toward e-commerce/prices** (client asks for "just a price list") | Medium | High (legal/positioning) | Scope table (§2) signed with client at kickoff; brief's hard rules quoted in the contract of work; "Call for price" pattern demonstrated as the conversion mechanism |
| 8 | **Unverifiable claims shipped** (delivery promises, experience years, capacity) | Medium | Medium (trust/legal) | Every numeric/service claim resolved true-by-construction via DECISIONS.md (nothing unverifiable ships); Phase 5.7 freeze re-verifies each decision; the register doubles as the claims log alongside PLACEHOLDERS.md |
| 9 | **Single-developer bus factor / estimate overrun** | Medium | Medium | Strict phase ordering means the site is shippable at the end of Phases 2, 3, or 4 — content/conversion is never what gets cut. **Shedding order under overrun:** low-impact polish first (custom cursor, magnetic buttons, marquee, ambient video loops), and only then signature features. **Gate:** any signature feature (4.1–4.4) may be deferred only with written client sign-off — the premium 3D/scrollytelling layer is the client's headline requirement and is never dropped silently. Claude Code accelerates scaffolding, test writing, and audits |
| 10 | **Norms copy goes stale** (TREM V dates firm up, CPCB updates) | Certain over time | Low–Medium | "Being phased in" wording per brief (no hard TREM V dates at launch); quarterly norms review (7.4) is a standing calendar item, not best-effort |

---

## 7. Success Metrics

Primary conversions are **actions, not pageviews** — this is a call/WhatsApp business.

### Conversion metrics (primary)

| Metric | Definition | Target (first 90 days) | Measured via |
|---|---|---|---|
| Call click-through | Clicks on any `tel:` link (header, mobile bar, cards, footer) | Primary KPI — establish baseline month 1, then +20% q/q | Analytics custom event `click_call` with `placement` property |
| WhatsApp click-through | Clicks on any `wa.me` link | Co-primary — same treatment | Event `click_whatsapp` + `placement` |
| Enquiry submissions | Successful POSTs on `/contact#form` | Baseline month 1; form completion rate > 40% of form starts | Event `form_submit_contact` (+ `form_start` for funnel) |
| Dealer leads | Successful POSTs on `/dealers#dealer-form` | Tracked separately — highest-value lead type | Event `form_submit_dealer` |
| Datasheet downloads | PDF downloads from `/products#spec-table` | Secondary intent signal | Event `download_datasheet` |
| Combined contact rate | (calls + WhatsApp + forms) / sessions | > 4–6% of sessions [baseline to validate — B2B display-site norm] | Computed in analytics dashboard |

### Experience metrics (guardrails)

| Metric | Target | Measured via |
|---|---|---|
| LCP (field, mobile) | < 2.0 s p75 | CrUX / Search Console CWV report + lab Lighthouse CI |
| INP (field, mobile) | < 200 ms p75 | CrUX + lab |
| CLS | < 0.1 p75 | CrUX + lab |
| Lite-tier JS | ≤ 200 KB gzip (enforced) | CI bundle check |
| Uptime | ≥ 99.9% | Uptime monitor |

### Acquisition metrics (secondary)

- Search Console: impressions/clicks for "DEF manufacturer India", "diesel exhaust fluid Bulandshahr", "DEF for tractor", IS 17042 / ISO 22241 queries; all 7 pages indexed within 2 weeks of launch.
- Google Business Profile actions (calls, direction requests) once created (7.2).
- Traffic split by device/region confirming (or correcting) the mobile-first UP-region assumption — feeds Phase-2 prioritization (Hindi toggle).

### Instrumentation notes

- Wire all custom events in Phase 6.6; every CTA carries a `placement` property (e.g. `mobile-bar`, `hero`, `product-card-def-20l`) so we learn which placements convert.
- Cloudflare Web Analytics is the launch tool (decision 22 — cookieless, no consent banner needed, near-zero script cost); conversion events ride a light first-party beacon until/unless GA4 is added. If GA4 is adopted later: serve via minimal gtag, `defer`, and accept the ~50 KB cost on full/lite tiers only.
- Monthly analytics review in Phase 7.3 with one concrete iteration action per review.

---

*End of roadmap. Companion documents: content.md (all copy), design.md (visual + interaction spec). Any conflict between this document and the Master Brief resolves in favor of the brief.*
