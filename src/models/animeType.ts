export const ANIME_TYPES = ['TV', 'OVA', 'ONA', 'MOVIE', 'SPECIAL', 'MUSIC'] as const;

export type AnimeType = typeof ANIME_TYPES[number];
