import React from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import Hyperlink from 'react-native-hyperlink';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('./assets/image.png')}
      />
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.title}>React Native Web Quickstart</Text>
          <Text style={styles.statement}>
            A quick and easy way to get started! Be sure to star this repo at
          </Text>
          <Hyperlink linkStyle={styles.linkStyle} linkDefault={true}>
            <Text>github.com/treyshedrick/react-native-web-quickstart</Text>
          </Hyperlink>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Test</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hasNotch() ? 50 : 0,
    backgroundColor: '#000000',
  },
  content: {
    backgroundColor: '#ffffff',
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
  },
  image: {
    width: '100%',
    height: undefined,
    maxHeight: 400,
    aspectRatio: Platform.OS === 'web' ? 2 : 1.6,
    backgroundColor: '#000000',
  },
  linkStyle: {
    color: '#2980b9',
    fontSize: 18,
  },
  textContent: {
    marginTop: 30,
    margin: 5,
  },
  statement: {
    marginTop: 15,
    fontSize: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: Platform.OS === 'web' ? 150 : 75,
    backgroundColor: '#000000',
    width: '100%',
  },
});

export default App;
