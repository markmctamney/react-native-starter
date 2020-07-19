import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, ViewProps, ViewPropTypes } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationType, useNavigation } from '@react-navigation/native';

interface ScreenContainerProps extends PropsWithChildren<ViewProps> {
  navigation?: NavigationType;
}

const ScreenContainer = ({
  style: viewStyle,
  ...props
}: ScreenContainerProps) => (
  <View style={[styles.container, viewStyle]} {...props}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {props?.children}
    </ScrollView>
  </View>
);
export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
