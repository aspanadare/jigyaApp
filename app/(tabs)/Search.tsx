// app/(tabs)/Search.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeableScreen from '../ScreenWithSwipe';

function SearchScreen() {
  return (
    <SwipeableScreen leftScreen="index">
      <View style={styles.container}>
        <Text>Search Screen</Text>
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

export default SearchScreen;
