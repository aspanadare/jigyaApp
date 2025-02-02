import React  from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import InsightCard from '../components/InsightCard';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
 

const FeedScreen = () => {
  const width = useSharedValue(100);
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    
    <SafeAreaProvider>
      <View style={styles.container}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />  
 <Button onPress={handlePress} title="Click me" />
      </View>
     
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}

export default FeedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});