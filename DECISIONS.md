# APEX D.E.F — Assumption Register (all open questions resolved by decision)

Client instructed: "take all the calls yourself … fill the gaps with what you think is the best option." This file records every such call so any item can be swapped later without archaeology. Rule followed throughout: **never publish a claim that could be false** — unverifiable specifics are replaced with claims that are true by construction, not invented numbers.

| # | Open question (content.md §6) | Decision | Rationale |
|---|---|---|---|
| 1 | BIS licence CM/L number | Ship the **interim state** site-wide: chip `BIS*` + footnote "Manufactured to IS 17042 (Part 1); BIS licence details will be displayed on grant." No "BIS certified" claim anywhere. | Legally safe either way; swap-in is a one-line change. Client has been flagged in writing (roadmap dep. 1) that BIS is mandatory to sell. |
| 2 | Registered legal entity name | Display "Apex Environment Solutions" as-is; omit `legalName` from JSON-LD. | Never guess a Pvt Ltd/LLP suffix. |
| 3 | Pack lineup | Ship **all six SKUs** (5 L, 10 L, 20 L, 210 L, 1000 L IBC, bulk). Each card is one config entry — trivially removable. | Standard Indian DEF lineup; 20 L confirmed by brochure. |
| 4 | Delivery promises | Keep **"48 h doorstep delivery, most orders same-day or next-day"** (client's own brochure claims 48 h / 92% same-day — we dropped the 92%). "24/7, 365" downgraded to "emergency dispatch for regular customers — call us." | Brochure-sourced, softened to survive reality. |
| 5 | Home #stats counters | Final set — all true by construction: **18** spec parameters published · **6** pack sizes 5 L→tanker · **48 h** doorstep delivery · **100%** of batches refractometer+density-checked before dispatch. | Replaces unverifiable capacity/districts numbers. |
| 6 | Per-batch test scope | Claim: refractometer + density on 100% of batches; full-spec analysis "on a defined cadence." | Minimum credible QC for any DEF plant; matches brochure's "lab tested". |
| 7 | Founding year / "5+ years" | No founding year, no years-of-experience claim. Story anchors on the **TREM IV (Jan 2023)** turning point instead. | Unverifiable; the norm-driven story is stronger anyway. |
| 8 | MOQ / retail route | Soft wording ships: "workshop-scale orders upward; single cans via dealers — tell us what you need." | |
| 9 | Fluid-management programme | Kept as soft "fluid-management help for regular buyers." | |
| 10 | Plant visits / samples | Kept: "Ask for a batch COA, a sample, or a plant visit." | Normal manufacturer behaviour. |
| 11 | Business hours / response time | **Mon–Sat, 9:00 AM – 6:00 PM IST**; enquiry response "within one working day"; dealer desk "within 2 working days." | Standard UP industrial hours. |
| 12 | Google Maps | Address-based embed (lazy, click-to-activate facade). Pin verification noted for launch checklist. | |
| 13 | Social handles | **Footer ships without a social row** (cleaner than dead links); add when handles exist. | |
| 14 | Testimonials / client logos | None at launch; marquee uses certification/standards chips. | |
| 15 | 5 L spout / virgin HDPE / UN-grade IBC claims | All dropped — plain "HDPE", "funnel-pour", "HDPE tote in steel cage." | Never claim pack construction we can't see. |
| 16 | 210 L ≈ 12,500 km estimate | **Kept** — it is arithmetic from the 5%-of-diesel dosing rule, not a claim about APEX. | |
| 17 | Label & product art | **Authored in-house**: vector label system from brochure brand facts; product visuals = crafted SVG pack illustrations + one procedural Three.js hero (code-built 20 L bucket — no Blender available). Real photos/renders slot in post-launch (roadmap 7.1). | Self-contained, licence-clean, tiny payloads. |
| 18 | Photography | **Illustration-led art direction at launch**: authored vector/gradient scene art for application chapters (tractor/truck/excavator/genset silhouette scenes in brand palette). An asset agent may add licence-verified stock where it can be fetched + logged; otherwise vector art is the design, not a stopgap. | No API keys for stock services; authored art is licence-proof and on-brand. |
| 19 | Founder photo | Text-only leadership section (never fake a person). | |
| 20 | Email provider / mailboxes | Print info@/sales@/dealers@apexdef.in behind a **config flag, OFF by default** until mailboxes exist; forms deliver via Web3Forms to founder's Gmail (never displayed). | Roadmap dep. 10 hard gate. |
| 21 | Primary WhatsApp number | **+91 84495 07181** (listed first everywhere). | |
| 22 | Hosting / analytics / forms | **Cloudflare Pages** (free, fast in India) · **Cloudflare Web Analytics** (free, cookieless) at launch · **Web3Forms** free tier (client creates access key at launch; env-var placeholder until then). | Zero recurring cost, fits perf budget. |
| 23 | Dealer commercial terms | Generic-but-true support/requirements copy ships (no margins/exclusivity specifics). | |
| 24 | PDF datasheet | Generated from the spec table as a print-styled page → PDF at build. | |

**Swap-later register (single greps):** `BIS*` footnote → CM/L number · social row flag · email row flag · testimonial band · real photography replacing authored art.
