import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;

const CourseCard = () => {
  return (
    
     <View style={styles.Item}>
      <ImageBackground
        source={require("../assets/courseImg.jpg")} // Path to your image
        style={styles.backgroundImage}
        resizeMode="cover" // or "contain", depending on your needs
      >
        <Image
          className="stamp absolute z-10 top-4 right-4"
          source={require("../assets/Stamp.svg")}
        />

        <View
          className="absolute p-4 bottom-0 w-full z-10 "
          style={styles.courseContainer}
        >
          <View className="universityInfo mb-3 flex-row gap-4 ">
                <Image
                source={require("../assets/universityLogo.png")}
                resizeMode="cover"
                style={styles.universityLogo}
                />
                <Text
                style={styles.universityName}
                className="universityName font-semibold text-[16px] text-white flex items-center  "
                >
                SDA Bocconi
                </Text>
          </View>

                <Text style={styles.courseName} className="text-white font-medium text-[16px] mb-3 line-clamp-2 max-w-[160ch] overflow-ellipsis">
                    Risk Management for Banks and Financial Institutions{" "}
                </Text>
                <Text className="courseType bg-[#E7165D] w-[75px] px-2 py-1 text-xs text-white rounded-md">
                    Live Online
                </Text>

                 <Pressable className="text-white flex-row justify-evenly mt-3 ">
                    <View className="applybyDate py-2 ">
                        <Text style={styles.courseIT}>
                            Apply by
                        </Text> 
                        <Text style={{...styles.courseIT,fontWeight:'bold' }}>
                                21, Feb 2025 
                            </Text>
                    </View>
                    <View className="bg-white opacity-50 w-[1px] h-11  my-2 " ></View>
                    <View className="startDate py-2">
                        <Text style={styles.courseIT}>
                            Starts on
                        </Text>
                        <Text style={{...styles.courseIT,fontWeight:'bold' }}>
                        31, Mar 2025 
                        </Text>
                    </View>
                    <View className="bg-white opacity-50 w-[1px] h-11  my-2 " ></View>
                    <View className="fees py-2  ">
                        <Text style={styles.courseIT}>
                             Fees
                        </Text>
                        <Text style={{...styles.courseIT,fontWeight:'bold' }}>
                        € 18.000 / year
                        </Text>
                    </View>
                </Pressable>

                <Pressable style={styles.courseLink}>
                    <Text style={styles.ctaText}> Know More</Text>
                </Pressable>
        </View>

        <LinearGradient
          colors={["#000000", "#ffffff10"]}
          start={{ y: 1, x: 0 }}
          end={{ y: 0, x: 0 }}
          style={styles.linGradiant}
        ></LinearGradient>
      </ImageBackground>
     </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
   courseContainer: {
    zIndex: 10,
  },
  Item: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    position: "relative",
    backgroundColor:'#FFF',
    alignSelf:'center'
  },
  backgroundImage: {
    borderRadius: 20, // Apply border radius here for the container
    overflow: "hidden", // Ensure children respect the border radius
    width: windowWidth - 80,
    height: 530,

    justifyContent: "center",
    alignItems: "center",
  },
  universityLogo: {
    width: 50,
    height: 50,
    verticalAlign: "middle",
  },
  universityName: {
    verticalAlign: "middle",
    alignItems: "center",
  },
  courseName: {
    lineHeight: 22,
  },
  courseLink: {
    backgroundColor: "white",
    borderRadius: 8,

    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 45,
    marginTop: 12,
  },
  ctaText: {
    color: "#212121",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,
    textTransform: "uppercase",
    fontSize: 18,
  },
  courseIT:{
    color:'#FFF',
    fontSize:10
  },

  linGradiant: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
