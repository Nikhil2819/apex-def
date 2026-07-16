# Image & Asset Sourcing Digest — APEX D.E.F Website (apexdef.in)

## 1. Free Commercial-Use Stock Photos

### License status (verified July 2026)

| Source | Commercial web use | Attribution | Key caveats |
|---|---|---|---|
| **Unsplash** (unsplash.com/license) | Yes — irrevocable, worldwide, free, includes commercial | Not required | Cannot resell photos as-is or compile to build a competing service; **no model-release guarantee** — avoid recognizable faces in anything advertising-like; Unsplash+ (paid) adds up to $10k/file legal indemnity |
| **Pexels** (pexels.com/license) | Yes — free personal + commercial | Not required | No standalone redistribution/resale; visible third-party trademarks/logos (e.g. Tata/Mahindra branding on trucks) must not imply endorsement — prefer shots where logos are incidental or crop/blur them |
| **Pixabay** (pixabay.com/service/license-summary) | Yes — Pixabay Content License, free commercial | Not required | $0 indemnification; Pixabay itself suggests removing visible brand marks; same trademark/privacy carve-outs |

**Practical note:** all three are safe for a product-display website; the recurring risks are (a) recognizable people without model releases and (b) truck-maker logos/liveries. For an Indian truck hero shot, favor rear/side silhouettes, dusk highway shots, or de-badge in Photoshop.

### Relevant imagery availability + concrete search queries

- **Indian trucks/fleets** — good coverage: Unsplash `indian truck` (100+ results), Pexels `truck in india` (large set). Queries: `indian truck highway`, `truck convoy india`, `lorry india dusk`, `truck driver india`, `national highway india trucks`, `logistics fleet india`.
- **Tractors/agriculture India** — strong on Pexels (`indian tractor`, 10k+ tagged results). Queries: `tractor field india`, `indian farmer tractor`, `plowing field punjab`, `wheat field harvest india`, `agriculture rural india`, `farm sunrise india`.
- **Diesel engines** — queries: `diesel engine`, `truck engine bay`, `engine pistons closeup`, `exhaust pipe truck`, `mechanic engine repair`.
- **Industrial plant / manufacturing** — queries: `chemical plant`, `industrial tanks pipes`, `factory interior stainless steel`, `storage tanks industrial`, `manufacturing plant india`.
- **Laboratory / quality testing** — queries: `laboratory beaker blue liquid`, `chemist testing sample`, `quality control lab`, `scientist pipette`, `water testing laboratory`.
- **Warehouse / logistics** — queries: `warehouse pallets forklift`, `drums warehouse`, `loading dock truck`, `distribution center`, `blue barrels stacked`.

**Gap warning:** authentic *DEF/AdBlue-specific* imagery (blue-cap filler necks, DEF pumps, urea plants) is nearly absent on free libraries — plan to cover product/DEF-specific visuals via 3D renders or AI (sections 2–3). India-specific *lab/factory* photos are also thin; generic industrial works fine there.

---

## 2. 3D Assets (jerry can, bucket, drum, IBC, truck, tractor)

### Sources & licenses

- **Sketchfab (sketchfab.com)** — paid Store moved to Epic's **Fab**, but **free CC-licensed models remain on Sketchfab and stay downloadable (2026)**. Check per-model license:
  - **CC-BY** = commercial OK **with visible credit** (footer/credits page suffices) — e.g. "Jerry CAN_20L" by 3DDomino, "Scepter 20L NATO Jerry Can" by nicknothom.
  - **CC-NC** = NOT usable — both top IBC tank results (lineQ, Jinhong Jeong) are **CC Attribution-NonCommercial** — do not use on a business site.
  - Useful tag pages: `sketchfab.com/tags/jerry-can`, `/tags/ibc`, `/tags/barrel`, `/tags/truck`, `/tags/tractor`. Filter: Downloadable + license type.
- **Poly Haven (polyhaven.com)** — everything **CC0/public domain**, zero restrictions, no credit. Few packaging models, but the go-to for **HDRIs (studio + industrial lighting for renders) and textures (plastic, metal, concrete)**. License page: polyhaven.com/license.
- **TurboSquid** — royalty-free after purchase; use in web/advertising permitted; cheap ($5–$40) accurate "IBC tote", "210L steel drum", "20L pail", "AdBlue canister" models exist. Cannot redistribute raw files (fine for renders/web use).
- **CGTrader** — royalty-free license allows any commercial purpose incl. renderings (no resale of the model itself); has free + cheap DEF/AdBlue-specific containers. Search: `adblue canister`, `ibc tank 1000l`, `plastic pail 20l`, `steel drum 210l`.
- **Fab (fab.com)** — CC0/CC-BY only partially migrated; treat as secondary for this project.

### Feasibility: model packaging yourself (recommended for hero 3D)

- **Verdict: model the packaging in Blender — it's the right call.** All four SKUs are simple primitives: 20L bucket/pail (cylinder + taper + lid + handle torus), jerry can (rounded box + boolean handle), 210L drum (cylinder + rib loops), 1000L IBC (cube tank + lattice cage + pallet). Each is a few hours' work; results are clean, low-poly, and — critically — **you control the label UV so the real APEX label art wraps perfectly** (impossible to guarantee with stock/AI).
- Export **GLB + Draco compression** for three.js/React Three Fiber scroll scenes; keep each model under ~1–2 MB. Light with a free Poly Haven studio HDRI.
- **Spline (spline.design)** is faster for a designer and embeds directly, but its GLTF/GLB export **loses materials/lighting (geometry only)** — fine if it's the final runtime (Spline viewer), a liability if the build is three.js. For a premium custom site, Blender → GLB → R3F is the more controllable pipeline; Spline is a fallback for quick interactive hero embeds.
- Trucks/tractors in 3D: use free CC-BY Sketchfab low-poly models for background/scroll scenes, or skip 3D vehicles entirely (video/photo cheaper on performance).

---

## 3. AI Image / Render Generation

### Best current tools (2026)

- **FLUX.2 Pro / FLUX 1.1 Pro (Black Forest Labs)** — current leader for **photoreal product shots**: correct glass/plastic refraction, believable materials, lens-accurate DOF; API-friendly for volume. Best default for industrial scenes + packaging heroes.
- **Ideogram v3** — best-in-class for **readable text in images**; use when a label/wordmark must appear in-generation. Still verify letterforms.
- **Midjourney (v7+)** — best aesthetic/mood output (dusk highways, cinematic farm scenes) but interprets prompts artistically — **wrong tool for accurate branded packaging** ("blue 20L pail that says APEX" will drift).
- Also in play: GPT Image 2, Nano Banana Pro (Google), Imagen 4 — usable, but the FLUX (accuracy) + Ideogram (text) + Midjourney (mood) chain covers this project.

### Prompt guidance for consistent branded packaging renders

- Template: `studio product photography, 20 litre industrial plastic pail, deep blue body with white lid, blank white label area, [DEF blue-green tinted liquid visible / condensation], softbox lighting, seamless light-grey background, 85mm lens, f/8, high detail, photorealistic` — generate with a **blank label**, composite real art in post.
- Consistency levers: fix a seed; reuse exact color words (`Pantone-style deep blue #1B4F9C body`); reference-image conditioning (FLUX Redux / MJ `--sref`) to lock the container across the set; generate the full SKU family (jerry can, pail, drum, IBC) in one session with identical lighting language.
- Scene prompts: `AdBlue DEF dispensing nozzle inserted into blue-capped truck tank, shallow depth of field`; `modern urea solution production line, stainless steel tanks, clean industrial interior, blue accent lighting`; `laboratory technician testing clear blue liquid sample, refractometer, white lab`.

### Caveats

- **Label/text distortion is guaranteed** on FLUX/MJ at packaging scale — **plan to composite real vector label art in Photoshop/Figma over blank-label renders** (perspective warp + displacement to follow curvature). This is the single most important workflow rule.
- AI renders of *vehicles* often hallucinate fake brand grilles — keep vehicles generic or distant.
- Check tool ToS for commercial rights (Midjourney requires paid plan for commercial use; FLUX Pro API output is commercially licensed on paid tiers).
- Honest alternative: since you're modeling packaging in Blender anyway (§2), **Blender Cycles renders of the real model with the real label are more consistent than AI** — use AI mainly for environments/backgrounds and mood shots.

---

## 4. Icons & Illustration

- **Lucide (lucide.dev)** — ISC license (MIT-equivalent), free commercial, 1,500+ icons, single refined stroke style, first-class React/Next/shadcn support. **Recommended default.** Stroke-width prop lets you tune to a premium thin-line look.
- **Phosphor (phosphoricons.com)** — MIT, 1,200+ icons × 6 weights (Thin/Light/Regular/Bold/Fill/**Duotone**). Duotone in brand blue-green is a strong premium differentiator for feature grids. Pick Phosphor if you want weight-shifting (outline → fill on hover/active).
- Custom stroke style: both libraries are raw SVG — override `stroke-width` and swap stroke color to brand tokens for a bespoke feel; supplement with 4–6 hand-drawn custom icons (DEF nozzle, urea molecule, SCR system) matching the same grid/stroke.
- **Lottie animations — LottieFiles (lottiefiles.com)**: free search-tab animations under **Lottie Simple License** — commercial use OK, no attribution required, can't compile into a competing library. Search queries: `eco leaf`, `emission reduction`, `co2`, `green energy`, `delivery truck`, `shipping`, `droplet`, `recycling`, `plant growing`, `24/7 support`. Render via `lottie-web`/`dotlottie` (dotLottie is smaller — good for the low-network fallback budget). IconScout Lotties are a paid alternative with broader industrial sets.

---

## 5. Free Stock Video (hero background loops)

| Source | License | Notes |
|---|---|---|
| **Pexels Videos** (pexels.com/videos) | Pexels license — free commercial, no attribution | Largest pool; 4K available; has India-specific footage (e.g. "Busy Indian Highway with Trucks and Motorbikes", ID 30104783) |
| **Coverr** (coverr.co, license: coverr.co/license) | Free incl. commercial, no attribution, no signup | Explicitly curated for **website hero/background loops** — best fit-for-purpose |
| **Mixkit** (mixkit.co/license) | Mixkit Free License — commercial OK, no watermark, no attribution | Envato-run, tightly curated; also free music if needed |
| **Pixabay Videos** | Pixabay Content License | Backup pool |

**Search queries per hero concept:**
- Truck highway: `truck highway aerial`, `highway trucks dusk`, `truck driving sunset`, `indian highway` (Pexels has genuine Indian highway clips — rare and valuable here)
- Farm tractor: `tractor field aerial`, `tractor plowing`, `harvest drone`, `farmland sunrise`
- Liquid pour: `blue liquid pour slow motion`, `liquid closeup`, `water pouring macro`, `chemical liquid swirl`
- Factory line: `factory production line`, `bottling plant`, `industrial machinery`, `filling line`

**Implementation notes for the premium + low-network brief:** compress hero loops to ~1.5–3 MB (H.264/H.265 + WebM, 8–12 s loop, no audio), serve `poster` frame as the mobile/slow-network fallback (`prefers-reduced-motion` + Save-Data + viewport checks), lazy-load below-fold video. Same trademark caveat as photos: avoid clips with prominent truck-maker logos.

---

## Cross-cutting recommendations

1. **Hero product visuals: Blender-modeled packaging with real label art** (full control, perfect brand accuracy, GLB-ready for 3D scroll) > AI renders > stock.
2. **License hygiene:** on Sketchfab, only CC0/CC-BY (with credit); never CC-NC on this commercial site. Keep a simple asset log (URL, license, date) for every downloaded asset.
3. **Real photography gap:** budget a half-day shoot at the Bulandshahr plant if possible — authentic plant/lab/warehouse photos of *actual* APEX operations beat all stock for trust, and free libraries have almost no India-specific industrial-lab content.

Sources: [Unsplash License](https://unsplash.com/license) · [Unsplash commercial FAQ](https://help.unsplash.com/en/articles/2612315-can-i-use-unsplash-images-for-personal-or-commercial-projects) · [Pexels License](https://www.pexels.com/license/) · [Pixabay Content License](https://pixabay.com/service/license-summary/) · [Poly Haven License](https://polyhaven.com/license) · [Sketchfab jerry-can tag](https://sketchfab.com/tags/jerry-can) · [Fab licenses docs](https://dev.epicgames.com/documentation/fab/licenses-and-pricing-in-fab) · [Sketchfab→Fab migration blog](https://sketchfab.com/blogs/community/announcing-fab-the-next-phase-for-sketchfab/) · [TurboSquid RF license](https://blog.turbosquid.com/royalty-free-license/) · [CGTrader license forum](https://www.cgtrader.com/forum/topics/can-we-use-royalty-free-models-for-commercial-use) · [Lucide license](https://lucide.dev/license) · [Phosphor vs Lucide comparison](https://allsvgicons.com/compare/phosphor-vs-lucide/) · [Lottie Simple License](https://lottiefiles.com/page/license) · [LottieFiles commercial-use help](https://help.lottiefiles.com/hc/en-us/articles/45243303062681-Commercial-Use-Attribution) · [Coverr license](https://coverr.co/license) · [Mixkit license](https://mixkit.co/license/) · [Pexels truck-in-India search](https://www.pexels.com/search/truck%20in%20india/) · [Unsplash indian-truck search](https://unsplash.com/s/photos/indian-truck) · [Pexels videos](https://www.pexels.com/videos/) · [Spline→three.js export notes](https://felixrunquist.com/posts/creating-3d-models-spline-three-js) · [2026 AI image generator comparisons](https://www.buildmvpfast.com/articles/best-llms-2026-guide/image-generation-ai)