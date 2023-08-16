import { type PaginationDto } from './paginationDto.ts';

export interface ApiResponse<T> {
  readonly data: T;
}

export interface ApiListResponse<T> {
  readonly data: readonly T[];
  readonly pagination: PaginationDto;
}
