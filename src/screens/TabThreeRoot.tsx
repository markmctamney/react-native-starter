import React from 'react';
import { Button } from 'react-native';

import { Text } from '../components/common';
import ScreenContainer from '../components/ScreenContainer';

const TabThreeRoot = ({ navigation }) => (
  <ScreenContainer>
    <Text>Tab Three</Text>
    <Button
      title="Details"
      onPress={() => navigation.navigate('Details', { name: 'Three Details' })}
    />
  </ScreenContainer>
);

export default TabThreeRoot;
