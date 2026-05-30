// Itinerary tool — curated data from yatsugatake.ts (inlined)
// Inlined from yatsugatake.ts (language: 'en')
const ITINERARY = {
    destination: 'Yatsugatake',
    dates: 'May 1–4, 2026',
    nights: 3,
    tagline: 'Alpine meadows, larch forests and mountain soba in the Southern Japanese Alps',
    transport_note: 'Departure on May 4: Board the Azusa express from Kobuchizawa Station (~09:30) for the ~2 hour journey back to Shinjuku. Seats reservable via JR East website or at any major station ticket window.',
    days: [
        {
            dayNum: 1,
            date: 'Fri, May 1',
            title: 'Arrival in the Highlands',
            activities: [
                {
                    description: 'Depart Shinjuku on the Azusa limited express (~08:00). Views of Mt. Fuji on the right side of the train. Arrive Kobuchizawa (~10:00).',
                    url: 'https://www.jreast.co.jp/e/pass/jrpass.html',
                },
                {
                    description: "Check in at Risonare Yatsugatake or your pension. Stroll Kobuchizawa's wine-road: boutique shops, cheese cellar, artisan bakeries.",
                    mapUrl: 'https://maps.google.com/?q=Kobuchizawa,Hokuto,Yamanashi',
                },
                {
                    description: 'Welcome dinner at a local izakaya. Try Yamanashi horse sashimi (basashi), Koshu wine, and mountain vegetable tempura.',
                },
            ],
        },
        {
            dayNum: 2,
            date: 'Sat, May 2',
            title: 'Kiyosato Plateau & Makiba Koen',
            activities: [
                {
                    description: 'Drive or bus up to Kiyosato (1,270 m). May meadows are bright with wildflowers; Southern Alps snow-capped on the horizon.',
                    mapUrl: 'https://maps.google.com/?q=Kiyosato,Hokuto,Yamanashi',
                },
                {
                    description: 'Farm experience at Makiba Koen — feed calves, watch morning milking, sample Yatsugatake soft-serve ice cream.',
                    url: 'https://www.kiyosato.gr.jp/makibakoen/',
                },
                {
                    description: 'Lunch at Toramaru Soba. Hand-cut buckwheat noodles made with Yatsugatake spring water.',
                },
                {
                    description: 'Afternoon hike through Japanese larch forests along the Kiyosato Forest Road trail. 2–3 hour circuit, moderate difficulty.',
                },
                { description: "Return to hotel for onsen. Kobuchizawa's mildly alkaline hot spring is ideal after a day of walking." },
            ],
        },
        {
            dayNum: 3,
            date: 'Sun, May 3',
            title: 'Yatsugatake Trails & Hakushu Distillery',
            activities: [
                {
                    description: 'Full-day Yatsugatake hiking: plateau trail at 1,900 m with panoramic views to Mt. Fuji across the Kofu Basin.',
                    mapUrl: 'https://maps.google.com/?q=Yatsugatake+Mountains,Nagano',
                },
                {
                    description: "Alternative: Hakushu Whisky Distillery (Suntory) — 90-minute guided tour in mountain forests at 880 m. Book 2 weeks ahead in May.",
                    url: 'https://www.suntory.com/factory/hakushu/',
                },
                {
                    description: 'Visit Lake Mizugaki — serene reservoir in cedar forest, popular for fishing and reflection photography.',
                    mapUrl: 'https://maps.google.com/?q=Lake+Mizugaki+Yamanashi',
                },
                {
                    description: 'Dinner at Café Rosa (reservations recommended) or in-resort kaiseki at Risonare.',
                },
            ],
        },
        {
            dayNum: 4,
            date: 'Mon, May 4',
            title: 'Last Morning & Departure to Tokyo',
            activities: [
                { description: 'Final Highland walk before 08:00 — morning mist over the larch forest.' },
                { description: "Breakfast or grab bread and coffee from Kobuchizawa's artisan bakeries." },
                {
                    description: 'Pick up omiyage: Yatsugatake cheese, Koshu wine, locally-produced honey.',
                },
                {
                    description: 'Azusa express from Kobuchizawa Station to Shinjuku (~2 hours). Arrive Tokyo for late lunch.',
                    url: 'https://www.jreast.co.jp/e/',
                    mapUrl: 'https://maps.google.com/?q=Kobuchizawa+Station',
                },
            ],
        },
    ],
};
export function getItinerary(args) {
    if (args.day !== undefined) {
        const day = ITINERARY.days.find(d => d.dayNum === args.day);
        if (!day)
            throw new Error(`Day ${args.day} not found. Available days: 1–${ITINERARY.days.length}`);
        return day;
    }
    return ITINERARY;
}
