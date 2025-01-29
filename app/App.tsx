import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InsightCard from '../components/InsightCard';
import { SafeAreaProvider } from 'react-native-safe-area-context';
 
import TopTabs from "../components/TopTabs";
import CourseCard from "../components/CourseCard";
import FeedScreen from "../screens/FeedScreen";
import CourseSlider from "../components/CourseSlider";  
import InterestSelection from "../screens/InterestSelection";

export default function App() {

 return (
    <SafeAreaProvider style={styles.container}>
              <SafeAreaView    > 
                  {/* <CourseSlider /> */}
                  <InterestSelection />
                </SafeAreaView>  
            <StatusBar style="auto" />
     </SafeAreaProvider>
       
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
