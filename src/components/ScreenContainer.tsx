import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
