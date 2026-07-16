# APEX D.E.F — Website Master Brief (LOCKED v2 — single source of truth for content.md / design.md / roadmap.md)

Every drafting agent MUST use the exact page names, slugs, section IDs, product lineup, terminology, and design tokens defined here so the three documents stay perfectly aligned.

---

## 1. Brand facts (verified from client — use verbatim)

- **Company name:** APEX D.E.F (Diesel Exhaust Fluid). Short form "APEX DEF" acceptable in running copy; wordmark styled "APEX D.E.F".
- **DEPRECATED name:** "Apex Ad Blue" (brochure) — never use. **Legal:** AdBlue® is a registered trademark of VDA (Germany), licensed only after VDA audit. Do NOT brand as AdBlue, do NOT say "AdBlue equivalent". Permitted: one footnote-style line such as "AdBlue® is a registered trademark of Verband der Automobilindustrie e.V. (VDA)" if the word ever appears in educational copy; category terms to use: **DEF (Diesel Exhaust Fluid), AUS 32, urea solution 32.5% (ISO 22241 / IS 17042)**.
- **Manufactured by / parent brand:** Apex Environment Solutions (green leaf logo exists).
- **Founder:** Naveen Singh.
- **Positioning:** Agriculture solutions first (tractors, harvesters) + full diesel SCR market (trucks, buses, construction, gensets).
- **Address:** Plot No. 415, Industrial Area, Bulandshahr, Uttar Pradesh — 203001, India. **GST:** 09BJNPN5877K1Z7.
- **Phones (call + WhatsApp CTAs):** +91 84495 07181, +91 88002 54537. (Brochure's +91 73032 89517 — do not use.)
- **Domain:** apexdef.in. **Planned emails:** info@apexdef.in (general), sales@apexdef.in (orders), dealers@apexdef.in (distributor enquiries). Founder personal email (naveenrahul1994@gmail.com) NOT shown on site; used only as initial form-forwarding inbox until domain mail exists.
- **Business model:** product DISPLAY site. No e-commerce, no cart, no prices. Buy = call / WhatsApp / enquiry form. Site's #1 job: make a fleet owner, farmer, dealer, or purchase manager trust APEX enough to call.

## 2. Verified product & industry facts (from research digests — see scratchpad/research-industry.md for sources)

- DEF = 32.5% automotive-grade urea + 67.5% demineralised water (eutectic → freezing point −11 °C; thaw = zero quality loss; ~7% expansion when frozen).
- Works via SCR: injected into exhaust, decomposes to ammonia, converts NOx → N₂ + H₂O. Not a fuel additive; dedicated tank; non-toxic, non-flammable.
- Consumption: ~3–6% of diesel (≈5 L DEF per 100 L diesel for BS-VI trucks; higher for high-load agri duty).
- Shelf life: 18 mo ≤25 °C, 12 mo ≤30 °C, 6 mo ≤35 °C → site claim: "12–18 months under proper Indian storage, away from sunlight".
- Standards: ISO 22241-1 spec table (urea 31.8–33.2%, density@20 °C 1.0870–1.0930 g/cm³, refractive index 1.3814–1.3843, alkalinity ≤0.2%, biuret ≤0.3%, aldehydes ≤5 mg/kg, insolubles ≤20 mg/kg, phosphate ≤0.5 mg/kg, metals Ca/Fe/Al/Mg/Na/K ≤0.5, Cu/Zn/Cr/Ni ≤0.2 mg/kg). India: IS 17042 (Part 1); **BIS certification MANDATORY since ~Aug 2024 (QCO S.O. 922(E))** — site must show BIS licence (CM/L) number once client provides it.
- Demand drivers: BS-VI (Apr 2020, ~90% NOx cut vs BS-IV, vehicles derate without DEF); **TREM Stage IV since Jan 2023 for >50 HP tractors** (TREM V phasing from Oct 2026 — say "being phased in", no hard dates); CEV IV (Oct 2021) for construction; **CPCB IV+ gensets since Jul 2023**.
- Contamination kills SCR catalysts (ppm-level metals). Compatible: HDPE, PP, SS304/316. Avoid: copper, brass, zinc, aluminium, mild steel, tap water. Dedicated dispensing equipment only.
- Brochure USPs (rewrite in APEX voice, drop UK-template lines): 24/7 delivery arrangement, 48 h delivery / most same-day, emergency supply, flexible scheduling, free fluid-management for regular customers, 5+ years industry experience (TO CONFIRM).

## 3. Product lineup (LOCKED for all documents)

| SKU id | Pack | Target buyer | Status |
|---|---|---|---|
| `def-5l` | 5 L can | Cars/SUVs, small tractors, retail | assumed — confirm |
| `def-10l` | 10 L can | Tractors, single-truck owners | assumed — confirm |
| `def-20l` | 20 L bucket/can | Trucks, harvesters, workshops | CONFIRMED (brochure) |
| `def-210l` | 210 L HDPE drum | Fleets, dealerships, fuel pumps | assumed — confirm |
| `def-1000l` | 1000 L IBC tote | Large fleets, OEM service, genset ops | assumed — confirm |
| `def-bulk` | Bulk tanker / loose | OEM plants, pump storage, institutions | assumed — confirm |

No prices anywhere; every product card CTA = "Call for price" (tel:) + WhatsApp + enquiry. Each SKU: spec identical (same fluid), differing pack/fitment/handling info. One shared ISO 22241/IS 17042 spec table + downloadable PDF datasheet (to be produced).

## 4. Site map (LOCKED — pages, slugs, section IDs)

Global elements: sticky glass header (logo, nav, "Call Now" button), mega-footer (nav, products, contact, GST, certifications, social, trademark footnote), floating WhatsApp button (desktop), **sticky bottom bar on mobile: [Call] [WhatsApp] [Enquire]**, custom 404, page transitions.

1. **Home `/`** — sections in order:
   - `#hero` — cinematic 3D hero (packaging + liquid), headline, dual CTA (Call / Explore Products), certification chips (ISO 22241 / IS 17042 / BIS*)
   - `#intro` — "What is APEX D.E.F" brand intro strip (split-text reveal, parent-brand mention)
   - `#stats` — counter band (purity ppm-level QC, litres capacity*, districts served*, 48 h delivery)
   - `#products` — product range rail (6 SKUs, interactive pack selector)
   - `#applications` — 4 application segments teaser (Agriculture hero-first, Transport, Construction & Mining, Gensets)
   - `#how-it-works` — signature SCR scrollytelling teaser (links to /what-is-def)
   - `#why-apex` — USP grid (fresh-batch manufacturing, lab-tested every batch, delivery promise, dealer support)
   - `#quality` — quality & compliance band (spec table peek, BIS/ISO badges, COA mention)
   - `#faq` — top 4–5 FAQs (accordion) + link
   - `#dealer-cta` — "Become a distributor" banner
   - `#contact-strip` — pre-footer contact strip (phones, address, map link, enquiry)
2. **About `/about`** — `#story` (founding, Apex Environment Solutions, founder), `#mission` (mission/vision/values), `#plant` (Bulandshahr facility & process walk), `#quality-lab` (batch testing, refractometer/density QC), `#certifications`, `#leadership` (founder profile), `#cta`
3. **Products `/products`** — `#overview` (one fluid, six packs), `#selector` (interactive 3D/photo pack selector: swap SKU → pack visual, capacity, fitment, buyer type), per-SKU anchors `#def-5l` … `#def-bulk`, `#spec-table` (full ISO 22241-1/IS 17042 table + PDF download), `#packaging-quality` (HDPE, tamper-evident, batch/expiry printing), `#how-to-buy` (3-step: call/WhatsApp → confirm qty/location → doorstep delivery), `#faq-products`
4. **Applications `/applications`** — `#agriculture` (TREM IV tractors >50 HP, harvesters; dosing 5–10%; pack advice), `#transport` (BS-VI trucks/buses; derate warning; 210L/IBC), `#construction` (CEV IV/V machines), `#gensets` (CPCB IV+ since Jul 2023), each segment: full-bleed imagery, norms context, recommended packs, CTA
5. **Knowledge `/what-is-def`** — `#what-is-def` (definition, composition, AUS 32), `#scr` (SIGNATURE scroll-driven SCR pipeline animation), `#norms-india` (BS-VI / TREM / CEV / CPCB timeline graphic), `#storage-handling` (shelf-life table, materials do/don't, contamination), `#faqs` (full accordion, 10–14 Qs), trademark footnote
6. **Dealers `/dealers`** — `#opportunity` (market growth pitch, BS-VI+TREM tailwind), `#support` (margins/territory/marketing support points — generic until confirmed), `#requirements` (storage, initial order, coverage), `#dealer-form` (name, firm, city/district, current business, monthly volume, phone required), `#dealer-faq`
7. **Contact `/contact`** — `#reach` (phones tap-to-call, WhatsApp deep link with prefilled message, emails, hours), `#form` (name, phone required, need type dropdown: Buy DEF / Become dealer / Bulk enquiry / Other, message), `#map` (Bulandshahr embed), `#registered` (address + GST)

## 5. Design language (LOCKED)

- **Concept name:** "Clean Fluid, Clean Fields" — precision-industrial meets agriculture. Premium, dark-first cinematic sections alternating with clean light sections. NOT the brochure's orange/gold — palette is a deliberate rebrand around the DEF category colour + parent-brand leaf green.
- **Palette (design tokens):**
  - `--ink-950 #060B14` (near-black navy, dark section bg)
  - `--navy-800 #0A1B3D` (deep apex blue)
  - `--blue-600 #1B4F9C` (primary brand blue)
  - `--def-400 #2FB6E9` (electric DEF-blue accent — liquid, glows, highlights)
  - `--leaf-500 #1F9D55` (Apex Environment leaf green — eco/agri accents only, never body text)
  - `--porcelain-50 #F6F9FC` (light bg), `--slate-500 #5B6B7F` (secondary text), white
  - Gradient signature: navy-800 → blue-600 → def-400 "liquid sweep"; thin 1px hairlines rgba(white,.08) on dark.
- **Type:** Display = **Clash Display** (Fontshare, free commercial) for headlines — tight, modern grotesk; Body/UI = **Inter variable** (tabular numerals for stats/specs). Type scale: hero clamp(2.75rem→6.5rem); generous negative tracking on display.
- **Motifs:** droplet, flowing-liquid line, urea molecule hexagon nodes, leaf (parent brand), NOx→N₂+H₂O particle transform. Iconography: **Phosphor Duotone** (blue+green duotone) for feature grids, Lucide-style 1.5px strokes for UI.
- **Art direction:** Blender-modeled packaging with real APEX label art (GLB, Draco) for hero + product selector; AI (FLUX blank-label + composited label art) for scene renders only; stock (Pexels/Unsplash/Pixabay — licenses verified) for Indian trucks/tractors/farm imagery; free stock video loops (Coverr/Pexels/Mixkit, 8–12 s, ≤3 MB, no audio) where used; Poly Haven HDRIs for render lighting. Avoid visible truck-maker logos & recognizable faces. Keep an asset licence log.
- **Signature interactions:**
  1. Hero: 3D pack + liquid particle field, scroll-rotated, AVIF poster as LCP, canvas mounts post-idle (full tier only)
  2. SCR pipeline scrollytelling (/what-is-def + home teaser): pinned section, red NOx particles → DEF injection (def-400 droplets) → catalyst → white/green N₂+H₂O — the educational showpiece
  3. Product pack selector: SKU switch swaps 3D model/photo with liquid-fill transition
  4. Norms timeline: horizontal scrub desktop / swipe mobile
  5. Standard premium layer: Lenis smooth scroll, GSAP SplitText blur-reveals, counters, scroll-velocity marquee, magnetic buttons + custom cursor (desktop only), View Transitions API page fades
- **Performance/fallback doctrine (non-negotiable):** three render tiers decided pre-load — `full` (WebGL + all motion), `lite` (no WebGL; GSAP reveals, posters, counters), `static` (Save-Data / slow network / reduced-motion: AVIF posters, CSS-only fades). Tier check: saveData, effectiveType, deviceMemory, hardwareConcurrency, WebGL2, prefers-reduced-motion via `gsap.matchMedia()`. Poster image is ALWAYS the LCP; `<noscript>` images behind every canvas; horizontal pins become native swipe carousels on touch; hover effects have tap equivalents. Budgets: LCP <2.0 s on 4G, INP <200 ms, CLS <0.1, ≤200 KB JS on lite tier, Three.js chunk tier-gated.
- **Tech stack (LOCKED):** Astro (static output) + GSAP 3.13+ (ScrollTrigger, SplitText — all free) + Lenis + ONE vanilla Three.js hero island (glTF/Draco) + Rive (or CSS/GSAP) for 2D process motion + View Transitions API. Hosting: static (Vercel/Netlify/Cloudflare Pages). Forms: Web3Forms/Formspree free tier → email + WhatsApp deep links (no backend). Analytics: Plausible or GA4. SEO: schema.org Organization/Product/FAQPage, sitemap, OG images.

## 6. Copy voice

Confident Indian manufacturer, precise, benefit-led, zero template fluff. Short declarative headlines ("Every batch lab-tested. Every litre traceable."). Hinglish-free but India-aware (districts, mandis, BS-VI, TREM). Numbers > adjectives. Every section ends with a path to call/WhatsApp. English now; Hindi toggle = Phase 2 roadmap item.

## 7. Open questions for client (mark inline as [CONFIRM] in content.md; collect in roadmap.md)

1. BIS licence (CM/L number) under IS 17042 Part 1 — held / applied? (mandatory to sell legally; must display)
2. Final pack lineup beyond 20 L (5/10/210/1000/bulk?)
3. "5+ years experience" + founding year; production capacity figure; districts/states served
4. Real client names/testimonials/logos usable?
5. Actual product/label photos or proceed with 3D renders from label art?
6. Delivery promises to keep (24/7? 48 h? emergency?) — must be operationally true
7. Social media handles to link (create fresh?)
