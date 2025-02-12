// components/SwipeableScreen.tsx
import React from 'react';
import { View, StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent, PanGestureHandlerStateChangeEvent, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'; // Correct import!
import { StackNavigationProp } from '@react-navigation/stack'; // Correct import!

const { width } = Dimensions.get('window');
const SWIPE_THRESHOLD = width / 4;

// Define your route params - MATCH THE TAB NAMES!
type RootTabParamList = {
  Search: undefined;
  index: undefined;
  profile: undefined;
};

// Define the navigation prop type
type SwipeableScreenNavigationProp<T extends keyof RootTabParamList> = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, T>,
  StackNavigationProp<RootTabParamList>
>;

interface SwipeableScreenProps {
  children: React.ReactNode;
  leftScreen?: keyof RootTabParamList;
  rightScreen?: keyof RootTabParamList;
  style?: StyleProp<ViewStyle>;
}

const SwipeableScreen: React.FC<SwipeableScreenProps> = ({ children, leftScreen, rightScreen, style }) => {
  const navigation = useNavigation<SwipeableScreenNavigationProp<keyof RootTabParamList>>();

  const onSwipeEvent = (event: PanGestureHandlerGestureEvent) => {
    // You can add visual feedback during the swipe here
  };

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX > SWIPE_THRESHOLD && rightScreen) {
        navigation.navigate(rightScreen);
      } else if (event.nativeEvent.translationX < -SWIPE_THRESHOLD && leftScreen) {
        navigation.navigate(leftScreen);
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onSwipeEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <View style={[styles.container, style]}>
        {children}
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SwipeableScreen;
