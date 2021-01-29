import React from 'react';
import { render } from '@testing-library/react-native';
import DetailScreen from '../DetailScreen';

describe('<DetailScreen />', () => {
  test('To Match Snapshot', () => {
    const props = { route: { params: { clickNumber: 5 } } };
    const rended = render(
      <DetailScreen {...props} />,
    );

    expect(rended.toJSON()).toMatchSnapshot();
  });
});
