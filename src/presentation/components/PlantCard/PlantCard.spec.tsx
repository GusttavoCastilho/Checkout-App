import React from 'react';
import { PlantCard, PlantCardProps } from '.';
import { renderWithTheme } from '../../../../jest/renderWithTheme';

import succulent from '../../../assets/succulent.png';

const props: PlantCardProps = {
  image: succulent,
  title: 'Succulent Plant',
  price: 39.99,
};

describe('<PlantCard />', () => {
  it('should render correctly component', () => {
    const { getByTestId } = renderWithTheme(<PlantCard {...props} />);

    const element = getByTestId('plant-container');
    expect(element).toBeDefined();
  });

  it('should render plant card favorited if property if passed', () => {
    const { getByTestId } = renderWithTheme(
      <PlantCard {...props} isFavorite />,
    );

    const element = getByTestId('plant-favorite');
    expect(element.props.isFavorite).toBeTruthy();
    expect(element.props.style[0]).toHaveProperty('backgroundColor', '#F3DFDF');
  });

  it('should render plant card to add if property if passed', () => {
    const { getByTestId } = renderWithTheme(<PlantCard {...props} isAdd />);

    const element = getByTestId('plant-add');
    expect(element.props.isAdd).toBeTruthy();
    expect(element.props.style[0]).toHaveProperty('backgroundColor', '#00B761');
  });
});
