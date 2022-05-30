import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type BoxFavoriteProps = {
  isFavorite: boolean;
} & TouchableOpacityProps;

type BoxAddProps = {
  isAdd: boolean;
};

type ImageProps = {
  minWidth: string;
  minHeight: string;
};

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
  width: 47%;
  max-height: 240px;

  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.background};

  position: relative;

  margin-bottom: 22px;
  margin-right: 22px;
`;

export const BoxFavorite = styled.TouchableOpacity<BoxFavoriteProps>`
  width: 30px;
  height: 30px;

  border-radius: 15px;
  background-color: ${({ theme, isFavorite }) =>
    isFavorite ? theme.colors.red100 : theme.colors.gray200};

  position: absolute;
  right: 12px;
  top: 11px;

  z-index: 1;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0px 15px 15px 15px;
`;

export const BoxImage = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  padding-top: 20px;
`;

export const Image = styled.Image<ImageProps>`
  ${({ minHeight, minWidth }) => css`
    min-height: ${minHeight};
    min-width: ${minWidth};
  `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};

  padding-top: 6px;
`;

export const BoxPrice = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`;

export const Price = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};

  padding-top: 6px;
`;

export const BoxAdd = styled.TouchableOpacity<BoxAddProps>`
  width: 24px;
  height: 24px;

  border-radius: 4px;
  background-color: ${({ theme, isAdd }) =>
    isAdd ? theme.colors.primary : theme.colors.gray100};

  align-items: center;
  justify-content: center;
`;
