# Content Integration Plan — every piece of old-site content, placed

Goal: 100% of platinumrestorationandconstruction.com content integrated,
no page overloaded, no content repeated between pages, everything in the
established style (Plus Jakarta Sans, red/blue/white, 4-6-8px radii,
diamond motif, reveal animations).

## Placement map

### HOME (narrative: hook → story → problem → solution → proof → action)

| Old-site content | Where it goes | Treatment |
|---|---|---|
| Hero headline + tagline | ✅ already in hero | — |
| "Rooted in the Triangle, Built on Trust" | ✅ About section (real heading swap: use this as the section title — it was written for exactly this block) | text edit |
| "When Challenges Arise…" (3 problems) + "Comprehensive Coverage…" (3 solutions) | **NEW section "Challenges → Solutions"** after About | 3 cards, each pairs a problem (dark top half) with its solution (white bottom half) — they map 1:1 (Water Damage→Expert Restoration, Outdated Spaces→Tailored Construction, Maintenance→Seamless Management) |
| "Living With Property Issues With No End in Sight?" (Rising Costs / Daily Frustration / Stressful Management) | Same section — slim 3-item strip above the cards ("the cost of waiting") | icon + one-liner row |
| 5 benefits **with their sub-bullets** | ✅ Why-Choose section — replace the single generic checklist line with each benefit's real 2–3 bullets | data + markup tweak |
| "Licensed and Insured Professionals" + "Personalized Client Experience" | **NEW slim trust strip** (dark, one row): Licensed & Insured · 30+ Years · Faith-Based, Locally Owned · Free Consultations | placed under Why-Choose |
| Full testimonials | Cards keep excerpts; "Read full review" inline expander reveals the complete text | small client tweak |
| FAQ intros | ✅ FAQ accordion — body becomes intro + 3-4 curated key bullets per answer (full articles feed service pages, below) | data edit |
| Final CTA "Ready to Protect, Restore, and Transform Your Property?" | Home CTA headline swap (replaces "Your Vision / Is Our Mission") | text edit |

### RESTORATION / CONSTRUCTION OVERVIEW PAGES

| Old-site content | Where it goes |
|---|---|
| Expanded service checklists (incl. **basement waterproofing & sump pump**, crawlspace **encapsulation**) | "Everything we cover" checklist block under the intro — full lists even where no dedicated page exists |
| "Experience You Can Trust" paragraph | Overview intro enrichment |
| CTA variants | Restoration: "Let's Create a Home You Love" · Construction: "Why Wait? Let's Get Started Today" |
| Trust strip | reused from home |

⚠ Flag for client: basement waterproofing / sump pumps aren't in the
18-page sitemap — confirm whether they deserve a page or stay a checklist item.

### SERVICE DETAIL PAGES (kills all [Draft] placeholders)

Assembled per page from the FAQ articles + category lists:
1. Intro — service blurb + category description (real copy)
2. "What's included" — real checklist items for that category
3. "What to expect" — timelines from FAQ #1 (restoration: 1 day–1+ week; construction: 1–3 weeks; property mgmt: 24–48h + 24/7 emergency)
4. "Backed by real warranties" — workmanship + manufacturer (10yr–lifetime) from FAQ #4
5. CTA + FAQ accordion (shared)

### PROPERTY MANAGEMENT PAGE
Already has the response-time content; add property-types list (single-family,
multi-unit, commercial, retail, industrial) + services list from deep fetch.

### CONTACT PAGE (currently still raw template — needs the redesign anyway)
1. Breadcrumb + contact info tiles (phone / email / address / hours TBD)
2. Consultation form (shared with home)
3. "A Foundation of Faith and Integrity" + **"Our Promise to You"** trio
   (Client-Centered Service / Professionalism / Competitive Pricing) —
   "what to expect when you reach out" framing
4. Full-width flush map (component exists)

### FOOTER
✅ Real Facebook URL (done) · "Site by" credit → replaced with our own later

## Execution order
1. siteData expansion (all new content blocks)
2. Home: Challenges→Solutions section + strip, Why-Choose bullets, trust strip, CTA swap, testimonial expander
3. Overview pages enrichment
4. Service detail real copy
5. Contact page redesign
6. Build, verify, update SITEMAP.md

## Deliberately excluded (so nothing is silently dropped)
- "Welcome to Platinum Restoration and Construction" hero heading — weaker than current headline, tagline already used
- Duplicate "When Challenges Arise" section (old site rendered it twice)
- Old copyright/Whoosh credit
