import React, { useCallback } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Plant } from '../../../application/http/models/Plant';

import { useCart } from '../../../application/context/CartContext';

import {
  BoxButton,
  BoxBuy,
  BoxNamePrice,
  BoxPrice,
  Button,
  ButtonBuy,
  ButtonHeader,
  Container,
  Content,
  Description,
  Image,
  Header,
  Name,
  TextAbout,
  TextBest,
  TextButtonBuy,
  TextPrice,
  TextValue,
} from './styles';

Ionicons.loadFont();
AntDesign.loadFont();

export const PlantDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { quantity, increment, decrement, addPlantToCart } = useCart();

  const plantSelected = route.params as Plant;

  const navigateGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const navigateToCart = useCallback(() => {
    navigation.navigate('myCart');
  }, []);

  return (
    <Container>
      <Header>
        <ButtonHeader onPress={navigateGoBack}>
          <Ionicons name="arrow-back" size={24} />
        </ButtonHeader>
        <ButtonHeader onPress={navigateToCart}>
          <Ionicons name="cart" size={24} />
        </ButtonHeader>
      </Header>

      <Image source={{ uri: plantSelected.image.uri }} resizeMode="contain" />
      <Content>
        <TextBest>Best choice</TextBest>
        <BoxNamePrice>
          <Name>{plantSelected.title}</Name>
          <BoxPrice>
            <TextPrice>${plantSelected.price}</TextPrice>
          </BoxPrice>
        </BoxNamePrice>
        <TextAbout>About</TextAbout>
        <Description>{plantSelected.about}</Description>
        <BoxBuy>
          <BoxButton>
            <Button onPress={decrement}>
              <AntDesign name="minus" size={24} />
            </Button>
            <TextValue>{quantity}</TextValue>
            <Button onPress={increment}>
              <AntDesign name="plus" size={24} />
            </Button>
          </BoxButton>
          <ButtonBuy onPress={() => addPlantToCart(plantSelected)}>
            <TextButtonBuy>Buy</TextButtonBuy>
          </ButtonBuy>
        </BoxBuy>
      </Content>
    </Container>
  );
};
