# APEX D.E.F — Production Deployment Guide

This guide takes the finished website **live on the internet at `https://apexdef.in`**, connected to your GoDaddy domain, for **₹0 / month**. No coding needed — it's all clicking through dashboards.

Total time: ~30 minutes of work, then a wait (up to a few hours) for the domain to switch over.

---

## 0. What you already have (the "production package")

The finished, optimised website is the **`dist/`** folder in this project. It's also zipped as:

> **`apexdef-site-production.zip`** (469 KB) — in the project root.

This is a *static* site: plain HTML/CSS/JS files. That's why hosting is free and fast — there's no server to run, no database, nothing to break or hack. Any static host can serve it.

Whenever the site changes, I re-run the build and this folder/zip is regenerated. **You never edit these files by hand.**

---

## 1. Which host? (and an honest note on Vercel)

You asked about Vercel. Here's the straight answer:

| Host | Free for a **business** site? | Bandwidth | Speed in India | Verdict |
|---|---|---|---|---|
| **Cloudflare Pages** | ✅ Yes, explicitly allowed | **Unlimited** | Fastest (India data centres) | **★ Recommended** |
| Netlify | ✅ Yes | 100 GB/mo (plenty) | Good | Fine alternative |
| Vercel (Hobby) | ⚠️ **No** — the free "Hobby" plan is for *personal, non-commercial* use only. A company site technically breaks their terms. | 100 GB/mo | Good | Avoid for a business |

**We're going with Cloudflare Pages.** It's free for commercial use, has unlimited bandwidth, is the fastest option for your Indian customers, and the site is already configured for it (security headers + redirects are built in). Netlify steps are nearly identical if you ever prefer it.

> The rest of this guide is **Cloudflare Pages + your GoDaddy domain**.

---

## 2. The plan in plain English

Three things have to happen:

1. **Put the website files on Cloudflare** → you get a temporary free address like `apexdef.pages.dev`.
2. **Move your domain's "DNS" to Cloudflare** → this is a one-time change at GoDaddy (swapping "nameservers"). It lets Cloudflare manage where `apexdef.in` points.
3. **Attach `apexdef.in` to the website** → Cloudflare wires it up and turns on HTTPS (the padlock) automatically.

Do them in that order. Let's go.

---

## PART A — Put the website online (≈10 min)

### A1. Create a free Cloudflare account
1. Go to **https://dash.cloudflare.com/sign-up**
2. Sign up with your email (`naveenrahul1994@gmail.com` is fine) and a password. Verify the email.

### A2. Create the Pages project and upload the site
1. In the left sidebar, click **Workers & Pages**.
2. Click **Create** → choose the **Pages** tab → click **Upload assets** (this is the drag-and-drop option — no GitHub needed).
3. **Project name:** type `apexdef` → **Create project**.
4. **Unzip `apexdef-site-production.zip` on your computer first** (double-click it → you get a folder of files). Then drag the **contents** of that folder (the `index.html`, `about`, `products`, `_astro`, etc. — *not* the outer zip) into the upload box.
   - ⚠️ Drag the **files inside** the folder, so `index.html` sits at the top level of the upload — not a folder that *contains* index.html.
5. Click **Deploy site**.
6. After ~30 seconds you'll get a live URL like **`https://apexdef.pages.dev`**. Click it — **your website is now live on the internet.** 🎉

> At this point the site works, just on a temporary Cloudflare address. Next we point your real domain at it.

---

## PART B — Move your GoDaddy domain to Cloudflare DNS (≈10 min + waiting)

This swaps the domain's "nameservers" so Cloudflare manages `apexdef.in`. It's a standard one-time step and it's reversible.

> ℹ️ **About email:** moving nameservers moves *all* DNS for the domain to Cloudflare. If you set up email (`info@apexdef.in`, etc.) **later**, you'll add those records in Cloudflare instead of GoDaddy — that's covered in Part E. If you have **no** email/other services on this domain yet (likely, since it's new), there's nothing to lose.

### B1. Add your domain to Cloudflare
1. In the Cloudflare dashboard, top of the page, click **Add a site** (or **+ Add** → **Existing domain**).
2. Type **`apexdef.in`** → **Continue**.
3. Choose the **Free** plan → **Continue**.
4. Cloudflare scans your existing DNS records and shows a list. Since the domain is new, it'll likely be nearly empty — that's fine. Click **Continue**.
5. Cloudflare now shows you **two nameservers**, something like:
   ```
   xxxx.ns.cloudflare.com
   yyyy.ns.cloudflare.com
   ```
   **Keep this tab open** — you need these two values in the next step.

### B2. Change the nameservers at GoDaddy
1. In a new tab, go to **https://dcc.godaddy.com/** and sign in.
2. Click your profile → **My Products** → find **apexdef.in** → click **DNS** (or the three dots → **Manage DNS**).
3. Scroll to the **Nameservers** section → click **Change** (or "Change Nameservers").
4. Choose **"I'll use my own nameservers"** / **"Enter my own nameservers (advanced)"**.
5. **Delete GoDaddy's nameservers and paste in the two Cloudflare ones** from step B1.5.
6. **Save**. GoDaddy may ask you to confirm — say yes.

### B3. Confirm the switch
1. Back in the Cloudflare tab, click **Done, check nameservers**.
2. Cloudflare now waits for the change to take effect. **This can take anywhere from 10 minutes to a few hours** (occasionally up to 24h — but usually fast). You'll get an email from Cloudflare titled *"apexdef.in is now active on Cloudflare"* when it's ready.

> ☕ You can do Part C now (it'll just complete once the domain goes active).

---

## PART C — Attach apexdef.in to the website + turn on HTTPS (≈5 min)

1. In Cloudflare, go to **Workers & Pages** → click your **apexdef** project.
2. Open the **Custom domains** tab → **Set up a custom domain**.
3. Type **`apexdef.in`** → **Continue** → **Activate domain**.
   - Because Cloudflare now runs your DNS, it adds the needed record automatically. No manual DNS typing.
4. Repeat for the **www** version: **Set up a custom domain** → type **`www.apexdef.in`** → activate. (The site already redirects `www` → the bare domain, so both work and visitors land on the clean `apexdef.in`.)
5. **HTTPS / the padlock is automatic.** Cloudflare issues a free SSL certificate within a few minutes of the domain going active. You don't do anything.
6. **One recommended toggle:** in the domain's Cloudflare dashboard go to **SSL/TLS** → set encryption mode to **Full** (not "Flexible"). This ensures a clean secure connection.

**Done.** Once the nameservers are active (Part B) and the certificate is issued, open **https://apexdef.in** — the real site, on your domain, with a padlock.

---

## PART D — Go-live checklist (do these once the site is up)

These make the contact features and Google presence fully work. None block launch — the site is already useful — but do them soon.

### D1. Turn on the contact forms (5 min) ⭐ important
Right now the **Contact** and **Dealer** forms fall back to opening WhatsApp (they never fail) — but to have them **email you** the enquiry, add one free key:
1. Go to **https://web3forms.com** → enter your email → you get an **Access Key** (a code) by email. (Point it at `naveenrahul1994@gmail.com` for now; switch to `sales@apexdef.in` once that mailbox exists.)
2. Send me that key — it's a one-line setting in the site, I rebuild, you re-upload the new zip (Part F). Then every form submission arrives in your inbox with the person's name, phone and message.

### D2. Company email addresses (optional, when ready)
The site is built to show `info@ / sales@ / dealers@apexdef.in` — currently hidden until the mailboxes exist. To create them:
- Easiest free-ish options: **Zoho Mail** (free tier for one domain) or **Google Workspace** (paid, ~₹150/user/mo).
- They'll give you a few **MX / TXT records** to add. Because DNS is now on Cloudflare: **Cloudflare dashboard → apexdef.in → DNS → Add record** (paste what they give you).
- Then tell me and I flip the site's `showEmails` flag on, rebuild, you re-upload.

### D3. Analytics (2 min, free)
- Cloudflare dashboard → your domain → **Analytics & Logs → Web Analytics** → enable. Free, privacy-friendly, no cookie banner needed. You'll see visitor counts, top pages, and (with a small snippet I can add) how many people tapped Call / WhatsApp.

### D4. Google Search Console (5 min — gets you found on Google)
1. Go to **https://search.google.com/search-console** → **Add property** → **URL prefix** → `https://apexdef.in`.
2. Verify via the **HTML tag** method (Google gives you a `<meta>` tag) — send it to me, I drop it in the site head, rebuild, you re-upload. (Or verify via DNS: add the TXT record they give you in Cloudflare DNS.)
3. Once verified: **Sitemaps** → submit `sitemap-index.xml`. Google will start indexing all 7 pages.
4. Also create a free **Google Business Profile** for the Bulandshahr address — this is what makes you show up in "DEF supplier near me" / Maps searches.

### D5. Verify the important stuff works
On the live site, from your phone:
- [ ] Tap **Call** in the bottom bar → it dials **+91 84495 07181**.
- [ ] Tap **WhatsApp** → opens WhatsApp with a pre-filled message to your number.
- [ ] Submit the **Contact** form → (after D1) the email arrives.
- [ ] Every page loads, the padlock shows, `www.apexdef.in` redirects to `apexdef.in`.

---

## PART E — The one legal item (BIS licence)

The site currently uses safe wording: *"Manufactured to IS 17042 (Part 1); BIS licence details will be displayed on grant."*

Since **August 2024, BIS certification (to IS 17042 Part 1) is legally mandatory to sell DEF in India.** When you have your **BIS licence number (CM/L-…)**, send it to me — it's a one-line swap and the site will display it on the certification chips and About page. (This is a business/compliance matter beyond the website, but the site is ready for it.)

---

## PART F — Updating the site later (for the "targeted changes" you mentioned)

Whenever you want changes (copy tweaks, colours, new sections, the form key, the BIS number, etc.):
1. You tell me the changes → I make them and re-run the build → I hand you a fresh **`apexdef-site-production.zip`**.
2. In Cloudflare: **Workers & Pages → apexdef → Create deployment** (or **Upload assets** again) → drag the new files → **Deploy**.
3. The live site updates in ~30 seconds. Your domain and settings stay exactly as they are — you only ever re-upload the files.

> **Want zero-effort updates instead?** If you create a free **GitHub** account, I can push the project there and connect it to Cloudflare Pages once. After that, every change I make goes live automatically — no zip, no re-upload. Tell me if you'd like that; it's a 10-minute one-time setup.

---

## Quick reference

| Thing | Value |
|---|---|
| Production files | `dist/` folder / `apexdef-site-production.zip` |
| Host | Cloudflare Pages (free, commercial-OK) |
| Domain | apexdef.in (GoDaddy → Cloudflare nameservers) |
| Temp URL after upload | `apexdef.pages.dev` |
| SSL / HTTPS | Automatic (Cloudflare) |
| Forms | Web3Forms key needed (Part D1) → else WhatsApp fallback |
| Rebuild command (my side) | `npm run build` |
| Cost | ₹0 / month |

---

## Troubleshooting

- **"Site not secure" / no padlock right after setup** — the SSL certificate takes a few minutes after the domain goes active. Wait 10–15 min, hard-refresh. Ensure SSL/TLS mode is **Full** (Part C6).
- **apexdef.in still shows a GoDaddy parking page** — the nameserver change hasn't propagated yet, or wasn't saved at GoDaddy. Recheck Part B2; wait up to a few hours; Cloudflare emails you when active.
- **Uploaded but page is blank / 404** — you probably dragged the *folder* instead of its *contents*. Re-upload so `index.html` is at the top level (Part A2, step 4).
- **Form doesn't email me** — that's expected until the Web3Forms key is added (Part D1); until then it opens WhatsApp, which still reaches you.
- **Need to undo everything** — set GoDaddy's nameservers back to the originals (GoDaddy support can restore defaults). The domain reverts; the `pages.dev` URL keeps working.

*You'll never be stuck — send me a screenshot at any step and I'll tell you exactly what to click next.*
