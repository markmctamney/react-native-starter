import React from 'react';
import { Button } from 'react-native';
import { useRouting } from 'expo-next-react-navigation';

import { Text } from '../components/common';
import ScreenContainer from '../components/ScreenContainer';

const TabOneRoot = ({ navigation }: { navigation: any }) => {
  const { navigate } = useRouting() ?? navigation;

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
