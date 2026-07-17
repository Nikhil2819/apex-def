# Launch runbook — apexdef.in

Everything code-side is done. These are the account-side steps (roadmap Phase 6), in order.
Each takes minutes; DNS/email propagation is the only real wait.

## 1. Hosting — Cloudflare Pages (free)

1. Create a Cloudflare account → Workers & Pages → Create → Pages.
2. Either connect a GitHub repo (push this folder to a private repo first) or use
   **Direct Upload** and drag the `dist/` folder (run `npm run build` first).
3. Build settings (if Git-connected): build command `npm run build`, output `dist`.
4. `public/_headers` ships the security headers (CSP, HSTS) automatically.

## 2. Domain

1. Cloudflare → add site `apexdef.in` (or transfer just DNS). At your registrar, point
   nameservers to the two Cloudflare gives you.
2. In the Pages project → Custom domains → add `apexdef.in` and `www.apexdef.in`
   (www redirects to apex). SSL is automatic.

## 3. Forms — Web3Forms (free)

1. https://web3forms.com → enter the inbox that should receive enquiries (founder Gmail
   until domain mail exists) → you get an **access key** by email.
2. In the Pages project → Settings → Environment variables → add
   `PUBLIC_WEB3FORMS_KEY = <the key>` → redeploy.
   Until then, form submits fall back to opening WhatsApp with the details prefilled —
   no lead is ever lost.

## 4. Domain email (when ready)

1. Zoho Mail free tier (or Google Workspace) → verify apexdef.in → create
   info@ / sales@ / dealers@apexdef.in → add the MX/SPF/DKIM records in Cloudflare DNS.
2. Send a test mail to all three and confirm receipt.
3. Flip `showEmails: true` in `src/data/site.js` → rebuild/redeploy. (Never flip before
   the mailboxes receive — roadmap dependency 10 hard gate.)

## 5. Analytics + Search

- Cloudflare Pages → enable **Web Analytics** (free, cookieless, no consent banner).
- Google Search Console → verify domain (DNS TXT) → submit `https://apexdef.in/sitemap-index.xml`.

## 6. Launch-day smoke test (from a real phone on mobile data)

- [ ] Every page loads over HTTPS; 404 page works
- [ ] `tel:` links dial +91 84495 07181 / +91 88002 54537 (header, mobile bar, cards, footer)
- [ ] `wa.me` links open WhatsApp with the prefilled message (also from WhatsApp's in-app browser)
- [ ] Both forms deliver to the inbox (check spam folder once)
- [ ] /products#def-210l style deep links land on the right pack
- [ ] Datasheet page prints cleanly (Share → Print → Save as PDF)
- [ ] With Data Saver ON: site loads fast, looks designed (static tier)

## Swap-later one-liners (as client inputs arrive)

| Input | Where |
|---|---|
| BIS CM/L number | `content.md` swap-later notes → hero chip footnote, footer cert line, About #certifications, Knowledge FAQ 10 |
| Social handles | `src/data/site.js` `socials: []` |
| Real photos | Replace authored SVG scenes per `design.md` §6 upgrade path |
| Testimonials | Add band per `design.md`; marquee may carry client names |
| WhatsApp Business | Verify +91 84495 07181 receives wa.me traffic |
