import * as React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Routes from '../../utils/routes';
import { getData, STORAGE_KEYS } from '../../services/Storage';
import BasicButton from '../../components/BasicButton';
import NumberInfo from '../../components/NumberInfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  body: {
    flex: 2,
    flexDirection: 'row',
  },
  footer: {
    flex: 2,
  },
  counterValue: {
    flex: 0.5,
  },
  counterAction: {
    flex: 0.5,
  },
});

const HomeScreen = ({ navigation }) => {
  const [value, setValue] = React.useState(0);

  const onIncrease = () => {
    setValue(value + 1);
  };

  React.useEffect(() => {
    getData(STORAGE_KEYS.TOTAL).then((storedValue) => {
      if (storedValue) {
        setValue(storedValue);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.body}>
        <View style={styles.counterValue}>
          <NumberInfo value={value} />
        </View>
        <View style={styles.counterAction}>
          <BasicButton
            onPress={onIncrease}
            title="Increase"
          />
        </View>
      </View>
      <View styles={styles.footer}>
        <BasicButton
          onPress={() => navigation.navigate(Routes.Details, { clickNumber: value })}
          title="Go to Detail Screen"
        />
      </View>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
