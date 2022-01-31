import React from 'react';

import createNativeStackNavigator from './common/createNativeStackNavigator';
import Details from '../screens/Details';

const SCREENS = [{ title: 'Details', component: Details }];

const StackNavigator = (initialScreen) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerLargeTitleHideShadow: true,
        headerHideShadow: true,
      }}>
      <Stack.Screen name={initialScreen.title}>
        {initialScreen.component}
      </Stack.Screen>
      {SCREENS.map((screen) => (
        <Stack.Screen
          name={screen.title}
          key={screen.title}
          component={screen.component}
          options={({ route }) => ({ title: route?.params?.name })}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
