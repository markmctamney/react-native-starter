import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

const isHermes = () => global.HermesInternal !== null;

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your new app!</Text>
      {/* <Button onPress={push} */}
      {isHermes && <Text style={styles.hermesText}>[Hermes is enabled.]</Text>}
    </View>
  );
};

export default LoginScreen;
