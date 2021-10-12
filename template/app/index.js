import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {hasNotch} from 'react-native-device-info';

const App = () => {
  console.log(hasNotch());
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.title}>React Native Web Quickstart</Text>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('./assets/image.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hasNotch() ? 50 : 0,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
  },
  image: {
    height: '35%',
    minWidth: '100%',
  },
});

export default App;
