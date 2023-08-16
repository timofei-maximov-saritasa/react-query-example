import { type CharacterImage } from './characterImage.ts';

export interface Character {
  readonly about: null | string;
  readonly images: {
    readonly jpg: CharacterImage;
    readonly webp: CharacterImage;
  };
  readonly malId: number;
  readonly name: string;
  readonly nameKanji: null | string;
  readonly nicknames: readonly string[];
  readonly url: string;
}
