import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PlantDetails } from '../screens/PlantDetails';
import { BottomTabsRoutes } from './bottom-tabs.routes';
import { Cart } from '../screens/Cart';

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={BottomTabsRoutes} />
      <Screen name="plantDetails" component={PlantDetails} />
      <Screen name="myCart" component={Cart} />
    </Navigator>
  );
};
