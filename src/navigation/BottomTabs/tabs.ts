import { TabOneRoot, TabTwoRoot, TabThreeRoot } from '../../screens';
import type { Feather } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

type FeatherIconName = ComponentProps<typeof Feather>['name'];

export interface Tab {
  title: string;
  icon: {
    name: FeatherIconName;
  };
  component: React.ComponentType<any>;
}

const TABS: Tab[] = [
  {
    title: 'Tab1',
    icon: {
      name: 'home',
    },
    component: TabOneRoot,
  },
  {
    title: 'Tab2',
    icon: {
      name: 'activity',
    },
    component: TabTwoRoot,
  },
  {
    title: 'Tab3',
    icon: {
      name: 'settings',
    },
    component: TabThreeRoot,
  },
];

export default TABS;
