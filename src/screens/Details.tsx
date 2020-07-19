import React from 'react';
import { Text } from '../components/common';
import ScreenContainer from '../components/ScreenContainer';
import { NavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript';
import { ScreenProps } from 'react-native-screens';
import { Route } from 'react-native';

const Details = ({ route }: { route: Route }) => {
  const params = route?.params;

  return (
    <ScreenContainer>
      <Text>Details Screen</Text>
      {params && <Text>[Params: {JSON.stringify(params)}]</Text>}
    </ScreenContainer>
  );
};
export default Details;
