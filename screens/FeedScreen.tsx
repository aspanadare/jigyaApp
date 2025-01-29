import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InsightCard from '../components/InsightCard';
import { SafeAreaProvider } from 'react-native-safe-area-context';
 
import TopTabs from "../components/TopTabs";
import CourseCard from "../components/CourseCard";

const FeedScreen = () => {
       const [tabVisible, setTabVisibility] = useState(false);
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
            {/* {tabVisible && <TopTabs />}
            
            <InsightCard onPress={() => setTabVisibility(!tabVisible)} /> */}
            <CourseCard />
            <StatusBar style="auto" />
        </View>
    </SafeAreaProvider>
  )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     
    },
  });