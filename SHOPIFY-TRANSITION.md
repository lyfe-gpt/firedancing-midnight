# Firedancing: Shopify Liquid transition plan

The static site at lyfe-gpt.github.io/firedancing-midnight is the design prototype. This document maps every page, feature and data structure of the prototype onto a Shopify Online Store 2.0 theme, and lays out the build in phases. The prototype stays the source of truth for look, copy and tone (see DESIGN.md); Shopify becomes the source of truth for products, inventory, cart and checkout.

## 1. Site map

### Current site → Shopify resource map

| # | Prototype page | Shopify URL | Shopify resource | Template |
|---|---|---|---|---|
| 1 | index.html | / | Home | `templates/index.json` |
| 2 | catsuit.html | /products/groove-slitweave-catsuit | Product (8 variants) | `templates/product.json` |
| 3 | bodysuit.html | /products/ember-slitweave-bodysuit | Product (8 variants) | `templates/product.json` |
| 4 | made-to-order.html | /products/made-to-order-slitweave | Product (2 variants + options + line item properties) | `templates/product.mto.json` |
| 5 | cart.html | /cart | Cart | `templates/cart.json` |
| 6 | blog.html | /blogs/journal | Blog | `templates/blog.json` |
| 7 | post-slitweave-care.html | /blogs/journal/how-to-wash-a-slitweave | Article | `templates/article.json` |
| 8 | post-cloth-vs-metal-ties.html | /blogs/journal/cloth-vs-metal-ties | Article | `templates/article.json` |
| 9 | maker.html | /pages/the-maker | Page | `templates/page.maker.json` |
| 10 | size-guide.html | /pages/size-guide | Page | `templates/page.size-guide.json` |
| 11 | shipping.html | /policies/shipping-policy (+ /policies/refund-policy) | Native policy pages | Shopify-rendered |
| 12 | contact.html | /pages/contact | Page + native customer form | `templates/page.contact.json` |
| - | (new) | /collections/all, /collections/ready-to-ship | Collections | `templates/collection.json` |
| - | (new) | /search | Native predictive search | `templates/search.json` |
| - | (new) | /account, checkout, order status | Native | Shopify-rendered |
| - | products.json | Shopify product JSON + Storefront API | Native | n/a |
| - | sitemap.xml, robots.txt | Auto-generated | Native | n/a |
| - | llms.txt | Re-point links at the new URLs | Theme asset or app proxy |

New pages Shopify gives us that the prototype cannot: collections, customer accounts, order status/tracking, real search results, gift cards (optional), native policy pages surfaced in checkout.

### Navigation map (unchanged in structure)

- Header: Shop (mega menu: Catsuit, Bodysuit, Build your fit) · logo · search · bag
  → two Shopify menus: `main-menu` (Shop items) and `explore-menu` (Journal, The maker, Watch me make it)
- Footer: Shop / Explore / Help columns → three Shopify menus, editable in admin without code
- Mobile: hamburger drawer mirrors both menus (same fd pattern as the prototype)

## 2. Data model

### Products and variants

**Groove Slitweave Catsuit** - option1 Colour (Onyx Black, Ghost White), option2 Size (XS-4XL). SKUs `GROOVE-CATSUIT-<SIZE>` carry over. Inventory tracked by Shopify; M and 4XL currently 0 (sold-out messaging becomes `variant.available`). Price $148.

**Ember Slitweave Bodysuit** - option1 Size (XS-4XL), Onyx Black only. SKUs `EMBER-BODYSUIT-<SIZE>`. Price $128.

**Made-to-Order Slitweave** - the configurator becomes:
- Variants (price-bearing): Silhouette × Dye finish × Ties. Bodysuit $130 / Catsuit $150 base; Tie-dye or Bleach-dye +$40; Metal ties +$25. That is 2×3×2 = 12 variants, each with a real price, so the total is computed by Shopify and survives into checkout honestly.
- Chain belt (+$25): separate add-on product added to cart alongside (same pattern as the existing add-ons), or a 13th-24th variant dimension if preferred; add-on product is simpler.
- Non-price fit choices (length, neckline, cleavage depth, side-slit width, colour, size, bust/waist/hip, notes): **line item properties** (`properties[Length]`, etc.). They ride the line item into the order so the spec reaches the maker with zero custom backend, which is exactly what the prototype promises ("your spec travels with the order").

**Add-ons** (Lace-up arm cuffs $35, O-ring choker $20, Slitweave care kit $12) - three simple products in an `add-ons` collection, surfaced by the `finish-the-look` section.

### Metafields

| Metafield | Type | Used by |
|---|---|---|
| `product.custom.subtitle` | text | "Full-Length · Hand-Cut Slitweave · Second-Skin Fit" line |
| `product.custom.why_we_made_this` | rich text / JSON | The 01/02/03 story block |
| `product.custom.trending_label` | text | "Trending in Festival" chip (empty = hidden) |
| `shop.custom.size_chart` | JSON | Size chart modal + size guide page (single source, replaces the 3 duplicated tables) |
| `article.custom.read_minutes` | integer | Journal card labels |

### Content migration

- Two journal posts → Articles in a `journal` blog (Care / Behind the seams as tags). The care post's HowTo JSON-LD moves into the article template.
- Maker, size guide, contact copy → Pages.
- Shipping/returns/care copy → Shopify **policy settings** (shows in checkout footer too); keep a short `/pages/shipping` only if we want the styled version, otherwise redirect.
- Images: upload `assets/product/*` to Shopify Files/product media. Shopify CDN then handles `srcset`, sizes and format negotiation (better than the current single 1400px JPGs).

## 3. Theme architecture

Base: **Skeleton/Dawn-derived OS 2.0 theme**, stripped to the prototype's look. Keep JSON templates + sections so the owner can re-order home page blocks without code.

```
layout/theme.liquid              head (meta, canonical, fonts), header/footer section groups
sections/
  fd-header.liquid               sticky header + mega menu + mobile drawer (from site-nav.js)
  fd-footer.liquid               3 menus + blurb (menus editable in admin)
  fd-hero.liquid                 home hero ("Two ways to wear the night.")
  fd-option-cards.liquid         Shop the drop / Build your fit cards (blocks)
  fd-reassurance.liquid          Hand-cut / Cut to order / One of a kind strip
  fd-maker-split.liquid          image+copy split (home) and maker page hero
  fd-watch.liquid                Watch me make it chips (settings: URL per channel; no URL = "Soon" chip)
  fd-journal-teasers.liquid      latest articles from the journal blog
  main-product.liquid            gallery + buy panel (2-col desktop / stacked mobile)
  main-product-mto.liquid        configurator: variant pickers + line-item-property fields
  fd-why-we-made-this.liquid     metafield-driven story block
  fd-finish-the-look.liquid      add-on collection row
  fd-complete-the-set.liquid     product recommendations (native recommendations API)
  main-cart.liquid, fd-cart-drawer.liquid
  main-blog.liquid, main-article.liquid, main-page.liquid, main-search.liquid
snippets/
  fd-price.liquid, fd-size-pills.liquid (sold-out state from variant.available),
  fd-size-chart-modal.liquid (shop metafield), fd-toast.liquid, fd-badge.liquid,
  fd-schema-product.liquid (JSON-LD; per-variant Offers w/ SKU + availability, priceValidUntil,
  MerchantReturnPolicy - port of the audited markup), fd-schema-org.liquid, fd-breadcrumbs.liquid
assets/
  fd-base.css                    mobile-first styles extracted from the inline styles
  fd-desktop.css                 direct port of assets/desktop.css (class names already match: fd-*)
  fd-cart.js                     thin wrapper over Shopify /cart/add.js, /cart/change.js
                                 (replaces MidnightCart/localStorage; keeps midnight:cartchange
                                 event name so drawer/badge code ports as-is)
  fd-nav.js, fd-product.js, fd-mto.js
config/settings_schema.json      colours (#ff3b3b etc.), fonts, social URLs, announcement bar
locales/en.default.json          all UI strings (no em/en dashes rule lives on in copy review)
```

Deliberate carry-overs from the prototype: the `fd-` class convention, the 900px desktop breakpoint, 44px tap targets, 16px inputs, aria-live toast, `aria-disabled` sold-out pills, reduced-motion and safe-area rules, dark palette and Figtree.

## 4. Feature mapping - build vs. free

| Prototype feature (hand-built) | In Shopify |
|---|---|
| localStorage cart + drawer + badge sync | **Replace**: Cart AJAX API; drawer re-renders from `/cart.js`. Badge/event names keep the existing contract. |
| Demo checkout message | **Free**: real Shopify checkout, taxes, shipping rates, discounts |
| Per-size stock flags hardcoded in JS | **Free**: variant inventory; sold-out pill = `variant.available == false` |
| "Size M is sold out. Build it made to order." | Port message; link to MTO product (keep - it's a good conversion path) |
| Keyword search router (routeSearch) | **Free**: predictive search API + /search template |
| Wishlist heart (localStorage) | Keep as-is (localStorage) for launch; app later if needed |
| MTO price calculator | **Replace**: variant prices (silhouette/dye/ties) + add-on product (belt); fit fields = line item properties |
| products.json feed | **Free**: native product JSON, Storefront API; agents also get Shopify's own structured data |
| Hand-written sitemap.xml / robots.txt | **Free**: auto-generated |
| Canonicals, OG/Twitter meta | Port into `theme.liquid` head (Shopify fills URLs) |
| JSON-LD (Product/Offers, Org, FAQ, Blog, Article, HowTo, Breadcrumb, AboutPage) | Port as snippets - keep ours (it is richer than most themes'); disable any duplicate JSON-LD from the base theme |
| llms.txt | Keep; rewrite URLs; serve as theme asset (or app proxy for root path) |
| Newsletter form (dead) | **Free**: `customer_form` (contact_customer) → Shopify Email/Klaviyo |
| Free-shipping-over-$75 banner | Shipping profile + announcement-bar setting so copy and reality can't drift |
| Final-sale policy copy | Refund policy setting (surfaces in checkout) + on-page copy |

## 5. Phased build

**Phase 0 - Store setup (no code).** Create the store, add the 3 products + 3 add-ons with SKUs/prices/inventory above, set shipping profile ($75 free-ship threshold), payments, taxes, policies (final sale, shipping, contact). Upload images. Create menus. Outcome: purchasable store on an unstyled default theme - commerce correctness proven before any Liquid.

**Phase 1 - Theme shell.** `theme.liquid`, header/footer sections, base + desktop CSS extraction, settings schema, locales. Outcome: every page wears the Firedancing shell at both breakpoints.

**Phase 2 - Product templates.** `main-product` (gallery, colour/size pickers, sold-out states, size-chart modal, add to cart via AJAX, toast, sticky mobile bar), then `main-product-mto` (variant pickers + property fields + belt add-on). Port `fd-schema-product`. This is the conversion-critical phase; test matrix: every variant, OOS variants, MTO property flow into order details.

**Phase 3 - Home, journal, pages, cart.** Home sections as JSON template blocks; blog/article templates with Article/HowTo schema; maker/size-guide/contact pages; cart page + drawer on the Cart AJAX API.

**Phase 4 - SEO/AEO parity + launch.** Head meta parity check against the prototype (canonical, OG, Twitter), JSON-LD validation on all templates, `llms.txt` URL rewrite, 301 redirects (below), Search Console + sitemap submission. Run the same eval suite (EVALS.md) against the theme: pages, nav, commerce flow, discoverability, a11y, brand.

**Phase 5 - Cutover.** Custom domain on Shopify (buy the domain first - recommended before any of this so we never rank the github.io URLs harder). GitHub Pages site gets `<link rel="canonical">` to the new domain plus meta refresh/JS redirects per page, or is replaced by a redirect page; keep the repo as the design archive.

Phases 0-1 and 2-3 can overlap; 4 gates 5.

### Redirect table (Shopify URL Redirects admin, applied on the new domain; the github.io side mirrors it with per-page redirects)

```
/catsuit.html                    → /products/groove-slitweave-catsuit
/bodysuit.html                   → /products/ember-slitweave-bodysuit
/made-to-order.html              → /products/made-to-order-slitweave
/cart.html                       → /cart
/blog.html                       → /blogs/journal
/post-slitweave-care.html        → /blogs/journal/how-to-wash-a-slitweave
/post-cloth-vs-metal-ties.html   → /blogs/journal/cloth-vs-metal-ties
/maker.html                      → /pages/the-maker
/size-guide.html                 → /pages/size-guide
/shipping.html                   → /policies/shipping-policy
/contact.html                    → /pages/contact
/products.json                   → (native)
```

## 6. Decisions needed before Phase 0

1. **Domain** - the single highest-leverage purchase; everything else keys off it.
2. **MTO belt**: add-on product (recommended, simpler) vs. extra variant dimension.
3. **Shipping page**: native policy pages only (recommended) vs. also keeping a styled /pages/shipping.
4. **Email**: Shopify Email (free tier, fine to start) vs. Klaviyo for the studio-notes list.
5. **Wishlist**: ship with localStorage version or drop until an app is warranted.

## 7. Risks and guardrails

- **Theme JSON-LD double-up** - base themes emit their own Product schema; ours is richer. Disable theirs, keep ours, validate with the Rich Results test (same bar as EVALS.md).
- **MTO property abuse** - line item properties are free text; cap lengths client-side and keep the "no extra cost" fit options out of price logic entirely.
- **Copy drift** - free-shipping threshold, lead times and final-sale wording now live in three places (theme settings, shipping profile, policies). Phase 4 checklist includes a single sweep to confirm they match.
- **Brand rules carry over** - no em/en dashes, no fabricated reviews/`sameAs` until real handles exist, honest availability ("Size M is sold out"), all-sales-final everywhere. These are already encoded in EVALS.md; the theme inherits them.
- **Prototype stays truthful during the build** - until cutover, the github.io site keeps its "checkout is a demo" note in llms.txt.
