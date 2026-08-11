export interface Stay {
  slug: string;
  /** Proper noun — not translated. */
  name: string;
  /** File in public/img. Omitted for bases not yet open. */
  image?: string;
  open: boolean;
  /** Keys into copy.ts, so every string stays in the one dictionary. */
  keys: {
    location: string;
    dates: string;
    meta: string;
    blurb: string;
  };
}

export const stays: Stay[] = [
  {
    slug: 'kobuchizawa',
    name: 'Grand Mercure Yatsugatake',
    image: 'grand-mercure.jpg',
    open: true,
    keys: {
      location: 'sy2Location',
      dates: 'sy2Dates',
      meta: 'sy2Meta',
      blurb: 'sy2Blurb',
    },
  },
  {
    slug: 'tateshina',
    name: 'Kominka Kozumi',
    image: 'house-exterior.jpg',
    open: true,
    keys: {
      location: 'sy1Location',
      dates: 'sy1Dates',
      meta: 'sy1Meta',
      blurb: 'sy1Blurb',
    },
  },
];

/** Rendered as a closed doorway at the end of the corridor. */
export const moreComing = {
  keys: { title: 'syMoreTitle', blurb: 'syMoreBlurb' },
};
