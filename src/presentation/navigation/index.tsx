import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { BottomTabsRoutes } from './bottom-tabs.routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTabsRoutes />
    </NavigationContainer>
  );
};
