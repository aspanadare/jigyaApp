import React  from "react"; 
import { StyleSheet, Button, View } from 'react-native'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import  CardContainer from './carousel/CardContainer';
import {data2} from './carousel/mockData';
import JobCardSlider from "../components/JobCardSlider";





const FeedScreen = () => {
 
  const data = [
    { image:require('./img/img1.jpg') },
    { image:require('./img/img2.jpg') },
    { image:require('./img/img3.jpg') },
    { image:require('./img/img4.jpg') },
 
     
  ]
 

  return (
    
    
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <JobCardSlider data={data2}   />
      </SafeAreaView>
    </GestureHandlerRootView>
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
