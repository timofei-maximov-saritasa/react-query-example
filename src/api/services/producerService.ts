import { api } from '@/api/apiClient.ts';
import { type ApiResponse } from '@/api/dto/apiResponse.ts';
import { type ProducerDto } from '@/api/dto/producerDto.ts';

export namespace ProducerService {
  export async function getProducersByIds(ids: number[]) {

    const promises = ids.map(id => api.get(`producers/${id}`).json<ApiResponse<ProducerDto>>());
    const responses = await Promise.all(promises);
    return responses.map(response => response.data);
  }
}
