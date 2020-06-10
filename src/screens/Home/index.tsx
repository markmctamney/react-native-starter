import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const isHermes = () => global.HermesInternal !== null;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your new app!</Text>
      {isHermes && <Text style={styles.hermesText}>[Hermes is enabled.]</Text>}
    </View>
  );
}
