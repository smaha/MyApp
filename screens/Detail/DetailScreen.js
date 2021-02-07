import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { storeData, getData, STORAGE_KEYS } from '../../services/Storage';
import colors from '../../utils/colors';
import BasicButton from '../../components/BasicButton';
import NumberInfo from '../../components/NumberInfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoArea: {
    flex: 2,
  },
  btn: {
    flex: 3,
  },
});

const DetailScreen = ({ route }) => {
  const { clickNumber } = route.params;
  const [persistedValue, setPersistedValue] = React.useState(null);
  const onSaveState = () => {
    storeData(STORAGE_KEYS.TOTAL, clickNumber);
  };
  React.useEffect(() => {
    getData(STORAGE_KEYS.TOTAL).then((storedValue) => {
      if (storedValue) {
        setPersistedValue(storedValue);
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.infoArea}>
        <NumberInfo label="Persisted value" value={persistedValue} />
        <NumberInfo label="Current Value" value={clickNumber} />
      </View>
      <View style={styles.btn}>
        <BasicButton
          onPress={onSaveState}
          title="Persist value"
          color={colors.second}
        />
      </View>
    </View>
  );
};

DetailScreen.propTypes = {
  route: PropTypes.object,
};

export default DetailScreen;
