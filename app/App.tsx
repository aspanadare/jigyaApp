import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
// import { TabView, SceneMap } from "react-native-tab-view";
// import Feed from "../screens/FeedScreen";
// import SecondTab from "../screens/InterestSelection";
// import ThirdTab from "../screens/SignupSetting";
// import TopBar from "./TopBar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/FeedScreen";
import InterestScreen from "../screens/InterestSelection";
import SignupSetting from "../screens/SignupSetting";
import SearchedResult from "../screens/SearchedResult";
import LoginPage from "../screens/LoginPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InitialSearch from "../screens/InitialSearch";
import JobCardSlider from "../components/JobCardSlider";
import { data2 } from "../screens/carousel/mockData";

import { GestureHandlerRootView } from 'react-native-gesture-handler';

 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");
const BottomTabNavigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar, 
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Interest"
        component={SearchedResult}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "magnify" : "heart-outline"}
              color={"#FFFFFF"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              color={"#FFFFFF"}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="JobCardSlider"
        component={() => <JobCardSlider data={data2} />}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              color={"#FFFFFF"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
    </GestureHandlerRootView>
  );
};
const TabScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(1);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen
            name="BottomTab"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FeedScreen"
            component={FeedScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="JobCardSlider"
            component={() => <JobCardSlider data={data2} />}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
        
          <Stack.Screen
            name="InterestScreen"
            component={InterestScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="InitialSearch"
            component={InitialSearch}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="SearchedResult"
            component={SearchedResult}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignupSetting"
            component={SignupSetting}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default TabScreen;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "black",
    paddingBottom: 0,
    paddingTop: 0,
    height: 46,
    position:'absolute',
    bottom:0,
    left:0,
    zIndex:40,
    right:0,
  },

  container: {
    width: width,
    height: height,
  },
});
