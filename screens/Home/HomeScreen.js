import * as React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import Routes from '../../utils/routes';
import colors from '../../utils/colors';
import { getData, STORAGE_KEYS } from '../../services/Storage';

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
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const HomeScreen = ({ navigation }) => {
  const [value, setValue] = React.useState(0);

  const onPressLearnMore = () => {
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
          <Text style={styles.value}>{value}</Text>
        </View>
        <View style={styles.counterAction}>
          <Button
            onPress={onPressLearnMore}
            title="Add One"
            color={colors.default}
          />
        </View>
      </View>
      <View styles={styles.footer}>
        <Button
          onPress={() => navigation.navigate(Routes.Details, { clickNumber: value })}
          title="Go to Detail Page"
          color={colors.default}
        />
      </View>
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
