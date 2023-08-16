import { CharacterListItem } from '../components/CharacterListItem';
import { useCharacters } from '../queries/useCharacters.ts';

export const CharactersPage = () => {
  const { data, error, isLoading } = useCharacters();

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading || data === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {data.map(character => (
        <CharacterListItem character={character} key={character.malId} />
      ))}
    </div>
  );
};
