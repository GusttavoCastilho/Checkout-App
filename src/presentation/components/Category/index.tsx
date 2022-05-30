import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Activity, Container, Title } from './styles';

type CategoryProps = {
  title: string;
  isActive?: boolean;
} & TouchableOpacityProps;

export const Category = ({
  title,
  isActive = false,
  ...props
}: CategoryProps) => {
  return (
    <Container {...props}>
      <Title isActive={isActive}>{title}</Title>
      {isActive && <Activity testID="category-active" />}
    </Container>
  );
};
