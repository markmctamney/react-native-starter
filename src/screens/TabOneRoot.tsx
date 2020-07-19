import React from 'react';
import { Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRouting } from 'expo-next-react-navigation';

import { Text } from '../components/common';
import ScreenContainer from '../components/ScreenContainer';

const TabOneRoot = () => {
  //   const { navigate } = navigation;
  console.log('useNavigation()', useNavigation()); // defined
  console.log('useRoute()', useRoute()); // defined
  const { navigate } = useRouting();

  console.log('useRouting()', useRouting()); // undefined due to issue w/ expo-navigation-core

  return (
    <ScreenContainer>
      <Text>Tab One</Text>
      <Button
        title="Details"
        onPress={() =>
          navigate({
            routeName: 'Details',
            params: { name: 'One Details' },
            web: { as: 'page-one/details' },
          })
        }
      />
    </ScreenContainer>
  );
};

export default TabOneRoot;
