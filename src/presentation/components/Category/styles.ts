import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type TitleProps = {
  isActive: boolean;
};

export const Container = styled.View``;

export const Title = styled.Text<TitleProps>`
  font-size: ${RFValue(17)}px;
  font-weight: 800;
  color: ${({ theme, isActive }) =>
    !isActive ? theme.colors.gray : theme.colors.dark};
`;

export const Activity = styled.View`
  width: 35px;
  height: 3px;

  border-radius: 1px;
  background-color: ${({ theme }) => theme.colors.primary};

  margin-top: 2px;
`;
