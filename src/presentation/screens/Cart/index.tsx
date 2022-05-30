import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useCart } from '../../../application/context/CartContext';
import { CartItem } from './Item';

import {
  BoxAmount,
  BoxCheckout,
  ButtonCheckout,
  ButtonHeader,
  Container,
  TextChekout,
  TextMyCart,
  TextTotalAmount,
  PriceAmount,
} from './styles';

Ionicons.loadFont();

export const Cart = () => {
  const navigation = useNavigation();
  const { cartPlants } = useCart();

  const navigateGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleCalculateTotalAmount = () => {
    const amount = cartPlants.map(item => {
      return item.price;
    });

    const totalAmount = amount.reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
    );

    return totalAmount;
  };

  return (
    <Container>
      <ButtonHeader onPress={navigateGoBack}>
        <Ionicons name="arrow-back" size={24} />
      </ButtonHeader>

      <TextMyCart>My Bag</TextMyCart>

      {cartPlants.map((item, index) => (
        <CartItem
          key={index}
          image={item.image.uri}
          title={item.title}
          category={item.category}
          quantity={0}
          price={item.price}
        />
      ))}
      <BoxCheckout>
        <BoxAmount>
          <TextTotalAmount>Total amount:</TextTotalAmount>
          <PriceAmount>{handleCalculateTotalAmount()}$</PriceAmount>
        </BoxAmount>

        <ButtonCheckout>
          <TextChekout>CHECK OUT</TextChekout>
        </ButtonCheckout>
      </BoxCheckout>
    </Container>
  );
};
