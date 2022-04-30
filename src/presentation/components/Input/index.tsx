import React from 'react';
import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { BoxIcon, Container, TextField } from './styles';

AntDesign.loadFont();

export const Input = ({ ...props }: TextInputProps) => {
  const theme = useTheme();
  return (
    <Container>
      <BoxIcon>
        <AntDesign name="search1" size={24} color={theme.colors.dark100} />
      </BoxIcon>
      <TextField placeholder="Search" {...props} />
    </Container>
  );
};
