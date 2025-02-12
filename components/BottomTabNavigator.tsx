import { MaterialCommunityIcons } from "@expo/vector-icons";
import {  StyleSheet, Dimensions} from "react-native";
import FeedScreen from "../screens/FeedScreen";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


 
import SignupSetting from "../screens/SignupSetting";
import SearchedResult from "../screens/InitialSearch";
 

 


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                headerShown: false, // Hide headers in tabs
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "gray",
            }}
        >
            <Tab.Screen
                name="Search"
                component={SearchedResult}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (

                     

                        <MaterialCommunityIcons
                            name="magnify"
                             color={focused ? "#2DA5CB" : "#FFF"}
                             size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons
                            name= "home"                           
                            color={focused ? "#2DA5CB" : "#FFF"}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SignupSetting}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons
                            name=  "account" 
                            color={focused ? "#2DA5CB" : "#FFF"}
                            size={size}
                        />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Profile"
                component={() => <JobCardSlider data={data2} />}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons
                            name={focused ? "account" : "account-outline"}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

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
   
});
