import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';



// import InsightCard from '../components/InsightCard';
import { SafeAreaProvider } from 'react-native-safe-area-context';
 
import SignupSetting from "../screens/SignupSetting"; 

export default function App() {

 return (
    <SafeAreaProvider style={styles.container}>
              <SafeAreaView style={{ flex: 1 }}>
                  {/* <CourseSlider /> 
                  <InterestSelection />
                   <LoginPage />
                 <SignupSetting /> 
             
             <InterestSelection />*/}
                  <SignupSetting /> 
             
                {/*
                    <CourseSlider />  
                  <InterestSelection />
                   <SignupSetting /> */}
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
