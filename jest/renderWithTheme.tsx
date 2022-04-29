import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/global/lightTheme';

export function renderWithTheme(component: React.ReactElement): RenderAPI {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}
