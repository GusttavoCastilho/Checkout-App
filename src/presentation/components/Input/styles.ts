/* eslint-disable prettier/prettier */
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 82%;
  height: 50px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray300};

  flex-direction: row;
`;

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;

  padding-left: 13px;
`;

export const TextField = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#3A3A3A',
  autoCapitalize: 'none',
  autoCorrect: false,
})) <TextInputProps>`
  flex: 1;

  padding-left: 9px;
  color: ${({ theme }) => theme.colors.dark100};
`;
