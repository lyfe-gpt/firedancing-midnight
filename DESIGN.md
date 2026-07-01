# Firedancing Design System and Tone of Voice (as built)

This documents the site as it actually ships in this repo: a dark, mobile first storefront for hand cut slitweave stagewear. It reflects the real code and copy, not a template.

## 1. Brand feeling

Performance grade stagewear for after dark. Confident, edgy, made for performers rather than a generic boutique. Dark canvas, one hot red accent, hand craft signals throughout. Duality runs through the whole thing: two ways to buy (ready made or made to order), light and dark, coverage and drama.

## 2. Colour

Core palette:

| Role | Hex | Use |
|---|---|---|
| Base page | `#0d0d0d` to `#121212` | App background |
| True black | `#000000` | Gallery and announcement bar |
| Surface cards | `#181818` | Cards, order summary, inputs |
| Surface alt | `#161616` | Reassurance tiles, cart drawer |
| Footer | `#0a0a0a` | Footer well |
| Primary red | `#ff3b3b` | CTAs, selected states, accents, logo |
| Red hover | `#ff5c5c` | Button hover, secondary labels |
| Error red | `#ff6b6b` | Validation text |

Text:

| Role | Hex |
|---|---|
| Primary | `#ffffff` |
| Secondary | `#d6d6d6` |
| Body muted | `#a7a7a7` |
| Faint meta | `#8f8f8f` |
| Disabled | `#5a5a5a` |

Borders and overlays: hairlines `rgba(255,255,255,.08)` to `.12`; input outlines `rgba(255,255,255,.2)` to `.28`; red borders `rgba(255,59,59,.3)` to `.35`; image scrims use a top gradient from `rgba(0,0,0,.92)` to transparent.

Product swatch anchors: Onyx Black `#0a0a0a`, Ghost White `#e9e9ec`.

## 3. Typography

* Family: Figtree (weights 400 to 900), fallback system-ui and sans-serif.
* Display and hero: 38px, weight 900, tracking -.02em, line height 1.03.
* H1 product: 25px to 26px, weight 800.
* H2 section: 21px to 22px, weight 800.
* Body: 13px to 15px, weight 400 to 600, line height about 1.55.
* Eyebrow label: 11px, weight 800, letter spacing .14em, uppercase, usually red.
* Logo wordmark: FIREDANCING, 16px, weight 800, letter spacing .16em, with a flame mark in a red circle.

## 4. Layout and spacing

* Mobile first, single column, `max-width:440px` centered. The whole experience is phone shaped.
* Section padding 20px to 24px, card padding 14px to 22px.
* Radii: cards 12px to 18px, inputs and small controls 6px to 8px, buttons and pills fully rounded at 500px.
* Sticky chrome: a 54px top header and a bottom action bar, both `rgba(0,0,0,.8)` with a 16px backdrop blur and a hairline border.
* Galleries: horizontal scroll snap, images at a 4 by 5 ratio, object-fit cover.

## 5. Components

* Primary button: pill, red fill, white weight 800 text, hover to `#ff5c5c`.
* Secondary button: white fill with black text, or transparent with a light outline.
* Selected state: red fill or red border with a soft red ring.
* Cards: `#181818`, hairline border, 12px radius.
* Badges and pills: blurred dark over imagery, or solid red for emphasis.
* Eyebrow labels: red, uppercase, tracked, used to open each section.
* Toast: red card that slides up and dismisses on its own.
* Chain belt toggle: a pill switch that turns red when on.
* Inputs: dark fill with a light border, centered numeric fields for measurements.

## 6. Navigation

* Shared header injected on every page from `assets/site-nav.js`.
* Icons are inline SVG: a hamburger, a magnifying glass search, and a shopping bag with a live count badge.
* Mobile menu: a left slide-in panel with sectioned links (Ready to Ship, Made to Order, Explore) and a link to the bag.
* Mega menu: a Shop trigger opens a full width panel with the same categories in columns plus a featured image tile.
* Search: a top drop-down overlay with an input and popular search chips.

## 7. Motion

* Micro transitions of .12s to .2s on selects and hovers.
* Equalizer bars pulse on the Trending badge.
* The add to cart toast slides up.
* The cart drawer slides in from the right over a fade scrim.
* Menus and the search overlay fade and slide in.
* Keep motion light. It accents the page, it does not carry it.

## 8. Imagery

* Full bleed 4 by 5 hero shots. Dark studio with red and blue neon, fire performance energy, plus one daylight duo frame.
* Web optimized at max 1000px and about 72 quality, sharp at 440px with a light payload.
* Always object-fit cover, with scrim gradients so overlaid text stays legible.

## 9. Tone of voice

Personality: confident, after dark, performer to performer. It reads like someone who has been on stage, not a marketer. Proud of the craft, never fluffy, never over sexualized. The clothes are gear for a performance, framed by skill and stagecraft.

Principles:

1. Talk to performers as peers. Use their words: spins, drops, floor work, encore, set, front row, after dark.
2. Lead with craft. Hand cut, hand woven, laced to hold. The making is the story.
3. Keep it short. Punchy lines and direct calls to action.
4. Use duality: two ways to wear the night, light and dark, coverage and drama.
5. Speak in second person: your call, built for you, build your fit.
6. Frame benefits as proof, like "survives the encore", not a feature list.

Real copy from the site:

* Eyebrow: "HAND-CUT SLITWEAVE FOR AFTER DARK"
* Hero: "Two ways to wear the night." then "Every piece is cut and woven by hand. Grab a finished slitweave off the rack, or build one laced to your exact fit. Same craft, your call on how you get it."
* CTAs: "Shop the drop", "Build your fit", "Start building"
* Product: "A slitweave that survives the encore." and "Made by one pair of hands."
* Sign off: "Hand-cut slitweave stagewear for artists who live after dark."

Do and do not:

| Do | Do not |
|---|---|
| "Survives the encore" | "Comfortable and stylish" |
| "Build your fit" | "Customize your order" |
| "For artists who live after dark" | "For everyone" |
| Performer verbs, stagecraft framing | Over sexualized or lingerie forward copy |
| Short, declarative, tracked eyebrows | Long paragraphs and corporate hedging |

Naming: pieces get one word performance names (Groove catsuit, Ember bodysuit). Finishes read as colour names (Onyx Black, Ghost White).
