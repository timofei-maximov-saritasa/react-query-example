import { useQuery } from '@tanstack/react-query';

import { ProducerService } from '@/api/services/producerService.ts';
import { queryKeysFactory } from '@/features/anime/queries/queryKeysFactory.ts';

export const useProducers = (animeId: number | undefined, ids: number[]) => useQuery({
  enabled: ids.length > 0 && animeId !== undefined,
  queryFn: () => ProducerService.getProducersByIds(ids),
  queryKey: queryKeysFactory.animeProducers(animeId as number, ids),
});
