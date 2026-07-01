# Midnight — Slitweave storefront (Firedancing Clothing)

Mobile-first, dark-theme e-commerce prototype for a hand-cut **slit-weave** stagewear brand. Static HTML/CSS/JS — no build step.

## Pages
- `index.html` — Home (two tracks: Ready to Ship / Made to Order)
- `product.html` — Ready-to-Ship product page (gallery, colour/size, accordions, reviews)
- `made-to-order.html` — Made-to-Order configurator with live pricing + fit capture
- `cart.html` — Bag / checkout (client-side cart via `localStorage`)

## Run locally
```bash
python3 -m http.server 4599
# open http://localhost:4599
```

## Notes
- Pricing model: bodysuit $130 / catsuit $150 base, +$40 dye, +$25 metal ties, +$25 chain belt.
- Cart is client-side only — a real checkout (Shopify/Stripe) is a future step.
- Built from a claude.ai/design handoff; product photography web-optimized.
