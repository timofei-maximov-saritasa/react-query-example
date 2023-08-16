import { type TitleDto } from '@/api/dto/titleDto.ts';

export interface ProducerDto {
  readonly about: null | string;
  readonly established: null | string;
  readonly favorites: number;
  readonly mal_id: number;
  readonly titles: readonly TitleDto[];
  readonly url: string;
}
