import { Plant } from './models/Plant';

export interface IPlantRequest {
  getAllPlants(): Promise<Plant[] | undefined>;
  getFindCategoryPlants(name: string): Promise<Plant[] | undefined>;
  getFindNamePlants(name: string): Promise<Plant[] | undefined>;
}
