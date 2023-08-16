import { useQuery } from '@tanstack/react-query';

import { CharacterService } from '@/api/services/characterService.ts';
import { queryKeyFactory } from '@/features/character/queries/queryKeyFactory.ts';

export const useCharacters = () => useQuery({
  queryFn: () => CharacterService.getCharacters(),
  queryKey: queryKeyFactory.base,
});
