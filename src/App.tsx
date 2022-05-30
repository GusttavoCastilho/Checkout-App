import '../reactotron';
import React from 'react';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import themes from './global';

import { Provider } from 'react-redux';
import store from '../src/application/redux';

import { CartProvider } from '../src/application/context/CartContext';

import { Routes } from './presentation/navigation';

const App = () => {
  const deviceTheme = useColorScheme();

  const theme =
    deviceTheme && deviceTheme === 'dark' ? themes[deviceTheme] : themes.light;

  return (
    <Provider store={store}>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </CartProvider>
    </Provider>
  );
};

export default App;
