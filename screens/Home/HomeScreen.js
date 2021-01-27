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
    alignItems: 'center',
    justifyContent: 'center',
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
      <Text>
        Home Screen
        {value}
      </Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color={colors.default}
      />
      <Button
        onPress={() => navigation.navigate(Routes.Details, { clickNumber: value })}
        title="Go to Detail Page"
        color={colors.default}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
