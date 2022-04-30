import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { useTheme } from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  BoxAdd,
  BoxFavorite,
  BoxImage,
  BoxPrice,
  Container,
  Content,
  Image,
  Price,
  Title,
} from './styles';

AntDesign.loadFont();
Entypo.loadFont();

export type PlantCardProps = {
  image: ImageSourcePropType;
  title: string;
  price: number;
  isFavorite?: boolean;
  isAdd?: boolean;
};

export const PlantCard = ({
  image,
  title,
  price,
  isFavorite = false,
  isAdd = false,
}: PlantCardProps) => {
  const theme = useTheme();
  return (
    <Container testID="plant-container">
      <BoxFavorite isFavorite={isFavorite} testID="plant-favorite">
        <Entypo
          name="heart"
          size={18}
          color={isFavorite ? theme.colors.red : theme.colors.dark}
        />
      </BoxFavorite>
      <BoxImage>
        <Image source={image} />
      </BoxImage>
      <Content>
        <Title>{title}</Title>
        <BoxPrice>
          <Price>${price}</Price>
          <BoxAdd isAdd={isAdd} testID="plant-add">
            <AntDesign name="plus" color="white" size={12} />
          </BoxAdd>
        </BoxPrice>
      </Content>
    </Container>
  );
};
