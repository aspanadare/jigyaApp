import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

const interests = [
  { id: "1", name: "Leadership/HRM" },
  { id: "2", name: "Digital Transformation" },
  
];

const InterestScreen = () => {
  const [interestsState, setInterestsState] = useState(
    interests.map((interest) => ({ ...interest, liked: false, disliked: false }))
  );

  const toggleInterest = (id: string, type: string) => {
    setInterestsState((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              liked: type === "like" ? !item.liked : item.liked,
              disliked: type === "dislike" ? !item.disliked : item.disliked,
            }
          : item
      )
    );
  };

  const renderItem = ({ item }: { item: { id: string; name: string; liked: boolean; disliked: boolean } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={styles.iconsContainer}>
      <TouchableOpacity onPress={() => toggleInterest(item.id, "like")}>
  <View style={item.liked ? styles.likedIconContainer : styles.unlikedIconContainer}> 
    <MaterialCommunityIcons 
      name={item.liked ? "thumb-up" : "thumb-up"} 
      size={24} 
      color={item.liked ? '#2DCB42' : '#B8B8B8'} 
    />
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => toggleInterest(item.id, "dislike")}>
  <View style={item.disliked ? styles.dlikedIconContainer : styles.unlikedIconContainer}>
    <MaterialCommunityIcons 
      name={item.disliked ? "thumb-down" : "thumb-down"} 
      size={24} 
      color={item.disliked ? '#FF5733' : '#B8B8B8'} 
    />
  </View>
</TouchableOpacity>

      </View>
    </View>
  );

  return (
    <SafeAreaProvider style={{width:'100%'}}>
    <SafeAreaView style={styles.container}>
   
        <Text style={styles.headerText}>Your Interests</Text>
        <FlatList className='w-[100%] h-full'
          data={interestsState}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
   
    </SafeAreaView>
    </SafeAreaProvider> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container fill the entire screen
    justifyContent: "center",
    alignItems: "center",
    
    width:'100%',
    height:'100%',
    backgroundColor:'#222',
    margin:16
  },
  itemContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1, // Make the image background fill the container
    resizeMode: 'cover', // Resize the image to cover the entire container
  },
  likedIconContainer: {
    backgroundColor: '#BFEFC6', // Green background for liked
    borderRadius: 20, // Adjust as needed
    padding: 5, 
    margin:4
  },
  unlikedIconContainer: {
    backgroundColor: '#EEF4F9', // Light gray background for unliked
    borderRadius: 20,
    padding: 5, 
    margin:4
  },
  dlikedIconContainer:{
    backgroundColor: '#F6B8CD', // Light gray background for unliked
    borderRadius: 20,
    padding: 5, 
    margin:4
  }
});

export default InterestScreen;