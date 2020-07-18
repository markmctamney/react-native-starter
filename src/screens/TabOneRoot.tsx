import React from 'react';
import { Button } from 'react-native';
import { useRouting } from 'expo-next-react-navigation';

import { Text } from '../components/common';
import ScreenContainer from '../components/ScreenContainer';

const TabOneRoot = ({ navigation }) => {
  const { navigate } = navigation ?? useRouting();

  return (
    <ScreenContainer>
      <Text>Tab One</Text>
      <Button
        title="Details"
        onPress={() =>
          navigate({
            name: 'Details',
            params: { name: 'One Details' },
            web: { as: 'page-one/details' },
          })
        }
      />
    </ScreenContainer>
  );
};

export default TabOneRoot;
