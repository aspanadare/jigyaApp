import { View, Text, Dimensions, Platform } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Card from './Card'

type Item = {
  key: string;
  title: string;
  image: string;
  bg: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  liked?: boolean; // Make liked and disliked optional
  disliked?: boolean;
};

type VerticalListProps = {
  data: Item[];
};
type AnimatedCardProps = {
  item: Item;
};

let  { width, height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');
const _spacing = 4;
const _itemSize = height;
const _itemFullSize = _itemSize + _spacing ;

// function Card({ item }: AnimatedCardProps) {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: item.bg,
//         height: _itemSize,
        
//         width: width,
//       }}
//     />
//   );
// }

const CardContainer = ({ data }: VerticalListProps) => {
  return (
    <FlatList 
     data={data}
     contentContainerStyle={{gap:_spacing }}
     snapToInterval={_itemFullSize }
     decelerationRate={"fast"}
     renderItem={({ item }) => <Card item={item} />} 
     />
  );
};

export default CardContainer;
