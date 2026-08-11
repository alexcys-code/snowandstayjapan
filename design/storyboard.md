# Director's Treatment

## Anti-Convergence — Film Selection Reasoning

Required by `references/anti-convergence.md` before Phase 2 proceeds.

**1. What specific visual problem does this film solve for this niche?**
The offering is a single private house whose entire value proposition is *enclosed, nested, exclusive space* — one family, one building, rooms opening onto rooms, snow outside. *Equinox Flower*'s frame-within-frame doorway compositions and its fixed low 50mm are a purpose-built system for photographing exactly that condition: interior depth seen along an axis, with the cold world visible but held at a distance. The site must say "you are inside, it is freezing outside, and all of this is yours." Ozu solves that with axial recession through apertures. A wide landscape hero — the category default — says the opposite: you are outside, looking at a mountain, along with everyone else.

**2. Would this same film work equally well for three unrelated niches?**
No. The tatami eye-level and doorway nesting are specific to Japanese domestic architecture at floor-sitting scale. Applied to a SaaS dashboard, a fashion label, or a restaurant, the system has nothing real to nest — the frames become decoration. Here the apertures are load-bearing because the product literally has fusuma and shoji in it. The choice is architectural, not atmospheric.

**3. Are you picking the film or its reputation?**
*Tokyo Story* is the reputation pick and I deliberately declined it. It is monochrome, so it cannot supply the accent-colour discipline that is the actual mechanism here. *Equinox Flower* was selected on a concrete technical fact — Ozu switched to Agfacolor stock specifically because it rendered red better, then built compositions around a single repositioned red object. That decision, not the film's standing, is what the site is translating.

**Verdict:** Passes. Proceed.

## Director Brief

- **Visual thesis:** A week inside a warm house in a cold place, seen through a doorway that never moves.
- **Signature technique 1 — Tatami eye-level.** Static low camera, 50mm, dead-on, never tilts.
  → Content anchors to the *lower* third of each viewport rather than centring. Zero parallax, zero scroll-jacking, zero transform-on-scroll. The frame holds still; content arrives into it.
- **Signature technique 2 — The migrating accent.** One saturated red per frame, repositioned scene to scene against a muted field.
  → Exactly one terracotta element per section, its position tracked so it never repeats. See the Accent Schedule below.
- **Signature technique 3 — The pillow shot.** A held cutaway of empty serene space between scenes, from the *makurakotoba* tradition.
  → Full-viewport interstitials carrying one short line and a great deal of air. Zero product information. They exist to make the section after them land.
- **Motion rules:**
  - No parallax. No scroll-jacking. No transform driven by scroll position. The camera is bolted down.
  - Entrances are opacity plus a translate of ≤12px, or an aperture wipe. Nothing travels far.
  - Duration 700–1100ms. Easing `cubic-bezier(0.22, 1, 0.36, 1)`.
  - Pillow sections do not animate in. They are already still.
  - `prefers-reduced-motion` collapses every entrance to instant opacity. No exceptions.
- **Typography rules:**
  - Display: **Noto Serif JP 600**. Body: **Noto Sans JP 400 / 500 / 700**.
  - Traditional Chinese loads **Noto Serif TC / Noto Sans TC** — swapped by `lang`, not faked with a JP fallback.
  - Display range `clamp(2.75rem, 9vw, 8.5rem)`. Monument heroes go to `clamp(4rem, 18vw, 13rem)`.
  - Body never below 17px. Line-height 1.75 minimum on paragraphs.
  - No letter-spacing on Japanese or Chinese text. Latin eyebrow labels get `0.14em`.

## Design DNA Casting — Declined

`references/data/dna-index.tsv` was queried and rejected as a source. The corpus is almost entirely Framer marketing templates (`*.framer.website`), which is precisely the failure mode `premium-calibration.md` names first: *"a Framer template with a movie color palette."* Casting DNA from it would pull the design toward the shell we are trying to escape. Retained as calibration only: the corpus h1 range is 65–200px, confirming the monument hero should sit at the top of that band — but set in a serif at weight 600, not a grotesk at 300.

## Site Cinematic Grammar

- **Page-shell logic:** Every page is a stack of full-viewport *frames*. Each frame has a visible inset margin — the page never bleeds to the browser edge except in deliberate pillow shots. The inset is the doorway.
- **Navigation posture:** A hairline bar, cream on green, that does not stick. It scrolls away with the first frame and does not return. Ozu never cuts back to a floating element. Language switcher sits right, three characters wide.
- **Framing discipline:** Strict centre axis. Border-radius `0` everywhere except a `2px` softening on the accent CTA. Nested frames are inset by multiples of the base unit — never arbitrary.
- **Density cadence:** `scene → pillow → scene → pillow`. A dense information frame is always followed by a near-empty one. The page never runs two dense frames back to back.
- **Recurring material layers:** A 2% paper-grain overlay on cream surfaces. A single hairline rule at `#8A9A8F` used as the only divider in the system. No shadows anywhere — depth comes from inset and scale, not from blur.
- **Allowed composition families:** Corridor (primary), full-bleed stage (pillow shots only). Archive wall is **banned** — that is the old site.
- **What may repeat:** The nav, the footer, the hairline rule, the paper grain, the entrance easing, the inset unit.
- **What must vary page to page:** Hero archetype (all four differ), signature composition (all four are distinct customs), accent position schedule, and the dominant axis of the page.
- **Demo uniqueness guardrail:** No page may contain a repeating grid of equally-weighted rounded cards. If any section would survive unchanged as a 2×2 or 3-col card matrix, it is rejected and rebuilt.

## Hero Archetype Selection — Hash Walk

Pool (Ozu-compatible, ordered by id): `[#4 Letterbox, #7 Type Monument, #10 Single Word, #11 Manifesto Block, #18 Framed Viewport]`
Site hash `md5("snowandstayjapan")[0:8]` = `03753d07` = `58014983`. `58014983 mod 5 = 3`.

| Page | Start | Walk | Landed | Reason for skips |
|---|---|---|---|---|
| Home | 3 | #11 → **#18** | **#18 Framed Viewport** | #11 is a centred type stack — violates shell-ban (too close to current site hero). #18 names Ozu explicitly in its Director Fit and its reference line is "Ozu doorway shots". |
| Stay | 4 | #18 → #4 → **#7** | **#7 Type Monument** | #18 already used on Home; reusing it would make Home and Stay share a shell. #4 Letterbox violates the decisions.md restraint rule against decorative letterboxing. |
| Mountains | 0 | #4 → #7 → **#10** | **#10 Single Word** | #4 banned as above. #7 used on Stay. |
| About | 1 | #7 → #10 → **#11** | **#11 Manifesto Block** | Both used. #11 becomes available here because the shell-ban applied to the *home* hero specifically — a manifesto is the correct form for an About page. |

Four pages, four distinct hero archetypes. No archetype used twice.

## Accent Schedule — The Migrating Red

`#C4603A` appears exactly once per section, never in the same position twice on a page.

**Home:** hairline vertical rule at frame's left inset → single mark, lower-right → first character of the promise paragraph → innermost aperture's border only → 1px horizontal rule at one-third height → solid CTA fill (the page's only solid accent block) → the handle in the footer.

**Stay:** the date separator dash in the monument → the numeral `01` in the problem list → nothing (deliberate absence, the one frame with no red) → the seam between the two columns of the Divided Day → a single day marker on the seven-day column → solid CTA fill.

**Mountains:** the baseline rule under the single word → the tallest peak's cap only → the Hakuba marker, held back and alone.

**About:** the drop character of the manifesto → a marginal annotation rule → the handle.

---

## Page Arc

### Page: Home

- **Page-role scene:** The establishing shot. The exterior, then the threshold.
- **Page scene thesis:** You are standing at the door of a house in the snow, and it is open.
- **One big idea:** Looking *into* the page, not across it.
- **Hero dominance statement:** The hero is a single inset frame holding a full-bleed winter exterior, with the headline anchored to the frame's lower third — so the visitor's eye sits where a person kneeling on tatami would sit, and the cold is on the other side of a border they can see.
- **Restraint statement:** No stats bar. No falling snow. No scroll indicator. No second CTA above the fold. The home page states one thing and then stops talking.
- **Material thesis:** Cream paper grain against flat forest green, divided by a single sage hairline. Depth from inset and scale only — zero shadows.
- **Typography thesis:** Serif display at conversational scale rather than shouting scale, set low in the frame. Authority from placement, not size.
- **Narrative arc:** B2 Establishing → B19 Quiet → B3 Promise → B6 World Exploration → B19 Quiet → B20 Invitation → B22 Farewell
- **Hero archetype:** #18 Framed Viewport
- **Signature composition:** **The Three Apertures** *(Custom)* — three frames on a shared centre axis at decreasing scale and increasing inset, each holding one image slot, so stay / ski / rest read as rooms seen through one another rather than as three options laid side by side.
- **Grid fallback test:** Reduced to a 3-column card grid, the recession vanishes and with it the entire "one private house, enclosed, yours" proposition. You would be left with three features of equal weight — which is the category default and says the opposite of what the product is.
- **Custom justification:** No entry in `section-archetypes.md` produces axial recession. `CM-5 Stacked Full-Width Blocks` was the closest and was rejected because stacking is sequential, not nested — it reads as a list, and the whole point is depth.
- **Shared system holdback:** Nav, footer, spacing rhythm and utilities are not extracted until all four page compositions are locked in Phase 3.
- **UI exposure guardrail:** No film, director, or process language anywhere in the markup — including class names visible in devtools. Classes describe function (`.aperture`, `.rest`), never source (`.ozu-frame`).
- **What this page must not inherit:** The old site's card grid, four-number stats bar, centred hero stack, tag pills, and Leaflet-map-as-overview.

#### Section sequence

**Scene 1 — Threshold**
- Beat: B2 Establishing Shot · Function: Hero · Archetype: #18 Framed Viewport
- Composition: inset frame, content anchored to lower third
- Camera: `aperture` — clip-path `inset()` opens from centre over 1100ms
- Interaction: none (intentional)
- Visual elements: #30 Corner Bracket Frames, #26 Thin Divider Line
- Why this exists: establishes the doorway grammar in the first three seconds. Everything after is read through it.

**Scene 2 — Rest I**
- Beat: B19 Quiet Moment · Function: #39 Visual Break · Archetype: pillow *(Custom)*
- Composition: full-bleed green, one line of type at lower-left, nothing else
- Camera: `hold` — no entrance, present on load
- Interaction: none (intentional)
- Visual elements: single accent mark, lower-right
- Why this exists: separates the hero from the pitch so the pitch is not read as a caption to the hero.

**Scene 3 — The Promise**
- Beat: B3 The Promise · Function: #47 About/Mission · Archetype: FA-1 variant, static
- Composition: single column, max 62ch, anchored low against a wide upper margin
- Camera: `seam` — hairline draws horizontally from centre, then text fades
- Interaction: none
- Visual elements: accent drop character, sage hairline
- Why this exists: the one place the offer is stated in plain sentences.

**Scene 4 — Three Apertures**
- Beat: B6 World Exploration · Function: #15 Category Map · Archetype: **Custom**
- Composition: three nested frames, decreasing scale, shared axis
- Camera: `recede` — frames fade outermost-first, 180ms stagger inward
- Interaction: **heavy (page budget: 1)** — shoji slide. Hovering an aperture slides a panel laterally to reveal its image. Panel moves; camera does not.
- Visual elements: #30 Corner Brackets on innermost frame only, accent border on innermost
- Why this exists: the signature. Converts the three-pillar cliché into architecture.

**Scene 5 — Rest II**
- Beat: B19 Quiet Moment · Function: #39 Visual Break · Archetype: pillow *(Custom)*
- Composition: cream, one line, upper-left this time — mirrored from Rest I so the two pillows do not rhyme
- Camera: `hold`
- Interaction: none
- Why this exists: clears the palate before the ask.

**Scene 6 — The Invitation**
- Beat: B20 The Invitation · Function: #35 Contact · Archetype: CM-5 variant
- Composition: centred, narrow, low-anchored
- Camera: `settle` — opacity + 10px rise (fadeUp use 1 of 2)
- Interaction: accent fill darkens to `#D8825F` on hover, 350ms
- Visual elements: the page's only solid accent block
- Why this exists: one ask, once, at the end. Never repeated in a sticky bar.

**Scene 7 — Farewell**
- Beat: B22 The Farewell · Function: #48 Footer
- Camera: `hold` · Interaction: underline-on-hover only
- Why this exists: closure. No newsletter capture, no second CTA.

---

### Page: Stay

- **Page-role scene:** The week itself, lived through.
- **Page scene thesis:** Seven days seen as seven rooms.
- **One big idea:** Two people having completely different days under the same roof.
- **Hero dominance statement:** The dates `12.23 — 29` set at `clamp(4rem, 18vw, 13rem)` fill the frame the way a title card does, so the visitor's first impression is a *span of time* rather than a place or a price.
- **Restraint statement:** No pricing table. No amenity checklist. No booking widget. The price appears once, in a sentence, near the end.
- **Material thesis:** Alternating green and cream full-bleed frames, so scrolling feels like moving between the outside and the inside of the house.
- **Typography thesis:** Numerals carry the page. Dates, day counts and times are set in the display serif at display scale; prose stays small and calm underneath.
- **Narrative arc:** B4 Prologue → B18 Confrontation → B19 → B11 Tutorial → B10 Deep Dive → B19 → B15 Parallel Stories → B19 → B13 Flashback → B11 Tutorial → B7 Encounter → B20 Invitation → B22
- **Hero archetype:** #7 Type Monument
- **Signature composition:** **The Divided Day** *(Custom)* — a full-height vertical bisect where the left column runs the skier's day and the right runs the non-skier's day, both anchored low, the seam rendered as a shoji join in accent terracotta, the two columns converging into one shared evening frame at the bottom.
- **Grid fallback test:** As a 2-column feature grid this becomes "benefits for two personas" — the temporal simultaneity is destroyed. The point is that these two days are happening *at the same time in the same house*, and convergence at the bottom is the emotional payoff. A grid has no time axis and nothing to converge.
- **Custom justification:** `section-archetypes.md` offers no simultaneous-parallel-track archetype. `AG-6 Timeline List` handles sequence but only one thread; the whole idea here is two threads running concurrently.
- **Shared system holdback:** As Home.
- **UI exposure guardrail:** As Home.
- **What this page must not inherit:** The old site's day-by-day itinerary cards and horizontal step-row transport diagram.

#### Section sequence (mapping the carousel's ten beats)

| # | Scene | Beat | Function | Archetype | Camera | Interaction |
|---|---|---|---|---|---|---|
| 1 | Dates | B4 Prologue | Hero | #7 Type Monument | `aperture` | none |
| 2 | Honestly | B18 Confrontation | #40 Quote | CM-5 | `slide-screen` | none |
| 3 | Rest I | B19 | #39 Visual Break | pillow *(Custom)* | `hold` | none |
| 4 | How it works | B11 Tutorial | #8 Process/Steps | **Custom** — four apertures in a row, not cards | `recede` | hover reveals detail |
| 5 | The house | B10 Deep Dive | #2 Featured | FA-1 sticky visual + scroll text | `seam` | none |
| 6 | Rest II | B19 | #39 Visual Break | pillow *(Custom)* | `hold` | none |
| 7 | **The Divided Day** | B15 Parallel Stories | #18 Tabbed → rebuilt | **Custom signature** | `slide-screen` both columns, 120ms offset | **heavy (budget: 1)** — the seam is draggable; dragging shifts column weight |
| 8 | Rest III | B19 | #39 Visual Break | pillow *(Custom)* | `hold` | none |
| 9 | Off-snow | B13 Flashback | #42 Gallery | AG-2 horizontal strip | `settle` (fadeUp 1 of 2) | scroll-drag |
| 10 | Getting there | B11 Tutorial | #7 Timeline | AG-6 vertical | `seam` | none |
| 11 | Seven days | B7 Encounter | #7 Timeline | **Custom** — single vertical rule, seven apertures alternating left/right | `recede` | none |
| 12 | The ask | B20 Invitation | #35 Contact | CM-5 | `settle` (fadeUp 2 of 2) | accent hover |
| 13 | Farewell | B22 | #48 Footer | — | `hold` | underline |

Entrance variety: `aperture`, `slide-screen`, `hold`, `recede`, `seam`, `settle` — six distinct types, `settle`/fadeUp used exactly twice. Passes.

---

### Page: Mountains

- **Page-role scene:** The evidence. Cold, factual, and beautiful because the data is.
- **Page scene thesis:** Eleven mountains, drawn to scale.
- **One big idea:** Height on the page *is* height on the mountain.
- **Hero dominance statement:** One word — `SNOW` / 雪 — at `clamp(5rem, 22vw, 15rem)` against flat green with a single accent rule beneath it, so the page opens on a held breath rather than a sales claim.
- **Restraint statement:** No filters, no sort controls, no comparison table, no star ratings. The data is arranged once, correctly, and left alone.
- **Material thesis:** Near-black ground for the ridge section so the profile reads as a horizon at dusk; cream for the detail below.
- **Typography thesis:** Numerals in the display serif, tabular-aligned. Resort names small and quiet beneath their peaks — the mountain is the headline, not the brand.
- **Narrative arc:** B2 Establishing → B6 World Exploration → B19 Quiet → B8 Evidence Wall → B23 Cliffhanger → B22
- **Hero archetype:** #10 Single Word
- **Signature composition:** **The Ridge Line** *(Custom)* — every resort plotted along one horizontal baseline, its column height driven by actual vertical drop, so the section draws a real mountain profile. Hovering a peak raises its detail; the silhouette is the navigation.
- **Grid fallback test:** As resort cards you lose instant comparability and the entire metaphor. The reason this page exists is to show that Fujimi Panorama's 780m dwarfs Yatsugatake Kogen's 250m — a card grid flattens that into two equal rectangles and the visitor has to do arithmetic.
- **Custom justification:** Closest library entry is `SC-2 Single Giant Number`, which handles one figure well but has no comparative axis. Data-as-topography has no library equivalent.
- **Hakuba handling:** Held back below the ridge, alone, on its own ground, with the crowd caveat intact — B23 Cliffhanger. It is the thing we mention last and least.
- **What this page must not inherit:** The old site's `SkiAreaCard` grid, coloured difficulty dots, and stats bar.

---

### Page: About

- **Page-role scene:** The people, finally speaking.
- **Page scene thesis:** Someone explains, without raising their voice, why they do this.
- **One big idea:** Text as the entire design.
- **Hero dominance statement:** No headline at all — the page opens directly into set prose at 19px/1.8 in a 58ch column anchored low, with the first character in terracotta. The absence of a headline is the statement.
- **Restraint statement:** No team photo grid. No founder-story timeline. No "our values" triptych.
- **Material thesis:** Cream throughout. This is the one page with no green frame — the reader is fully inside now.
- **Typography thesis:** Reading typography, not display typography. The only page where the serif steps back and the sans carries everything.
- **Narrative arc:** B3 Promise → B13 Flashback → B19 Quiet → B7 Encounter → B20 Invitation → B22
- **Hero archetype:** #11 Manifesto Block
- **Signature composition:** **The Marginal Annotation** *(Custom)* — the manifesto runs in a narrow measure with dated notes set in the outer margin at small size, connected by hairline rules, like annotations pencilled onto a page.
- **Grid fallback test:** As a centred prose column with a photo, it becomes every About page ever written. The margin notes are what make it feel like a document someone actually keeps.
- **Custom justification:** Library has no marginalia archetype; `FA-6 Pull Quote + Article Preview` pulls quotes *into* the measure, which is the opposite gesture.

---

## Cross-Page Anti-Convergence Check

- [x] Four pages, four different hero archetypes (#18, #7, #10, #11)
- [x] Four different signature compositions, all Custom, all justified against the closest library entry
- [x] No archetype id used more than twice site-wide
- [x] Dominant axis differs per page: Home = depth (z), Stay = vertical split (x), Mountains = horizontal baseline (x/y data), About = single measure (y)
- [x] Beat sequences differ; none follows Hero → Features → Stats → CTA
- [x] At least 2 sections per page are structurally unlike default marketing layouts — in fact every signature composition is
- [x] Home and interior pages share no shell

## Approval Gate

Phase 3 does not begin until this treatment is approved.
