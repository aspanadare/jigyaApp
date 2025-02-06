import { StyleSheet, Text, View, Dimensions,Platform, SafeAreaView, TouchableOpacity, Image, ImageBackground} from 'react-native'
import React from 'react'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
  } from "react-native-reanimated";
  import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
    Pressable,
  } from "react-native-gesture-handler";

  type Item = {
    position :string;
    key: string;
    companyName: string;
    companyLogo: string;
    experienceRange: string;
    location: string;
    image:string;
   
  };
  
  
  type AnimatedCardProps = {
    item: Item;
    index:number;
  };
  
  let  { width, height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');

  const _imageWidth = width * .8;
  const _imageHight = _imageWidth * 1.80;

function JobCard({ item, index }: AnimatedCardProps) {

   
  return (
 
         <View style={{...styles.container,height:_imageHight, width:_imageWidth}} className='overflow-hidden rounded-2xl relative  ' >
                  <Image style={{flex:1}} source={{uri: item.image}} />

                 
                    <View className='absolute z-10 w-full p-2 bottom-0 '>
                          <ImageBackground  style={styles.blurBG} source={{uri: item.image}} className='bg-whi left-0 bottom-0 z-10 blur-3xl '    blurRadius={50} >
                           <Image source={{uri:item.companyLogo}}  style={styles.companyLogo}  />
                          <Text className='text-white text-md mb-1'>{item.companyName}</Text>
                          <Text className='text-white text-lg font-bold mb-2  '>{item.position}</Text>
                          <View className='bg-slate-100 h-[1px] w-full mb-2'></View>

                        <View className='flex-row justify-between'>
                              <View className='experience '>
                                    <View className='flex-row gap-2 pb-1'><Image  source={require("../assets/experience.png")}></Image>  
                                    <Text className='text-white text-sm'>Experience</Text></View>
                                    <Text className='text-white text-md font-bold'>{item.experienceRange}</Text>
                              </View>
                              <View className='experience '>
                                    <View className='flex-row gap-2 pb-1'><Image  source={require("../assets/salary.png")}></Image>  
                                    <Text className='text-white '>Salary</Text></View>
                                    <Text className='text-white text-md font-bold'>Not Disclosed</Text>
                              </View>
                              <View className='experience '>
                                    <View className='flex-row gap-2 pb-1'><Image  source={require("../assets/location.png")}></Image>  
                                    <Text className='text-white text-sm'>Location</Text></View>
                                    <Text className='text-white text-md font-bold'>{item.experienceRange}</Text>
                              </View>

                          </View>
                          <Pressable style={styles.applyLink}>
                                             <Text style={styles.ctaText}>Apply Now</Text>
                                         </Pressable>
                            
                         
                        {/*   <Text className='text-white'>{item.location}</Text> */}
                      </ImageBackground>
                    </View>
               
            </View>
    
  )
}

export default JobCard 
const styles = StyleSheet.create({
    safeArea: {
         marginTop:50,
        marginHorizontal:8,
      
    },
    container: {
        overflow:'hidden',
        zIndex: 10, 
        backgroundColor:'#444'
    },
    blurBG:{
       backgroundColor:'#FFF',
       padding:8,
       borderRadius:4,
       overflow:'hidden', 
    },
    companyLogo:{
      width:110,
      height:60,
      borderRadius:4,
      marginBottom:8,
    },
    applyLink: {
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
    // backgroundImage: {
    //     flex: 1,
    //     width: '100%', // Adjust width as needed
    //     height: '100%', // Adjust height as needed
    //     justifyContent: "center",
    //     alignItems: 'center',
    // }, 
    // overlay: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
       
       
    // },
    // text: {
    //     color: '#fff', // Text color for better contrast against background
    //     fontSize: 16,
    //     marginBottom: 5,
    // },
});