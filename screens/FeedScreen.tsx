import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import VerticalList from "./carousel/VerticalList";
import { item } from "./carousel/mockData";
import JobCardSlider from "../components/JobCardSlider";  


const FeedScreen = () => {
 


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* <JobCardSlider data={data2}   /> */}
        <VerticalList data={item}   />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};


export default FeedScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
