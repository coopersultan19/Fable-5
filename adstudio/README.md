# DoseReel — AI Video-Ad Studio for Supplement Brands

**One-liner:** Compliant video ads for supplement brands — 10 ads in 48 hours,
first one free.

This folder is the complete, launch-ready business. Everything is finished copy
and process, not outlines. New here? Read `START_HERE.md` (plain-English guide
to the whole machine), then run `EXECUTE.md` day by day.

---

## The name

Three options were considered (all short, credible, .com-plausible):

| Name | Angle | Verdict |
|---|---|---|
| **DoseReel** | Supplement (dose) + video (reel) in one word; brandable, category-obvious | ✅ **Chosen — used everywhere in this project** |
| Labelproof Studio | Compliance-first ("your label, bulletproof") | Strong runner-up; more defensive than creative |
| Fortyeight Creative | The 48-hour promise as the brand | Clear but pins the brand to one feature |

If dosereel.com is taken, fall back to getdosereel.com or dosereel.co — then
find-and-replace `dosereel.com` across `index.html` and the outreach files.

## Positioning (never deviate in sales copy)

We are a **creative studio**, not "an AI tool." Three pillars, always in this
order: **Speed** (48h vs 2-week UGC cycles) · **Volume** (10 testable variants)
· **Compliance** (structure/function claims only, no disease claims, FTC
disclosure-ready). Never lead with "AI" — if asked, answer honestly per
`outreach/objections.md`.

**Target client:** founder-led DTC supplement brands, $10k–$200k/mo on Meta or
TikTok. Priority sub-niches: creatine/performance, sleep/magnesium, gut health,
women's hormonal health, greens powders.

**Pricing:** Free sample (1 ad) → Sprint $497 (10 ads / 48h) → Retainer
$1,500/mo (20 ads, 2 revision rounds, monthly performance review).

## What's in this folder

```
adstudio/
├── START_HERE.md                       ← plain-English guide: what this is, how to run + scale it
├── index.html, styles.css, script.js   ← landing page (static, deploy anywhere)
├── assets/og.png                       ← social preview image (portfolio videos go in assets/portfolio/)
├── EXECUTE.md                          ← week-one plan, hour by hour + scoreboard
├── prospecting/
│   ├── PLAYBOOK.md                     ← 25 qualified prospects/day in ~90 min
│   └── pipeline.csv                    ← tracking sheet (10 placeholder rows)
├── outreach/
│   ├── dm-scripts.md                   ← 5 first-touch scripts (IG/email/LinkedIn)
│   ├── followups.md                    ← day 2 / 5 / 9 sequence
│   └── objections.md                   ← word-for-word answers
└── delivery/
    ├── compliance-checklist.md         ← pre-delivery gate for every script
    └── SOP.md                          ← payment → delivery in 48h, + retainer upsell
```

## Deploying the site

Any static host works. Fastest paths:

- **Vercel:** `vercel deploy adstudio/` or import the repo and set the root
  directory to `adstudio/`.
- **Netlify:** drag the `adstudio` folder into app.netlify.com/drop.
- **GitHub Pages:** serve the repo with `adstudio/` as the site root.

Then connect your domain in the host's dashboard.

---

## ✅ The 5 things you must do manually before Day 1 ends

1. **Buy the domain** — dosereel.com (fallbacks above). Set up hello@ forwarding
   to your inbox.
2. **Create the two Stripe payment links** — Sprint $497 one-time, Retainer
   $1,500/mo recurring — and replace `REPLACE_SPRINT_LINK` and
   `REPLACE_RETAINER_LINK` in `index.html`.
3. **Set up Formspree** — create a form at formspree.io (free tier is fine),
   replace `YOUR_FORM_ID` in `index.html`, and send yourself a test submission.
4. **Deploy the site** to Vercel/Netlify/GitHub Pages and point the domain at it.
5. **Generate the 6 portfolio ads** in Claude chat via Higgsfield Marketing
   Studio (one per sub-niche slot), compliance-check each against
   `delivery/compliance-checklist.md`, and drop them into the `/portfolio`
   section (the HTML comment in `index.html` shows the exact `<video>` tag).

After those five, open `EXECUTE.md` and start the clock.
