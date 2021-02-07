import React from 'react';
import { render } from '@testing-library/react-native';
import BasicButton from '../index';

describe('<BasicButton />', () => {
  test('To Match Snapshot', () => {
    const props = { onPress: jest.fn(), title: 'btn' };
    const rended = render(
      <BasicButton {...props} />,
    );

    expect(rended.toJSON()).toMatchSnapshot();
  });
});
