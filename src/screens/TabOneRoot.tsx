import React from 'react';
import { Button } from 'react-native';

import { Text } from '../components/common';
import ScreenContainer from '../components/ScreenContainer';

const TabOneRoot = ({ navigation }) => (
  <ScreenContainer>
    <Text>Tab One</Text>
    <Button
      title="Details"
      onPress={() => navigation.navigate('Details', { name: 'One Details' })}
    />
  </ScreenContainer>
);

export default TabOneRoot;
