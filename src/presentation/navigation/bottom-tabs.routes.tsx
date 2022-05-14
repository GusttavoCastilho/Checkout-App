import React from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { PlantDetails } from '../screens/PlantDetails';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from 'styled-components/native';

const { Screen, Navigator } = createBottomTabNavigator();

Ionicons.loadFont();
MaterialIcons.loadFont();

export const BottomTabsRoutes = () => {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray400,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 8,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: theme.colors.white,
          borderRadius: 25,
          height: 70,
          shadowColor: theme.colors.gray,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.7,
          shadowRadius: 15,
        },
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: props => (
            <View style={{ top: 10 }}>
              <Ionicons name="home-sharp" size={24} color={props.color} />
            </View>
          ),
        }}
      />
      <Screen
        name="plantDetails"
        component={PlantDetails}
        options={{
          tabBarIcon: props => (
            <View style={{ top: 10 }}>
              <MaterialIcons name="favorite" size={24} color={props.color} />
            </View>
          ),
        }}
      />
    </Navigator>
  );
};
