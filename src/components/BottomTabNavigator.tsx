import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-easy-icon';
import { Feather as Icon } from '@expo/vector-icons';
import { find } from 'lodash';
import type { Tab } from '../navigation/BottomTabs/tabs';

import StackNavigator from './StackNavigator';

const BottomTabs = createBottomTabNavigator();
const { Navigator, Screen } = BottomTabs;

const BottomTabNavigator = ({ tabs }: { tabs: Tab[] }) => (
  <Navigator
    screenOptions={({ route }) => {
      const tab = find(tabs, { title: route.name });
      console.log('tab', tab);

      return {
        tabBarIcon: ({ color, size }) => (
          <Icon name={tab?.icon?.name} color={color} size={size} />
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
