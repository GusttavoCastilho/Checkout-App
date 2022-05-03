import { AxiosInstance } from 'axios';
import { Plant } from './models/Plant';
import { IPlantRequest } from './types';

export class PlantRequest implements IPlantRequest {
  url = '/plants';

  constructor(readonly api: AxiosInstance) {
    this.api = api;
  }

  async getAllPlants(): Promise<Plant[] | undefined> {
    const response = await this.api.get(this.url);
    return response.data;
  }
}
