import * as React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import { storeData, STORAGE_KEYS } from '../../services/Storage';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DetailScreen = ({ route }) => {
  const { clickNumber } = route.params;
  const onSaveState = () => {
    storeData(STORAGE_KEYS.TOTAL, clickNumber);
  };
  return (
    <View style={styles.container}>
      <Text>
        Detail Screen
        { clickNumber }
      </Text>
      <Text>
        Current Value
        { clickNumber }
      </Text>
      <Button
        onPress={onSaveState}
        title="Press to save value"
        color={colors.second}
      />
    </View>
  );
};

DetailScreen.propTypes = {
  route: PropTypes.object,
};

export default DetailScreen;
