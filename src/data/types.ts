export interface HotelTranslations {
  ja?: { name?: string; description?: string; tip?: string; tags?: string[] };
  zh?: { name?: string; description?: string; tip?: string; tags?: string[] };
}

export interface RestaurantTranslations {
  ja?: { name?: string; description?: string; mustTry?: string; hours?: string; tags?: string[] };
  zh?: { name?: string; description?: string; mustTry?: string; hours?: string; tags?: string[] };
}

export interface DayTranslations {
  ja?: { title?: string; activities?: string[] };
  zh?: { title?: string; activities?: string[] };
}

export interface Hotel {
  name: string;
  rating: number;
  ratingCount: string;
  price: string;
  priceLabel: string;
  tags: string[];
  description: string;
  tip: string;
  website?: string;
  translations?: HotelTranslations;
}

export interface Restaurant {
  name: string;
  rating: number;
  ratingCount: string;
  price: string;
  tags: string[];
  description: string;
  mustTry: string;
  hours?: string;
  bookAhead?: boolean;
  translations?: RestaurantTranslations;
}

export interface Activity {
  description: string;
  url?: string;
  mapUrl?: string;
}

export interface Day {
  dayNum: number;
  date: string;
  title: string;
  activities: Activity[];
  translations?: DayTranslations;
}

export interface MapPoint {
  name: string;
  type: 'ski' | 'hotel' | 'restaurant' | 'attraction';
  lat: number;
  lng: number;
}

export interface SkiAreaTranslations {
  ja?: { name?: string; description?: string; tip?: string; tags?: string[] };
  zh?: { name?: string; description?: string; tip?: string; tags?: string[] };
}

export interface SkiRun {
  difficulty: 'green' | 'blue' | 'red' | 'black';
  count: number;
  longest_m?: number;
}

export interface SkiLift {
  type: 'gondola' | 'chairlift' | 'surface' | 'magic_carpet';
  count: number;
}

export interface SkiArea {
  name: string;
  name_ja: string;
  elevation_base_m: number;
  elevation_summit_m: number;
  vertical_m: number;
  runs: SkiRun[];
  lifts: SkiLift[];
  season: string;
  night_skiing: boolean;
  snowmaking: boolean;
  terrain_park: boolean;
  website?: string;
  mapUrl?: string;
  lat: number;
  lng: number;
  price_adult_day?: string;
  description: string;
  tags: string[];
  tip?: string;
  translations?: SkiAreaTranslations;
}

export interface CityData {
  name: string;
  slug: string;
  season?: string;
  dates?: string;
  nights?: number;
  tagline: string;
  accentColor: string;
  transport?: string;
  mapCenter: { lat: number; lng: number };
  mapZoom?: number;
  mapPoints: MapPoint[];
  skiAreas?: SkiArea[];
  days?: Day[];
  hotels: Hotel[];
  restaurants: Restaurant[];
}
