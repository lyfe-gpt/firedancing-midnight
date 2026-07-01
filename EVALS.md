# Firedancing storefront evals

Scripted and in-browser checks run against the local build on 2026-07-01 before deploy. Stack is static HTML, CSS, and JS. No Liquid, no framework. (This static build is a prototype; production will move to a Shopify Liquid theme.)

Latest SEO / AEO / agent-first audit (2026-07-01) added: Blog + BlogPosting JSON-LD on the journal, an llms.txt agent index at the site root, and priceValidUntil on every Offer.

Mobile/UX pass (2026-07-01) added three real help pages (size guide, shipping/returns, contact), honest out-of-stock messaging, 44px tap targets, and 16px form inputs. Nav cache bumped to v9.

## Pages (12)

| Page | Loads | Console errors | `<main>` | Shared header/footer | Nav cache |
|---|---|---|---|---|---|
| index.html | pass | none | yes | yes | v9 |
| catsuit.html | pass | none | yes | yes | v9 |
| bodysuit.html | pass | none | yes | yes | v9 |
| made-to-order.html | pass | none | yes | yes | v9 |
| blog.html | pass | none | yes | yes | v9 |
| cart.html | pass | none | yes | yes | v9 |
| maker.html | pass | none | yes | yes | v9 |
| post-slitweave-care.html | pass | none | yes | yes | v9 |
| post-cloth-vs-metal-ties.html | pass | none | yes | yes | v9 |
| size-guide.html | pass | none | yes | yes | v9 |
| shipping.html | pass | none | yes | yes | v9 |
| contact.html | pass | none | yes | yes | v9 |

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
| Blog: journal page has Blog + BlogPosting schema for both articles | pass |
| Maker: AboutPage + Organization + founder Person | pass |
| Offers carry priceValidUntil (RTS per-size + MTO AggregateOffer) | pass |
| products.json feed serves 200 and is linked from home head | pass |
| llms.txt agent index serves 200 at site root | pass |

## Accessibility and UX

| Check | Result |
|---|---|
| Add-to-cart toast is role=status aria-live=polite | pass |
| Product galleries reserve height (aspect-ratio 4/5), no layout shift | pass |
| focus-visible outlines, reduced-motion, safe-area insets | pass |
| Faintest grey lifted from #6f6f6f to #9a9a9a | pass |
| Home journal teasers use distinct images and link to real posts | pass |
| Out-of-stock size tap shows "Size X is sold out" with made-to-order link; aria-disabled + aria-label | pass |
| Header icons, footer links, size-chart trigger, add-on buttons meet 44px tap target | pass |
| Made-to-order measurement inputs are 16px (no iOS focus zoom) | pass |
| No dead href="#" links anywhere; social placeholders are non-clickable "Soon" chips | pass |

## Content and brand

| Check | Result |
|---|---|
| No leftover MIDNIGHT branding | pass |
| No returns/returnable copy anywhere (all sales final) | pass |
| No em or en dashes in site copy or DESIGN.md | pass |
| Two real journal articles published and linked | pass |
| Product images web optimized (1400px, ~q82 to 85) | pass |
| Footer Help links resolve to real pages (size guide, shipping, care, contact) | pass |
| No fake "Reel" video chip on product galleries | pass |

## Known limitations (by design, not bugs)

* Checkout is a demo. The cart is client side only. Real payments arrive with the Shopify Liquid build (native Shopify checkout), not a custom backend.
* Social channels in Watch me make it and the maker page now render as non-clickable "Soon" chips, and Contact routes to the studio-notes signup. Real streaming handles are still needed before Organization `sameAs` and reviews (`AggregateRating`) can be added truthfully.
* Desktop is still a single 440px mobile column; a responsive desktop layout (2-column product pages, hover mega menu) is the next pass.
* Gallery still uses dots for swipe; height is reserved but arrows or a peek are a later pass.
* Site is on a github.io project path; a custom domain is recommended.
