// app/(tabs)/profile.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeableScreen from '../ScreenWithSwipe';

function ProfileScreen() {
  return (
    <SwipeableScreen rightScreen="index">
      <View style={styles.container}>
        <Text>Profile Screen</Text>
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

export default ProfileScreen;
