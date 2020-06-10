import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from '../components/appearance';

import BottomTabs from './BottomTabs';

export default function NavigationRoot() {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <BottomTabs />
      </NavigationContainer>
    </AppearanceProvider>
  );
}
