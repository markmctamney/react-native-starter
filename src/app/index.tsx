import React from 'react';
import { enableScreens, screensEnabled } from 'react-native-screens';
import 'react-native-gesture-handler';

enableScreens();

import NavigationRoot from '../navigation';

export default function App() {
  return <NavigationRoot />;
}
