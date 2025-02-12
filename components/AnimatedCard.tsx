
import React from "react";
import { interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { View, Text, Dimensions, Platform, TouchableOpacity,Image,StyleSheet } from "react-native";
import Animated from "react-native-reanimated"; // Correct import
import { LinearGradient } from "expo-linear-gradient";
// import { TAB_BAR_HEIGHT } from "../app/index";


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




type AnimatedCardProps = {
  item: Item;
  index: number,
  scrollY: SharedValue<number>
}
 




let  { width, height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');




const _spacing = 0;
const _itemHight = height - (TAB_BAR_HEIGHT || 0); 
const _itemWidth = width;








function AnimatedCard({ item, index, scrollY }:AnimatedCardProps) {
    const stylez = useAnimatedStyle(() => {
      return{
        opacity:interpolate(
          scrollY.value,
          [index -1, index, index + 1 ],
          [0.5,1,0.5]
        ),
        // transform:[{
        //   scale:interpolate(
        //     scrollY.value,
        //     [index -1, index, index + 1 ],
        //     [0.95,1,0.95]
        //   )
        // }]
      }
    })
    return <Animated.View  style={[{backgroundColor:'#FFF' , height:_itemHight,width:_itemWidth},stylez]} 
        >
            <TouchableOpacity style={styles.cardContainer}>
                      <View className="profileContainer my-1">
                        <View className="profileImg my-2 flex-row gap-2 items-center">
                          <Image
                            source={{ uri: item.author.avatar }}
                            alt="Profile"
                            className="inline w-[30px] h-[30px] rounded-full"
                          />
                          <Text className="text-md font-semibold leading-4  ">
                            {item.author.name} |{" "}
                            <Text className="source font-normal text-sm ">Source: hbr</Text>
                          </Text>
                        </View>
                      </View>
                      <Image className="rounded-2xl mb-4 block w-[100%] h-[250px] "  source={{ uri: item.image }} />
                      <View className="content flex-auto">
                        <Text className="text-lg mb-2 font-semibold tracking-wide">
                        { item.title}
                        </Text>
                        <Text className="text-base mb-4" numberOfLines={12}>
                         { item.description}
                         { item.description}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gradientCont}>
                      <LinearGradient
                        colors={["#E2234A", "#047481"]}
                        start={{ y: 1, x: 0.1 }}
                        style={styles.gradient}
                      >
                        <Text className="text-md font-semibold block text-white">
                          Budget allocated for the mission is ₹615 crore
                        </Text>
                        <Text className="text-sm font-light text-white">
                          Tap to read more
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
          </Animated.View> 
}


export default AnimatedCard;






const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: "relative",
    justifyContent: "flex-start", // Align content at the top
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topTabsContainer: {
    position: "absolute",
    elevation: 5,
    left: 0,
    right: 0,
    zIndex: 20, // Ensure it appears above other content
    transform: [{ translateY: -60 }], // Initial position off-screen
    opacity: 0, // Start with opacity zero for fade effect
  },
  cardContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  insightPic: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },
  gradient: {
    padding: 16,
  },
  gradientCont: {
    position: "absolute",
    left: 0,
    ...Platform.select({
      ios: {
        bottom: 80,
      },
      android: {
        bottom: 0,
      },
    }), // <-- Comma here
    width: "100%",
  },
});
