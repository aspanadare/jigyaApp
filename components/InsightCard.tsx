import 'react-native-gesture-handler';
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";
import TopTabs from "../components/TopTabs";

const profPic = require("../assets/profile.png");
const insightPic = require("../assets/insight.jpg");

const InsightCard = () => {
  const top = useSharedValue(-60); // Initial position for TopTabs
  const [tabVisible, setTabVisibility] = useState(false);

  // Define tap gesture
  const tap = Gesture.Tap()
    .onBegin(() => {
      // Toggle tab visibility
      setTabVisibility(prev => !prev);
      // Animate TopTabs position
      top.value = withTiming(tabVisible ? -60 : 0, { duration: 300 });
    });

  // Animated styles for the TopTabs
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: top.value }],
    opacity: withTiming(tabVisible ? 1 : 0, { duration: 300 }), // Fade in/out effect
  }));

  return (
    <SafeAreaView style={styles.safeArea}>
      
        {/* Animated TopTabs */}
        <Animated.View style={[styles.topTabsContainer, animatedStyles]}>
          {tabVisible && <TopTabs />}
        </Animated.View>

        {/* Gesture Detector for toggling tabs */}
        <GestureDetector gesture={tap}>
          <TouchableOpacity style={styles.cardContainer}>
            <View className="profileContainer my-1">
              <View className="profileImg my-2 flex-row gap-2 items-center">
                <Image
                  source={profPic}
                  alt="Profile"
                  className="inline w-[30px] h-[30px] rounded-full"
                />
                <Text className="text-md font-semibold leading-4">
                  Vaibhavi Pal |{" "}
                  <Text className="source font-normal text-sm">Source: hbr</Text>
                </Text>
              </View>
            </View>
            <View>
              <Image
                className="rounded-2xl mb-4 block w-full"
                source={insightPic}
                style={styles.insightPic}
              />
            </View>
            <View className="content">
              <Text className="text-lg mb-4 font-semibold tracking-wide">
                India’s 3rd Moon mission Chandrayaan-3 successfully launched
              </Text>
              <Text className="text-base mb-4">
                The Indian Space Research Organisation (ISRO) on Friday successfully
                launched Chandrayaan-3, India’s third Moon mission. It was launched
                by LVM3 from the Satish Dhawan Space Centre in Shriharikota. The
                mission objectives of Chandrayaan-3 are to demonstrate safe and soft
                landing on lunar surface, to demonstrate rover roving on the moon
                and to conduct in-situ scientific experiments.
              </Text>
            </View>
          </TouchableOpacity>
        </GestureDetector>

        {/* LinearGradient button for additional action */}
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
     
    </SafeAreaView>
  );
};

export default InsightCard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
    justifyContent: "flex-start", // Align content at the top
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTabsContainer: {
    position: 'absolute',
    elevation:5,
    left: 0,
    right: 0,
    zIndex: 20, // Ensure it appears above other content
    transform: [{ translateY: -60 }], // Initial position off-screen
    opacity: 0, // Start with opacity zero for fade effect
  },
  cardContainer: {
    paddingHorizontal: 16,
    marginBottom: 10, // Add some margin below the card for spacing
    zIndex: 10, // Lower z-index than TopTabs
    width: '100%', // Ensure it takes full width for better touch area
  },
  insightPic: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },
  gradientCont: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  gradient: {
    padding: 16,
  },
});
