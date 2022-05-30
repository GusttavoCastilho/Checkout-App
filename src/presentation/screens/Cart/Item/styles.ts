import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 104px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};

  flex-direction: row;

  margin-bottom: 24px;
`;

export const Image = styled.Image`
  width: 104px;
  height: 90%;
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark100};

  padding-top: 6px;
`;

export const TextCategory = styled.Text`
  font-size: ${RFValue(11)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark100};

  padding-top: 4px;
`;

export const BoxQuantity = styled.View`
  flex-direction: row;
  align-self: flex-end;

  margin-bottom: 12px;
`;

export const BoxPrice = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 30px;
  height: 30px;

  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.gray100};

  align-items: center;
  justify-content: center;
`;

export const TextValue = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};

  padding: 0 10px;
`;

export const TextPrice = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};

  align-self: flex-end;
  margin: 0 15px 20px 0;
`;
