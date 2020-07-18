import React from 'react';
import {
  NavigationContainer,
  LinkingOptions,
  PathConfig,
  NavigationState,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { ScreenStackProps } from 'react-native-screens';

// From react-navigation
// TODO: delete
type MyPathConfig = {
  [routeName: string]:
    | string
    | {
        path?: string | undefined;
        exact?: boolean | undefined;
        parse?: Record<string, (value: string) => any> | undefined;
        stringify?: Record<string, (value: any) => string> | undefined;
        screens?: PathConfig | undefined;
        initialRouteName?: string | undefined;
      };
};

const ScreenOne = () => <View />;
const ScreenTwo = () => <View />;
const ScreenThree = () => <View />;
const ScreenFour = () => <View />;

const inputScreens = [
  { component: ScreenOne },
  { component: ScreenTwo },
  { component: ScreenThree },
  { component: ScreenFour },
];

const screens = inputScreens.map((screenConfig) => ({
  screen: screenConfig.component,
}));

console.log(screens);

const config: PathConfig = {
  // d
  test: 'hi',
};

console.log('config', config);
