import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../screens/FeedScreen";
import InterestScreen from "../screens/InterestSelection";
import SignupSetting from "../screens/SignupSetting";
import LoginPage from "../screens/LoginPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");
const BottomTabNavigator = () => {
  return (
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
        component={InterestScreen}
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
        name="SignupSetting"
        component={SignupSetting}
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
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FeedScreen"
            component={FeedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InterestScreen"
            component={InterestScreen}
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
    height: 44,
  },

  container: {
    width: width,
    height: height,
  },
});
