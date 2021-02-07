import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {
  test('form submits two answers', () => {
    const props = { navigation: {} };
    const { getByText } = render(
      <HomeScreen {...props} />,
    );

    fireEvent.press(getByText('Increment value'));

    expect(getByText('1')).toBeTruthy();
  });
});
