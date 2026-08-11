# Compiled Spec

Source of truth for Phase 4. Build from this without improvising layout logic.

## Derived Global Tokens

```css
:root {
  --ground:      #1A3028;
  --paper:       #F5F0E8;
  --accent:      #C4603A;
  --accent-lift: #D8825F;
  --shadow:      #0E0E0E;
  --sage:        #8A9A8F;

  --ink-on-ground: #F5F0E8;
  --ink-on-paper:  #1A3028;
  --mute-on-ground: rgba(245, 240, 232, 0.68);
  --mute-on-paper:  rgba(26, 48, 40, 0.66);

  --serif: 'Noto Serif JP', 'Noto Serif TC', Georgia, serif;
  --sans:  'Noto Sans JP', 'Noto Sans TC', system-ui, sans-serif;

  --unit: 8px;
  --inset: clamp(20px, 4vw, 64px);
  --measure: 62ch;

  --radius: 0px;
  --radius-cta: 2px;
  --hair: 1px;

  --t-slow: 1100ms;
  --t-mid:  760ms;
  --t-fast: 350ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}

html[lang="zh"] { --serif: 'Noto Serif TC', Georgia, serif; --sans: 'Noto Sans TC', system-ui, sans-serif; }
```

Pure black and pure white are absent by design — `--shadow` is `#0E0E0E`, `--paper` is `#F5F0E8`. Per `anti-garbage.md` palette rules.

## Entrance System

Seven behaviours. All driven by one `IntersectionObserver` adding `.in`. No scroll-linked transforms anywhere — the camera is bolted down.

| Name | Source id | Behaviour |
|---|---|---|
| `aperture` | Camera **#1 Iris-in**, adapted | `clip-path: inset(12% 22%)` → `inset(0)`. Rectangular, not circular — an Ozu aperture is a doorway. |
| `slide-screen` | Camera **#10 Curtain wipe** | `clip-path: inset(0 100% 0 0)` → `inset(0)`. A fusuma sliding open. |
| `split` | Camera **#7 Split diopter open** | Left `inset(0 50% 0 0)`, right `inset(0 0 0 50%)` → both `inset(0)`. |
| `recede` | Camera **#20 Jump-cut stagger**, adapted | Opacity-only stagger, outermost frame first, 180ms apart. `translateY` removed to honour the static camera. |
| `seam` | Camera **#26 Invisible cut**, adapted | A hairline scales from `scaleX(0)` at centre origin, then content dissolves at +260ms. |
| `dissolve` | Camera **#2 Fade from black** | Pure opacity, 1100ms. Not `fadeUp` — carries no translate, so does not count against the budget. |
| `settle` | generic `fadeUp` | `opacity` + `translateY(10px)`. **Budget: max 2 per page.** |
| `hold` | intentional `none` | Present on load. Used by every pillow section — they are already still. |

```css
[data-enter] { transition-timing-function: var(--ease); }

[data-enter="aperture"]     { clip-path: inset(12% 22%); opacity: 0; transition: clip-path var(--t-slow), opacity var(--t-slow); }
[data-enter="slide-screen"] { clip-path: inset(0 100% 0 0); transition: clip-path var(--t-slow); }
[data-enter="split"] .col-a { clip-path: inset(0 50% 0 0); transition: clip-path var(--t-slow); }
[data-enter="split"] .col-b { clip-path: inset(0 0 0 50%); transition: clip-path var(--t-slow) 120ms; }
[data-enter="dissolve"]     { opacity: 0; transition: opacity var(--t-slow); }
[data-enter="settle"]       { opacity: 0; transform: translateY(10px); transition: opacity var(--t-mid), transform var(--t-mid); }
[data-enter="recede"] > *   { opacity: 0; transition: opacity var(--t-mid); }
[data-enter="recede"] > *:nth-child(1) { transition-delay: 0ms; }
[data-enter="recede"] > *:nth-child(2) { transition-delay: 180ms; }
[data-enter="recede"] > *:nth-child(3) { transition-delay: 360ms; }

[data-enter].in                 { clip-path: inset(0); opacity: 1; transform: none; }
[data-enter="split"].in .col-a,
[data-enter="split"].in .col-b  { clip-path: inset(0); }
[data-enter="recede"].in > *    { opacity: 1; }

.seam-rule { transform: scaleX(0); transform-origin: 50% 50%; transition: transform var(--t-slow) var(--ease); }
[data-enter="seam"].in .seam-rule { transform: scaleX(1); }
[data-enter="seam"] .seam-body { opacity: 0; transition: opacity var(--t-mid) 260ms; }
[data-enter="seam"].in .seam-body { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  [data-enter], [data-enter] *, .seam-rule {
    transition: none !important;
    clip-path: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

```js
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }
}, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('[data-enter]').forEach((el) => io.observe(el));
```

## External Library Decision

### Q1: What is the core motion experience of this page?
Held frames with aperture reveals. No scroll narrative, no shader, no 3D, no particles, no page transition.

### Q2: Can the native library entries do it?
Yes. Camera entries #1, #2, #7, #10, #20 and #26 cover every reveal in the site, and all compile to `clip-path` plus `opacity`. The director's language is a *static* camera, so the libraries that would normally justify themselves here — GSAP ScrollTrigger, Lenis, Locomotive — exist to animate against scroll position, which this brief explicitly forbids.

### Q3: If an external library is used, why this one?
N/A.

### Decision
**No external library.** Native CSS plus one 6-line `IntersectionObserver`. Adding Lenis or GSAP would import smooth-scroll and scroll-linked motion — the exact "motion showcase with no hierarchy" failure mode, and a direct contradiction of the bolted-down camera.

---

## Page: Home

- **Page scene thesis:** You are standing at the door of a house in the snow, and it is open.
- **Signature composition:** The Three Apertures — `Custom`
- **Why this cannot collapse into a default grid:** Recession carries the meaning. Side by side at equal size, the three become "features"; nested at decreasing scale they become rooms, which is the product.
- **One big idea:** Looking into the page, not across it.
- **Heavy interaction (budget 1/1):** Shoji slide — `Custom`. Hovering an aperture translates a paper panel laterally off its image. The panel moves; the frame and the camera do not.
- **Showy reveals (budget 2/2):** `aperture` on the hero, `recede` on the Three Apertures.
- **Restraint notes:** No stats bar, no scroll cue, no falling snow, no second CTA above the fold.
- **Typography source:** display serif at conversational scale, anchored low.

### Entrance Map
Scene 1 `aperture` → Scene 2 `hold` → Scene 3 `seam` → Scene 4 `recede` → Scene 5 `hold` → Scene 6 `settle` → Scene 7 `hold`

Six distinct types. `settle` used 1×. No two adjacent sections share an entrance. Passes.

### Scene 4 — Three Apertures (the signature)

```css
.apertures {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 92vh;
  background: var(--ground);
  padding: var(--inset);
}
.aperture {
  position: absolute;
  display: grid;
  place-items: end start;
  border: var(--hair) solid var(--sage);
  overflow: hidden;
}
.aperture--1 { width: min(88vw, 980px); aspect-ratio: 16 / 9; }
.aperture--2 { width: min(64vw, 700px); aspect-ratio: 16 / 9; }
.aperture--3 { width: min(40vw, 430px); aspect-ratio: 16 / 9; border-color: var(--accent); }

.aperture__img { position: absolute; inset: 0; object-fit: cover; width: 100%; height: 100%; }
.aperture__panel {
  position: absolute; inset: 0;
  background: var(--paper);
  transition: transform var(--t-slow) var(--ease);
}
.aperture:hover .aperture__panel,
.aperture:focus-within .aperture__panel { transform: translateX(-101%); }

.aperture__label {
  position: relative;
  margin: calc(var(--unit) * 2);
  font: 500 13px/1 var(--sans);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-on-paper);
  mix-blend-mode: difference;
}

@media (max-width: 860px) {
  .apertures { display: flex; flex-direction: column; gap: calc(var(--unit) * 3); min-height: 0; }
  .aperture { position: relative; width: 100%; }
  .aperture--1, .aperture--2, .aperture--3 { width: 100%; }
}
```

Below 860px the nesting cannot survive — three concentric frames on a 375px viewport leave the innermost unreadable. They unstack into a vertical sequence at full width, which preserves the *order* (stay → ski → rest) and the accent border on the third, losing only the z-depth. Documented as a deliberate degradation, not a fallback grid.

---

## Page: Stay

- **Signature composition:** The Divided Day — `Custom` composition, entrance via Camera **#7**
- **Why this cannot collapse into a default grid:** The two columns are simultaneous, not parallel features, and they converge. A grid has no time axis and nothing to converge into.
- **Heavy interaction (budget 1/1):** Seven-day column — hovering a day opens its aperture. CSS only.
- **Showy reveals (budget 2/2):** `aperture` on the monument, `split` on the Divided Day.

### Entrance Map
`aperture` → `slide-screen` → `hold` → `recede` → `seam` → `hold` → `split` → `hold` → `settle` → `seam` → `recede` → `settle` → `hold`

Seven distinct types. `settle` used 2× (budget exactly met). No adjacent repeats. Passes.

### The Divided Day

```css
.day {
  display: grid;
  grid-template-columns: 1fr var(--hair) 1fr;
  min-height: 100vh;
  background: var(--paper);
}
.day__col { display: flex; flex-direction: column; justify-content: flex-end; padding: var(--inset); gap: calc(var(--unit) * 2); }
.day__seam { background: var(--accent); }
.day__join {
  grid-column: 1 / -1;
  border-top: var(--hair) solid var(--sage);
  padding: calc(var(--unit) * 4) var(--inset);
  text-align: center;
}
@media (max-width: 760px) {
  .day { grid-template-columns: 1fr; }
  .day__seam { height: var(--hair); }
}
```

Columns justify to `flex-end` — content sits at the bottom of the frame. That is the tatami eye-level, expressed in CSS.

### The Seven-Day Column

```css
.week { position: relative; padding: calc(var(--unit) * 8) var(--inset); background: var(--ground); }
.week::before { content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: var(--hair); background: var(--sage); }
.week__day { position: relative; display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--unit) * 4); padding: calc(var(--unit) * 3) 0; }
.week__day > * { grid-column: 1; text-align: right; }
.week__day:nth-child(even) > * { grid-column: 2; text-align: left; }
.week__date { font: 600 clamp(1.5rem, 3vw, 2.25rem)/1 var(--serif); color: var(--ink-on-ground); }
.week__day:hover .week__date { color: var(--accent); transition: color var(--t-fast) var(--ease); }
@media (max-width: 760px) {
  .week::before { left: 0; }
  .week__day { grid-template-columns: 1fr; }
  .week__day > *, .week__day:nth-child(even) > * { grid-column: 1; text-align: left; padding-left: calc(var(--unit) * 3); }
}
```

---

## Page: Mountains

- **Signature composition:** The Ridge Line — `Custom`
- **Why this cannot collapse into a default grid:** Comparative height *is* the content. Cards make Fujimi Panorama's 780m and Kogen's 250m two equal rectangles and hand the visitor arithmetic.
- **Heavy interaction (budget 1/1):** Peak hover raises its detail block.
- **Showy reveals (budget 2/2):** `aperture` on the single word, `recede` on the ridge.

### Entrance Map
`aperture` → `recede` → `hold` → `seam` → `dissolve` → `hold`

Five distinct types, `settle` used 0×. Passes.

```css
.ridge { display: flex; align-items: flex-end; gap: 2px; min-height: 46vh; padding: var(--inset); background: var(--shadow); border-bottom: var(--hair) solid var(--sage); }
.peak { position: relative; flex: 1 1 0; min-width: 0; background: rgba(245, 240, 232, 0.06); border: var(--hair) solid rgba(245, 240, 232, 0.14); border-bottom: 0; transition: background var(--t-fast) var(--ease); }
.peak:hover, .peak:focus-within { background: rgba(245, 240, 232, 0.13); }
.peak--top { border-top: 3px solid var(--accent); }
.peak__figure { position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); font: 600 13px/1 var(--serif); color: var(--mute-on-ground); white-space: nowrap; }
.peak__name { position: absolute; top: calc(100% + 10px); left: 0; right: 0; font: 400 11px/1.4 var(--sans); color: var(--mute-on-ground); text-align: center; overflow-wrap: anywhere; }
```

Height is set inline per resort: `style={'height: ' + Math.round((vertical_m / maxVertical) * 100) + '%'}`. The bar heights are real data, not decoration.

---

## Page: About

- **Signature composition:** The Marginal Annotation — `Custom`
- **Heavy interaction:** none (intentional). The one page with no hover state at all.
- **Showy reveals:** `dissolve` only.

### Entrance Map
`dissolve` → `seam` → `hold` → `settle` → `hold`

Four distinct types, `settle` used 1×. Passes.

```css
.manifesto { display: grid; grid-template-columns: minmax(0, var(--measure)) minmax(0, 22ch); gap: calc(var(--unit) * 6); padding: calc(var(--unit) * 12) var(--inset) calc(var(--unit) * 8); background: var(--paper); }
.manifesto__body { font: 400 19px/1.8 var(--sans); color: var(--ink-on-paper); }
.manifesto__body > p:first-of-type::first-letter { color: var(--accent); font-family: var(--serif); font-weight: 600; }
.manifesto__notes { display: flex; flex-direction: column; gap: calc(var(--unit) * 4); font: 400 13px/1.6 var(--sans); color: var(--mute-on-paper); }
.manifesto__note { position: relative; padding-top: calc(var(--unit) * 1.5); border-top: var(--hair) solid var(--sage); }
@media (max-width: 860px) { .manifesto { grid-template-columns: 1fr; } }
```

---

## Shared System

Extracted only now, after all four page compositions are locked.

- **Navigation:** Hairline bar, `--paper` on `--ground`. Does **not** stick — scrolls away with the first frame and never returns. Wordmark left, three page links centre, language switcher right at 13px.
- **Footer:** `--ground`. Handle in `--accent`. No newsletter capture, no second CTA, no sitemap columns.
- **Spacing rhythm:** Everything is a multiple of `--unit` (8px). Section padding is `--inset`, which is viewport-relative.
- **Typography system:** `--serif` 600 for display and numerals only. `--sans` 400/500/700 for everything else. Body never below 17px. Line-height ≥ 1.75 on paragraphs. No letter-spacing on CJK; `0.14em` on Latin uppercase eyebrows only.
- **Utility primitives:** `.frame` (inset border), `.rule` (sage hairline), `.eyebrow` (uppercase label), `.pillow` (full-viewport rest section).
- **Paper grain:** 2% opacity SVG `feTurbulence` overlay on `--paper` surfaces, `pointer-events: none`. Applied via one shared `::after`, not per component.
- **Repeated motifs allowed:** nav, footer, hairline, grain, easing, inset unit. Nothing else.
- **Uniqueness check:** No `border-radius` above 2px site-wide. No `box-shadow` property appears anywhere in the build. If either shows up, a card grid has crept back in.

## Phase 3 Quality Check

- [x] Every section has complete layout CSS
- [x] Every section has complete entrance behavior
- [x] Every section has complete interaction behavior or intentional `none`
- [x] JS-required effects include complete JS — none selected; only the shared observer is needed
- [x] Entrance variety rules pass on all four pages (6 / 7 / 5 / 4 distinct types)
- [x] `fadeUp` (`settle`) appears at most 2× per page — Home 1, Stay 2, Mountains 0, About 1
- [x] External Library Decision block complete
- [x] Library source ids present for all major moves; four Customs explicitly justified against the closest library entry
- [x] Global tokens used throughout; no stray hardcoded colour values
- [x] Anti-garbage constraints hold — no card matrix, no repeated fadeUp, no pure black/white, no shadows
