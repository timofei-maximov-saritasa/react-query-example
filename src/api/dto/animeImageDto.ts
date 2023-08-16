import { type ImageDto } from './imageDto.ts';

export interface AnimeImageDto extends ImageDto {
  readonly large_image_url: null | string;
  readonly small_image_url: null | string;
}
