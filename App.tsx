import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const isHermes = () => global.HermesInternal !== null;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your new app!</Text>
      {isHermes && <Text style={{ color: 'blue' }}>[Hermes is enabled.]</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
