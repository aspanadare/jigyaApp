import { View } from 'react-native';
import { Slot } from 'expo-router';
import './global.css'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}