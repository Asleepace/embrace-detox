/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'Embrace + Detox Example'}</Text>
      <Text style={styles.body}>
        {'This is an example test application using embrace and detox.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
  },
  body: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
