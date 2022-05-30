import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;

  margin-top: 50px;
`;

export const ButtonHeader = styled.TouchableOpacity``;

export const Content = styled.View`
  flex: 1;

  margin: 0 8px 8px 7px;
  padding: 35px 0 0 23px;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image`
  width: 272px;
  height: 360px;

  margin-top: 30px;

  align-self: center;
`;

export const BoxNamePrice = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextBest = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Name = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};

  padding-top: 20px;
`;

export const TextAbout = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};

  padding-top: 20px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark200};

  padding-top: 12px;
`;

export const BoxPrice = styled.View`
  width: 94px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 51px;
  border-bottom-left-radius: 51px;

  margin-top: 15px;

  align-items: center;
  justify-content: center;
`;

export const TextPrice = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const BoxBuy = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 10px;
`;

export const ButtonBuy = styled.TouchableOpacity`
  width: 176px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 40px;

  align-items: center;
  justify-content: center;
`;

export const TextButtonBuy = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const BoxButton = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 54px;
  height: 32px;

  border-radius: 5px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.dark300};

  align-items: center;
  justify-content: center;
`;

export const TextValue = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};

  padding: 0 10px;
`;
