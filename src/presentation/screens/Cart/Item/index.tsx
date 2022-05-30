import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  BoxQuantity,
  BoxPrice,
  Button,
  Container,
  Content,
  Image,
  TextCategory,
  TextValue,
  TextPrice,
  Title,
} from './styles';

type CartProps = {
  image: string;
  title: string;
  category: string;
  quantity: number;
  price: number;
};

AntDesign.loadFont();

export const CartItem = ({
  image,
  title,
  category,
  quantity,
  price,
}: CartProps) => {
  return (
    <Container>
      <Image source={{ uri: image }} resizeMode="contain" />
      <Content>
        <Title>{title}</Title>
        <TextCategory>Category: {category}</TextCategory>
        <BoxPrice>
          <BoxQuantity>
            <Button>
              <AntDesign name="minus" size={20} />
            </Button>
            <TextValue>{quantity}</TextValue>
            <Button>
              <AntDesign name="plus" size={20} />
            </Button>
          </BoxQuantity>
          <TextPrice>{price}$</TextPrice>
        </BoxPrice>
      </Content>
    </Container>
  );
};
