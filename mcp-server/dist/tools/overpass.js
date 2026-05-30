// Overpass API client for Yatsugatake OSM data
// Default bounding box: south,west,north,east
export const YATSUGATAKE_BBOX = {
    south: 35.75,
    west: 138.20,
    north: 35.98,
    east: 138.55,
};
export async function overpassQuery(query) {
    const body = `data=${encodeURIComponent(query)}`;
    const res = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
    });
    if (!res.ok)
        throw new Error(`Overpass API error: ${res.status} ${res.statusText}`);
    return res.json();
}
export function bboxString(bbox = YATSUGATAKE_BBOX) {
    return `${bbox.south},${bbox.west},${bbox.north},${bbox.east}`;
}
// Extract lat/lon from node or way (using center)
export function getCoords(el) {
    if (el.lat !== undefined && el.lon !== undefined)
        return { lat: el.lat, lon: el.lon };
    if (el.center)
        return el.center;
    return null;
}
export function getName(el, lang) {
    const tags = el.tags ?? {};
    if (lang === 'ja' && tags['name:ja'])
        return tags['name:ja'];
    if (lang === 'en' && tags['name:en'])
        return tags['name:en'];
    return tags.name ?? tags['name:en'] ?? tags['name:ja'] ?? `OSM ${el.type}/${el.id}`;
}
