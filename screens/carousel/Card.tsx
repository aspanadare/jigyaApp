import "react-native-gesture-handler";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
 
 
 

//const [tabVisible, setTabVisibility] = useState(false);

// Define tap gesture
//  const tap = Gesture.Tap()
//    .onBegin(() => {
//      // Toggle tab visibility
//      setTabVisibility(prev => !prev);
//      // Animate TopTabs position
//      top.value = withTiming(tabVisible ? -60 : 0, { duration: 300 });
//    });

//  // Animated styles for the TopTabs
//  const animatedStyles = useAnimatedStyle(() => ({
//    transform: [{ translateY: top.value }],
//    opacity: withTiming(tabVisible ? 1 : 0, { duration: 300 }), // Fade in/out effect
//  }));

function Card({ item }: AnimatedCardProps) {
  // Define tap gesture

  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* ONLY ONE SafeAreaView */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          height: height,
          width: width,
        }}
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
          <Image
            className="rounded-2xl mb-4 block w-[100%] h-[250px] "
            source={{ uri: item.image }}
          />
          <View className="content flex-auto">
            <Text className="text-lg mb-4 font-semibold tracking-wide">
            { item.title}
            </Text>
            <Text className="text-base mb-4">
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
      </View>
    </SafeAreaView>
  );
}

export default Card;

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
