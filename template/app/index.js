import React from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import {hasNotch} from 'react-native-device-info';

const App = () => {
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
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 25,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: Platform.OS === 'web' ? 3 : 1.6,
    backgroundColor: '#000000',
  },
});

export default App;
