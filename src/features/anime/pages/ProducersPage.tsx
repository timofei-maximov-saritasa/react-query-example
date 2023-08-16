import { useParams } from 'react-router-dom';

import { useAnime } from '@/features/anime/queries/useAnime.ts';

export const ProducersPage = () => {
  const { id } = useParams<{ id: string; }>();
  const { data: anime, isLoading: animeIsLoading } = useAnime(id);

  if (animeIsLoading || anime === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {anime.titles[0].title}
    </div>
  );
};
