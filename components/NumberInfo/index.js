import * as React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    textAlign: 'center',
  },
  value: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const NumberInfo = ({ value, label }) => (
  <View style={styles.container}>
    { label && (
    <Text style={styles.label}>
      { label }
    </Text>
    )}
    <Text style={styles.value}>
      { value }
    </Text>
  </View>
);

NumberInfo.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
};

export default NumberInfo;
