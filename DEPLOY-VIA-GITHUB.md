# APEX D.E.F — Deploy via GitHub + Cloudflare Pages

Use this instead of the drag-and-drop method (Cloudflare's "drop a zip" flow is buggy right now). This route is also **better long-term**: once it's set up, every future change goes live automatically — no more uploading.

**The idea:** your website code lives in a GitHub repository → Cloudflare watches that repository → whenever the code updates, Cloudflare rebuilds and publishes the site itself.

> ✅ I've already prepared the project for this: fixed a setting that would have broken the cloud build, pinned the correct Node version, and committed everything. The code is ready to publish exactly as-is.

---

## STEP 1 — Put the code on GitHub

Pick **one** of the two ways below. **Way A (GitHub Desktop) is easiest — no typing commands.**

### Way A — GitHub Desktop (recommended, all clicks)
1. Download **GitHub Desktop**: https://desktop.github.com → install and open it.
2. **Sign in** (or **Create a free account**) — it opens your browser to log in, then returns to the app.
3. In GitHub Desktop: menu **File → Add Local Repository…**
4. Click **Choose…** and select the project folder:
   `/Users/nikhilrawat/Desktop/apex web`
   → it recognises it as an existing repository → **Add Repository**.
5. Top of the window you'll see a **"Publish repository"** button → click it.
   - **Name:** `apexdef-website`
   - **Keep "Keep this code private"** ✅ ticked (recommended).
   - Click **Publish Repository**.
6. Done — your whole site is now on GitHub. (You can verify at https://github.com/ under your repositories.)

### Way B — Terminal with `gh` (if you're comfortable)
Tell me and I'll install the GitHub CLI for you. Then you run this one command in Terminal and follow the browser prompt:
```
gh auth login
```
(Choose: GitHub.com → HTTPS → "Login with a web browser".) Once it says you're logged in, tell me — I'll create the repo and push the code for you automatically.

---

## STEP 2 — Connect Cloudflare to the GitHub repo

1. Go to the Cloudflare dashboard (https://dash.cloudflare.com).
2. Left sidebar → **Compute** (under the **Build** heading). *(If you already made a half-stuck "apexdef" project from the zip attempt, delete it first: open it → Settings → Delete — so the name is free.)*
3. Click **Create** (or **Create application**) → choose the option to **connect to Git / import a repository** (labelled **"Pages"** or **"Import an existing Git repository"**).
4. Click **Connect GitHub** → a GitHub window opens → **Authorize Cloudflare** → choose to give access to your **`apexdef-website`** repo (you can pick "only select repositories" and choose just that one).
5. Back in Cloudflare, **select the `apexdef-website` repository** → **Begin setup**.
6. **Build settings** — set these **exactly**:
   | Field | Value |
   |---|---|
   | Project name | `apexdef` |
   | Production branch | `main` |
   | **Framework preset** | **Astro** |
   | **Build command** | `npm run build` |
   | **Build output directory** | `dist` |
   | Root directory | *(leave blank / `/`)* |
   - The **Astro** preset usually fills in the build command and output dir automatically — just confirm they match the table.
7. Click **Save and Deploy**.
8. Cloudflare now installs and builds the site (takes ~1–2 minutes — you'll see a live log). When it finishes, you get your **`apexdef.pages.dev`** URL. Open it — **the site is live.** 🎉

> If the build log shows a red error, copy the last ~15 lines and send them to me — I'll tell you the fix. (It should be clean; I've tested the build.)

---

## STEP 3 — Connect your domain apexdef.in

This part is identical to the main guide — follow **`DEPLOYMENT.md` Parts B and C**:
- **Part B:** add `apexdef.in` to Cloudflare and switch the nameservers at GoDaddy.
- **Part C:** attach `apexdef.in` + `www.apexdef.in` to the `apexdef` project (**Compute → apexdef → Domains & Routes / Custom domains**). HTTPS turns on automatically.

Then finish with **Parts D & E** (forms key, analytics, Search Console, BIS number).

---

## From now on: updates are automatic

Once this is set up, whenever I make a change to the site:
1. I commit it (and, with your GitHub connected, it can be pushed) — or I hand you the change and you **"Push"** in GitHub Desktop (one button).
2. Cloudflare **automatically rebuilds and redeploys** within ~1–2 minutes.
3. No zips, no manual uploads, ever again.

> Want me to be able to push changes directly so even that button-press isn't needed? That's possible too — ask me and I'll explain the one-time access step.

---

## Why the zip upload got stuck (for reference)
Cloudflare merged Pages into a new "Workers" dashboard, and its "Ship something new → drop a zip" box sometimes tries to treat a plain static site as a full build project and hangs. The Git connection uses the reliable, purpose-built Pages pipeline instead — and gives you auto-deploys as a bonus. Nothing was wrong with your file.
