import React, { useCallback, useEffect, useState } from 'react';

import { useTheme } from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useDispatch, useSelector } from 'react-redux';
import { plantSlice } from '../../../application/redux/reducers/plant';
import { RootState } from '../../../application/redux';
import { Plant } from '../../../application/http/models/Plant';

import { useDebounce } from '../../../application/hooks/useDebounce';
import { usePlantFavorite } from '../../../application/hooks/usePlantFavorite';
import { useCart } from '../../../application/context/CartContext';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components/Input';
import { Category } from '../../components/Category';
import { PlantCard } from '../../components/PlantCard';

import { category as categoryList } from '../../../utils/category';

import {
  BoxCategory,
  BoxSearch,
  BoxTitle,
  BoxPlants,
  ButtonCart,
  ButtonFilter,
  Container,
  Header,
  ListPlants,
  LoadingPlants,
  TextWelcome,
  Title,
} from './styles';

Feather.loadFont();
Ionicons.loadFont();

type CategoryProps = {
  id: number;
  title: string;
};

export const Home = () => {
  const [category, setCategory] = useState('POPULAR');
  const [search, setSearch] = useState('');

  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const searchTitlePlantDebounced = useDebounce(search, 300);
  const { plantsFavorites, handleAddNewPlantFavorite } = usePlantFavorite();
  const { addPlantToCart, cartPlants } = useCart();

  useEffect(() => {
    dispatch(plantSlice.actions.getPlantsRequest(category));
  }, [category]);

  const handleCategory = useCallback((plantCategory: CategoryProps) => {
    setCategory(plantCategory.title);
  }, []);

  const { plant, loading, error } = useSelector(
    (state: RootState) => state.plant,
  );

  const handleSearchPlants = useCallback(
    (name: string) => {
      setSearch(name);
      if (searchTitlePlantDebounced) {
        dispatch(plantSlice.actions.getPlantsSearchRequest(name));
      }
    },
    [searchTitlePlantDebounced],
  );

  const handleFavoritePlants = (plantFavorite: Plant) => {
    handleAddNewPlantFavorite(plantFavorite);
  };

  const isFavoritePlants = (item: Plant): boolean => {
    return plantsFavorites.some(favorite => favorite.id === item.id);
  };

  const isAddToCartPlants = (item: Plant): boolean => {
    return cartPlants.some(cart => cart.id === item.id);
  };

  const navigateToDetailsPlants = useCallback((plantSelected: Plant) => {
    navigation.navigate('plantDetails', { ...plantSelected });
  }, []);

  const navigateToCart = useCallback(() => {
    navigation.navigate('myCart');
  }, []);

  function renderLoading() {
    if (loading) {
      return <LoadingPlants />;
    }
  }

  function renderContent() {
    if (!loading && !error) {
      return (
        <BoxPlants>
          <ListPlants
            data={plant}
            keyExtractor={(item: Plant) => String(item.id)}
            renderItem={({ item }: { item: Plant }) => (
              <PlantCard
                image={{
                  uri: item.image.uri,
                  width: item.image.width,
                  height: item.image.height,
                }}
                title={item.title}
                price={item.price}
                onFavoritePress={() => handleFavoritePlants(item)}
                onAddCardPress={() => addPlantToCart(item)}
                onNavigateDetailsPress={() => navigateToDetailsPlants(item)}
                isFavorite={isFavoritePlants(item)}
                isAdd={isAddToCartPlants(item)}
              />
            )}
            numColumns={2}
          />
        </BoxPlants>
      );
    }
  }

  return (
    <Container>
      <Header>
        <BoxTitle>
          <TextWelcome>Welcome to</TextWelcome>
          <Title>Plant Shop</Title>
        </BoxTitle>

        <ButtonCart onPress={navigateToCart}>
          <Ionicons name="cart" size={24} />
        </ButtonCart>
      </Header>

      <BoxSearch>
        <Input onChangeText={handleSearchPlants} value={search} />
        <ButtonFilter>
          <Feather name="sliders" size={24} color={theme.colors.white} />
        </ButtonFilter>
      </BoxSearch>

      <BoxCategory>
        {categoryList.map(item => {
          return (
            <Category
              key={item.id}
              title={item.title}
              onPress={() => handleCategory(item)}
              isActive={item.title === category}
            />
          );
        })}
      </BoxCategory>

      {renderLoading()}
      {renderContent()}
    </Container>
  );
};
