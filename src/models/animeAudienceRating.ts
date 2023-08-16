export const ANIME_AUDIENCE_RATINGS = [
  'G - All Ages',
  'PG - Children',
  'PG-13 - Teens 13 or older',
  'R - 17+ (violence & profanity)',
  'R+ - Mild Nudity',
  'Rx - Hentai',
] as const;

export type AnimeAudienceRating = typeof ANIME_AUDIENCE_RATINGS[number];
