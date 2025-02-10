import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const InitialSearch = () => {
  const insightPic = require("../assets/insight.jpg");
  const [searchText, setSearchText] = useState("");
  const categories = [
    "Technology",
    "Business",
    "Health",
    "Science",
    "Education",
    "Sports",
  ];
  const [selected, setSelected] = useState("Technology");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const handleBlur = () => {
    setIsSearchFocused(false);
  };
  const handleFocus = () => {
    setIsSearchFocused(true);
  };
  const handleSearch = () => {
    if (searchText.trim() !== "") {
      setIsSearchPerformed(true);
      Keyboard.dismiss(); // Dismiss the keyboard
    }
  };
  const shouldShowContent =
    !isSearchFocused && searchText === "" && !isSearchPerformed;

  return (
    <SafeAreaView className="bg-white">
      <View style={styles.container}>
        <MaterialIcons
          name="search"
          size={30}
          color="#2DA5CB"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder={"Search Insight/Jobs/Courses"}
          value={searchText}
          onChangeText={setSearchText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor="#CFCFCF"
          onSubmitEditing={handleSearch}
        />
      </View>
      {shouldShowContent && (
        <ScrollView contentContainerStyle={{ flexGrow: 1, minHeight: 750 }}>
          <View className="flex flex-col pl-3 pr-4">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row"
            >
              {categories.map((category, index) => (
                <Pressable
                  key={index}
                  onPress={() => setSelected(category)}
                  className={`px-4 py-2 mr-4 rounded-md border ${
                    selected === category
                      ? "bg-[#2DA5CB] border-0"
                      : "bg-white border-[#707070]"
                  }`}
                >
                  <Text
                    className={`text-[14px] font-normal ${
                      selected === category ? "text-white" : "text-[#707070]"
                    }`}
                  >
                    {category}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            <View className="flex flex-col gap-4">
              <View>
                <Text className="text-[16px] font-normal">Insights</Text>{" "}
                <View className="w-[70px] h-1 bg-[#2DA5CB] mt-[10px] rounded-sm"></View>
              </View>

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
              <TouchableOpacity className="w-full items-center">
                {" "}
                <Text className="text-[#2DA5CB] font-[14px]"> VIEW MORE</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-col gap-4">
              <View>
                <Text className="text-[16px] font-normal">Jobs</Text>{" "}
                <View className="w-[40px] h-1 bg-[#2DA5CB] mt-[10px] rounded-sm"></View>
              </View>

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
              <TouchableOpacity className="w-full items-center">
                {" "}
                <Text className="text-[#2DA5CB] font-[14px]"> VIEW MORE</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-col gap-4">
              <View>
                <Text className="text-[16px] font-normal">Jobs</Text>{" "}
                <View className="w-[64px] h-1 bg-[#2DA5CB] mt-[10px] rounded-sm"></View>
              </View>

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
              <TouchableOpacity className="w-full items-center">
                {" "}
                <Text className="text-[#2DA5CB] font-[14px]"> VIEW MORE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
      {isSearchPerformed && (
        <View style={{ padding: 20 }}>
          <Text>Search results for: {searchText}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default InitialSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 16,
    height: 43,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#2DA5CB",
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "light",
    color: "#CFCFCF",
  },
});
