# Resort data — what still needs confirming

The Mountains page shows beginner-course counts for six of the thirteen resorts.
The rest render the qualitative facility list and a "course counts to confirm"
line instead of a number, because **inventing a beginner-run count for a page
families use to choose a mountain would be worse than showing nothing.**

Fill these in `src/data/resorts.ts` and they appear automatically — the bar and
the ratio only render when both `green` and `total` are set.

## Confirmed (from existing site data)

| Resort | green / total | longest green |
|---|---|---|
| Châteraisé Nobeyama | 5 / 11 | 1,400 m |
| Sun Meadows Kiyosato | 3 / 12 | 2,200 m |
| Châteraisé Koumi | 4 / 8 | 1,500 m |
| Yachiho Kogen | 3 / 9 | 1,600 m |
| Fujimi Kogen | 3 / 10 | 2,000 m |
| Fujimi Panorama | 2 / 13 | 3,500 m |

These came from `yatsugatake.ts` / `nearby.ts`. They were written earlier in this
project and have not been checked against the resorts' own published figures —
worth a pass before launch, since they are now the page's main claim.

## Partially known

| Resort | Have | Missing |
|---|---|---|
| Shirakaba Kogen International | 5 courses total, longest 5,000 m overall | how many are beginner |
| Shirakaba Resort 2in1 | 10 courses total, longest 1,800 m overall | how many are beginner |

Note: the 5,000 m and 1,800 m figures are the resorts' **longest course overall**,
not longest beginner run, so they are not currently displayed.

## Not yet known — need your numbers

- Pilatus Tateshina Snow Resort
- Kurumayama Kogen SKYPARK
- Shirakaba Resort Ike-no-Taira Snow Park
- Shirakabako Royal Hill
- Blanche Takayama Ski Resort

Pilatus and Kurumayama matter most: they are two of the four you actually ski,
they sit at the top of the page, and they are the only two of the five with a
written note carrying them.

## Facility flags

`carpet`, `kidsPark`, `nonSkierLift` and `night` are set for all thirteen but are
**inferred**, not verified — except for the four in the itinerary PDF. A magic
carpet or a sled slope is exactly the detail a parent books on, so these are
worth a check too.

## Blanche Takayama

Currently flagged with no carpet, no kids park, no non-skier lift. It is a
ski-only resort (no snowboarding), which is unusual and may actually be a
selling point for nervous beginners — quieter pistes, no one bombing past. If
that is right it deserves a note of its own rather than looking like the weakest
entry on the page.
