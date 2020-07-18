import React, { ComponentType } from 'react';

import createNativeStackNavigator from './common/createNativeStackNavigator';
import Details from '../screens/Details';

const SCREENS = [{ title: 'Details', component: Details }];

const StackNavigator = ({
  title,
  component: InitialComponent,
}: {
  title: string;
  component: ComponentType<any>;
}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerLargeTitleHideShadow: true,
        headerHideShadow: true,
      }}>
      <Stack.Screen name={title} component={InitialComponent} />
      {SCREENS.map((screen) => (
        <Stack.Screen
          name={screen.title}
          key={screen.title}
          component={screen.component}
          options={({ route }) => ({ title: route.name })}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
