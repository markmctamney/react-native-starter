// @generated: @expo/next-adapter@2.1.17
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Head from 'next/head';
import { Link } from 'expo-next-react-navigation';

import ScreenContainer from '../src/components/ScreenContainer';

export default function App() {
  return (
    <ScreenContainer>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Link routeName="page-one">Go to page one</Link>
      <Link routeName="page-one">Go to page two</Link>
      <Link routeName="page-one">Go to page three</Link>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
