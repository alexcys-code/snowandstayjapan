// Hiking trails tool — Overpass API + GSI Japan elevation
// Returns trails in the Yatsugatake area with elevation data

import { overpassQuery, bboxString, getCoords, getName, type OsmElement } from './overpass.js';

export interface Trail {
  id: number;
  name: string;
  name_ja?: string;
  type: string;
  difficulty?: string;
  distance_km?: number;
  ascent_m?: number;
  surface?: string;
  tags: Record<string, string>;
  osm_url: string;
  // Key waypoints with elevation
  waypoints?: Array<{ lat: number; lon: number; elevation_m?: number }>;
}

export interface ElevationPoint {
  lat: number;
  lon: number;
  elevation_m: number;
}

// GSI Japan elevation API — single point lookup
export async function getElevation(lat: number, lon: number): Promise<number | null> {
  const url = `https://cyberjapandata2.gsi.go.jp/general/dem/scripts/getelevation.php?lon=${lon}&lat=${lat}&outtype=JSON`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json() as { elevation?: number; HSR?: string };
    if (data.HSR === 'outside' || data.elevation === undefined) return null;
    return data.elevation;
  } catch {
    return null;
  }
}

// Sample a few key points along a way to get representative elevations
async function sampleElevations(
  nodes: Array<{ lat: number; lon: number }>,
  samples = 5
): Promise<Array<{ lat: number; lon: number; elevation_m?: number }>> {
  if (nodes.length === 0) return [];
  const step = Math.max(1, Math.floor(nodes.length / samples));
  const selected = nodes.filter((_, i) => i % step === 0).slice(0, samples);

  const withElev = await Promise.all(
    selected.map(async (n) => {
      const elevation_m = await getElevation(n.lat, n.lon);
      return { ...n, elevation_m: elevation_m ?? undefined };
    })
  );
  return withElev;
}

export async function getHikingTrails(args: {
  difficulty?: 'easy' | 'moderate' | 'hard';
  include_elevation?: boolean;
  limit?: number;
}): Promise<Trail[]> {
  const bbox = bboxString();
  const limit = args.limit ?? 20;

  // Query hiking routes and paths
  const query = `
[out:json][timeout:30];
(
  relation["route"="hiking"](${bbox});
  way["highway"="path"]["sac_scale"](${bbox});
  way["highway"="track"]["sac_scale"](${bbox});
  way["highway"="path"]["foot"="yes"](${bbox});
);
out center tags;
`;

  const result = await overpassQuery(query);
  const trails: Trail[] = [];

  for (const el of result.elements.slice(0, limit * 3)) {
    const tags = el.tags ?? {};
    const name = getName(el);
    if (!name || name.startsWith('OSM ')) continue; // skip unnamed

    const sac = tags.sac_scale ?? '';
    let difficulty: string | undefined;
    if (sac.includes('hiking')) difficulty = 'easy';
    else if (sac.includes('mountain_hiking')) difficulty = 'moderate';
    else if (sac.includes('demanding') || sac.includes('alpine')) difficulty = 'hard';
    else if (args.difficulty) difficulty = args.difficulty;

    if (args.difficulty && difficulty && difficulty !== args.difficulty) continue;

    const trail: Trail = {
      id: el.id,
      name,
      name_ja: el.tags?.['name:ja'],
      type: el.type === 'relation' ? 'hiking_route' : 'trail',
      difficulty,
      surface: tags.surface,
      tags: Object.fromEntries(
        Object.entries(tags).filter(([k]) =>
          ['name', 'name:ja', 'name:en', 'route', 'network', 'distance', 'ascent',
           'descent', 'difficulty', 'sac_scale', 'trail_visibility', 'website',
           'description', 'operator', 'ref'].includes(k)
        )
      ),
      osm_url: `https://www.openstreetmap.org/${el.type}/${el.id}`,
    };

    if (tags.distance) {
      const km = parseFloat(tags.distance);
      if (!isNaN(km)) trail.distance_km = km;
    }
    if (tags.ascent) {
      const m = parseFloat(tags.ascent);
      if (!isNaN(m)) trail.ascent_m = m;
    }

    if (args.include_elevation !== false) {
      const coords = getCoords(el);
      if (coords) {
        trail.waypoints = await sampleElevations([coords], 1);
      }
    }

    trails.push(trail);
    if (trails.length >= limit) break;
  }

  return trails;
}

export async function getTrailElevationProfile(args: {
  lat: number;
  lon: number;
  name?: string;
}): Promise<ElevationPoint> {
  const elevation_m = await getElevation(args.lat, args.lon);
  return {
    lat: args.lat,
    lon: args.lon,
    elevation_m: elevation_m ?? 0,
  };
}
