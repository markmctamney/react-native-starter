import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

import { AppearanceProvider, useColorScheme } from '../contexts/appearance';
import HomeTabNavigator from './HomeTabNavigator';

export default function NavigationRoot() {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <HomeTabNavigator />
      </NavigationContainer>
    </AppearanceProvider>
  );
}
