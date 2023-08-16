import { type ImageDto } from '@/api/dto/imageDto.ts';

export interface ImagesDto<T extends ImageDto> {
  readonly jpg: T;
  readonly webp: T;
}
