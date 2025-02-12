// app/(tabs)/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeableScreen from '../ScreenWithSwipe';

function HomeScreen() {
  return (
    <SwipeableScreen leftScreen="profile" rightScreen="Search">
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </SwipeableScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
