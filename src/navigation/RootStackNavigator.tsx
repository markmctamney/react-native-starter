import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import HomeTabNavigator from './HomeTabNavigator';

const Root = createStackNavigator();
const { Navigator, Screen } = Root;

const RootStack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <HomeTabNavigator />
  ) : (
    <Root.Navigator>
      <Root.Screen />
    </Root.Navigator>
  );
};

export default RootStack;
