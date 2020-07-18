import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-easy-icon';
import { find } from 'lodash';

import StackNavigator from './StackNavigator';
import { IconType } from 'react-native-easy-icon/src/Icon';

type Tab = {
  title: string;
  icon: {
    name: string;
    type: IconType;
  };
  component: JSX.Element;
};

const BottomTabs = createBottomTabNavigator();
const { Navigator, Screen } = BottomTabs;

const NestedStackTabNavigator = ({ tabs }: { tabs: Tab[] }) => (
  <Navigator
    screenOptions={({ route }) => {
      // TODO: workaround without Lodash to get rid of TS thinking this could be undefined
      const tab = find(tabs, { title: route.name });

      console.log('tab', tab);

      return {
        tabBarIcon: ({ color, size }) => (
          <Icon
            type={tab.icon.type}
            name={tab.icon.name}
            color={color}
            size={size}
          />
        ),
      };
    }}>
    {tabs.map((tab) => {
      // Per warning message, this function can't be created inline in Screen.component prop
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

export default NestedStackTabNavigator;
