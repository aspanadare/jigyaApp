import { View, Text, Dimensions, Platform, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import AnimatedCard from './AnimatedCard'
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Animated from "react-native-reanimated"; // Correct import

import { TAB_BAR_HEIGHT } from "../../app/index";
 

interface Item {
  key: string;
  title: string;
  image: string;
  index: number;
  bg: string,
  description: string;
  author: {
    name: string;
    avatar: string;
  };
}

// Define the props for the VerticalList component
interface VerticalListProps {
  data: Item[];
}

let { width, height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');

const _spacing = 0;
const _itemHight = height - TAB_BAR_HEIGHT;
const _itemWidth = width;

const VerticalList: React.FC<VerticalListProps> = ({ data }) => {
  const scrollY = useSharedValue(0);
  const onScrollY = useAnimatedScrollHandler(
    (e) => {
      scrollY.value = e.contentOffset.y / _itemHight;
    }
  )


  return (

    <Animated.FlatList
      data={data}

      contentContainerStyle={{
        paddingHorizontal: _spacing, gap: _spacing,
        // paddingVertical: (height - _itemHight) ,
      }}
      renderItem={({ item, index }) => <AnimatedCard item={item} index={index} scrollY={scrollY} />}
      snapToInterval={_itemHight + _spacing}
      decelerationRate={'fast'}
      onScroll={onScrollY}
      scrollEventThrottle={16}

      snapToAlignment="start"
    />

  );
};


export default VerticalList;
