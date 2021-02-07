import React from 'react';
import { render } from '@testing-library/react-native';
import NumberInfo from '../index';

describe('<NumberInfo />', () => {
  test('To Match Snapshot', () => {
    const props = { value: 5, label: 'hello' };
    const rended = render(
      <NumberInfo {...props} />,
    );

    expect(rended.toJSON()).toMatchSnapshot();
  });
});
