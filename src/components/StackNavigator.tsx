import React from 'react';
import createNativeStackNavigator from './common/createNativeStackNavigator';

const SCREENS = [];

const StackNavigator = (initialScreen) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerLargeTitleHideShadow: true,
        headerHideShadow: true,
      }}>
      <Stack.Screen name={initialScreen.title} title={initialScreen.title}>
        {initialScreen.component}
      </Stack.Screen>
      {SCREENS.map((screen) => (
        <Stack.Screen name={screen.title} component={screen.component} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
