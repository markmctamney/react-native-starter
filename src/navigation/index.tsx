import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import BottomTabs from './BottomTabs';

export default function NavigationRoot() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
}
