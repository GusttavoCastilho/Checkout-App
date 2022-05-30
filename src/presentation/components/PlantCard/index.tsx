import React from 'react';

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
import { TouchableOpacityProps } from 'react-native';

AntDesign.loadFont();
Entypo.loadFont();

type ImageProps = {
  uri: string;
  width: string;
  height: string;
};

export type PlantCardProps = {
  image: ImageProps;
  title: string;
  price: number;
  isFavorite?: boolean;
  isAdd?: boolean;
  onFavoritePress?: () => void;
  onAddCardPress?: () => void;
  onNavigateDetailsPress?: () => void;
} & TouchableOpacityProps;

export const PlantCard = ({
  image,
  title,
  price,
  isFavorite = false,
  isAdd = false,
  onFavoritePress,
  onAddCardPress,
  onNavigateDetailsPress,
}: PlantCardProps) => {
  const theme = useTheme();
  return (
    <Container testID="plant-container" onPress={onNavigateDetailsPress}>
      <BoxFavorite
        isFavorite={isFavorite}
        testID="plant-favorite"
        onPress={onFavoritePress}>
        <Entypo
          name="heart"
          size={18}
          color={isFavorite ? theme.colors.red : theme.colors.dark}
        />
      </BoxFavorite>
      <BoxImage>
        <Image
          source={{
            uri: image.uri,
          }}
          minWidth={image.width}
          minHeight={image.height}
        />
      </BoxImage>
      <Content>
        <Title>{title}</Title>
        <BoxPrice>
          <Price>${price}</Price>
          <BoxAdd isAdd={isAdd} testID="plant-add" onPress={onAddCardPress}>
            <AntDesign name="plus" color="white" size={12} />
          </BoxAdd>
        </BoxPrice>
      </Content>
    </Container>
  );
};
