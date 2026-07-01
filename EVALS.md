# Firedancing storefront evals

Scripted and in-browser checks run against the local build on 2026-07-01 before deploy. Stack is static HTML, CSS, and JS. No Liquid, no framework.

## Pages (9)

| Page | Loads | Console errors | `<main>` | Shared header/footer | Nav cache |
|---|---|---|---|---|---|
| index.html | pass | none | yes | yes | v8 |
| catsuit.html | pass | none | yes | yes | v8 |
| bodysuit.html | pass | none | yes | yes | v8 |
| made-to-order.html | pass | none | yes | yes | v8 |
| blog.html | pass | none | yes | yes | v8 |
| cart.html | pass | none | yes | yes | v8 |
| maker.html | pass | none | yes | yes | v8 |
| post-slitweave-care.html | pass | none | yes | yes | v8 |
| post-cloth-vs-metal-ties.html | pass | none | yes | yes | v8 |

## Navigation and search

| Check | Result |
|---|---|
| Header, mega menu, mobile menu inject from site-nav.js | pass |
| Mega menu desktop-only (hidden below 900px, CSS + matchMedia) | pass |
| Skip-to-content link injected, targets #main, reveals on focus | pass |
| Search routes by keyword (bodysuit, custom, care, colour) to the right page | pass |
| Cart badge syncs across pages via storage and cartchange | pass |
| The maker nav link points to maker.html | pass |

## Commerce flow

| Check | Result |
|---|---|
| Ready to Ship: pick colour and size, add to bag | pass |
| Size grid XS to 4XL; M and 4XL flagged out of stock | pass |
| Size chart modal opens with 8 rows | pass |
| Wishlist heart persists to localStorage and survives reload | pass |
| Made to order: full build priced correctly (catsuit 150 + dye 40 + metal 25 + belt 25 = 240) | pass |
| Cart page and drawer list items, quantity, remove, subtotal | pass |

## Discoverability (SEO / AEO / agent-first)

| Check | Result |
|---|---|
| robots.txt and sitemap.xml serve 200 | pass |
| Canonical on every page; cart.html noindex | pass |
| OpenGraph + Twitter cards on every public page | pass |
| JSON-LD parses with zero errors on all 9 pages | pass |
| Product pages: per-size Offer array with SKUs and real availability | pass, 8 each |
| Home: Organization + WebSite + FAQPage | pass |
| Articles: Article schema; care article adds HowTo | pass |
| Maker: AboutPage + Organization + founder Person | pass |
| products.json feed serves 200 and is linked from home head | pass |

## Accessibility and UX

| Check | Result |
|---|---|
| Add-to-cart toast is role=status aria-live=polite | pass |
| Product galleries reserve height (aspect-ratio 4/5), no layout shift | pass |
| focus-visible outlines, reduced-motion, safe-area insets | pass |
| Faintest grey lifted from #6f6f6f to #9a9a9a | pass |
| Home journal teasers use distinct images and link to real posts | pass |

## Content and brand

| Check | Result |
|---|---|
| No leftover MIDNIGHT branding | pass |
| No returns/returnable copy anywhere (all sales final) | pass |
| No em or en dashes in site copy or DESIGN.md | pass |
| Two real journal articles published and linked | pass |
| Product images web optimized (1400px, ~q82 to 85) | pass |

## Known limitations (by design, not bugs)

* Checkout is a demo. The cart is client side only. Real payments need a backend (Phase 3 of the ecommerce build playbook, the biggest gap).
* Social links in Watch me make it and the maker page are placeholders until real streaming handles exist. Needed before Organization `sameAs` and reviews (`AggregateRating`) can be added truthfully.
* Gallery still uses dots for swipe; height is reserved but arrows or a peek are a later pass.
* Site is on a github.io project path; a custom domain is recommended.
