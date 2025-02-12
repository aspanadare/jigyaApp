import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import VerticalList from "../screens/carousel/VerticalList";
import { item,data2 } from "./carousel/mockData";
import SearchedResult from "../screens/SearchedResult";
import SignupSetting from "../screens/SignupSetting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
 


const FeedScreen = () => {
 
  
const Tab = createBottomTabNavigator();

  return (

    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
      
        {/* <CourseSlider/>   */}
        {/* <JobCardSlider data={data2}   />  */}
        <VerticalList data={item}   /> 
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};


export default FeedScreen;
 

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "black",
    height: 46,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 40,
    right: 0,
},

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
