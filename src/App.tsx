import React from 'react';

import { View, Text, useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import themes from './global';

const App = () => {
  const deviceTheme = useColorScheme();

  const theme =
    deviceTheme && deviceTheme === 'dark' ? themes[deviceTheme] : themes.light;

  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
