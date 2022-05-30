import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};

  padding: 30px 30px;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  margin-top: 30px;
`;

export const BoxTitle = styled.View``;

export const TextWelcome = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  padding-top: 8px;
`;

export const BoxSearch = styled.View`
  width: 100%;

  flex-direction: row;

  margin-top: 35px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  width: 50px;
  height: 50px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  margin-left: 10px;
`;

export const BoxCategory = styled.View`
  width: 100%;

  margin-top: 35px;

  flex-direction: row;
`;

export const BoxPlants = styled.View`
  width: 100%;

  margin-top: 30px;
`;

export const ListPlants = styled.FlatList`` as unknown as typeof FlatList;

export const LoadingPlants = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ButtonCart = styled.TouchableOpacity``;
