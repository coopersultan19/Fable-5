# DoseReel Prospecting Playbook

**Goal: 25 qualified prospects per day in ~90 minutes.** All manual, all ToS-safe.
No scrapers, no purchased lists, no automation that touches Meta or LinkedIn.

The pipeline lives in `pipeline.csv`. Every prospect you find goes in there the
moment you find them — never keep prospects in your head or in browser tabs.

---

## The 90-minute block (do it at the same time every day)

| Time | Task |
|---|---|
| 0:00–0:50 | Source 25 brands in Meta Ads Library (2 sub-niches per day, rotate) |
| 0:50–1:20 | Find the founder + contact for each brand |
| 1:20–1:30 | Log everything in `pipeline.csv`, mark today's send list |

---

## Step 1 — Find supplement brands actively running ads (Meta Ads Library)

Go to **facebook.com/ads/library** → Ad category: **All ads** → Country: **United States**.
Only brands with *active* ads matter — an active ad account means an active ad budget.

### Exact search terms per sub-niche

Rotate two sub-niches per day so you're not fishing the same pond dry:

**Creatine / performance**
- `creatine gummies`
- `creatine for women`
- `creatine monohydrate`
- `pre workout without jitters`

**Sleep / magnesium**
- `magnesium glycinate`
- `sleep supplement`
- `magnesium before bed`
- `natural sleep aid` *(brands using this phrasing often need compliance help — good sign for us)*

**Gut health**
- `gut health supplement`
- `bloating supplement`
- `probiotic for bloating`
- `digestive enzymes`

**Women's hormonal health**
- `hormone balance supplement`
- `PMS supplement`
- `supplements for cycle`
- `perimenopause support`

**Greens powders**
- `greens powder`
- `daily greens`
- `super greens`
- `greens powder that tastes good`

### How to filter for smaller brands ($10k–$200k/mo range)

You want brands big enough to pay and small enough that the founder answers DMs.
Work through search results with these filters:

**Skip immediately:**
- Household names (AG1, Ritual, Momentous, Thorne, Legion, Transparent Labs, Bloom). They have agencies and procurement processes.
- Amazon-only sellers (product URL goes to Amazon, not their own store). Harder to sell creative to.
- Brands with zero active ads (they paused — no budget right now).

**Green flags (this is your target):**
- **3–30 active ads.** Under 3 = probably too small or testing the waters. Over ~50 = big brand with an in-house team or agency.
- **Ads look founder-made:** iPhone footage, the founder on camera, Canva-style text cards, recycled organic posts run as ads.
- **Ad copy repeats across variants** — they found one thing that works and can't produce fresh creative. That's the exact pain we solve.
- **Oldest active ad is 1–6 months old** (click any ad → "Started running on"). Long-running ads = the account has been profitably spending for a while.
- **Shopify store** (check the URL structure or footer). Founder-led DTC brands are overwhelmingly on Shopify.
- **Instagram following of 5k–100k.** Below 5k they may be pre-revenue; above 100k they likely have an agency.

**Estimating spend without spend data:** Meta Ads Library doesn't show budgets for
commercial ads, so triangulate. A brand with 5–30 active ads, ads running
continuously for months, a real Shopify store, 10k+ IG followers, and visible
customer reviews (500+ on-site reviews is a strong tell) is almost certainly in the
$10k–$200k/mo window. When in doubt, log them — the free-ad offer costs you 20
minutes, not a media plan.

### Per-brand capture (60 seconds max)

For each brand that passes the filter, capture into `pipeline.csv`:
brand name, best-selling product URL (the one they advertise most), sub-niche,
and a one-line note on their current creative (e.g., "running same talking-head ad
in 6 variants since March"). That note becomes your DM opener later.

---

## Step 2 — Find the founder and their contact

Work in this order; stop as soon as you have one good channel. Budget ~1 minute
per brand.

1. **Brand site → About / Our Story page.** Founder-led brands almost always name
   the founder ("Hi, I'm Sarah, I started X because…"). Note the name.
2. **Brand Instagram.** Check the bio for a personal account link, and check who's
   tagged in the brand's reels — founders tag themselves. Founder's personal IG is
   the **best channel**: DMs there outperform brand-account DMs 5:1 because an
   employee or VA usually runs the brand account.
3. **LinkedIn search:** `"[brand name]" founder` in the LinkedIn search bar. Small
   supplement brands typically have 1–10 employees; the founder is easy to spot.
   Connect with a note, or message if they have an open profile.
4. **Email — try in this order:**
   - About/Contact page (some founders list a direct email)
   - `founders@`, `firstname@`, `hello@` on the brand domain (send to firstname@
     first; hello@ goes to a shared inbox but still gets read at this brand size)
   - The `mailto:` link in the site footer or press page
5. **Podcast/press search:** Google `"[founder name]" podcast` — founders who do
   podcasts read their own DMs and respond well to "heard you on X."

**Channel priority: founder's personal IG > founder email > brand IG > LinkedIn > brand email.**

If after 90 seconds you have no founder name and no direct channel, log the brand
with `channel = brand IG` and move on. Volume beats perfection.

---

## Step 3 — Log it (pipeline.csv)

`pipeline.csv` columns:

`brand, product_url, sub_niche, founder_name, contact, channel, date_contacted, followup_1, followup_2, status, notes`

**Status values (use exactly these so the sheet stays filterable):**
`sourced` → `contacted` → `replied` → `sample_sent` → `sprint_closed` → `retainer` | `dead`

Rules:
- A prospect isn't "sourced" until it has a row. A row isn't complete without a
  product URL and at least one contact channel.
- `notes` should contain the personalization hook you'll use in outreach ("been
  running the same 3 UGC ads since Feb", "founder posts gym content daily").
- Fill `followup_1` / `followup_2` dates when you send the first touch: +2 days
  and +5 days. Day 9 send closes the loop (see `../outreach/followups.md`).
- Mark `dead` after the day-9 touch gets no reply. Dead ≠ deleted — re-run dead
  prospects after 60 days with a fresh sample ad.

Ten example rows with placeholder data are already in the file — replace them
with real prospects on Day 2.

---

## Weekly hygiene (15 min, Sunday)

- Sort by status. Count: sourced → contacted conversion should be ~100% (if you
  sourced them, you contact them next morning).
- If reply rate on a sub-niche is under 5% after 50 sends, rotate that sub-niche
  out for a week and double down on the best performer.
- Archive `dead` rows older than 60 days into a `revive-later` tab/file.

---

## What NOT to do

- No scraping tools, browser bots, or bulk-DM automation. Beyond ToS issues,
  supplement founders get 20 automated pitches a week — being visibly human is the
  edge.
- No buying email lists. Cold spray kills your domain reputation before week two.
- Don't source more than 25/day. The constraint is real: sends and follow-ups are
  the bottleneck, and a pile of stale prospects is worse than a short fresh list.
