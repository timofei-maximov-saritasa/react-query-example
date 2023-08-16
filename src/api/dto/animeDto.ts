import { type AnimeImageDto } from '@/api/dto/animeImageDto';
import { type ImagesDto } from '@/api/dto/imagesDto';
import { type LinkedResourceDto } from '@/api/dto/linkedResourceDto.ts';
import { type TitleDto } from '@/api/dto/titleDto.ts';
import { type TrailerBaseDto } from '@/api/dto/trailerBaseDto';

export interface AnimeDto {
  readonly airing: boolean;
  readonly approved: boolean;
  readonly background: null | string;
  readonly duration: null | string;
  readonly episodes: null | number;
  readonly favorites: null | number;
  readonly genres: readonly LinkedResourceDto[];
  readonly images: ImagesDto<AnimeImageDto>;
  readonly licensors: readonly LinkedResourceDto[];
  readonly mal_id: number;
  readonly members: null | number;
  readonly popularity: null | number;
  readonly producers: readonly LinkedResourceDto[];
  readonly rating: null | string;
  readonly score: null | number;
  readonly scored_by: null | number;
  readonly season: null | string;
  readonly source: null | string;
  readonly status: null | string;
  readonly studios: readonly LinkedResourceDto[];
  readonly synopsis: null | string;
  readonly themes: readonly LinkedResourceDto[];
  readonly titles: readonly TitleDto[];
  readonly trailer: TrailerBaseDto;
  readonly type: null | string;
  readonly url: string;
  readonly year: null | number;
}
