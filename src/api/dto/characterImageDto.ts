import { type ImageDto } from './imageDto.ts';

export interface CharacterImageDto extends ImageDto {
  readonly small_image_url: null | string;
}
