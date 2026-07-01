# Midnight — Design System & Tone of Voice (as built)

> Extracted from the live site (this repo) — the dark, after-dark stagewear aesthetic as actually implemented. This is the **as-built** spec; distinct from any aspirational/template reference.

---

## 1. Brand feeling
Performance-grade **stagewear for after dark**. Confident, edgy, nightlife energy — built for performers, not a generic boutique. Dark canvas, hot red accent, hand-craft signals. Duality runs through it: **two ways to wear the night** (ready-made vs made-to-order), light and dark, coverage and drama.

---

## 2. Colour

### Core palette
| Role | Hex | Use |
|---|---|---|
| Base / page | `#0d0d0d` → `#121212` | App background (home `#0d0d0d`, PDP/cart `#121212`) |
| True black | `#000000` | Gallery + announcement bar |
| Surface / cards | `#181818` | Cards, order summary, inputs |
| Surface alt | `#161616` | Reassurance tiles, cart drawer |
| Footer | `#0a0a0a` / `#080808` | Footer wells |
| **Primary (red)** | `#ff3b3b` | CTAs, selected states, accents, logo |
| Red hover | `#ff5c5c` | Button hover, secondary labels |
| Error red | `#ff6b6b` / `#ffb0b0` | Validation text |

### Text
| Role | Hex |
|---|---|
| Primary | `#ffffff` |
| Secondary | `#d6d6d6` |
| Body muted | `#a7a7a7` / `#b3b3b3` |
| Faint / meta | `#8f8f8f` |
| Disabled | `#6f6f6f` / `#5a5a5a` |

### Borders / overlays
- Hairlines: `rgba(255,255,255,.08–.12)`
- Inputs/outlines: `rgba(255,255,255,.2–.28)`
- Red borders: `rgba(255,59,59,.3–.35)`
- Image scrims: `linear-gradient(to top, rgba(0,0,0,.92), transparent)`

### Product swatch anchors
Onyx Black `#0a0a0a` · Ghost White `#e9e9ec`. (Coral/rose retired until a proper studio shot exists.)

---

## 3. Typography
- **Family:** `Figtree` (Google Fonts, weights 400–900), fallback `system-ui, sans-serif`.
- **Display / hero:** 38px · 900 · `-.02em` tracking · line-height 1.03
- **H1 (product):** 25–26px · 800 · `-.01em`
- **H2 (section):** 21–22px · 800
- **Body:** 13–15px · 400–600 · line-height ~1.55
- **Eyebrow / label:** 11px · 800 · `letter-spacing .14em` · UPPERCASE · usually red
- **Logo wordmark:** "MIDNIGHT" · 16px · 800 · `letter-spacing .16em`
- **Numeric / price:** 17–22px · 800
- Anti-aliased (`-webkit-font-smoothing:antialiased`).

---

## 4. Layout & spacing
- **Mobile-first, single column, `max-width:440px` centered.** The whole experience is phone-shaped.
- Section padding 20–24px; card padding 14–22px.
- **Radii:** cards 12–18px · inputs/controls 6–8px · **buttons & pills fully rounded `500px`**.
- **Sticky chrome:** 54px top header + bottom action bar, both `rgba(0,0,0,.78)` with `backdrop-filter:blur(16px)` and a hairline border.
- Galleries: horizontal `scroll-snap`, images `aspect-ratio:4/5`, `object-fit:cover`.

---

## 5. Components
- **Primary button:** pill, `#ff3b3b` bg, white 800 text, hover `#ff5c5c`.
- **Secondary button:** white bg / black text (hero "Shop now"), or transparent w/ `rgba(255,255,255,.28)` outline.
- **Selected state:** red fill or red border + soft red ring (`0 0 0 3px rgba(255,59,59,.25)`).
- **Cards:** `#181818`, hairline border, 12px radius.
- **Badges/pills:** blurred `rgba(0,0,0,.55)` over imagery, or solid red for emphasis.
- **Eyebrow labels:** red, uppercase, tracked — the connective tissue between sections.
- **Toast:** red card, slides up, auto-dismiss.
- **Toggle (chain belt):** red-when-on pill switch.
- **Inputs:** `#181818` fill, light border, centered numeric fields for measurements.

---

## 6. Motion
- Micro-transitions `.12–.2s` on selects/hovers.
- **`eqbar`** — equalizer bars pulse on the "Trending" badge (music/nightlife cue).
- **`toastIn`** — add-to-cart toast slides up.
- **`mcSlide` / `mcFade`** — cart drawer slides in from right over a fade scrim.
- Smooth `scroll-snap` galleries with animated dot indicators.
- Restraint over spectacle — motion accents, never carries the page.

---

## 7. Imagery
- Full-bleed **4:5** hero shots; dark studio with **red & blue neon**, fire-performance energy, plus one daylight duo lifestyle frame.
- Web-optimized (max 1000px, ~q72) — retina-sharp at 440px, light payload.
- Always `object-fit:cover`; scrim gradients keep overlaid text legible.

---

## 8. Tone of Voice

### Personality
Confident · after-dark · performer-to-performer. Speaks like someone who's actually been on stage — not a marketer. Craft-proud, a little dangerous, never fluffy or over-sexualized. The clothes are **gear for a performance**, framed by skill and stagecraft rather than skin.

### Principles
1. **Talk to performers as peers.** Use their world's verbs: *spins, drops, floor work, encore, set, front row, after dark.*
2. **Lead with craft.** *Hand-finished, hand-sewn, bonded seams, second-skin knit* — the making is the story.
3. **Confident brevity.** Short punchy lines. Imperative CTAs.
4. **Duality as a motif.** *Two ways to wear the night* · light/dark · coverage + drama.
5. **Second person.** *Your call · built for you · build your fit.*
6. **Function as flex.** Benefits are framed as performance proof ("survives the encore"), not features.

### Voice in the wild (real copy from the site)
- Eyebrow: *"STAGEWEAR FOR AFTER DARK"*
- Hero: *"Two ways to wear the night."* / *"Grab a finished piece off the rack, or build one hand-sewn to your exact fit. Same lace-up Groove — your call on how you get it."*
- CTAs: *"Shop the drop" · "Build your fit" · "Start building →"*
- Product: *"A catsuit that survives the encore." · "Designed for performers, built for the front row."*
- Feature: *"Second-skin performance knit meets hand-finished lace-up cutouts that trace the body from rib to ankle."*
- Sign-off: *"Performance-grade stagewear for artists who live after dark."*
- Social proof: *"Held up through a 40-minute fire set."*

### Do / Don't
| Do | Don't |
|---|---|
| "Survives the encore" | "Comfortable and stylish" |
| "Build your fit" | "Customize your order" |
| "For artists who live after dark" | "For everyone" |
| Performer verbs, stagecraft framing | Over-sexualized / lingerie-forward copy |
| Short, declarative, tracked eyebrows | Long paragraphs, corporate hedging |

### Naming pattern
Pieces get one-word performance names (*Groove* catsuit, *Ember* bodysuit). Finishes read as poetic colour names (*Onyx Black, Ghost White*).

---

> **Note:** this documents the site's current *"Midnight"* styling. If/when the storefront is rebranded to **Firedancing**, keep the system (dark + hot-accent + craft voice) and swap the wordmark, accent-red decision, and any "Midnight" naming.
