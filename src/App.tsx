import '../reactotron';
import React from 'react';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import themes from './global';

import { Provider } from 'react-redux';
import store from '../src/application/redux';

import { Home } from './presentation/screens/Home';

const App = () => {
  const deviceTheme = useColorScheme();

  const theme =
    deviceTheme && deviceTheme === 'dark' ? themes[deviceTheme] : themes.light;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
