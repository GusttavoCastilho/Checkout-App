import React from 'react';

import { Activity, Container, Title } from './styles';

type CategoryProps = {
  title: string;
  isActive?: boolean;
};

export const Category = ({ title, isActive = false }: CategoryProps) => {
  return (
    <Container>
      <Title isActive={isActive}>{title}</Title>
      {isActive && <Activity testID="category-active" />}
    </Container>
  );
};
