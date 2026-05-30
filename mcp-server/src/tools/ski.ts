// Ski areas tool — Overpass API + curated data
// Queries ski resorts, pistes, and lifts in the Yatsugatake area

import { overpassQuery, bboxString, getCoords, getName } from './overpass.js';

export interface SkiResort {
  id: string;
  name: string;
  name_ja?: string;
  lat?: number;
  lon?: number;
  elevation_base_m?: number;
  elevation_summit_m?: number;
  vertical_m?: number;
  piste_counts: { green: number; blue: number; red: number; black: number };
  lift_counts: { gondola: number; chairlift: number; surface: number };
  night_skiing: boolean;
  snowmaking?: boolean;
  terrain_park?: boolean;
  season?: string;
  website?: string;
  price_adult_day?: string;
  description: string;
  tags: string[];
  tip?: string;
  source: 'osm' | 'curated';
}

async function fetchOsmSkiResorts(): Promise<SkiResort[]> {
  const bbox = bboxString();
  const query = `
[out:json][timeout:30];
(
  nwr["leisure"="ski_resort"](${bbox});
  nwr["landuse"="winter_sports"](${bbox});
);
out center tags;
`;

  const result = await overpassQuery(query);
  const resorts: SkiResort[] = [];

  for (const el of result.elements) {
    const tags = el.tags ?? {};
    const name = getName(el);
    if (!name || name.startsWith('OSM ')) continue;
    const coords = getCoords(el);

    resorts.push({
      id: `osm-${el.id}`,
      name,
      name_ja: tags['name:ja'],
      lat: coords?.lat,
      lon: coords?.lon,
      piste_counts: { green: 0, blue: 0, red: 0, black: 0 },
      lift_counts: { gondola: 0, chairlift: 0, surface: 0 },
      night_skiing: tags.lit === 'yes',
      website: tags.website,
      description: tags.description ?? '',
      tags: [],
      source: 'osm',
    });
  }

  return resorts;
}

// Curated resort data
const CURATED_RESORTS: SkiResort[] = [
  {
    id: 'curated-sunmeadows',
    name: 'Sunmeadows Kiyosato',
    name_ja: 'サンメドウズ清里スキー場',
    lat: 35.8932,
    lon: 138.4102,
    elevation_base_m: 1350,
    elevation_summit_m: 1900,
    vertical_m: 550,
    piste_counts: { green: 3, blue: 5, red: 3, black: 1 },
    lift_counts: { gondola: 1, chairlift: 4, surface: 2 },
    night_skiing: false,
    snowmaking: true,
    terrain_park: true,
    season: 'Late Dec – late Mar',
    website: 'https://www.kiyosato.gr.jp/sunmeadows/',
    price_adult_day: '¥4,800',
    description: 'The flagship ski area in the Yatsugatake Highlands at 1,900 m. Gondola delivers views of the Southern Alps and Mt. Fuji. Good all-round mountain — beginner-friendly greens and blues plus upper black runs and a terrain park.',
    tags: ['Beginner-friendly', 'Terrain park', 'Gondola', 'Mt. Fuji views', 'Snowmaking'],
    tip: 'Take the gondola at opening for untracked powder on the upper bowl after a snowfall.',
    source: 'curated',
  },
  {
    id: 'curated-fujimi',
    name: 'Fujimi Panorama Resort',
    name_ja: '富士見パノラマリゾート',
    lat: 35.8485,
    lon: 138.2352,
    elevation_base_m: 1000,
    elevation_summit_m: 1780,
    vertical_m: 780,
    piste_counts: { green: 2, blue: 4, red: 4, black: 3 },
    lift_counts: { gondola: 1, chairlift: 5, surface: 1 },
    night_skiing: true,
    snowmaking: true,
    terrain_park: true,
    season: 'Dec – early Apr',
    website: 'https://www.fujimipanorama.com/',
    price_adult_day: '¥5,200',
    description: 'Largest ski area in the Yatsugatake region with 780 m vertical. Long blues and reds from the gondola summit suit confident intermediates. Night skiing until 21:00, longest season in the area.',
    tags: ['Largest vertical', 'Night skiing', 'Long season', 'Intermediate terrain', 'Gondola'],
    tip: 'Buy a combo day+night pass. Night skiing after 17:00 is uncrowded with village lights below.',
    source: 'curated',
  },
  {
    id: 'curated-kogen',
    name: 'Yatsugatake Kogen Ski Area',
    name_ja: '八ヶ岳高原スキー場',
    lat: 35.9198,
    lon: 138.3690,
    elevation_base_m: 1500,
    elevation_summit_m: 1750,
    vertical_m: 250,
    piste_counts: { green: 4, blue: 3, red: 1, black: 0 },
    lift_counts: { gondola: 0, chairlift: 3, surface: 2 },
    night_skiing: false,
    snowmaking: true,
    terrain_park: false,
    season: 'Dec – late Feb',
    price_adult_day: '¥3,400',
    description: 'Compact family-focused ski area with high base elevation (1,500 m) for excellent snow quality. Ideal for beginners and families with young children. Quieter than other resorts, especially weekdays.',
    tags: ['Family-friendly', 'Beginner', 'High base elevation', 'Quiet', 'Affordable'],
    tip: 'Avoid school-group weekdays in January. High base keeps snow light and dry late in season.',
    source: 'curated',
  },
];

export async function getSkiAreas(args: {
  include_osm?: boolean;
  night_skiing_only?: boolean;
  min_vertical_m?: number;
}): Promise<SkiResort[]> {
  let resorts: SkiResort[] = [...CURATED_RESORTS];

  if (args.include_osm !== false) {
    try {
      const osmResorts = await fetchOsmSkiResorts();
      // Deduplicate by proximity
      const newOsm = osmResorts.filter(or => {
        if (!or.lat || !or.lon) return false;
        return !CURATED_RESORTS.some(cr => {
          if (!cr.lat || !cr.lon) return false;
          return Math.hypot(or.lat! - cr.lat, or.lon! - cr.lon) < 0.01;
        });
      });
      resorts = [...resorts, ...newOsm];
    } catch {
      // OSM unavailable, curated only
    }
  }

  if (args.night_skiing_only) {
    resorts = resorts.filter(r => r.night_skiing);
  }
  if (args.min_vertical_m !== undefined) {
    resorts = resorts.filter(r => (r.vertical_m ?? 0) >= args.min_vertical_m!);
  }

  return resorts;
}
