import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  padding: 0 30px;
  position: relative;
`;

export const ButtonHeader = styled.TouchableOpacity`
  margin-top: 50px;
`;

export const TextMyCart = styled.Text`
  font-size: ${RFValue(34)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark100};

  padding: 30px 0;
`;

export const BoxCheckout = styled.View`
  width: 100%;

  align-self: center;

  position: absolute;
  bottom: 0;
`;

export const BoxAmount = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextTotalAmount = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark100};
`;

export const PriceAmount = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark100};
`;

export const ButtonCheckout = styled.TouchableOpacity`
  width: 100%;
  height: 48px;

  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  margin: 40px 0;
`;

export const TextChekout = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
`;
