# Firedancing storefront evals

Manual and scripted checks run against the local build on 2026-07-01 before deploy. Stack is static HTML, CSS, and JS. No Liquid.

## Pages

| Page | Loads | Console errors | Shared header | Shared footer |
|---|---|---|---|---|
| index.html | pass | none | yes | yes |
| product.html | pass | none | yes | yes |
| made-to-order.html | pass | none | yes | yes |
| cart.html | pass | none | yes | yes |
| blog.html | pass | none | yes | yes |

## Navigation

| Check | Result |
|---|---|
| Header renders on every page from site-nav.js | pass |
| Cart icon is an SVG bag with a live count badge | pass |
| Search icon is an SVG magnifying glass | pass |
| Mobile menu opens from the hamburger, sectioned links | pass |
| Mega menu opens from Shop, three columns plus featured tile | pass |
| Search overlay opens with input and popular chips | pass |
| Escape and scrim clicks close menus | pass |
| Cart badge syncs across pages via storage and cartchange | pass, showed 1 after add |

## Commerce flow

| Check | Result |
|---|---|
| Ready to Ship: pick colour and size, add to bag | pass |
| Size grid runs XS to 4XL on both product and made-to-order | pass |
| Size chart modal opens with 8 rows on both pages | pass |
| Finish the look add-ons add to bag | pass |
| Made to order: full build priced correctly | pass, catsuit 150 plus bleach 40 plus metal 25 plus belt 25 equals 240 |
| Made to order variant string and fit measurements captured | pass |
| Cart page lists items, quantity, remove, subtotal | pass |
| Cart drawer opens and lists items | pass |

## Content and brand

| Check | Result |
|---|---|
| No leftover MIDNIGHT branding in HTML | pass |
| Product copy describes hand cut slitweave, not placeholder fabric | pass |
| Meet the maker section present on home | pass |
| Watch me make it section with social links present on home | pass |
| Journal teaser on home links to blog.html | pass |
| Blog page renders featured post, post list, newsletter | pass |
| Turnaround edge stated (2 to 4 weeks, not months) | pass |
| Two track promise clear at the buy box | pass |

## Hygiene

| Check | Result |
|---|---|
| No dead cartBtn or cartBadge references in page scripts | pass |
| No references to the removed coral photo | pass |
| No em or en dashes in DESIGN.md | pass, 0 found |
| No em or en dashes in visible site copy | pass, replaced with hyphens |
| Product images web optimized | pass, about 92 percent smaller |

## Known limitations (by design, not bugs)

* Checkout is a demo. The cart is client side only. Real payments need a backend.
* Social links in Watch me make it are placeholders until streaming handles exist.
* Reviews and some stats on the product page are still sample content.
* Cleavage, side slit, and size run values are reasonable defaults pending owner confirmation.
