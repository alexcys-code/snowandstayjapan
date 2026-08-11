# Design Decisions

- **Entry mode:** Surprise me
- **Genre:** Minimalist
- **Director:** Yasujirō Ozu 小津安二郎
- **Film:** *Equinox Flower* 彼岸花 (1958) — primary. *An Autumn Afternoon* 秋刀魚の味 (1962) — secondary, for mature red/white discipline.
- **Niche:** Boutique week-long ski holidays based in a private kominka, Tateshina / Chino, Nagano. Trilingual EN / JA / ZH-TW.
- **Pages:** `/` home · `/stay/` the package · `/mountains/` ski-area guide · `/about/`
- **Major page roles:** Home = overture. Stay = the week itself. Mountains = supporting evidence. About = the people.
- **Image placeholders:** Yes — labelled slots, composition built around photography.
- **Sub-agent delegation plan:** None. Running single-agent; the site is small enough that one directed pass beats merge overhead.

## Why This Director

The product is a 150-year-old house. Ozu is the cinema of houses — nested shoji and fusuma doorways, rooms seen through rooms, families arranged inside rectangles. The design device and the product are physically the same thing. No other director in the library makes the architecture of the offering *be* the compositional system.

The secondary reason is palette. Ozu chose Agfacolor stock specifically because it rendered red better than Kodak or Fuji — he engineered his entire technical pipeline around one accent colour sitting in a muted field. That is already this brand's palette: terracotta against forest green and cream.

## Demo Uniqueness Audit

- **Previous-work audit:** The current live site (`alexcys-code.github.io/snowandstayjapan`) is an editorial ski-area guide.
- **Recurring traits to avoid:**
  - Card grid as the primary structure — resort cards, hotel cards, restaurant cards, all the same rounded rectangle
  - Four-number stats bar under every hero
  - Centred serif hero title + subtitle + single pill CTA
  - Pill/tag rows under every card heading
  - Coloured-dot difficulty badges
  - Left-border accent tip boxes
  - Full-width Leaflet map panel as the "overview" device
- **Shell-ban list:** No card matrix. No stats bar. No centred hero stack. No tag pills. No left-border callouts. No map-as-hero. No rounded corners above 2px anywhere.
- **Primary composition family:** **Corridor** — nested frame-within-frame, axial recession, content seen *through* apertures rather than laid out beside itself.
- **Why this family differs from the most recent output:** The current site is an *archive wall* — everything enumerated on one plane, equal weight, scannable. Corridor is the opposite instinct: depth instead of breadth, one thing at a time, the next thing visible but smaller and further away. Strip colour and type from both and the wireframes share nothing.
- **Wireframe-level uniqueness test:** If the new home page were reduced to grey boxes, it would read as a series of nested rectangles receding on a centre axis. The old site reduces to a 2-column card grid. Pass.

## Research Notes

### Research Boundary
- **Film research is observational input, not a spec:** I am translating how Ozu *frames and paces*, not referencing the films' plots, titles, or period setting.
- **What is being translated into web language:** Camera height, frame nesting, accent-object placement discipline, and the pillow-shot rest interval.
- **What must not be flattened into product-template logic:** The pillow shots. The commercial instinct is to delete "empty" sections that don't sell. They are the mechanism — they make the selling sections land.

### Research Sources
- **Director source:** [In Depth Cine — The Precise Cinematography of Yasujirō Ozu](https://www.indepthcine.com/videos/ozu)
- **Film source:** [The Film Sufi — *Equinox Flower*](http://www.filmsufi.com/2014/08/equinox-flower-yasujiro-ozu-1958.html)
- **Secondary analysis:** [BFI — The enigmatic 'pillow shots' of Yasujiro Ozu](https://www.bfi.org.uk/features/enigmatic-pillow-shots-yasujiro-ozu) · [Perisphere — Ozu's Colorful Everyday](https://www.perisphere.org/2024/12/06/ozus-colorful-everyday-equinox-flower-1958-and-late-autumn-1960/)
- **Niche source 1:** [Elite Havens — Japan private chalets](https://www.elitehavens.com/japan-private-chalets/)
- **Niche source 2:** [Niseko Black](https://www.nisekoblack.com/accommodation-en) · [HAKULife](https://hakulife.com/)

### Film Palette

Ozu's colour films run a deliberately narrow muted range — blues, browns, greys, greens — punctuated by one saturated red per frame. Mapped onto the existing brand tokens:

- **Primary:** `#1A3028` forest green — exterior, night, cold, the world outside the house
- **Secondary:** `#F5F0E8` cream — tatami, shoji paper, interior warmth
- **Accent:** `#C4603A` terracotta — *the kettle*. One per section. Never twice in the same position.
- **Shadow:** `#0E0E0E` near-black — used as ground only, never as a gradient
- **Text:** `#F5F0E8` on green · `#1A3028` on cream. No greys for body copy.
- **Derived neutrals:** `#8A9A8F` sage (muted mid-tone, dividers and captions) · `#D8825F` light terracotta (accent hover only)

### Director Signatures

1. **The tatami eye-level.** Camera on a low tripod, sometimes inches off the floor, 50mm, static, straight-on. Never moves, never tilts.
   → *Web translation:* Content anchors LOW in each viewport rather than centring. Zero parallax, zero scroll-jacking, zero camera movement. The frame holds still and content arrives into it.

2. **The migrating red.** One vivid accent object — famously a red tea kettle — repositioned scene to scene so it occupies a different significant place in each composition, against an otherwise muted field.
   → *Web translation:* Exactly one terracotta element per section, and its position is tracked so it never repeats: top-left, then far-right baseline, then a hairline rule, then a single character of type. The eye learns to hunt for it.

3. **The pillow shot.** A 5–6 second cutaway to empty, serene space between scenes — named for *makurakotoba*, the pillow-words of classical Japanese poetry that reframe the line that follows.
   → *Web translation:* Interstitial full-viewport sections holding one short line and a great deal of air. They carry no product information. They set up the section after them.

### Film Translation Notes

- **Framing:** Nested rectangles on a strict centre axis. Rigid frontal symmetry. Content is revealed *through* an aperture that is itself inside a larger aperture. Border-radius is 0 or 2px — never more.
- **Rhythm:** `scene → pillow → scene → pillow`. Regular, patient, never accelerating toward a CTA. The page does not build; it proceeds.
- **Lighting:** Flat and even — daylight through paper. No radial glows, no vignettes, no dramatic gradients, no spotlight hovers.
- **Space:** Shallow depth stacked in flat planes, like sliding screens. Not perspective, not 3D transforms.
- **Materiality:** Paper grain, wood, tatami weave, cold glass. Texture comes from surface and edge, not from shadow.
- **What should stay ambiguous or restrained:** No falling-snow particles. No video backgrounds. No glassmorphism. No counters ticking up. Price is stated once, plainly, and never repeated in a sticky bar.

### Niche References

- URL: https://www.elitehavens.com/japan-private-chalets/
- URL: https://www.nisekoblack.com/accommodation-en
- URL: https://hakulife.com/

### Reference Decomposition

- **Reference A — the client's own Christmas carousel** contributes: the three-token palette, Noto Serif JP 600 for headline weight, alternating dark/light full-bleed panels, and the ten-beat narrative order (hook → problem → mechanism → house → ski → non-skiers → off-snow → transport → sample week → CTA). It does **not** contribute layout — the carousel is a 1080×1350 slide deck and its 96px-margin box logic must not survive into a responsive page.
- **Reference B — luxury chalet category sites** contribute one thing only: a clear picture of the category default. Property-card collections, amenity checklists, sticky "enquire" bars, mountain-view heroes with centred copy.
- **Reference C — Ozu** contributes framing, pacing, and accent discipline.
- **What will not be copied:** The chalet-category collection grid, the amenity checklist, and the sticky booking bar. The carousel's fixed-canvas margins. Any Ozu-era period styling — no faux-vintage grain, no 4:3 letterboxing as decoration, no Japanese-typography pastiche.

### UI Exposure Guardrail

Ozu's name, the film titles, "tatami", "pillow shot", and every term in this document stay inside `design/`. Nothing in the shipped interface refers to film, direction, or process. The visitor should feel a house, not a homage.
