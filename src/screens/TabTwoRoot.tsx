import React from 'react';
import { Button } from 'react-native';

import { Text } from '../components/common';
import ScreenContainer from '../components/ScreenContainer';
const TabTwoRoot = ({ navigation }) => (
  <ScreenContainer>
    <Text>Tab Two</Text>
    <Button
      title="Details"
      onPress={() => navigation.navigate('Details', { name: 'Two Details' })}
    />
  </ScreenContainer>
);

export default TabTwoRoot;
