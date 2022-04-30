import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithTheme } from '../../../../jest/renderWithTheme';

import { Input } from '.';

describe('<Input />', () => {
  it('should render correctly component', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <Input placeholder="my component" />,
    );

    const element = getByPlaceholderText('my component');
    expect(element).toBeDefined();
  });

  it('should render function onChangeText', () => {
    const onChangeMock = jest.fn();
    const updateText = 'update my component';

    const { getByPlaceholderText } = renderWithTheme(
      <Input placeholder="my component" onChangeText={onChangeMock} />,
    );

    const element = getByPlaceholderText('my component');

    fireEvent.changeText(element, updateText);

    expect(onChangeMock).toHaveBeenCalledWith(updateText);
  });
});
