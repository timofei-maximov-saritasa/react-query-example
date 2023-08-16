export interface PaginationDto {
  readonly has_next_page: boolean;
  readonly items: {
    readonly count: number;
    readonly per_page: number;
    readonly total: number;
  };
  readonly last_visible_page: string;
}
