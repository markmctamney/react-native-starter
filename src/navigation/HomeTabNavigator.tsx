import React from 'react';
import { TabOneRoot, TabTwoRoot, TabThreeRoot } from '../screens';
import NestedStackTabNavigator from '../components/NestedStackTabNavigator';

const TABS = [
  {
    title: 'Tab1',
    icon: {
      name: 'home',
      type: 'feather',
    },
    component: TabOneRoot,
  },
  {
    title: 'Tab2',
    icon: {
      name: 'activity',
      type: 'feather',
    },
    component: TabTwoRoot,
  },
  {
    title: 'Tab3',
    icon: {
      name: 'settings',
      type: 'feather',
    },
    component: TabThreeRoot,
  },
];

const HomeTabNavigator = () => <NestedStackTabNavigator tabs={TABS} />;

export default HomeTabNavigator;
