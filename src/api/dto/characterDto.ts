import { type CharacterImageDto } from './characterImageDto.ts';

import { type ImagesDto } from '@/api/dto/imagesDto.ts';

export interface CharacterDto {
  readonly about: null | string;
  readonly images: ImagesDto<CharacterImageDto>;
  readonly mal_id: number;
  readonly name: string;
  readonly name_kanji: null | string;
  readonly nicknames: readonly string[];
  readonly url: string;
}
