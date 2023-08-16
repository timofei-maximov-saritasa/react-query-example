export const AIRING_STATUSES = ['Finished Airing', 'Currently Airing', 'Not yet aired'] as const;

export type AiringStatus = typeof AIRING_STATUSES[number];
