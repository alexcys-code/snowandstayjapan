// Accommodation & restaurants tool — Overpass API + curated fallback data
// Merges live OSM data with the curated yatsugatake.ts dataset
import { overpassQuery, bboxString, getCoords, getName } from './overpass.js';
function osmTypeToPlaceType(tags) {
    const t = tags.tourism;
    const a = tags.amenity;
    if (t === 'hotel')
        return 'hotel';
    if (t === 'guest_house')
        return 'guesthouse';
    if (t === 'hostel')
        return 'hostel';
    if (t === 'motel' || t === 'pension')
        return 'pension';
    if (t === 'camp_site')
        return 'campsite';
    if (a === 'restaurant')
        return 'restaurant';
    if (a === 'cafe')
        return 'cafe';
    if (a === 'bar')
        return 'bar';
    // Ryokan is often tagged as hotel or guest_house in OSM + name contains 旅館
    if ((t === 'hotel' || t === 'guest_house') && tags.name?.includes('旅館'))
        return 'ryokan';
    return null;
}
async function fetchOsmPlaces(placeType) {
    const bbox = bboxString();
    const query = placeType === 'accommodation'
        ? `
[out:json][timeout:25];
(
  nwr["tourism"="hotel"](${bbox});
  nwr["tourism"="guest_house"](${bbox});
  nwr["tourism"="hostel"](${bbox});
  nwr["tourism"="motel"](${bbox});
  nwr["tourism"="pension"](${bbox});
  nwr["tourism"="camp_site"](${bbox});
);
out center tags;
`
        : `
[out:json][timeout:25];
(
  nwr["amenity"="restaurant"](${bbox});
  nwr["amenity"="cafe"](${bbox});
  nwr["amenity"="bar"](${bbox});
);
out center tags;
`;
    const result = await overpassQuery(query);
    const places = [];
    for (const el of result.elements) {
        const tags = el.tags ?? {};
        const type = osmTypeToPlaceType(tags);
        if (!type)
            continue;
        const name = getName(el);
        if (!name || name.startsWith('OSM '))
            continue;
        const coords = getCoords(el);
        places.push({
            id: `osm-${el.id}`,
            name,
            name_ja: tags['name:ja'],
            type,
            lat: coords?.lat,
            lon: coords?.lon,
            address: tags['addr:full'],
            phone: tags.phone,
            website: tags.website,
            opening_hours: tags.opening_hours,
            cuisine: tags.cuisine,
            tags_raw: tags,
            source: 'osm',
        });
    }
    return places;
}
// Curated accommodation from yatsugatake.ts
const CURATED_ACCOMMODATION = [
    {
        id: 'curated-risonare',
        name: 'Risonare Yatsugatake',
        name_ja: 'リゾナーレ八ヶ岳',
        type: 'hotel',
        lat: 35.8670, lon: 138.3100,
        website: 'https://risonare.com/yatsugatake/',
        price_range: '¥¥¥',
        rating: 4.6,
        rating_count: '1,240 reviews',
        description: "Hoshino Resorts' flagship Highland property — stone and timber cottages around a romantic cobblestone wine road. Outdoor pool, spa, Italian restaurant Piccolo.",
        source: 'curated',
        type_label: 'Luxury resort',
    },
    {
        id: 'curated-bleston',
        name: 'Hoshino Bleston Court',
        name_ja: 'ブレストンコート',
        type: 'hotel',
        lat: 35.8700, lon: 138.3050,
        website: 'https://www.hoshinoresorts.com/en/hotels/blestoncourthotel/',
        price_range: '¥¥¥',
        rating: 4.5,
        rating_count: '890 reviews',
        description: 'Intimate forest retreat famous for stargazing programs and tranquil outdoor baths. Deep in the birch forest with Japanese-Western fusion rooms.',
        source: 'curated',
    },
    {
        id: 'curated-pension-minamimaki',
        name: 'Pension Minami-Maki',
        name_ja: 'ペンション南牧',
        type: 'pension',
        lat: 35.8990, lon: 138.4130,
        price_range: '¥¥',
        rating: 4.3,
        rating_count: '340 reviews',
        description: 'Family-run pension with home-cooked Japanese meals. Owner-chef sources from the adjacent kitchen garden. Authentic Highland experience.',
        source: 'curated',
    },
    {
        id: 'curated-fujiya',
        name: 'Fujiya Hotel Kiyosato',
        name_ja: '清里富士屋ホテル',
        type: 'hotel',
        lat: 35.8960, lon: 138.4180,
        price_range: '¥¥',
        rating: 4.1,
        rating_count: '510 reviews',
        description: 'Classic 1960s Highland resort with retro Showa-era charm. Ideal for Kiyosato farm and forest walks.',
        source: 'curated',
    },
];
// Curated restaurants from yatsugatake.ts
const CURATED_RESTAURANTS = [
    {
        id: 'curated-toramaru',
        name: 'Toramaru Soba',
        name_ja: 'とらまる蕎麦',
        type: 'restaurant',
        lat: 35.8720, lon: 138.3080,
        price_range: '¥',
        rating: 4.4,
        rating_count: '680 reviews',
        opening_hours: 'Tue–Sun 11:00–15:00',
        cuisine: 'soba;japanese',
        must_try: 'Morisoba (cold buckwheat noodles) with fresh wasabi and sansai tempura',
        description: 'Legendary soba house hand-cutting buckwheat noodles for over 40 years. Uses Yatsugatake spring water.',
        source: 'curated',
    },
    {
        id: 'curated-caferosa',
        name: 'Café Rosa',
        name_ja: 'カフェ ロザ',
        type: 'cafe',
        lat: 35.8680, lon: 138.3120,
        price_range: '¥¥',
        rating: 4.5,
        rating_count: '520 reviews',
        opening_hours: 'Wed–Mon 18:00–22:00',
        cuisine: 'italian;fusion',
        must_try: 'Kai beef tagliata on arugula; chestnut tiramisu',
        description: 'Log-cabin evening restaurant with wood-burning stove. Italian technique with Highland ingredients. Reservations recommended.',
        source: 'curated',
    },
    {
        id: 'curated-genbe',
        name: 'Akeno-no-Soba Genbe',
        name_ja: '明野の蕎麦 源兵衛',
        type: 'restaurant',
        lat: 35.8750, lon: 138.3050,
        price_range: '¥',
        rating: 4.3,
        rating_count: '290 reviews',
        opening_hours: 'Thu–Sun 11:30–14:30',
        cuisine: 'soba;japanese',
        must_try: 'Juwari (100% buckwheat) soba with house-made ponzu',
        description: 'Third-generation soba artisan in a 200-year-old converted farmhouse. Coarser, earthier noodles than Toramaru.',
        source: 'curated',
    },
    {
        id: 'curated-farmkitchen',
        name: 'Kobuchizawa Farm Kitchen',
        name_ja: '小淵沢ファームキッチン',
        type: 'restaurant',
        lat: 35.8650, lon: 138.2950,
        price_range: '¥¥',
        rating: 4.2,
        rating_count: '410 reviews',
        opening_hours: 'Wed–Sun 11:30–15:00',
        cuisine: 'japanese;farm-to-table',
        must_try: 'Seasonal vegetable plate lunch (teishoku)',
        description: 'Organic farm restaurant with 12–15 seasonal vegetable dishes, house-baked sourdough, local cheese. Terrace with Yatsugatake views.',
        source: 'curated',
    },
    {
        id: 'curated-risonare-kaiseki',
        name: 'Risonare Dining (Kaiseki)',
        name_ja: 'ユイガ（リゾート懐石）',
        type: 'restaurant',
        lat: 35.8670, lon: 138.3100,
        price_range: '¥¥¥',
        rating: 4.7,
        rating_count: '380 reviews',
        opening_hours: 'Daily 18:00–21:30 (resort guests priority)',
        cuisine: 'kaiseki;japanese',
        must_try: 'Seasonal course with Kai beef (甲州牛) and charcoal-grilled mountain vegetables',
        description: 'Most refined Highland dining in the area. 8–10 courses with Yamanashi ingredients. Sake pairing from local breweries.',
        source: 'curated',
    },
];
export async function getAccommodation(args) {
    const limit = args.limit ?? 20;
    const type = args.type ?? 'all';
    let places = [...CURATED_ACCOMMODATION];
    if (args.include_osm !== false) {
        try {
            const osmPlaces = await fetchOsmPlaces('accommodation');
            // Deduplicate by approximate proximity to curated entries
            const newOsm = osmPlaces.filter(op => {
                if (!op.lat || !op.lon)
                    return false;
                return !CURATED_ACCOMMODATION.some(cp => {
                    if (!cp.lat || !cp.lon)
                        return false;
                    const dist = Math.hypot(op.lat - cp.lat, op.lon - cp.lon);
                    return dist < 0.005; // ~500m
                });
            });
            places = [...places, ...newOsm];
        }
        catch {
            // OSM unavailable — fall back to curated only
        }
    }
    if (type !== 'all') {
        places = places.filter(p => p.type === type);
    }
    return places.slice(0, limit);
}
export async function getRestaurants(args) {
    const limit = args.limit ?? 20;
    let places = [...CURATED_RESTAURANTS];
    if (args.include_osm !== false) {
        try {
            const osmPlaces = await fetchOsmPlaces('food');
            const newOsm = osmPlaces.filter(op => {
                if (!op.lat || !op.lon)
                    return false;
                return !CURATED_RESTAURANTS.some(cp => {
                    if (!cp.lat || !cp.lon)
                        return false;
                    const dist = Math.hypot(op.lat - cp.lat, op.lon - cp.lon);
                    return dist < 0.003;
                });
            });
            places = [...places, ...newOsm];
        }
        catch {
            // OSM unavailable — fall back to curated only
        }
    }
    if (args.cuisine) {
        const kw = args.cuisine.toLowerCase();
        places = places.filter(p => p.cuisine?.toLowerCase().includes(kw) ||
            p.name.toLowerCase().includes(kw) ||
            p.description?.toLowerCase().includes(kw));
    }
    return places.slice(0, limit);
}
