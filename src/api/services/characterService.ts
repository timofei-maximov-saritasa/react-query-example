import { api } from '../apiClient.ts';
import { type ApiListResponse, type ApiResponse } from '../dto/apiResponse.ts';
import { type CharacterDto } from '../dto/characterDto.ts';
import { CharacterMapper } from '../mappers/characterMapper.ts';

export namespace CharacterService {
  export async function getCharacters() {
    const response = await api.get('characters').json<ApiListResponse<CharacterDto>>();
    return response.data.map(dto => CharacterMapper.fromDto(dto));
  }

  export async function getCharacter(id: number) {
    const response = await api.get(`characters/${id}`).json<ApiResponse<CharacterDto>>();
    return CharacterMapper.fromDto(response.data);
  }
}
