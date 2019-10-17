import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#191920',
    justifyContent: 'center',
  },
  text: {
    color: '#eee',
    backgroundColor: '#f00',
    alignSelf: 'center',
  },
});

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <View style={styles.view}>
        <Text style={styles.text}>Hi!!</Text>
      </View>
    </>
  );
}
