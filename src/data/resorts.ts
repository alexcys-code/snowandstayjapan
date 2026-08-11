/**
 * The thirteen resorts training can be based at, around the Yatsugatake highlands.
 *
 * Ordered by how well they suit a beginner group. `green`/`total` are course
 * counts; where they are null the figure is NOT yet confirmed — the card falls
 * back to the qualitative note rather than showing a number we cannot stand
 * behind. See design/resort-data-gaps.md for what still needs checking.
 */
export interface Resort {
  name: string;
  nameJa: string;
  /** Beginner (green) courses, and total courses. Null = unconfirmed. */
  green: number | null;
  total: number | null;
  /** Longest continuous beginner run, metres. Null = unconfirmed. */
  longestGreen: number | null;
  /** Moving walkway / magic carpet — the lift a five-year-old can actually use. */
  carpet: boolean;
  /** Sled slope or snow play area, separate from the pistes. */
  kidsPark: boolean;
  /** A lift non-skiers can ride up and back for the view. */
  nonSkierLift: boolean;
  night: boolean;
  /** One line on why it suits (or does not suit) a beginner group. */
  noteKey: string;
  /** True for the areas we ski from our own bases. */
  ours: boolean;
}

export const resorts: Resort[] = [
  {
    name: 'Pilatus Tateshina Snow Resort', nameJa: 'ピラタス蓼科スノーリゾート',
    green: null, total: null, longestGreen: null,
    carpet: true, kidsPark: true, nonSkierLift: true, night: false,
    noteKey: 'rPilatus', ours: true,
  },
  {
    name: 'Kurumayama Kogen SKYPARK', nameJa: '車山高原SKYPARK',
    green: null, total: null, longestGreen: null,
    carpet: true, kidsPark: true, nonSkierLift: true, night: false,
    noteKey: 'rKurumayama', ours: true,
  },
  {
    name: 'Châteraisé Ski Valley Nobeyama', nameJa: 'シャトレーゼスキーバレー野辺山',
    green: 5, total: 11, longestGreen: 1400,
    carpet: true, kidsPark: true, nonSkierLift: false, night: false,
    noteKey: 'rNobeyama', ours: true,
  },
  {
    name: 'Sun Meadows Kiyosato', nameJa: 'サンメドウズ清里',
    green: 3, total: 12, longestGreen: 2200,
    carpet: true, kidsPark: true, nonSkierLift: true, night: false,
    noteKey: 'rKiyosato', ours: true,
  },
  {
    name: 'Châteraisé Ski Valley Koumi', nameJa: 'シャトレーゼスキーバレー小海',
    green: 4, total: 8, longestGreen: 1500,
    carpet: true, kidsPark: true, nonSkierLift: false, night: false,
    noteKey: 'rKoumi', ours: false,
  },
  {
    name: 'Yachiho Kogen Ski Resort', nameJa: '八千穂高原スキー場',
    green: 3, total: 9, longestGreen: 1600,
    carpet: false, kidsPark: true, nonSkierLift: false, night: false,
    noteKey: 'rYachiho', ours: false,
  },
  {
    name: 'Shirakaba Kogen International', nameJa: '白樺高原国際スキー場',
    green: null, total: 5, longestGreen: null,
    carpet: true, kidsPark: true, nonSkierLift: true, night: false,
    noteKey: 'rShirakabaKogen', ours: false,
  },
  {
    name: 'Shirakaba Resort Ike-no-Taira Snow Park', nameJa: '白樺リゾート 池の平スノーパーク',
    green: null, total: null, longestGreen: null,
    carpet: true, kidsPark: true, nonSkierLift: false, night: false,
    noteKey: 'rIkenotaira', ours: false,
  },
  {
    name: 'Shirakaba Resort 2in1', nameJa: 'しらかば2in1スキー場',
    green: null, total: 10, longestGreen: 1800,
    carpet: true, kidsPark: true, nonSkierLift: false, night: false,
    noteKey: 'r2in1', ours: false,
  },
  {
    name: 'Shirakabako Royal Hill', nameJa: '白樺湖ロイヤルヒル',
    green: null, total: null, longestGreen: null,
    carpet: true, kidsPark: true, nonSkierLift: false, night: false,
    noteKey: 'rRoyalHill', ours: false,
  },
  {
    name: 'Fujimi Kogen Ski Resort', nameJa: '富士見高原スキー場',
    green: 3, total: 10, longestGreen: 2000,
    carpet: true, kidsPark: true, nonSkierLift: true, night: false,
    noteKey: 'rFujimiKogen', ours: false,
  },
  {
    name: 'Blanche Takayama Ski Resort', nameJa: 'ブランシュたかやまスキーリゾート',
    green: null, total: null, longestGreen: null,
    carpet: false, kidsPark: false, nonSkierLift: false, night: false,
    noteKey: 'rBlanche', ours: false,
  },
  {
    name: 'Fujimi Panorama Resort', nameJa: '富士見パノラマリゾート',
    green: 2, total: 13, longestGreen: 3500,
    carpet: true, kidsPark: true, nonSkierLift: true, night: true,
    noteKey: 'rFujimiPanorama', ours: false,
  },
];
