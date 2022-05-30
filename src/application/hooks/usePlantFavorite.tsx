import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Plant } from '../http/models/Plant';

export const usePlantFavorite = () => {
  const [plantsFavorites, setPlantsFavorites] = useState<Plant[]>([]);

  const handleAddNewPlantFavorite = async (plant: Plant) => {
    const isAlreadyPlantsFavorite = plantsFavorites.some(
      plants => plants.id === plant.id,
    );

    if (isAlreadyPlantsFavorite) {
      const plantsFilteredFavorites = plantsFavorites.filter(
        favorite => favorite.id !== plant.id,
      );
      setPlantsFavorites(plantsFilteredFavorites);

      await AsyncStorage.setItem(
        '@plant/favorites',
        JSON.stringify([...plantsFavorites]),
      );
    } else {
      setPlantsFavorites(prevFavourites => [...prevFavourites, plant]);
      await AsyncStorage.setItem(
        '@plant/favorites',
        JSON.stringify([...plantsFavorites, plant]),
      );
    }
  };

  const handleRemovePlantFavorite = () => {};

  return {
    plantsFavorites,
    handleAddNewPlantFavorite,
    handleRemovePlantFavorite,
  };
};
