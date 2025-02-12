import { Stack } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import '../global.css';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
   
    <SafeAreaView style={styles.safeArea}>
       <GestureHandlerRootView style={{ flex: 1 }}>
       <StatusBar backgroundColor="#f0f0f0" barStyle="default" />
      <Stack
        screenOptions={{ headerShown: false  }}  >
         <Stack.Screen name="(tabs)" /> 
      </Stack>
      </GestureHandlerRootView> 
    </SafeAreaView>
 
  ) 
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Essential
  },
});
