# Delivery SOP — From "Client Pays" to "Ads Delivered"

Target timeline: **payment → delivery in under 48 hours.** The clock starts when
Stripe confirms payment, not when the client answers intake. Everything below is
sequenced to protect that promise.

---

## Hour 0 — Payment lands

1. Stripe notification arrives. Reply within the hour (speed here sets the tone
   for the whole relationship):

   > Payment received — you're in the queue. Two things and then you don't hear
   > from me until the ads arrive: (1) answer the 5 questions below, takes 3
   > minutes; (2) your delivery lands within 48 hours of your answers.

2. Send the **intake questions**:

   1. Which product are we making ads for? (exact URL)
   2. Who buys it, in one sentence? ("35–55 women who lift" beats a persona deck)
   3. What's the #1 reason customers say they bought? (pull one review quote if unsure)
   4. Best-performing ad or hook so far, if any? (link or description — "none" is fine)
   5. Anything you never want said or shown? (competitors, claims, words, vibes)

3. Create the client row in `pipeline.csv` (status `sprint_closed`) and create
   the delivery folder (structure below) immediately, while it's fresh.

**If intake answers don't arrive within 12 hours, nudge once:** "Only blocker on
your 48-hour clock is the 5 questions — even rough one-liners work."

---

## Hours 1–6 — Scripting (the highest-leverage step)

Write **10 scripts = 10 distinct hooks**, not one script with 10 line edits.
Angle mix that covers a full test matrix:

| # | Angle | Example opener shape |
|---|---|---|
| 1 | Problem/situation | "3pm and my brain is done." |
| 2 | Skeptic converted | "I assumed all greens powders were scams." |
| 3 | Ingredient education | "Magnesium is in 300+ processes in your body." |
| 4 | Routine/ritual | "The last thing I do before bed." |
| 5 | Comparison to habit | "Cheaper than my coffee order." |
| 6 | Social proof / review voice | "The reviews kept saying the same thing." |
| 7 | Founder story | "She started this brand because…" |
| 8 | Myth-bust | "Creatine isn't just for gym bros." |
| 9 | Unboxing/product-first | Product on counter, texture, mix, taste |
| 10 | Objection preempt | "It doesn't taste like a lawn, I checked." |

Each script: 15–35 seconds, hook inside the first 2 seconds, one claim block in
supports/promotes language, one CTA. Then **run all 10 through
`compliance-checklist.md` — every box, every script.** Fix failures now; a
compliance rewrite after production costs 10× more.

---

## Hours 6–24 — Production in Higgsfield Marketing Studio

1. Open Higgsfield **Marketing Studio** (in Claude chat with the Higgsfield
   connector, or app.higgsfield.ai).
2. **Paste the client's product URL** — the studio pulls product imagery,
   branding, and context from the page.
3. Generate against your scripts/angles. Work in batches: generate 3–4, review,
   adjust prompts, continue. Don't fire all 10 blind.
4. Specs: **9:16 vertical, 1080×1920**, 15–35 s, captions/text overlays baked in
   (most feed viewing is muted).
5. **Review every ad against the compliance checklist again** — generated
   voiceover or on-screen text can drift from your approved script. What ships
   is what you checked, not what you wrote.
6. Regenerate anything below the bar. The free sample sold them on quality; the
   paid batch has to clear the sample, not just match it.
7. Export all finals.

## Hour 24–40 — QC + packaging

**File naming (non-negotiable, this is how media buyers read results):**

```
[brand]_[product]_[angle]_[variant]_[length]_v1.mp4
e.g. ironscoop_preworkout_skeptic_hook2_21s_v1.mp4
```

**Google Drive folder structure (one folder per client, share as
anyone-with-link / viewer):**

```
DoseReel — [Brand] — Sprint 001/
├── 01_Final_Ads/          (the 10 mp4s)
├── 02_Scripts/            (scripts.pdf — all 10, so they can read the angles)
├── 03_Captions/           (captions.txt — suggested caption + #ad note per testimonial-style ad)
└── README_START_HERE.txt  (the walkthrough note, below)
```

---

## Hour 40–48 — Delivery

Send the Drive link with the **walkthrough note** (drop this in
README_START_HERE.txt AND in the delivery message — Loom video optional but a
2-minute one noticeably lifts retainer conversion):

> **Your 10 ads are in 01_Final_Ads.**
>
> How to launch: don't pick your favorite — your favorite is usually wrong, mine
> too. Put all 10 in one campaign at equal budget ($10–20/day each) for 3–4
> days, then kill the bottom 7 and scale the top 3.
>
> The filenames tell you the angle (skeptic, ritual, mythbust…) so results in
> Ads Manager read like a sentence.
>
> Compliance: every script is structure/function only — no disease claims,
> nothing that pokes Meta's filters. For testimonial-voice ads, keep the #ad
> disclosure from 03_Captions in your caption. [If applicable: heads up — your
> product page is missing the standard FDA disclaimer; worth adding before
> scaling spend.]
>
> One revision pass included: any ad you want tweaked, tell me which file and
> what to change, and revisions land within 24h.

**Delivery message = Drive link + walkthrough + the upsell (below), all in one
message.** No "hope this finds you well."

---

## The retainer upsell (send WITH delivery, not after)

> Last thing — the reason batches work is cadence, not any single ad. Winners
> fatigue in 2–4 weeks, so brands that win keep 10+ fresh variants entering the
> account monthly.
>
> That's the retainer: **$1,500/mo — 20 ads a month, 2 revision rounds, and a
> monthly creative-performance review** where we look at your Ads Manager
> numbers together and decide next month's angles based on what actually ran.
> It's $75/ad instead of $50/ad-once — the difference is you never run out of
> things to test.
>
> No pressure today. Run this batch first. When the winners start fatiguing,
> this message will still be here: [Stripe retainer link]

**Follow-up on the upsell exactly once, 7 days post-delivery:**

> How'd the batch test? If you've got 3–4 days of data, send a screenshot of
> the ad-level results — I'll tell you which angles I'd double down on next,
> free, whether or not you take the retainer.

(That free read *is* the retainer's monthly review. Let them taste it.)

---

## Retainer clients — monthly rhythm

- **Day 1 of cycle:** performance review (15–30 min or async via screenshots) →
  agree next month's 20-ad angle plan based on last month's winners.
- **Days 2–4:** batch 1 (10 ads) delivered.
- **Days 14–16:** batch 2 (10 ads) delivered, informed by batch 1's early data.
- **Revisions:** 2 rounds per month, 24h turnaround, tracked in the client's
  Drive folder under `04_Revisions/`.

---

## Edge cases

- **Client goes silent after paying, pre-intake:** nudge at 12h and 36h; at 72h,
  produce from the product page alone and deliver with: "Built from your product
  page — your revision pass can redirect anything."
- **Client requests non-compliant edits** ("can it say it cures bloating?"):
  decline in one sentence, cite the checklist, offer the compliant rewrite. This
  is a positioning moment, not friction: "That phrasing is how ad accounts die —
  here's the version that says the same thing and keeps you running."
- **Blown deadline risk** (rare, be honest early): notify before hour 40, not
  at hour 47, and include one extra ad (11th) in the delivery as the apology.
