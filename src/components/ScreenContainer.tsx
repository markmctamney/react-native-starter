import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const ScreenContainer = (props) => (
  <View style={[styles.container, { ...props?.style }]} {...props}>
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
