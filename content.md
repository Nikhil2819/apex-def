# APEX D.E.F — Website Content Plan

Production-ready copy deck for apexdef.in. Aligned to master-brief.md (LOCKED). All technical numbers sourced from research/research-industry.md. All formerly open questions are resolved by decision — see DECISIONS.md; swap-later items are flagged inline as italic notes.

---

## 1. Content principles

**Voice.** Confident Indian manufacturer. Precise, benefit-led, zero template fluff. Short declarative headlines. Numbers over adjectives ("An 18-parameter spec, published in full" beats "world-class quality"). India-aware (districts, mandis, BS-VI, TREM) but Hinglish-free. Every section ends with a path to call/WhatsApp/enquire. English now; Hindi toggle is Phase 2.

**Terminology rules (legal — non-negotiable).**
- Brand is **APEX D.E.F** (wordmark) / "APEX DEF" in running copy. Never "Apex Ad Blue".
- **Never brand or describe the product as "AdBlue" or "AdBlue equivalent".** AdBlue® is a registered trademark of VDA (Germany), usable only under VDA licence. The word may appear **only** in educational copy (e.g., one Knowledge FAQ) and only with the footnote: *"AdBlue® is a registered trademark of Verband der Automobilindustrie e.V. (VDA)."*
- Category terms to use: **DEF (Diesel Exhaust Fluid)**, **AUS 32**, **urea solution 32.5% (ISO 22241 / IS 17042)**.
- **No prices anywhere. No e-commerce language** (no cart, checkout, buy now, add to bag). Purchase paths are: call, WhatsApp, enquiry form. Product CTA is always "Call for Price".
- BIS: say "certified to IS 17042 (Part 1)" only once the CM/L licence number is confirmed; until then use the exact hedged lines given in this deck. Never print a standard edition year (2018 vs 2020) — write "IS 17042 (Part 1)".
- Emission-norm dates that are safe to print: **BS-VI — 1 April 2020**, **CEV IV — October 2021**, **TREM IV — 1 January 2023 (tractors >50 HP)**, **CPCB IV+ — 1 July 2023**. TREM V / CEV V: say **"being phased in from 2026"** — never hard dates.
- Shelf-life site claim: **"12–18 months under proper Indian storage, away from sunlight."** The full temperature table appears only on Knowledge and Products.

**Resolved-questions convention.** Every fact formerly marked for client confirmation has been resolved by decision — see DECISIONS.md. Items that get replaced when real data arrives (BIS licence number, social handles, email rows) carry inline italic *(Swap-later: …)* or config-flag notes.

---

## 2. Global content

### 2.1 Header (sticky glass header)

| Element | Copy |
|---|---|
| Nav labels (order) | Home · Products · Applications · What is DEF? · About · Dealers · Contact |
| Header button | **Call Now** (tel:+918449507181) |
| Logo alt text | "APEX D.E.F — Diesel Exhaust Fluid" |
| Skip link (a11y) | "Skip to content" |

("What is DEF?" is the nav label for the Knowledge page at `/what-is-def`.)

> **Alignment note:** this nav order and label set is authoritative. design.md §5.1 (header) must match it verbatim on every page.

### 2.2 Mega-footer

**Column 1 — Brand.**
> **APEX D.E.F**
> Diesel Exhaust Fluid (AUS 32) manufactured in Bulandshahr, Uttar Pradesh by Apex Environment Solutions. One fluid, six packs, lab-tested every batch.
> *(Social icons: hidden until handles exist — config flag.)*

**Column 2 — Company:** About Us · Applications · What is DEF? · Become a Dealer · Contact

**Column 3 — Products:** 5 L Can · 10 L Can · 20 L Bucket · 210 L Drum · 1000 L IBC Tote · Bulk / Tanker Supply · DEF Spec Sheet (PDF)

**Column 4 — Contact:**
> Plot No. 415, Industrial Area,
> Bulandshahr, Uttar Pradesh — 203001, India
> **Call / WhatsApp:** +91 84495 07181 · +91 88002 54537
> **Email:** info@apexdef.in · sales@apexdef.in · dealers@apexdef.in
> **GSTIN:** 09BJNPN5877K1Z7

*(Email rows ship behind a config flag — OFF until mailboxes are live; forms deliver via Web3Forms meanwhile.)*

**Certification line (full width, above legal row):**
> Manufactured to ISO 22241-1 / IS 17042 (Part 1); BIS licence details will be displayed on grant. Certificate of Analysis available with every batch.
>
> *(Swap-later: replace "BIS licence details will be displayed on grant" with "BIS licence No. CM/L-XXXXX" when the licence number is provided.)*
>
> *(This interim treatment is the single site-wide rule for BIS pre-grant — same rule governs the hero `BIS*` chip footnote (§3.1) and the Home #quality badges. design.md §2.7 and roadmap.md dependency 1 follow it.)*

**Trademark footnote (small print):**
> AdBlue® is a registered trademark of Verband der Automobilindustrie e.V. (VDA). APEX D.E.F is an independent Indian brand and is not affiliated with, licensed by, or endorsed by VDA.

**Copyright line:**
> © 2026 Apex Environment Solutions. All rights reserved. APEX D.E.F is a brand of Apex Environment Solutions.

### 2.3 Sticky mobile bottom bar

Labels: **[Call] [WhatsApp] [Enquire]**
- Call → tel:+918449507181
- WhatsApp → wa.me deep link with prefilled message (§2.4)
- Enquire → /contact#form

### 2.4 Floating WhatsApp button — prefilled messages

**Generic (site-wide default):**
> Hi APEX D.E.F, I want to enquire about DEF supply.
> Name:
> City/District:
> Vehicle or equipment:
> Pack size (5L / 10L / 20L / 210L / 1000L / Bulk):

**Product-page variant (SKU injected):**
> Hi APEX D.E.F, I'm interested in the {PACK} pack. Please share availability and price for delivery to {City}.

**Dealer-page variant:**
> Hi APEX D.E.F, I want to discuss a dealership/distribution opportunity.
> Name:
> Firm:
> City/District:
> Current business:

### 2.5 Generic CTA microcopy set (reuse everywhere)

| Context | Microcopy |
|---|---|
| Primary phone CTA | **Call Now** |
| Product card CTA | **Call for Price** |
| WhatsApp CTA | **WhatsApp Us** |
| Form CTA | **Send Enquiry** |
| Hero secondary | **Explore Products** |
| Spec sheet | **Download Datasheet (PDF)** |
| Dealer CTA | **Apply for Dealership** |
| Knowledge link | **Learn How SCR Works** |
| Map | **Get Directions** |
| Back-to-top | **Top** |
| Form submitting state | **Sending…** |

### 2.6 Custom 404 page

- **Headline:** "404. This page ran dry."
- **Body:** "The page you're looking for doesn't exist or has moved. Our DEF, on the other hand, is always in stock."
- **CTAs:** **Go Home** · **Explore Products** · **Call +91 84495 07181**

---

## 3. Per-page copy

## 3.1 Home `/`

### `#hero`
- **Overline (chip):** "DEF · AUS 32 · Made in India"
- **H1 (primary):** "32.5% urea. 67.5% demin water. Zero shortcuts."
- **H1 (alternate, if client prefers plainer):** "Diesel Exhaust Fluid, made to the numbers."
- **Subheadline:** "APEX D.E.F manufactures ISO 22241 / IS 17042-grade Diesel Exhaust Fluid in Bulandshahr, Uttar Pradesh — for tractors, trucks, construction machines and gensets across India."
- **CTAs:** **Call Now** (primary) · **Explore Products** (secondary)
- **Certification chips:** `ISO 22241-1` · `IS 17042 (Part 1)` · `BIS*`
  - *Asterisk footnote:* "Manufactured to IS 17042 (Part 1); BIS licence details will be displayed on grant."
  - *(Swap-later: replace the footnote with "BIS licence No. CM/L-XXXXX" when the licence number is provided.)*
- **3D hero poster alt text:** "APEX D.E.F 20-litre pack with flowing blue DEF liquid"
- **Scroll cue microcopy:** "Scroll"

### `#intro`
- **Overline:** "What is APEX D.E.F"
- **H2:** "Agriculture first. Every SCR engine after."
- **Body:** "APEX D.E.F is the Diesel Exhaust Fluid brand of Apex Environment Solutions — built in Bulandshahr for India's fields first. TREM IV made DEF a daily input for every new tractor above 50 HP; we made it as easy to buy as diesel. The same fluid runs BS-VI trucks and buses, CEV IV construction machines and CPCB IV+ gensets. One spec. Six pack sizes. A phone call away."
- **Micro-CTA:** "Know the company →" (links /about)

### `#stats` (counter band)
| Counter | Value | Label |
|---|---|---|
| 1 | **18** | "parameters in our published ISO 22241-1 spec — the full table, in the open" |
| 2 | **6** | "pack sizes, from a 5 L can to tanker supply" |
| 3 | **48 h** | "doorstep delivery — most orders same-day or next-day" |
| 4 | **100** | "% of batches cleared by refractometer and density checks before dispatch" |

> **Alignment note:** these four cells are authoritative — design.md §4.1 mirrors them verbatim (same values, same units). All four are true by construction — spec-parameter count, pack count, the brochure-sourced delivery promise, and per-batch QC coverage — so no cell depends on unverified client figures. Only the numeral animates (counts up); units and labels render statically in tabular Inter.

### `#products` (product range rail)
- **Overline:** "Product Range"
- **H2:** "One fluid. Six packs. Every duty cycle."
- **Intro line:** "The fluid never changes — every pack carries the same ISO 22241 / IS 17042 spec. Pick the size that matches how you run."
- **Card copy (title / one-liner / CTA is always "Call for Price"):**
  - **5 L Can** — "Glovebox-and-workshop size for cars, SUVs and small tractors."
  - **10 L Can** — "One tractor season's sensible starting point."
  - **20 L Bucket** — "The workhorse pack for trucks, harvesters and workshops."
  - **210 L Drum** — "Fleet-yard staple. One drum runs a BS-VI truck ~12,500 km."
  - **1000 L IBC Tote** — "Depot-scale supply with dispensing discipline built in."
  - **Bulk / Tanker** — "Loose supply for OEM plants, pumps and institutions."
- **Rail CTA:** "See all packs & full spec →" (/products)

### `#applications` (4-segment teaser)
- **Overline:** "Applications"
- **H2:** "Wherever diesel works, DEF works."
- **Tiles (title / line):**
  - **Agriculture** — "TREM IV tractors above 50 HP and combine harvesters. Our first market, still our biggest." (chip: "Since Jan 2023")
  - **Transport** — "BS-VI trucks and buses that derate without DEF. Keep the fleet at full torque." (chip: "Since Apr 2020")
  - **Construction & Mining** — "CEV IV machines from backhoes to excavators." (chip: "Since Oct 2021")
  - **Gensets** — "CPCB IV+ DG sets up to 800 kW now run SCR — and monitor DEF usage." (chip: "Since Jul 2023")
- **CTA:** "Find your segment →" (/applications)

### `#how-it-works` (SCR scrollytelling teaser)
- **Overline:** "The Science"
- **H2:** "NOx goes in. Nitrogen and water come out."
- **Body:** "Inside every SCR system, DEF turns harmful nitrogen oxides into the same nitrogen and water vapour that make up clean air. Scroll through the full pipeline — from injection to catalyst — in 60 seconds."
- **CTA:** **Learn How SCR Works** (/what-is-def#scr)
- **Teaser animation caption:** "Red NOx particles meet DEF droplets and leave the tailpipe as N₂ + H₂O."

### `#why-apex` (USP grid)
- **Overline:** "Why APEX"
- **H2:** "Every batch lab-tested. Every litre traceable."
- **Grid items (4 cards — the brief's locked USP set; icon + title + 1–2 lines):**
  1. **Fresh-batch manufacturing** — "Made to order in Bulandshahr, not warehoused for months. DEF degrades with age and heat; ours doesn't get the chance."
  2. **Lab-tested, every batch** — "Refractometer and density QC clear every batch against the ISO 22241-1 window before a single can is filled. COA on request with every supply."
  3. **48-hour delivery, emergency dispatch** — "Most orders reach your gate same-day or next-day; 48 hours at the outside. Fleet running dry on a Sunday? Call — flexible scheduling and emergency dispatch for regular customers."
  4. **Dealer & fleet support** — "Territory support, fluid-management help for regular buyers, and straight answers on the phone."
- **Alignment note:** 4 cards exactly, matching design.md §4.1's 4-card row and 4 Phosphor Duotone icons (factory / flask / truck / handshake). The former "Right-materials packaging" USP is covered at Products `#packaging-quality`; emergency/scheduled supply is merged into card 3.

### `#quality` (quality & compliance band)
- **Overline:** "Quality & Compliance"
- **H2:** "We publish our spec. Ask others for theirs."
- **Body:** "Most DEF sellers claim ISO 22241. We print the table — urea 31.8–33.2%, density 1.0870–1.0930 g/cm³ at 20 °C, metals held to fractions of a ppm — and our own lab clears every batch against it before dispatch, with full-specification analysis on a defined cadence."
- **Spec-peek rows (4 shown + 1 revealed on hover/tap; link to full table):**
  - Urea content 31.8–33.2%
  - Density @20 °C 1.0870–1.0930 g/cm³
  - Refractive index @20 °C 1.3814–1.3843
  - Biuret ≤0.3%
  - *(revealed row)* Copper ≤0.2 mg/kg — caption: "the catalyst poison we hold to a fifth of a ppm"
- **Badges row:** ISO 22241-1 · IS 17042 (Part 1) · BIS* (asterisk footnote per §2.2 / #hero treatment) *(Swap-later: footnote becomes "BIS licence No. CM/L-XXXXX" when the licence number is provided.)*
- **CTA:** "See the full spec table →" (/products#spec-table)

### `#marquee` (scroll-velocity certification/standards strip — placement per design.md; recommended between `#quality` and `#faq`)
- **Chips (looping, in order):** `ISO 22241-1` · `IS 17042 (Part 1)` · `AUS 32` · `32.5% urea · 67.5% demin water` · `Lab-tested every batch` · `COA with every supply` · `Batch + expiry printed on every pack` · `Made in Bulandshahr, UP`
- **Rules:** certification/standards chips only — no client names or logos until testimonials exist (DECISIONS.md #14: none at launch). No "BIS certified" wording in any chip until the CM/L number exists (the `BIS*` chip lives in #hero/#quality only, with its footnote). On the static/reduced-motion tier the strip renders as a wrapped static chip row (no loop).

### `#faq` (top FAQs accordion — 5)
- **H2:** "Straight answers."
1. **Q: What is DEF and does my vehicle need it?** A: "DEF (Diesel Exhaust Fluid, also called AUS 32) is a 32.5% urea solution injected into the exhaust of SCR-equipped diesels. If your vehicle is a BS-VI truck/bus/car, a TREM IV tractor above 50 HP, a CEV IV machine or a CPCB IV+ genset — it needs DEF to run legally and at full power."
2. **Q: How much DEF will I use?** A: "Typically 3–6% of your diesel consumption — about 5 litres of DEF per 100 litres of diesel for a BS-VI truck. High-load agricultural duty runs at the upper end."
3. **Q: What happens if I run out?** A: "BS-VI vehicles warn, then derate — power and speed are cut by the ECU until you refill. Don't test it; keep a can in the cab."
4. **Q: How long does DEF last in storage?** A: "12–18 months under proper Indian storage — sealed pack, under 30 °C, away from sunlight. Every APEX pack carries its manufacture and expiry date."
5. **Q: How do I buy APEX D.E.F?** A: "Call or WhatsApp +91 84495 07181, tell us your pack size and location, and we arrange doorstep delivery. No minimums that don't make sense — from a single 5 L can via our dealers to full tanker loads."
- **CTA:** "All 14 FAQs →" (/what-is-def#faqs)

### `#dealer-cta` (banner)
- **H2:** "DEF demand is compounding. Be the supplier your district calls."
- **Body:** "BS-VI, TREM IV and CPCB IV+ have put DEF into every new diesel purchase. APEX dealers get a manufacturer's pricing, fresh stock and real support."
- **CTA:** **Apply for Dealership** (/dealers)

### `#contact-strip` (pre-footer)
- **H2:** "Talk to a person, not a portal."
- **Row items:** 
  - Phones: "+91 84495 07181 · +91 88002 54537 (call or WhatsApp)"
  - Address: "Plot No. 415, Industrial Area, Bulandshahr, UP — 203001" + **Get Directions**
  - CTA: **Send Enquiry** (/contact#form)

---

## 3.2 About `/about`

### `#story`
- **Overline:** "Our Story"
- **H2:** "From Bulandshahr's fields to every SCR engine."
- **Body:**
  > "APEX D.E.F began inside Apex Environment Solutions with a simple observation: when TREM IV arrived in January 2023, lakhs of Indian farmers running tractors above 50 HP suddenly needed a fluid most had never heard of — and much of what reached them was repackaged, degraded or diluted.
  >
  > Founder **Naveen Singh** decided the answer had to be manufactured, not traded. From Plot No. 415 in Bulandshahr's Industrial Area, Apex Environment Solutions built a dedicated DEF line: demineralised water, automotive-grade urea, and a lab that clears every batch against the ISO 22241-1 / IS 17042 specification before it ships.
  >
  > Agriculture came first. The rest of the diesel world followed — BS-VI transporters, CEV IV contractors, CPCB IV+ genset operators. The promise to all of them is the same one we made to the first farmer: the number on the label is the number in the can."
- **Pull-quote:** "The number on the label is the number in the can."
- **Image caption:** "Apex Environment Solutions facility, Industrial Area, Bulandshahr"

### `#mission`
- **H2:** "Why we exist."
- **Mission:** "To make certified, fresh, honestly-priced Diesel Exhaust Fluid available to every Indian farmer, fleet and factory — as easily as they buy diesel."
- **Vision:** "An India where no SCR engine derates, no catalyst dies of contamination, and cleaner air is a by-product of business as usual."
- **Values (3 cards):**
  1. **Purity is non-negotiable** — "ppm-level limits are not marketing. They're the spec, and we test to it, batch after batch."
  2. **Farmer-first, always** — "We explain, we deliver to the village workshop, we answer the phone at harvest time."
  3. **Say only what we can supply** — "No promise on this website that our dispatch team hasn't signed off on."

### `#plant`
- **Overline:** "The Facility"
- **H2:** "A DEF plant is a water plant first."
- **Body:** "Good DEF is 67.5% water — so the process starts there. Raw water is demineralised until conductivity, not appearance, says it's ready. Automotive-grade urea (low biuret, low aldehyde) is dissolved in controlled batches, filtered to hold insolubles under 20 mg/kg, and circulated until concentration sits inside the 31.8–33.2% window. Only stainless steel and HDPE ever touch the fluid — the same materials rule we ask our customers to follow. Filling, capping and batch-coding run in one line, and every pack leaves with its manufacture and expiry date printed."
- **Process steps (numbered strip):** 1. Demineralise water → 2. Dissolve automotive-grade urea → 3. Filter & circulate → 4. Lab clearance → 5. Fill, seal, batch-code
- **Alignment note:** 5 steps with these exact labels are authoritative — design.md §4.2's process walk renders 5 panels (including a Lab clearance panel and its FLUX image prompt), not 4.
- **Image captions:** "Demineralised water treatment stage" · "Batch dissolution vessels — stainless steel contact surfaces" · "Filling line with tamper-evident capping"

### `#quality-lab`
- **Overline:** "Quality Control"
- **H2:** "No batch ships until the lab says so."
- **Body:** "Every batch is sampled and cleared by refractometer and density QC against ISO 22241-1 / IS 17042 (Part 1): refractive index (1.3814–1.3843 at 20 °C) and density (1.0870–1.0930 g/cm³) confirm concentration on 100% of batches. Full-specification analysis — alkalinity, biuret, aldehydes, insolubles and the trace metals held to 0.2–0.5 mg/kg limits, because at ppm level copper and zinc are catalyst poisons — runs on a defined cadence. A Certificate of Analysis is available for every batch on request; bulk deliveries carry one by default."
- **Callout chip:** "Refractometer + density check on 100% of batches"
- **Image caption:** "Digital refractometer verification against the 1.3814–1.3843 window"

### `#certifications`
- **H2:** "Certified, not just claimed."
- **Body:** "APEX D.E.F is manufactured to ISO 22241-1 and IS 17042 (Part 1) — the Indian standard made mandatory for all DEF manufactured or imported in India under the Quality Control Order S.O. 922(E), in force since August 2024. Products must carry the ISI Standard Mark under a BIS licence. BIS certification under IS 17042 (Part 1): licence details will be displayed here on grant."
  - *(Swap-later: replace the final sentence with "Our BIS licence: CM/L-XXXXX" when the licence number is provided.)*
- **Badge row:** ISO 22241-1 conformity · IS 17042 (Part 1) · GSTIN 09BJNPN5877K1Z7 *(Swap-later: add a "BIS / ISI Mark" badge on licence grant.)*
- **Note (small print):** "Certificates of Analysis are batch-specific and supplied with deliveries or on request."

### `#leadership`
- **Overline:** "Leadership"
- **H2:** "Naveen Singh, Founder."
- **Body:** "Naveen Singh founded Apex Environment Solutions to build environmental products that Indian operators actually trust — starting with the fluid their engines can't legally run without. He leads production, quality and the dealer network from Bulandshahr."
- **Quote:** "'A farmer who buys our can once should never need to check it twice.' — Naveen Singh"

### `#cta`
- **H2:** "See the fluid behind the words."
- **Body:** "Ask for a batch COA, a sample, or a plant visit."
- **CTAs:** **Call Now** · **Send Enquiry**

---

## 3.3 Products `/products`

### `#overview`
- **Overline:** "Products"
- **H1:** "One fluid. Six packs."
- **Body:** "Everything on this page holds the same certified fluid — 32.5% automotive-grade urea in demineralised water, tested per batch to ISO 22241-1 / IS 17042. The only choice you make is the pack: from a 5 L can behind the tractor seat to a tanker feeding your depot. No prices are listed on this site — call or WhatsApp for today's rate and delivery to your district."
- **Chips:** "Same spec in every pack" · "Batch + expiry printed" · "COA on request"

### `#selector` (interactive pack selector)
- **H2:** "Pick your pack."
- **Selector labels/microcopy:** "Pack size" (switcher) · "Capacity" · "Best for" · "Fitment & handling" · "Call for Price" (CTA on every state)
- **Helper line under selector:** "Not sure? Tell us your vehicle count and monthly diesel use on WhatsApp — we'll size it for you."

### `#def-5l` — 5 L Can
- **Title:** "APEX D.E.F 5 L Can"
- **Blurb:** "The keep-one-anyway pack. Fits behind a seat or in a car boot, and saves a stranded, derated journey."
- **Target buyer:** Cars & SUVs with SCR, small tractors, retail counters.
- **Fitment/handling:** "Pour with a dedicated DEF funnel only. Store sealed, out of sunlight. If frozen (below −11 °C), thaw fully before use; quality is unaffected."
- **CTA line:** "Call for price — single cans available via dealers and retail counters."

### `#def-10l` — 10 L Can
- **Title:** "APEX D.E.F 10 L Can"
- **Blurb:** "A season-smart size for the single-tractor or single-truck owner. Roughly 200 litres of diesel worth of running per can at typical dosing."
- **Target buyer:** TREM IV tractor owners, single-truck operators.
- **Fitment/handling:** "Two-hand pour; use a dedicated DEF funnel only. Reseal after every top-up — open containers absorb dust and lose water."
- **CTA line:** "Call for price and village/workshop delivery options."

### `#def-20l` — 20 L Bucket
- **Title:** "APEX D.E.F 20 L Bucket"
- **Blurb:** "Our proven workhorse pack. The size workshops standardise on: enough for a harvest week or ~400 L of diesel worth of truck running."
- **Target buyer:** Trucks, combine harvesters, workshops and service points.
- **Fitment/handling:** "Tamper-evident lid; batch and expiry printed on the pack. Decant with dedicated DEF equipment only — never a diesel funnel."
- **CTA line:** "Call for price — carton and pallet quantities available."

### `#def-210l` — 210 L HDPE Drum
- **Title:** "APEX D.E.F 210 L Drum"
- **Blurb:** "The fleet-yard staple. One drum covers roughly 12,500 km of BS-VI truck running — a month of duty for many operators."
- **Target buyer:** Fleets, vehicle dealerships and service centres, fuel pumps.
- **Fitment/handling:** "HDPE drum with 2-inch bung; dispense with a dedicated DEF drum pump (SS304/316 or polypropylene wetted parts). Keep bunged when not in use; store under shade."
- **CTA line:** "Call for price — ask about scheduled drops."

### `#def-1000l` — 1000 L IBC Tote
- **Title:** "APEX D.E.F 1000 L IBC Tote"
- **Blurb:** "Depot-scale DEF with dispensing discipline built in. The right unit for operations consuming 1,000 litres a month or more."
- **Target buyer:** Large fleets, OEM service networks, genset operators, distributors.
- **Fitment/handling:** "HDPE tote in steel cage; bottom valve suits gravity or pump dispensing. Pair with an auto shut-off DEF nozzle. Keep out of direct sun — tote walls pass UV."
- **CTA line:** "Call for price — ask about refill scheduling."

### `#def-bulk` — Bulk / Tanker Supply
- **Title:** "APEX D.E.F Bulk & Tanker Supply"
- **Blurb:** "Loose supply straight from the plant into your storage — for OEM plants, fuel-pump DEF dispensers and institutional buyers. Every delivery carries its batch Certificate of Analysis."
- **Target buyer:** OEM plants, fuel pumps with DEF storage, institutions, government fleets.
- **Fitment/handling:** "Receiving tank must be HDPE, FRP or SS304/316 with dedicated lines — no copper, brass, zinc, aluminium or mild steel anywhere in the circuit. We can advise on storage setup before first delivery."
- **CTA line:** "Call +91 84495 07181 for tanker scheduling and supply agreements."

### `#spec-table`
- **H2:** "The specification. In full."
- **Intro:** "This is the ISO 22241-1 / IS 17042 (Part 1) quality requirement every APEX batch is tested against. Most sellers claim it; we publish it."

| Parameter | Unit | Limit | Test method |
|---|---|---|---|
| Urea content | % (m/m) | 31.8 – 33.2 | ISO 22241-2 Annex B/C |
| Density @ 20 °C | g/cm³ | 1.0870 – 1.0930 | ISO 12185 / ISO 3675 |
| Refractive index @ 20 °C | — | 1.3814 – 1.3843 | ISO 22241-2 Annex C |
| Alkalinity as NH₃ | % (m/m) | max 0.2 | Annex D |
| Biuret | % (m/m) | max 0.3 | Annex E |
| Aldehydes | mg/kg | max 5 | Annex F |
| Insoluble matter | mg/kg | max 20 | Annex G |
| Phosphate (PO₄) | mg/kg | max 0.5 | Annex H |
| Calcium | mg/kg | max 0.5 | Annex I |
| Iron | mg/kg | max 0.5 | Annex I |
| Copper | mg/kg | max 0.2 | Annex I |
| Zinc | mg/kg | max 0.2 | Annex I |
| Chromium | mg/kg | max 0.2 | Annex I |
| Nickel | mg/kg | max 0.2 | Annex I |
| Aluminium | mg/kg | max 0.5 | Annex I |
| Magnesium | mg/kg | max 0.5 | Annex I |
| Sodium | mg/kg | max 0.5 | Annex I |
| Potassium | mg/kg | max 0.5 | Annex I |

- **Table footnote:** "Appearance: clear, colourless liquid with a faint ammonia odour. Water: demineralised, conductivity-controlled."
- **CTA:** **Download Datasheet (PDF)** (note to dev: PDF to be produced from this table + pack data)

### `#packaging-quality`
- **H2:** "The pack protects the spec."
- **Body:** "DEF that leaves the plant perfect can still be ruined by the wrong container. Every APEX pack is HDPE — one of the few materials DEF can live in indefinitely — with tamper-evident closures so you know it wasn't opened, topped or swapped. Batch number, date of manufacture and expiry are printed on every unit, so you can check age before you pour. Store packs sealed, under 30 °C and out of sunlight, and the fluid inside stays in spec for 12–18 months."
- **Feature chips:** "HDPE" · "Tamper-evident cap" · "Batch + expiry printed" · "UV-shielded storage advice on pack"
- **Image caption:** "Batch code, manufacture and expiry printing on the 20 L bucket"

### `#how-to-buy`
- **H2:** "Buying takes three steps. None of them is a website."
1. **Call or WhatsApp** — "+91 84495 07181 or +91 88002 54537. Tell us your pack size — or your vehicles and monthly diesel, and we'll size it."
2. **Confirm quantity & location** — "We confirm stock, today's price and delivery to your district, with GST invoice to your firm."
3. **Doorstep delivery** — "Most orders arrive same-day or next-day; 48 hours at the outside. Bulk deliveries include the batch COA."
- **Under-steps line:** "No portals, no order forms. A phone call and it's on its way." *(Deliberately avoids the words "cart"/"checkout" so the roadmap's forbidden-strings CI check passes with zero whitelist exceptions.)*

### `#faq-products` (accordion — 5)
1. **Q: Is the fluid different between the 5 L can and the tanker?** A: "No. Every pack is filled from the same lab-cleared batch stock, to the same ISO 22241-1 / IS 17042 spec. Packs differ only in size, closure and handling."
2. **Q: Is there a minimum order quantity?** A: "For direct factory supply we serve workshop-scale orders upward; single cans are available through dealers and retail counters. Tell us what you need — we'll route it sensibly."
3. **Q: Do I get a Certificate of Analysis?** A: "Yes — every batch is documented. COAs accompany bulk deliveries by default and are available on request for any packed order."
4. **Q: My pack froze in the hills. Is it spoiled?** A: "No. DEF freezes at −11 °C and thaws with zero quality loss. Packs are filled with headspace for the ~7% expansion. Thaw fully and shake gently before use."
5. **Q: How do I verify I got genuine APEX D.E.F?** A: "Check three things: the tamper-evident seal is intact, the batch number and expiry are printed (not stickered), and the fluid is clear and colourless. When in doubt, WhatsApp us the batch number — we'll confirm it against our lab register."

---

## 3.4 Applications `/applications`

**Page H1:** "Built for every duty cycle that burns diesel."
**Page intro:** "Emission norms put SCR — and therefore DEF — into every corner of Indian diesel. Find your segment below: the rule that applies to you, how much DEF you'll use, and the pack that fits."

> **Alignment note:** the recommended-pack lists below are authoritative per segment — design.md §4.4's mini product-card lists mirror them exactly. The genset list deliberately favours smaller packs over bulk (standby sets consume slowly; shelf-life freshness beats bulk convenience).

### `#agriculture`
- **Overline chip:** "TREM Stage IV · since 1 January 2023"
- **H2:** "Agriculture. Our first field."
- **Body:** "Since 1 January 2023, every new tractor above 50 HP sold in India meets TREM Stage IV — and most do it with SCR, which means a DEF tank next to the diesel tank. Combine harvesters, typically above 75 HP, are in the same boat. TREM Stage V is being phased in from 2026, extending after-treatment further across the range. APEX D.E.F was built for this market first: packs a farmer can lift, dates a farmer can read, and delivery that understands harvest doesn't wait."
- **Dosing guidance:** "Field duty is heavy duty: expect DEF consumption of 5–10% of diesel on high-load work like tillage and harvesting — roughly 5–10 L of DEF per 100 L of diesel. Carry a spare can during season."
- **Recommended packs:** 5 L Can (spare-behind-the-seat) · 10 L Can (per-season starter) · 20 L Bucket (harvesters, farm workshops)
- **Image caption:** "TREM IV tractors above 50 HP carry a dedicated DEF tank — usually with a blue cap."
- **CTA:** **Call for Price** · "WhatsApp your tractor model — we'll confirm dosing."

### `#transport`
- **Overline chip:** "BS-VI · since 1 April 2020"
- **H2:** "Transport. Full torque or nothing."
- **Body:** "BS-VI, in force nationwide since 1 April 2020, cut permitted NOx by roughly 90% versus BS-IV — and virtually every BS-VI truck and bus does it with SCR. The ECU is unforgiving: run the DEF tank dry or fill it with poor fluid, and the vehicle warns, then derates — speed and power capped until the system is satisfied. On a contract with a delivery window, that's money. APEX keeps fleets moving with drum and IBC supply, scheduled drops and emergency dispatch for regular customers."
- **Dosing guidance:** "Plan on 3–6% of diesel consumption — the working rule is 5 L of DEF per 100 L of diesel. A truck running 10,000 km a month typically consumes roughly 150–170 L of DEF — the same arithmetic behind one 210 L drum lasting ~12,500 km."
- **Recommended packs:** 20 L Bucket (in-cab spare) · 210 L Drum (fleet yard) · 1000 L IBC (depot) · Bulk (pump/terminal storage)
- **Image caption:** "BS-VI truck instrument cluster: the DEF gauge sits next to the fuel gauge for a reason."
- **CTA:** **Call for Price** · "Fleet rates on WhatsApp — send vehicle count."

### `#construction`
- **Overline chip:** "CEV Stage IV · since October 2021"
- **H2:** "Construction & Mining. Uptime is the product."
- **Body:** "CEV Stage IV has applied to construction equipment vehicles since October 2021, bringing SCR to backhoe loaders, excavators, cranes and wheel loaders across the 37–560 kW range. Stage V is being phased in, tightening things further. On a site, a derated machine is a stopped machine — and site dust is exactly the contamination SCR systems hate. Sealed APEX packs with dedicated dispensing keep the fluid clean from our plant to your machine's tank."
- **Dosing guidance:** "Heavy-cycle earthmoving runs DEF at the higher end of the 3–6%-of-diesel band. Size your site stock on machine-hours, not calendar weeks — we can help with the arithmetic."
- **Recommended packs:** 20 L Bucket (per-machine) · 210 L Drum (site store) · 1000 L IBC (large sites)
- **Image caption:** "CEV IV machines: fill DEF with dedicated equipment only — site dust is a catalyst killer."
- **CTA:** **Call for Price** · "Site-supply scheduling on request."

### `#gensets`
- **Overline chip:** "CPCB IV+ · since 1 July 2023"
- **H2:** "Gensets. The newest DEF buyers in India."
- **Body:** "CPCB IV+ norms, effective 1 July 2023, require new DG sets up to 800 kW to run after-treatment — including SCR with monitored DEF usage. Facility managers who never stocked DEF now must: hospitals, housing societies, telecom sites, factories. The catch is shelf life — standby gensets consume DEF slowly, so buy pack sizes you'll finish within 12 months and check expiry dates before every top-up. APEX packs print both."
- **Dosing guidance:** "Consumption tracks genset load and run-hours. For standby duty, favour 20 L packs over drums — fresher fluid beats bulk convenience. Prime-power sites should size monthly and consider IBC supply."
- **Recommended packs:** 20 L Bucket (standby sets) · 210 L Drum (prime power) · 1000 L IBC (multi-genset facilities)
- **Image caption:** "CPCB IV+ DG sets log DEF usage — running without it is a compliance event."
- **CTA:** **Call for Price** · "AMC-friendly scheduled supply for facilities."

---

## 3.5 Knowledge `/what-is-def`

**Page H1:** "What is DEF? Everything a diesel owner should know."
**Page intro:** "Fifteen minutes here saves a derated vehicle, a poisoned catalyst, or a bad purchase. No jargon that isn't explained, no claim without a number."

### `#what-is-def`
- **H2:** "DEF, defined."
- **Body:** "DEF — Diesel Exhaust Fluid, internationally standardised as **AUS 32** — is a solution of exactly 32.5% high-purity automotive-grade urea in 67.5% demineralised water. It is clear, colourless, non-toxic and non-flammable, with a faint ammonia smell. 32.5% isn't arbitrary: it's the eutectic composition, the mix with the lowest and sharpest freezing point (−11 °C), so the fluid behaves predictably in any climate. DEF is **not a fuel additive** — it never touches your diesel. It lives in its own tank (usually blue-capped) and is injected into the exhaust, where it neutralises NOx emissions. Quality is governed worldwide by ISO 22241 and in India by IS 17042, with BIS certification mandatory for manufacturers since August 2024."
- **Fact chips:** "32.5% urea" · "Freezes at −11 °C" · "Non-toxic, non-flammable" · "Not a fuel additive"

### `#scr` (signature scrollytelling — step captions)
- **Section H2:** "How SCR works. Scroll the pipeline."
- **Step 1 — The problem leaves the engine.** "Diesel combustion is hot and efficient — and that heat creates NOx, the nitrogen oxides behind smog and acid rain. Watch the red particles stream out of the engine."
- **Step 2 — DEF is injected.** "A dosing module sprays a fine mist of DEF into the hot exhaust stream — a few millilitres at a time, metered by the ECU."
- **Step 3 — Heat splits urea into ammonia.** "At exhaust temperatures, the urea in DEF decomposes into ammonia (NH₃) and CO₂. The ammonia is the working agent."
- **Step 4 — The catalyst does the swap.** "Inside the SCR catalyst, ammonia meets NOx on the catalyst surface and reduces it — nitrogen oxides are literally taken apart."
- **Step 5 — Clean air comes out.** "What exits the tailpipe is nitrogen (N₂) and water vapour (H₂O) — the same gases that make up most of the air you breathe. NOx is cut by roughly 90%."
- **Step 6 — Why purity decides everything.** "This chemistry runs on a catalyst that ppm-level copper, zinc or iron can permanently poison. That's why the ISO 22241 spec exists — and why what's in the can matters more than what's on the label."
- **Post-animation CTA:** "See the spec we test against →" (/products#spec-table)

### `#norms-india` (timeline entries)
- **H2:** "The rules that made DEF essential in India."
- **Timeline entries (year · title · line):**
  1. **April 2020 — BS-VI (on-road).** "India jumps straight from BS-IV to BS-VI. NOx limits drop ~90% for heavy diesel vehicles; SCR becomes standard fitment on trucks and buses. Every one of them consumes DEF."
  2. **October 2021 — CEV Stage IV (construction).** "Construction equipment vehicles from 37–560 kW get their emission step-up; SCR spreads to backhoes, excavators and cranes."
  3. **January 2023 — TREM Stage IV (tractors >50 HP).** "The agriculture turning point: every new tractor above 50 HP needs modern after-treatment — SCR on most models. DEF arrives in the village workshop."
  4. **April 2023 — BS-VI OBD Phase-II.** "On-board diagnostics tighten: vehicles now actively police DEF level and quality in real time, with derate as the penalty."
  5. **July 2023 — CPCB IV+ (gensets).** "New DG sets up to 800 kW require after-treatment with monitored DEF usage. Facility managers become DEF buyers."
  6. **August 2024 — BIS certification mandatory for DEF.** "Quality Control Order S.O. 922(E) takes effect: DEF made or imported in India must be BIS-certified to IS 17042 (Part 1) and bear the ISI mark. Unmarked fluid is now illegal to sell."
  7. **2026 onward — TREM V / CEV V phase-in.** "The next stages are being phased in from 2026, extending after-treatment across more power bands. Direction of travel: more SCR, more DEF."
- **Timeline footnote:** "TREM V / CEV V schedules are under notification and subject to change; dates above 2026 are indicative."
- **Alignment note:** this 7-entry list (incl. April 2023 — BS-VI OBD Phase-II, verified in research/research-industry.md) is the single milestone set for all documents. design.md §4.5's storyboard renders **7 nodes** (ghost-numeral sequence 2020 → 2021 → 2023 → 2023 → 2023 → 2024 → 2026+, mobile carousel 7 dots), the Dealers mini norms-strip shows **7 dots**, and roadmap.md task 4.4's milestone list matches these seven (including the Aug 2024 BIS QCO node).

### `#storage-handling`
- **H2:** "Storage & handling. Where good DEF goes bad."
- **Intro:** "DEF isn't dangerous — but it is delicate. Two things ruin it: heat and contamination. Both are fully preventable."

**Shelf-life table (ISO 22241-3):**
| Constant storage temperature | Expected shelf life |
|---|---|
| ≤ 25 °C | 18 months |
| ≤ 30 °C | 12 months |
| ≤ 35 °C | 6 months |
| > 35 °C | Test before use — significant quality loss |

- **Table footnote:** "Practical Indian rule: 12–18 months in a sealed pack, under 30 °C, away from sunlight. Every APEX pack prints manufacture and expiry dates."
- *(The ≤10 °C → 36-month row is deliberately omitted: research/research-industry.md flags it as unverified against the primary ISO table, and constant ≤10 °C storage is irrelevant to the Indian audience.)*

**DO:**
- Store sealed, in shade, ideally under 30 °C — never in direct sunlight.
- Use dedicated DEF equipment only: pumps, funnels, nozzles and hoses that touch nothing else.
- Choose compatible materials: HDPE, polypropylene, stainless steel 304/316, FRP; EPDM or FKM (Viton) seals.
- Rinse dispensing equipment with demineralised water or fresh DEF.
- Check the printed expiry date before every top-up; keep containers closed against dust.
- Leave headspace if freezing is possible — DEF expands ~7% when frozen, and thaws with zero quality loss.

**DON'T:**
- Never top up with tap water, RO reject, fertilizer-grade urea solution, or diesel — even once.
- Never let DEF touch copper, brass, zinc, aluminium, mild/carbon steel, nickel plating, PVC or nitrile (Buna-N) seals — leached ions poison the SCR catalyst.
- Never reuse diesel or oil containers, funnels or jugs for DEF.
- Never store above 35 °C or in sunlight — urea decomposes and concentration drifts out of spec.
- Never buy unsealed, undated or decanted fluid.
- **Spill note:** "DEF is non-hazardous and non-flammable. Rinse spills with water; it crystallises slippery when dry and can corrode some metals and concrete over time."

### `#faqs` (full accordion — 14)
- **H2:** "Fourteen straight answers."

1. **What is DEF, in one line?** "A 32.5% solution of high-purity urea in demineralised water, injected into diesel exhaust to convert NOx into harmless nitrogen and water vapour."
2. **Is DEF the same thing as AdBlue?** "AdBlue® is a brand name — a trademark of the German automotive association VDA, licensed only to audited producers. DEF, AUS 32 and 'urea solution 32.5%' are the generic names for the same category of fluid, defined by ISO 22241 / IS 17042. APEX D.E.F is an independent Indian brand manufactured to that same specification; we are not a VDA licensee and do not sell under the AdBlue name. What matters to your engine is the spec on the label — and we publish ours in full." *(Footnote: AdBlue® is a registered trademark of Verband der Automobilindustrie e.V. (VDA).)*
3. **Is DEF a fuel additive? Do I mix it with diesel?** "No, and never. DEF has its own tank — usually the blue-capped filler. Even a small amount of DEF in diesel (or diesel in DEF) means a service visit. If you cross-fill by mistake, don't start the engine; call your workshop."
4. **How much DEF does my vehicle consume?** "Typically 3–6% of diesel consumption — the working rule is 5 L of DEF per 100 L of diesel for a BS-VI truck. High-load duty (tillage, harvesting, fully-loaded haulage) runs toward 8–10%."
5. **What happens if I run out of DEF on the road?** "The vehicle warns well in advance. Ignore it and the ECU derates — torque and speed are progressively limited until you refill with good DEF. On many vehicles a dry tank plus a restart means limp mode. Keep a sealed 5 or 10 L can aboard."
6. **Does DEF freeze? What about winter?** "DEF freezes at −11 °C — rare in most of India outside high-altitude regions. Freezing is harmless: the fluid expands ~7% (packs have headspace for it) and returns to full quality when thawed. Vehicles heat their own DEF tanks; you don't need additives — in fact, anti-freeze additives are contamination."
7. **What is DEF's shelf life?** "Temperature decides: 18 months stored under 25 °C, 12 months under 30 °C, 6 months at 35 °C. Practical Indian answer: 12–18 months in a sealed pack, in shade. Check the expiry printed on every APEX pack."
8. **Can I top up DEF with a little tap water?** "No — this is the fastest way to destroy an SCR system. Tap water carries calcium, iron and other minerals that the spec limits to fractions of a ppm because they permanently poison the catalyst. A catalyst replacement costs more than years of DEF. Top up only with in-spec DEF."
9. **What happens if the system overdoses or underdoses DEF?** "Dosing is ECU-controlled, but fluid quality skews it. Under-dosing (or weak, out-of-spec fluid) lets NOx through — OBD flags it and the vehicle can derate. Over-dosing wastes fluid and can cause ammonia slip and white crystal deposits in the exhaust. In-spec concentration (31.8–33.2% urea) is what keeps dosing honest."
10. **How do I know a DEF meets the spec?** "Three checks: (1) the pack — sealed, tamper-evident, batch and expiry printed; (2) the paper — ask for the batch Certificate of Analysis; (3) the mark — since August 2024, DEF sold in India must be BIS-certified to IS 17042 (Part 1) and carry the ISI mark. A workshop refractometer reading between 1.3814–1.3843 confirms concentration in seconds."
11. **Is DEF dangerous to handle?** "No. It's non-toxic and non-flammable. Wash skin splashes with water. Rinse spills — dried DEF crystallises and gets slippery, and it can corrode some metals over time. Keep it out of reach of children like any chemical."
12. **Which vehicles and machines in India need DEF?** "BS-VI diesel trucks, buses and many cars/SUVs (since April 2020); tractors above 50 HP under TREM IV (since January 2023) and most combine harvesters; CEV IV construction machines (since October 2021); and new DG sets up to 800 kW under CPCB IV+ (since July 2023). If your machine has a second, blue-capped tank — it needs DEF."
13. **Where can I buy APEX D.E.F? Do you do bulk?** "Call or WhatsApp +91 84495 07181 / +91 88002 54537. We deliver packed sizes (5 L to 1000 L IBC) to your doorstep and run tanker supply for OEM plants, pumps and institutions — every bulk delivery with its batch COA. No website ordering — a call does it."
14. **How do I become an APEX D.E.F dealer?** "We're appointing dealers and distributors district-by-district. If you have storage, local reach and appetite for a product every new diesel vehicle needs, apply on our Dealers page or WhatsApp 'DEALER' to +91 84495 07181."

- **Page-bottom trademark footnote:** "AdBlue® is a registered trademark of Verband der Automobilindustrie e.V. (VDA). APEX D.E.F is an independent Indian brand and is not affiliated with, licensed by, or endorsed by VDA."

---

## 3.6 Dealers `/dealers`

### `#opportunity`
- **Overline:** "Dealership & Distribution"
- **H1:** "Sell what every new diesel must buy."
- **Body:** "Three regulations built this market and none of them is going away. Since April 2020, every BS-VI truck and bus consumes DEF at roughly 5% of its diesel. Since January 2023, every new tractor above 50 HP joined them. Since July 2023, so did new DG sets up to 800 kW. Analysts estimate India's DEF market at roughly USD 400–450 million and growing 6–8% a year — and TREM V / CEV V phase-ins from 2026 only widen the funnel. DEF is a repeat-purchase consumable: the customer you win this month buys again next month. APEX dealers buy from the manufacturer — fresh batches, honest dates, and a brand built to be defended in your district."
- **Stat chips:** "~5 L DEF per 100 L diesel" · "Tractors >50 HP: DEF since Jan 2023" · "Gensets ≤800 kW: DEF since Jul 2023" · "Market growing 6–8%/yr (est.)"

### `#support`
- **H2:** "What APEX puts behind you."
- **Support points:**
  1. **Manufacturer pricing** — "You buy at factory terms, not through layers."
  2. **Fresh-batch stock** — "Stock rotates from live production, not a trader's godown. Long dating on every pack."
  3. **Territory clarity** — "District-wise appointment so your investment isn't undercut next door."
  4. **Marketing & education material** — "Counter displays, pack literature, and the content on this site — in your hands for customer conversations."
  5. **Technical backup** — "A manufacturer on the phone for spec questions, COAs and complaint resolution."
  6. **Supply reliability** — "Scheduled replenishment; emergency dispatch when your stock runs hot."

### `#requirements`
- **H2:** "What we look for."
- **Requirements list:**
  1. **Covered storage** — "Shaded, ventilated space for palletised packs; DEF must stay under 30 °C and out of sunlight."
  2. **An opening order** — "A commercially serious first stock — sized to your market, agreed on a call."
  3. **Local reach** — "Existing access to fleet operators, tractor owners, workshops, fuel pumps or facility managers in your area."
  4. **Basic handling discipline** — "Sell sealed packs only; first-in, first-out rotation; no decanting."
  5. **GST registration** — "For invoicing and compliance."

### `#dealer-form`
- **H2:** "Apply for a dealership."
- **Intro line:** "Two minutes. We respond within 2 working days."
- **Fields (label · placeholder · helper text):**
  - **Your name*** · "Full name" · —
  - **Firm name** · "Business / shop name" · "As on GST registration, if registered."
  - **Phone (WhatsApp)*** · "10-digit mobile number" · "We'll reach you here first."
  - **City / District*** · "e.g. Bulandshahr, UP" · "The territory you want to serve."
  - **Current business** · "e.g. lubricant distributor, tractor spares, fuel pump" · "What you sell today — helps us gauge fit."
  - **Expected monthly volume** · dropdown: "Under 500 L / 500–2,000 L / 2,000–10,000 L / 10,000 L+" · "Best guess is fine."
  - **Message** · "Anything else we should know" · —
- **Validation:** "Please enter your name." / "Enter a valid 10-digit mobile number." / "Please tell us your city or district."
- **Submit button:** **Apply for Dealership**
- **Success message:** "Application received. Our dealer team will call you on the number provided. For a faster start, WhatsApp 'DEALER' to +91 84495 07181."
- **Error message:** "Something went wrong and your application didn't send. Please try again, or WhatsApp 'DEALER' to +91 84495 07181."
- **Alignment note:** this field list is authoritative and design.md §4.6 must match it field-by-field (roadmap.md §5 QA tests the form per field): **Current business is a free-text input** (not a dropdown — dealer backgrounds are too varied to enumerate), and the **Message textarea is a deliberate addition** beyond the brief's minimum field list (low-friction optional context; the brief's list is a floor, not a ceiling).

### `#dealer-faq` (accordion — 5)
1. **Q: Do I need prior experience with DEF?** A: "No — most of our best conversations start with lubricant, spares and fuel-station businesses. We'll train you on storage, handling and the customer pitch."
2. **Q: What investment is needed to start?** A: "An opening stock order plus covered storage. Exact numbers depend on your territory and volume plan — they're agreed on a call, not published here."
3. **Q: Will I get territory protection?** A: "Appointments are made district-wise with the intent that dealers build their market without being undercut. Terms are set out in the dealer agreement."
4. **Q: How is stock delivered and how fast?** A: "From our Bulandshahr plant, on scheduled replenishment; most orders dispatch within 48 hours."
5. **Q: What margins can I expect?** A: "DEF is a volume-and-repeat business; dealer economics are shared during the appointment discussion. We don't publish pricing on this site."

- **Section-end CTA band:** "Prefer talking to typing? Call +91 84495 07181 and ask for the dealer desk."

---

## 3.7 Contact `/contact`

### `#reach`
- **H1:** "Reach APEX D.E.F."
- **Intro:** "For orders, dealership, bulk supply or a technical question — the fastest route is a call or WhatsApp. Forms are answered within one working day."
- **Contact blocks:**
  - **Call (tap-to-call):** "+91 84495 07181" · "+91 88002 54537" — label: "Sales & orders"
  - **WhatsApp:** button **WhatsApp Us** — deep-link prefilled message: "Hi APEX D.E.F, I want to enquire about DEF supply. Name: / City: / Pack size:"
  - **Email:** "info@apexdef.in (general) · sales@apexdef.in (orders) · dealers@apexdef.in (dealership)"
  - **Hours:** "Monday–Saturday, 9:00 AM – 6:00 PM IST"

### `#form`
- **H2:** "Send an enquiry."
- **Fields (label · placeholder · helper):**
  - **Your name*** · "Full name" · —
  - **Phone (WhatsApp)*** · "10-digit mobile number" · "We reply by call or WhatsApp first."
  - **I want to*** · dropdown: "Buy DEF / Become a dealer / Bulk enquiry / Other" · —
  - **Message** · "Pack size, quantity, location — whatever helps us respond faster" · —
- **Validation messages:** "Please enter your name." / "Enter a valid 10-digit mobile number." / "Please choose what your enquiry is about."
- **Submit button:** **Send Enquiry** (submitting state: "Sending…")
- **Success message:** "Enquiry received — we'll call you within one working day. Need it faster? Call +91 84495 07181 now."
- **Error message:** "Your enquiry didn't send. Please try again — or skip the form entirely and call +91 84495 07181."
- **Privacy microcopy (below button):** "We use your details only to respond to this enquiry. No spam, no lists."

### `#map`
- **H2:** "Find the plant."
- **Map caption:** "Apex Environment Solutions — Plot No. 415, Industrial Area, Bulandshahr, Uttar Pradesh 203001"
- **CTA:** **Get Directions**
- *(Launch checklist: verify the Google Maps pin / plus code matches the Plot No. 415 address before embedding.)*

### `#registered`
- **H2:** "Registered details."
- **Body:**
  > **Apex Environment Solutions**
  > Plot No. 415, Industrial Area, Bulandshahr, Uttar Pradesh — 203001, India
  > **GSTIN:** 09BJNPN5877K1Z7

---

## 4. SEO pack (per page)

> All meta titles ≤60 chars, descriptions ≤160 chars. OG images: 1200×630 renders per page (pack hero for Home/Products; segment imagery for Applications; SCR diagram for Knowledge).

### Home `/`
- **Meta title:** `APEX D.E.F | DEF (Diesel Exhaust Fluid) Manufacturer India` (58)
- **Meta description:** `ISO 22241 / IS 17042 Diesel Exhaust Fluid made in Bulandshahr, UP. Packs from 5 L to bulk tanker. Lab-tested every batch. Call or WhatsApp APEX D.E.F.` (150)
- **Primary keywords:** DEF manufacturer India, diesel exhaust fluid India, AUS 32 manufacturer
- **Secondary:** DEF supplier Uttar Pradesh, IS 17042 DEF, urea solution 32.5%, DEF for BS6 vehicles
- **OG title:** "APEX D.E.F — Diesel Exhaust Fluid, made to the numbers."
- **OG description:** "32.5% urea. 67.5% demin water. Zero shortcuts. Lab-tested DEF from Bulandshahr for tractors, trucks, machines and gensets."

### Products `/products`
- **Meta title:** `DEF Packs 5 L to Bulk | ISO 22241 Spec | APEX D.E.F` (51)
- **Meta description:** `One ISO 22241 / IS 17042 fluid, six packs: 5 L, 10 L, 20 L, 210 L drum, 1000 L IBC, bulk tanker. Full published spec table. Call or WhatsApp for supply.` (152)
- **Primary keywords:** DEF 20 litre price [intent capture — page answers via call CTA], DEF pack sizes India, DEF 210 litre drum
- **Secondary:** DEF IBC 1000 litre, bulk DEF supplier, DEF spec sheet ISO 22241-1, DEF with COA
- **OG title:** "One fluid. Six packs. The full spec, published."
- **OG description:** "From a 5 L can to tanker supply — the same certified DEF, batch-tested and dated. See the complete ISO 22241-1 table."

### Applications `/applications`
- **Meta title:** `DEF for Tractors, Trucks, Machines & Gensets | APEX D.E.F` (57)
- **Meta description:** `DEF for TREM IV tractors, BS-VI trucks & buses, CEV IV construction machines and CPCB IV+ gensets. Dosing guidance and right pack sizes for each duty.` (150)
- **Primary keywords:** diesel exhaust fluid for tractors, DEF for BS6 trucks, DEF for gensets CPCB IV+
- **Secondary:** TREM IV tractor DEF, DEF for harvesters, DEF for construction equipment, DEF consumption per 100 litres diesel
- **OG title:** "Wherever diesel works, DEF works."
- **OG description:** "TREM IV fields, BS-VI highways, CEV IV sites, CPCB IV+ gensets — the norm, the dosing and the pack for each."

### Knowledge `/what-is-def`
- **Meta title:** `What is DEF (AUS 32)? SCR, Storage & FAQs | APEX D.E.F` (54)
- **Meta description:** `What is DEF? How SCR converts NOx to nitrogen and water, India's emission-norms timeline, storage and shelf life, plus 14 straight answers on DEF.` (146)
- **Primary keywords:** what is DEF, what is AUS 32, how SCR works, DEF shelf life India
- **Secondary:** DEF freezing point, DEF full form (AUS 32), DEF consumption rate, can I use tap water in DEF tank
- **OG title:** "What is DEF? Everything a diesel owner should know."
- **OG description:** "The 32.5% science, the SCR pipeline, the norms timeline and 14 straight answers — no jargon, no fluff."

### About `/about`
- **Meta title:** `About APEX D.E.F | DEF Manufacturer, Bulandshahr UP` (51)
- **Meta description:** `APEX D.E.F is the DEF brand of Apex Environment Solutions, Bulandshahr, UP. Fresh-batch production, every batch lab-tested to IS 17042 / ISO 22241.` (147)
- **Primary keywords:** Apex Environment Solutions, DEF manufacturer Bulandshahr, DEF manufacturer Uttar Pradesh
- **Secondary:** IS 17042 DEF manufacturer, DEF factory India, Naveen Singh Apex *(add "BIS certified DEF manufacturer" only after the CM/L licence number is confirmed and displayed — no "BIS certified" phrasing anywhere in markup/meta before then, per roadmap dependency 1)*
- **OG title:** "From Bulandshahr's fields to every SCR engine."
- **OG description:** "The people, plant and lab behind APEX D.E.F — and the promise that the number on the label is the number in the can."

### Dealers `/dealers`
- **Meta title:** `DEF Dealership & Distributorship | APEX D.E.F India` (51)
- **Meta description:** `Partner with a DEF manufacturer. BS-VI, TREM IV and CPCB IV+ norms are compounding DEF demand across India. Apply for an APEX D.E.F dealership today.` (148)
- **Primary keywords:** DEF dealership India, DEF distributorship, AUS 32 dealership
- **Secondary:** DEF business opportunity, DEF wholesale supplier, diesel exhaust fluid distributor UP
- **OG title:** "Sell what every new diesel must buy."
- **OG description:** "District-wise dealer appointments from a manufacturer: factory terms, fresh batches, real support. Apply in two minutes."

### Contact `/contact`
- **Meta title:** `Contact APEX D.E.F | Call, WhatsApp or Enquire` (46)
- **Meta description:** `Call +91 84495 07181, WhatsApp, or send an enquiry. APEX D.E.F, Plot No. 415, Industrial Area, Bulandshahr, UP 203001. GSTIN 09BJNPN5877K1Z7.` (141)
- **Primary keywords:** APEX DEF contact, DEF supplier near me, DEF supplier Bulandshahr
- **Secondary:** buy DEF Uttar Pradesh, DEF bulk enquiry, DEF WhatsApp order
- **OG title:** "Talk to a person, not a portal."
- **OG description:** "Call or WhatsApp +91 84495 07181 for DEF supply, dealership or bulk enquiries. Bulandshahr, UP."

**SEO keyword note (trademark rule — final):** "AdBlue"-containing queries are **NOT targeted in any on-site markup** — no meta keywords tag (obsolete for SEO anyway), no meta title/description, no alt text, no hidden text, no structured data. roadmap.md's forbidden-strings CI check (which scans meta and alt text) is authoritative and carries **zero exceptions** for site markup. The word appears on the site only in Knowledge FAQ 2's educational copy and the standing footer trademark footnote (§2.2). If the client later wants paid-search bids on such queries, that is an ads-account decision requiring legal review, documented in a separate ad-campaign brief — never in site metadata or page markup.

---

## 5. Schema.org (JSON-LD) plan

| Page | Types | Key fields |
|---|---|---|
| All pages | `Organization` (referenced via @id from home) + `BreadcrumbList` (all subpages) | — |
| Home `/` | `Organization` + `WebSite` | Organization: name "APEX D.E.F", url, logo, founder (Person: "Naveen Singh"), parentOrganization "Apex Environment Solutions", address (PostalAddress: Plot No. 415, Industrial Area, Bulandshahr, UP 203001, IN), contactPoint ×2 (telephone +91-84495-07181 / +91-88002-54537, contactType "sales", areaServed "IN", availableLanguage ["en","hi"]), email info@apexdef.in, taxID/vatID GSTIN 09BJNPN5877K1Z7. Omitted by decision: legalName (entity suffix unverified), foundingDate (no founding-year claim), sameAs (omit until social handles exist) |
| Products `/products` | `Product` (one canonical product; 6 `hasVariant` or `additionalProperty` pack entries) + `FAQPage` (#faq-products) + `BreadcrumbList` | Product: name "APEX D.E.F Diesel Exhaust Fluid (AUS 32)", brand "APEX D.E.F", manufacturer → Organization @id, description, image (pack renders), additionalProperty: urea 32.5%, standard "ISO 22241-1 / IS 17042 (Part 1)". **No `offers` node — no price is published; omit Offer entirely** |
| Applications `/applications` | `BreadcrumbList` + `ItemList` (4 segments) | ItemList of WebPageElement anchors with names Agriculture/Transport/Construction & Mining/Gensets |
| Knowledge `/what-is-def` | `FAQPage` (all 14 Q&As) + `BreadcrumbList` | mainEntity: 14 Question/acceptedAnswer pairs verbatim from §3.5 |
| About `/about` | `AboutPage` + `Organization` (extended) + `Person` + `BreadcrumbList` | Person: Naveen Singh, jobTitle "Founder", worksFor → Organization @id |
| Dealers `/dealers` | `FAQPage` (#dealer-faq) + `BreadcrumbList` | 5 Q&As |
| Contact `/contact` | `ContactPage` + `BreadcrumbList` | Organization contactPoint reiterated; openingHours Mo–Sa 09:00–18:00 IST |

Rules: one `FAQPage` per URL max; all JSON-LD in a single `@graph` per page; Organization declared once (home) and referenced by `@id` elsewhere; sitemap.xml + canonical URLs on all pages.

---

## 6. Content gaps & client-input list

All items in this list have been resolved by decision — see DECISIONS.md. Swap-later register lives there too.

