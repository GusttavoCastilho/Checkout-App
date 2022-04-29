import React from 'react';
import { Category } from '.';
import { renderWithTheme } from '../../../../jest/renderWithTheme';

describe('<Category />', () => {
  it('should render correctly component', () => {
    const { getByText } = renderWithTheme(<Category title="Concept" />);
    const element = getByText('Concept');
    expect(element).toBeDefined();
  });

  it('should render line active', () => {
    const { getByTestId } = renderWithTheme(
      <Category title="Concept" isActive />,
    );

    const element = getByTestId('category-active');
    expect(element.props.style[0]).toHaveProperty('backgroundColor', '#1DA154');
  });
});
