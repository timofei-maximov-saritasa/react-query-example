import { NavLink } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { type Character } from '@/models/character';

interface Props {
  readonly character: Character;
}

export const CharacterListItem = ({ character }: Props) => (
  <div className="flex gap-4 items-center">
    <Avatar>
      {character.images.webp.imageUrl !== null && <AvatarImage alt={character.name} src={character.images.webp.imageUrl} />}
      <AvatarFallback>
        {character.name.slice(0, 2)}
      </AvatarFallback>
    </Avatar>
    <div className="flex flex-col gap-1">
      <NavLink to={`${character.malId}`}>
        {character.name}
      </NavLink>
      <div className="text-muted-foreground">
        {character.nameKanji}
      </div>
    </div>
  </div>
);
