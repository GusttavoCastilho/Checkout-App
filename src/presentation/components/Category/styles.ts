import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type TitleProps = {
  isActive: boolean;
};

export const Container = styled.View``;

export const Title = styled.Text<TitleProps>`
  font-size: ${RFValue(14)}px;
  font-weight: 500;
  color: ${({ theme, isActive }) =>
    !isActive ? theme.colors.gray : theme.colors.primary};
`;

export const Activity = styled.View`
  width: 30px;
  height: 2px;

  border-radius: 1px;
  background-color: ${({ theme }) => theme.colors.primary};

  margin-top: 4px;
`;
