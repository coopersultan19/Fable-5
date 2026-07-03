# START HERE — The Whole Business, In Plain English

Read this once, top to bottom. It explains what you're selling, why people buy
it, exactly what to do each day, and how it grows. No business-school words.

---

## What is this business, actually?

Supplement brands (creatine, sleep gummies, greens powders…) live and die by
their video ads on Instagram and TikTok. Their problem: ads "wear out." An ad
that prints money in week 1 is ignored by week 4, so brands constantly need
**fresh ads** — and the normal way to get them (hiring creators, aka "UGC
agencies") is slow (2 weeks) and thin (3–5 videos).

**You sell the fix:** 10 finished video ads, delivered in 48 hours, for $497.
You can do this because you make the videos with Higgsfield's Marketing Studio
(paste their product page, generate, polish) instead of filming anything.

You have one more weapon nobody else leads with: **compliance.** Supplement ads
have legal rules — you can say a product "supports sleep" but never that it
"cures insomnia." Break the rules and Meta bans the brand's ad account, which
is a company-ending event for them. Every script you deliver is checked against
a rulebook (`delivery/compliance-checklist.md`). That's why brands trust you
even though you're new.

**The three things you say in every pitch:** fast (48 hours), a lot (10 ads),
safe (compliant). Never lead with "AI" — you're a studio; the tool is just how
the kitchen works.

## How the money works

| Offer | Price | What it's for |
|---|---|---|
| Free sample | $0 — 1 ad | The door-opener. You make it BEFORE messaging them |
| Sprint | $497 — 10 ads in 48h | The main product. ~$50/ad, an impulse buy for a brand spending $10k+/mo |
| Retainer | $1,500/mo — 20 ads/mo | The real business. 3 retainers = $4,500/mo recurring |

The whole sales motion is one sentence: *"I made this ad for your product —
took me 20 minutes. Want 10 more?"* You're not asking for their time, you're
handing them a gift. That's why it works.

## The machine has four parts (each is a folder)

1. **The storefront** — the website (`index.html`). It exists so that when a
   founder gets your DM and googles you, you look real and premium. It also
   takes payments (Stripe buttons) and collects leads (the form).
2. **Finding people** — `prospecting/PLAYBOOK.md`. You use Meta's public Ads
   Library (free, legal, no account needed) to find supplement brands currently
   spending money on ads. 90 minutes a day = 25 good prospects, logged in
   `prospecting/pipeline.csv` (your entire CRM is this one spreadsheet).
3. **Talking to people** — `outreach/`. Word-for-word scripts for the first
   message, the follow-ups (day 2, 5, 9), and every objection they'll throw at
   you ("is this AI?", "too expensive"…). Don't improvise until you've sent 100
   messages with the scripts as written.
4. **Doing the work** — `delivery/SOP.md`. The moment someone pays: send 5
   intake questions → write 10 scripts (10 different hooks) → check every
   script against the compliance checklist → generate in Higgsfield → check
   again → deliver in a Google Drive folder with a note that tells them how to
   test. The upsell to the $1,500 retainer goes in the delivery message itself.

## Your first day (one-time setup, ~half a day)

1. Buy **dosereel.com** (or a fallback from README.md), ~$10.
2. Make two **Stripe payment links** (stripe.com → Payment Links): $497
   one-time, $1,500/mo subscription. Paste them into `index.html` where it says
   `REPLACE_SPRINT_LINK` and `REPLACE_RETAINER_LINK`.
3. Make a free **Formspree** form (formspree.io), paste its ID over
   `YOUR_FORM_ID` in `index.html`. Now the site's form emails you every lead.
4. **Deploy**: one click — repo Settings → Pages → Source: "GitHub Actions"
   (the deploy workflow is already in the repo; after the toggle every push
   goes live automatically). Connect your domain in the same settings page.
   Netlify/Vercel work too if you prefer.
5. In Claude chat (with Higgsfield connected), generate **6 portfolio ads** —
   one per niche — and drop them into the portfolio slots in `index.html`
   (there's a comment showing the exact video tag).
6. **Dry-run a delivery once** on any random supplement product, start to
   finish, so the first paid one isn't your first attempt.

## Your every day after that (the loop)

Morning to early afternoon, ~4 focused hours:

1. **Source 25** new brands from Meta Ads Library → log in pipeline.csv (90 min)
2. **Make sample ads** for the best ones in Higgsfield (~15–20 min each)
3. **Send 25** first messages + every follow-up that's due today (the sheet
   tells you which). Email templates are pre-loaded as drafts in your Gmail
   (search `[TEMPLATE` in Drafts) — copy, personalize the brackets, send.
4. **Answer every reply within an hour.** Speed of reply closes more deals
   than any script.
5. Someone pays → **drop into delivery mode** (SOP.md owns your next 48h)
6. Fill in the scoreboard in `EXECUTE.md` before bed

That's the whole job: 25 in, 25 out, replies fast, deliver on time, every day.
Expect roughly: 100 messages → 10–20 conversations → 2–5 paying clients. The
first week's exact schedule, hour by hour, is in `EXECUTE.md`.

## How it scales (the honest version)

**Phase 1 — Prove it (weeks 1–4).** You do everything. Goal: 10 paying Sprint
clients and 2–3 on retainer. That's roughly $2k–$5k/mo and, more importantly,
proof the machine works. Ask every happy client two things: results screenshots
(your future case studies) and *"know any other founders who need creative?"*
(supplement founders all know each other).

**Phase 2 — Buy back your time (months 2–3).** Your bottleneck is hours.
Hire a VA (~$5–8/hr) to do prospecting and founder-finding — the playbook is
already written so they literally follow PLAYBOOK.md. You keep the two things
that ARE the business: talking to clients and quality/compliance review. Raise
prices as demand fills: Sprint $497 → $697, retainer $1,500 → $2,000 for new
clients. Nobody churns over a price that only applies to new people.

**Phase 3 — Recurring-first (months 3–6).** Stop chasing one-off Sprints;
make the Sprint the trial and the retainer the product. 10 retainers at
$1,500–2,000 = $15k–20k/mo with maybe 15 hours/week of delivery work once a VA
handles sourcing and an editor/operator (hire #2) handles Higgsfield production
against your scripts. Your job becomes: sales calls, compliance sign-off,
monthly performance reviews.

**Phase 4 — Pick a multiplier (month 6+), one of:**
- **Go deeper:** add landing pages / email creative for the same clients
  (raise retainer to $3k–5k) — easiest, same buyers.
- **Go wider:** clone the playbook for a neighboring compliance-heavy niche
  (skincare, pet supplements, functional beverages) — same machine, new list.
- **Productize down:** self-serve tier where brands submit a URL and get ads
  with no touch — high volume, lower price, needs the most automation.

Rule for every phase: **never scale outreach volume past your ability to
deliver in 48 hours.** The turnaround promise IS the brand. If delivery
strains, raise prices before you raise volume.

## Things that will actually kill it (avoid these)

- Skipping the free sample and sending "hey, want to hop on a call?" like
  every other agency. The sample IS the pitch.
- Sending 25 messages one day and zero the next. Deals show up 3–5 days after
  the work; inconsistency reads as failure when it's just lag.
- Shipping a non-compliant script to close faster. One banned ad account and
  your reputation in a small, chatty niche is done.
- Blowing a 48-hour deadline silently. If you'll be late, say so at hour 40
  and add a free 11th ad. Honesty + a gift keeps the client; silence loses them.
- Tinkering with the website for a week. The site is done. Attention goes to
  outreach — the site never made anyone money without a DM pointing at it.
