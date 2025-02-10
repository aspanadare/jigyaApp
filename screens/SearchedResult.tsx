// import { View, Text, StyleSheet } from "react-native";
// import React, { useState } from "react";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { SafeAreaView } from "react-native-safe-area-context";

// const SearchedResult = () => {
//   const insightPic = require("../assets/insight.jpg");

//   return (
//     <SafeAreaView className="bg-white ">
//       <View className="w-full bg-[#EEEBEB] p-4 flex flex-row gap-4">
//         <AntDesign name="arrowleft" size={24} color="#5B5B5B" />
//         <Text className="text-base font-light text-[#757575]"> Leadership</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SearchedResult;

// const styles = StyleSheet.create({});
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchedResult = () => {
  const [activeTab, setActiveTab] = useState("insights");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };
  const insightPic = require("../assets/insight.jpg");

  return (
    <SafeAreaView className="bg-white">
      <View className="w-full bg-[#EEEBEB] p-4 flex flex-row gap-4 items-center">
        <TouchableOpacity onPress={() => console.log("Go Back")}>
          <AntDesign name="arrowleft" size={24} color="#5B5B5B" />
        </TouchableOpacity>
        <Text className="text-base font-light text-[#757575]"> Leadership</Text>
      </View>

    
      <View
        // horizontal
        // showsHorizontalScrollIndicator={false}
        className="bg-white px-6 shadow-md shadow-black py-3"
      >
        <View className="w-full bg-white flex flex-row justify-between">
          <TouchableOpacity
            className={`px-4 py-2 border-b-2 border-transparent whitespace-nowrap ${
              activeTab === "insights" ? "border-[#2DA5CB]" : ""
            }`}
            onPress={() => handleTabPress("insights")}
          >
            <Text
              className={`text-base font-normal  ${
                activeTab === "insights" ? "text-[#2DA5CB]" : "text-[#757575]"
              }`}
            >
              Insights
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`px-4 py-2 border-b-2 border-transparent whitespace-nowrap ${
              activeTab === "jobs" ? "border-[#2DA5CB]" : ""
            }`}
            onPress={() => handleTabPress("jobs")}
          >
            <Text
              className={`text-base font-normal ${
                activeTab === "jobs" ? "text-[#2DA5CB]" : "text-[#757575]"
              }`}
            >
              Jobs
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`px-4 py-2 border-b-2 border-transparent whitespace-nowrap ${
              activeTab === "programmes" ? "border-[#2DA5CB]" : ""
            }`}
            onPress={() => handleTabPress("programmes")}
          >
            <Text
              className={`text-base font-normal  ${
                activeTab === "programmes" ? "text-[#2DA5CB]" : "text-[#757575]"
              }`}
            >
              Courses
            </Text>
          </TouchableOpacity>
        </View>
      </View>

     
      <View className="px-4 py-5">
        {activeTab === "insights" && (
          <View className="flex flex-col gap-4">
            <View className="w-full h-[54px] flex flex-row gap-4 items-center">
              <View className="flex">
                <Image
                  source={insightPic}
                  alt="Profile"
                  className="w-[54px] h-[54px] rounded-lg flex"
                />
              </View>
              <View className="flex flex-1">
                <Text className="text-[14px] font-normal">
                  what makes an effective leader? important leadership
                  Competencies
                </Text>
              </View>
            </View>
            <View className="w-full h-[54px] flex flex-row gap-4 items-center">
              <View className="flex">
                <Image
                  source={insightPic}
                  alt="Profile"
                  className="w-[54px] h-[54px] rounded-lg flex"
                />
              </View>
              <View className="flex flex-1">
                <Text className="text-[14px] font-normal">
                  what makes an effective leader? important leadership
                  Competencies
                </Text>
              </View>
            </View>
          </View>
        )}
        {activeTab === "jobs" && (
          <View className="flex flex-col gap-4">
            <View className="w-full h-[54px] flex flex-row gap-4 items-center">
              <View className="flex">
                <Image
                  source={insightPic}
                  alt="Profile"
                  className="w-[103px] h-[54px] rounded-lg flex"
                />
              </View>
              <View className="flex flex-1">
                <Text className="text-[14px] font-normal">
                  Lead Salesforce developer
                </Text>
                <Text className="text-[12px] font-light italic">
                  Induslnd Bank
                </Text>
              </View>
            </View>
            <View className="w-full h-[54px] flex flex-row gap-4 items-center">
              <View className="flex">
                <Image
                  source={insightPic}
                  alt="Profile"
                  className="w-[103px] h-[54px] rounded-lg flex"
                />
              </View>
              <View className="flex flex-1">
                <Text className="text-[14px] font-normal">
                  Lead Salesforce developer
                </Text>
                <Text className="text-[12px] font-light italic">
                  Induslnd Bank
                </Text>
              </View>
            </View>
          </View>
        )}
        {activeTab === "programmes" && (
          <View className="flex flex-col gap-4">
            <View className="w-full h-[54px] flex flex-row gap-4 items-center">
              <View className="flex">
                <Image
                  source={insightPic}
                  alt="Profile"
                  className="w-[103px] h-[54px] rounded-lg flex"
                />
              </View>
              <View className="flex flex-1">
                <Text className="text-[14px] font-normal">
                  Women Leadership Programme
                </Text>
                <Text className="text-[12px] font-light italic">
                  https://exced.isb.edu/
                </Text>
              </View>
            </View>
            <View className="w-full h-[54px] flex flex-row gap-4 items-center">
              <View className="flex">
                <Image
                  source={insightPic}
                  alt="Profile"
                  className="w-[103px] h-[54px] rounded-lg flex"
                />
              </View>
              <View className="flex flex-1">
                <Text className="text-[14px] font-normal">
                  Women Leadership Programme
                </Text>
                <Text className="text-[12px] font-light italic">
                  https://exced.isb.edu/
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchedResult;

const styles = StyleSheet.create({
  tabItem: {
    // flex: 1, //Remove flex, causes issues with scrolling
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16, // Add horizontal padding for better spacing
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    whiteSpace: "nowrap", // Prevent text from wrapping
  },
  activeTabItem: {
    borderBottomColor: "#2DA5CB",
  },
  tabText: {
    fontSize: 16,
    color: "#757575",
  },
  activeTabText: {
    color: "#2DA5CB",
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
});
