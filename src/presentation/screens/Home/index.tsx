import React from 'react';

import { useTheme } from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Input } from '../../components/Input';
import { Category } from '../../components/Category';
import { PlantCard } from '../../components/PlantCard';

import { category } from '../../../utils/category';

import d from '../../../services/server.json';

import {
  BoxCategory,
  BoxSearch,
  BoxTitle,
  ButtonFilter,
  Container,
  Header,
  TextWelcome,
  Title,
} from './styles';

Feather.loadFont();
Ionicons.loadFont();

export const Home = () => {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BoxTitle>
          <TextWelcome>Welcome to</TextWelcome>
          <Title>Plant Shop</Title>
        </BoxTitle>
        <Ionicons name="cart" size={24} />
      </Header>

      <BoxSearch>
        <Input />
        <ButtonFilter>
          <Feather name="sliders" size={24} color={theme.colors.white} />
        </ButtonFilter>
      </BoxSearch>

      <BoxCategory>
        {category.map(item => {
          return (
            <Category
              key={item.id}
              title={item.title}
              isActive={item.id === 1}
            />
          );
        })}
      </BoxCategory>

      {d.plants.map(item => {
        return (
          <PlantCard
            image={{
              uri: item.image.uri,
              width: item.image.width,
              height: item.image.height,
            }}
            title="dsfds"
            price={3}
          />
        );
      })}
    </Container>
  );
};
