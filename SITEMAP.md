# Platinum Restoration & Construction — Sitemap & Wireframe Plan

Draft v1 — 2026-08-02. Matches the 18-page scope in the Bloom proposal (plus Privacy Policy).

## Sitemap

| # | URL | Page | Wireframe built from |
|---|-----|------|----------------------|
| 1 | `/` | Home | Home-3 sections (Hero, About, WhyChoose, Process, Portfolio, Counter, Contact, Testimonial, CTA) + service-area grid |
| 2 | `/about` | About | About innerpage sections (AboutThree, WhyChooseThree, ProcessThree, CounterThree, TestimonialThree) |
| 3 | `/contact` | Contact | Contact innerpage sections (ContactArea, ContactMap) |
| 4 | `/restoration-services` | Restoration Services (overview) | Service grid + Process + Testimonials + Contact strip |
| 5 | `/restoration-services/water-damage-repairs` | Water Damage Repairs | Service-detail draft + FAQ |
| 6 | `/restoration-services/mold-inspections` | Mold Inspections | Service-detail draft + FAQ |
| 7 | `/restoration-services/mold-remediation` | Mold Remediation | Service-detail draft + FAQ |
| 8 | `/restoration-services/crawlspace-remediation` | Crawlspace Remediation | Service-detail draft + FAQ |
| 9 | `/restoration-services/insulation-removal-installation` | Insulation Removal & Installation | Service-detail draft + FAQ |
| 10 | `/restoration-services/vapor-barrier-installation` | Vapor Barrier Installation | Service-detail draft + FAQ |
| 11 | `/restoration-services/dehumidifier-installation` | Dehumidifier Installation | Service-detail draft + FAQ |
| 12 | `/construction-services` | Construction Services (overview) | Service grid + Process + Testimonials + Contact strip |
| 13 | `/construction-services/residential-remodels` | Residential Remodels | Service-detail draft + FAQ |
| 14 | `/construction-services/sheetrock-painting` | Sheetrock & Painting | Service-detail draft + FAQ |
| 15 | `/construction-services/windows-doors` | Windows & Doors | Service-detail draft + FAQ |
| 16 | `/construction-services/roofing-repairs` | Roofing & Repairs | Service-detail draft + FAQ |
| 17 | `/construction-services/drainage-solutions` | Drainage Solutions | Service-detail draft + FAQ |
| 18 | `/property-management` | Property Management & Repairs | Service-detail draft + FAQ |
| 19 | `/privacy-policy` | Privacy Policy | Simple prose page (placeholder) |

## Where things live

- **New site routes:** `src/app/(site)/…` — the `(site)` route group has its own `layout.js` (imports the template CSS, sets Platinum metadata + favicon).
- **New draft components:** `src/sections/Site/…` — `SiteHeader`, `SiteMobileMenu`, `SiteFooter`, `SiteBreadcrumb`, `ServiceAreaGrid`, `ServiceDetailDraft`, plus `siteData.js` (single source of truth for services, nav, phone).
- **Service detail pages** are dynamic routes (`[slug]/page.js`) fed from `siteData.js` — edit one component/data file to change all 12.
- **Nothing from the template was deleted.** All template pages remain browsable via the TEMPLATE dropdown in the site header. The Envato demo landing page moved from `/` to `/pages/demo` (file relocated, untouched otherwise) so the real Home can live at `/`.

## Placeholders to replace later

- All body copy (marked as draft/lorem)
- Email address (guessed from domain — confirm)
- Address / service area, social links
- Photos beyond the ones pulled from the old site
- FAQ section content, testimonials, counters
- Old-site images in `public/aditional-assets/images/` are used on matching service pages

## To remove before launch

- TEMPLATE dropdown in `SiteHeader` + `SiteMobileMenu`
- `/pages/*` template routes and unused sections
- `src/app/pages/demo` (Envato demo landing)
