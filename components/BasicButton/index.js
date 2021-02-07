import * as React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';

const BasicButton = ({ title, onPress, ...rest }) => (
  <Button
    onPress={onPress}
    title={title}
    {...rest}
  />
);

BasicButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string,
  rest: PropTypes.any,
};

BasicButton.defaultProps = {
  color: colors.default,
};

export default BasicButton;
