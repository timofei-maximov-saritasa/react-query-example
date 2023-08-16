import { useQuery } from '@tanstack/react-query';

import { AnimeService } from '@/api/services/animeService.ts';
import { queryKeysFactory } from '@/features/anime/queries/queryKeysFactory.ts';

export const useAnime = (id: string | undefined) => useQuery({
  enabled: id !== undefined,
  queryFn: () => AnimeService.getAnime(Number(id)),
  queryKey: queryKeysFactory.anime(Number(id)),
}) ;
