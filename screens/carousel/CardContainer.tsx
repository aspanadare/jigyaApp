import { View, Text, Dimensions, Platform, Animated } from "react-native";
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
 

let  { width, height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');
const _spacing = 14;
const _itemSize = width;
const _itemWidth = width;
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
     <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <FlatList 
          contentContainerStyle={{gap:_spacing,
            paddingHorizontal :(width - _itemFullSize /2)
          }}
          snapToInterval={_itemWidth - _spacing}
          data={data}
          keyExtractor={item => String(item.key)}
          renderItem={({ item,index }) => <Card item={item}   />} 
        />
        </View>
        
  );
};

export default CardContainer;
