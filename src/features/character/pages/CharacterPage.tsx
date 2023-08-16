import { useParams } from 'react-router-dom';

import { useCharacter } from '@/features/character/queries/useCharacter.ts';

export const CharacterPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useCharacter(id);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading || data === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">
            {data.name}
          </h1>
          <h2 className="text-muted-foreground text-xl">
            {data.nameKanji}
          </h2>
        </div>
      </div>
      <div>
        <p>
          {data.about}
        </p>
      </div>
    </div>
  );
};
