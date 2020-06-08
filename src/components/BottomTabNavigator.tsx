import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-easy-icon';
import { find } from 'lodash';

import StackNavigator from './StackNavigator';

const BottomTabs = createBottomTabNavigator();
const { Navigator, Screen } = BottomTabs;

const BottomTabNavigator = ({ tabs }) => (
  <Navigator
    screenOptions={({ route }) => {
      const tab = find(tabs, { title: route.name });
      console.log('tab', tab);

      return {
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            type={tab.icon?.type}
            name={tab.icon?.name}
            color={color}
            size={size}
          />
        ),
      };
    }}>
    {tabs.map((tab) => {
      console.log('tab', tab);
      console.log('tab.component', tab.component);
      const NavigatorComponent = () =>
        StackNavigator({ title: tab.title, component: tab.component });

      return (
        <Screen
          name={tab.title}
          key={tab.title}
          component={NavigatorComponent}
        />
      );
    })}
  </Navigator>
);

export default BottomTabNavigator;
