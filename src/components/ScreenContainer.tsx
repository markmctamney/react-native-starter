import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ScreenContainer = ({
  style: viewStyle,
  ...props
}: PropsWithChildren<ViewProps>) => (
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
