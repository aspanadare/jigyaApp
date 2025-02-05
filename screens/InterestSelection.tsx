import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

const interests = [
  

{ id:"1", name: "Digital Transformation"},
{ id:"2", name: "Product Design"},
{ id:"3", name: "Product Management"},
{ id:"4", name: "Marketing"},
{ id:"5", name: 'AI and ML'},
{ id:"6", name: "Sports Management"},
{ id:"7", name: "HR Management"},
{ id:"8", name: "Personal Development"},
{ id:"9", name: "Project Management"},
{ id:"10", name: "Communication and Soft Skills"},
{ id:"11", name: "Operations and Supply Chain"},
{ id:"12", name: "General Management"},
{ id:"13", name: "Finance and Accounting"},
{ id:"14", name: "Digital Marketing"},
{ id:"15", name: "Design Thinking and Innovation"},
{ id:"16", name: "DS and BA"},
{ id:"17", name: "FinTech"},
{ id:"18", name: "Cybersecurity and Digital Privacy"},
{ id:"19", name: "Economics and Economy"},
 
{ id:"20", name: "Entrepreneurship"},
{ id:"21", name: "Technology"},
{ id:"22", name: "Web 3.0 and Blockchain."},
{ id:"23", name: "Leadership"},
{ id:"24", name: "Sustainability and CSR"},
{ id:"25", name: "Strategy"},
{ id:"26", name: "Others"},
  
];

const InterestScreen = () => {
  
const thumbsUp =<MaterialCommunityIcons  name= "thumb-up" size={24} color= "#2DCB42" /> ;
const thumsDown = <MaterialCommunityIcons name= "thumb-down" size={24} color="#FF5733" />
 

const [interestsState, setInterestsState] = useState(
  interests.map((interest) => ({
    ...interest,
    liked: false,
    disliked: false,
  }))
);


const toggleInterest = (id: string, type: string) => {
  setInterestsState((prevState) =>
    prevState.map((item) => {
      if (item.id === id) {
        if (type === "like") {
          return {
            ...item,
            liked: !item.liked,
            disliked: false, // Reset disliked state
          };
        } else if (type === "dislike") {
          return {
            ...item,
            disliked: !item.disliked,
            liked: false, // Reset liked state
          };
        }
      }
      return item;
    })
  );
};

  const renderItem = ({
    item,
  }: {
    item: { id: string; name: string; liked: boolean; disliked: boolean };
  }) => (

    <View style={styles.itemContainer} className="w-full ">
      <View  className="mr-auto text-left"> 
        <Text style={styles.itemText}>{item.name}</Text></View>
      <View style={styles.iconsContainer} className="ml-auto gap-1">
        <TouchableOpacity onPress={() => toggleInterest(item.id, "like")}>
          <View
            style={
              item.liked
                ? styles.likedIconContainer
                : styles.unlikedIconContainer
            }
          >
            <MaterialCommunityIcons
              name={item.liked ? "thumb-up" : "thumb-up"}
              size={18}
              color={item.liked ? "#2DCB42" : "#B8B8B8"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleInterest(item.id, "dislike")}>
          <View
            style={
              item.disliked
                ? styles.dlikedIconContainer
                : styles.unlikedIconContainer
            }
          >
            <MaterialCommunityIcons
              name={item.disliked ? "thumb-down" : "thumb-down"}
              size={18}
              color={item.disliked ? "#FF5733" : "#B8B8B8"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider  >
      <SafeAreaView style={styles.container} >
        <View className="my-2 ">
            <Text style={styles.headerText} className="text-center ">Your Interests</Text>
            <Text className="text-center pb-6 leading-7 text-sm ">You'll see more insights from the interests as marked{'\n'} 
as " {thumbsUp} "  and less from marked from " {thumsDown} ". feel free to add {'\n'}
to add or remove interests to personalize your feed</Text>
            <FlatList
              
              data={interestsState}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              bounces={false}
              decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
              renderToHardwareTextureAndroid
              contentContainerStyle={{ alignItems: "flex-start",gap:6}}
              pagingEnabled
              scrollEventThrottle={64}
            />
       </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container fill the entire screen
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:'#FFF',
     
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
   
 
  },
  itemText: {
    fontSize: 16,
    textAlign:'left',
    marginVertical:4
  },
  iconsContainer: {
    flexDirection: "row",
    alignSelf:'flex-end',
    marginEnd:8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop:32,
  }, 
  likedIconContainer: {
    backgroundColor: "#BFEFC6", // Green background for liked
    borderRadius: 100, // Adjust as needed
    padding: 5,
    margin: 4,
    verticalAlign:'middle',
  },
  unlikedIconContainer: {
    backgroundColor: "#EEF4F9", // Light gray background for unliked
    borderRadius: 100,
    padding: 5,
    margin: 4,
    verticalAlign:'middle',
  },
  dlikedIconContainer: {
    backgroundColor: "#F6B8CD", // Light gray background for unliked
    borderRadius: 20,
    padding: 5,
    margin: 4,
  },
});

export default InterestScreen;
