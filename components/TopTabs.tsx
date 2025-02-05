import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TopTabs = () => {
    const [selectedTab, setSelectedTab] = useState("Feed"); // Default selected tab

     return (
        <SafeAreaView style={styles.safeArea}>
            <View className="flex-row  justify-around w-full z-30  transition-all" >
                {["Feed", "Jobs", "Courses", "Insights"].map((tab) => (
                    <Pressable key={tab} onPress={() => setSelectedTab(tab)}>
                        <View
                            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    selectedTab === tab && styles.activeTabText,
                                ]}
                            >
                                {tab}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default TopTabs;

const styles = StyleSheet.create({
    safeArea: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        padding:2,
        paddingTop:20,
        backgroundColor: "white", // Optional: Add padding or margin if needed
        zIndex:9,
        elevation:3,
        height:55,
        borderRadius:16,
       
    },
    topTabs: {
        marginTop:0,
        backgroundColor: "white",
        height: 52,
        paddingLeft: 32,
        paddingRight: 32,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity:  0.16,
        shadowRadius: 1.51,
        elevation: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        zIndex: 10,
    },
   
    tabButton: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 20,
    },
    tabText: {
        fontSize: 16,
        color: "#222", // Default text color for inactive tabs
    },
    activeTabText: {
        color: "#FFFFFF", // Text color for active tab
        fontWeight: "bold",
    },
    activeTab: {
        backgroundColor: "#379AF7", // Change color for active tab
        color: "#FFFFFF",
    },
});
