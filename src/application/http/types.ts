import { Plant } from './models/Plant';

export interface IPlantRequest {
  getAllPlants(): Promise<Plant[] | undefined>;
}
