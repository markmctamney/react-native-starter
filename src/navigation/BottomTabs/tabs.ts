import { TabOneRoot, TabTwoRoot, TabThreeRoot } from '../../screens';

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

export default TABS;
