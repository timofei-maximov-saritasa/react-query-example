import { api } from '@/api/apiClient.ts';
import { type AnimeDto } from '@/api/dto/animeDto.ts';
import { type ApiResponse } from '@/api/dto/apiResponse.ts';

export namespace AnimeService {
  export async function getAnime(id: number) {
    const response = await api.get(`anime/${id}`).json<ApiResponse<AnimeDto>>();
    return response.data;
  }
}
