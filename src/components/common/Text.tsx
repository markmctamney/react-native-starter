import React from 'react';
import { Text as RNText } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Text = (props) => {
  const { colors } = useTheme();

  return (
    <RNText style={[{ color: colors.text }, { ...props?.style }]} {...props}>
      {props?.children}
    </RNText>
  );
};

export default Text;
