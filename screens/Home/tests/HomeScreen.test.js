import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {
  test('form submits two answers', () => {
    const props = { navigation: {} };
    const { getByText } = render(
      <HomeScreen {...props} />,
    );

    fireEvent.press(getByText('Add One'));

    expect(getByText('1')).toBeTruthy();
  });
});
