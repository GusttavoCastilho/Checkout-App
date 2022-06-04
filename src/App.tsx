import '../reactotron';
import React from 'react';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import themes from './global';

import { Provider } from 'react-redux';
import { store, persistor } from '../src/application/redux';

import { PersistGate } from 'redux-persist/integration/react';

import { CartProvider } from '../src/application/context/CartContext';

import { Routes } from './presentation/navigation';

const App = () => {
  const deviceTheme = useColorScheme();

  const theme =
    deviceTheme && deviceTheme === 'dark' ? themes[deviceTheme] : themes.light;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </CartProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
