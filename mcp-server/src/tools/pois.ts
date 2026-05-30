// POIs tool — Overpass API
// Returns attractions, viewpoints, alpine huts, parks, historic sites in Yatsugatake

import { overpassQuery, bboxString, getCoords, getName, type OsmElement } from './overpass.js';

export type PoiCategory =
  | 'attraction'
  | 'viewpoint'
  | 'alpine_hut'
  | 'museum'
  | 'park'
  | 'hot_spring'
  | 'waterfall'
  | 'shrine'
  | 'temple'
  | 'all';

export interface Poi {
  id: number;
  name: string;
  name_ja?: string;
  category: string;
  lat?: number;
  lon?: number;
  address?: string;
  phone?: string;
  website?: string;
  opening_hours?: string;
  description?: string;
  wikipedia?: string;
  osm_url: string;
  tags: Record<string, string>;
}

function categorizeTags(tags: Record<string, string>): string {
  if (tags.tourism === 'viewpoint') return 'viewpoint';
  if (tags.tourism === 'alpine_hut') return 'alpine_hut';
  if (tags.tourism === 'museum') return 'museum';
  if (tags.tourism === 'attraction') return 'attraction';
  if (tags.natural === 'hot_spring' || tags.leisure === 'hot_spring' || tags.amenity === 'spa') return 'hot_spring';
  if (tags.natural === 'waterfall') return 'waterfall';
  if (tags.historic === 'shrine' || tags.amenity === 'place_of_worship' && tags.religion === 'shinto') return 'shrine';
  if (tags.amenity === 'place_of_worship' && tags.religion === 'buddhist') return 'temple';
  if (tags.leisure === 'park' || tags.leisure === 'nature_reserve') return 'park';
  return tags.tourism ?? tags.amenity ?? tags.natural ?? tags.leisure ?? 'other';
}

function matchesCategory(tags: Record<string, string>, cat: PoiCategory): boolean {
  if (cat === 'all') return true;
  const actual = categorizeTags(tags);
  return actual === cat;
}

function extractPoi(el: OsmElement): Poi | null {
  const tags = el.tags ?? {};
  const name = getName(el);
  if (!name || name.startsWith('OSM ')) return null;

  const coords = getCoords(el);
  const category = categorizeTags(tags);

  const usefulTagKeys = [
    'name', 'name:ja', 'name:en', 'tourism', 'amenity', 'leisure', 'natural',
    'historic', 'description', 'website', 'phone', 'opening_hours',
    'addr:full', 'wikipedia', 'wikidata', 'fee', 'access', 'operator',
  ];

  return {
    id: el.id,
    name,
    name_ja: tags['name:ja'],
    category,
    lat: coords?.lat,
    lon: coords?.lon,
    address: tags['addr:full'],
    phone: tags.phone,
    website: tags.website,
    opening_hours: tags.opening_hours,
    description: tags.description,
    wikipedia: tags.wikipedia,
    osm_url: `https://www.openstreetmap.org/${el.type}/${el.id}`,
    tags: Object.fromEntries(
      Object.entries(tags).filter(([k]) => usefulTagKeys.includes(k))
    ),
  };
}

export async function getPois(args: {
  category?: PoiCategory;
  limit?: number;
  keyword?: string;
}): Promise<Poi[]> {
  const bbox = bboxString();
  const category = args.category ?? 'all';
  const limit = args.limit ?? 30;

  const query = `
[out:json][timeout:30];
(
  nwr["tourism"="viewpoint"](${bbox});
  nwr["tourism"="alpine_hut"](${bbox});
  nwr["tourism"="museum"](${bbox});
  nwr["tourism"="attraction"](${bbox});
  nwr["natural"="hot_spring"](${bbox});
  nwr["natural"="waterfall"](${bbox});
  nwr["amenity"="spa"](${bbox});
  nwr["leisure"="nature_reserve"](${bbox});
  nwr["amenity"="place_of_worship"]["religion"="shinto"](${bbox});
  nwr["amenity"="place_of_worship"]["religion"="buddhist"](${bbox});
  nwr["historic"="ruins"](${bbox});
);
out center tags;
`;

  const result = await overpassQuery(query);
  const pois: Poi[] = [];

  for (const el of result.elements) {
    const tags = el.tags ?? {};
    if (!matchesCategory(tags, category)) continue;
    const poi = extractPoi(el);
    if (!poi) continue;

    if (args.keyword) {
      const kw = args.keyword.toLowerCase();
      const searchable = [poi.name, poi.name_ja, poi.description, poi.category]
        .filter(Boolean).join(' ').toLowerCase();
      if (!searchable.includes(kw)) continue;
    }

    pois.push(poi);
    if (pois.length >= limit) break;
  }

  return pois;
}
