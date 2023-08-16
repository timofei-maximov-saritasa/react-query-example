import { useQuery } from '@tanstack/react-query';

import { CharacterService } from '@/api/services/characterService.ts';
import { queryKeyFactory } from '@/features/character/queries/queryKeyFactory.ts';

export const useCharacter = (id: string | undefined) => useQuery({
  enabled: id !== undefined,
  queryFn() {
    if (id === undefined) {
      throw new Error('id is undefined');
    }
    return CharacterService.getCharacter(Number(id));
  },
  queryKey: queryKeyFactory.character(Number(id)),
});
