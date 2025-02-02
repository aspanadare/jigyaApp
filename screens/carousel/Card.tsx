import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
  SharedValue, // Import SharedValue
} from 'react-native-reanimated';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';

interface CardProps {
  item: { image: any };
  index: number;
  dataLength: number;
  maxVisibleItems: number; // Add type for maxVisibleItems
  animatedValue: SharedValue<number>; // Use SharedValue type
  currentIndex: SharedValue<number>; // Use SharedValue type
  prevIndex: SharedValue<number>; // Use SharedValue type
}

const Card: React.FC<CardProps> = ({
  maxVisibleItems,
  item,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  prevIndex,
}) => {
    const IMG_WDT = Dimensions.get("window").width; // Or a specific width if needed
    const IMG_HT = Dimensions.get("window").height; // Or a specific height
  

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-30, 1, 30],
    );
    const translateY2 = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-30, 1, 10],
    );
    const scale = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [1, 1, 1],
    );
    const opacity = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [1, 1, 0],
    );
    return {
      transform: [
        {
          translateY: index === prevIndex.value ? translateY2 : translateY,
        },
        { scale },
      ],
      opacity:
        index < currentIndex.value + maxVisibleItems - 1
          ? opacity
          : index === currentIndex.value + maxVisibleItems - 1
          ? withTiming(1)
          : withTiming(0),
    };
  });

  return (
     <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <FlingGestureHandler
      key="up"
      direction={Directions.UP}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (currentIndex.value !== 0) {
            animatedValue.value = withTiming((currentIndex.value -= 1));
            prevIndex.value = currentIndex.value + 1; // Corrected: Should be the *next* index
          }
        }
      }}>
      <FlingGestureHandler
        key="down"
        direction={Directions.DOWN}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (currentIndex.value !== dataLength - 1) {
              animatedValue.value = withTiming((currentIndex.value += 1));
              prevIndex.value = currentIndex.value - 1; // Corrected: Should be the *previous* index
            }
          }
        }}>
        <Animated.Image
          source={item.image}
          style={[
            styles.image,
            {
              zIndex: dataLength - index,
              width: IMG_WDT,
              height: IMG_HT,
            },
            animatedStyle,
          ]}
        />
      </FlingGestureHandler>
    </FlingGestureHandler>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    borderRadius: 10,
  },
});