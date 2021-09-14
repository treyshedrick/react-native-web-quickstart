import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
      <Text>Testiing</Text>
      <Text>See if this is working</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 40,
  },
});

export default Home;
