// JobCardSlider.tsx
import React from 'react';
import JobCard from '../../components/JobCard'; // Ensure this is the correct import
import { Dimensions, Platform, StyleSheet,Text, Animated, ImageBackground, SafeAreaView, StatusBar, _Image, Pressable } from "react-native";

 

type Item = {
  key: string;
  image: string;
  bg: string;
  companyName: string; // Ensure these properties are included
  companyLogo: string; // Ensure these properties are included
  position: string; // Required
  salaryRange: string; // Required
  location: string; // Required
  experienceRange: string; // Ensure this is named correctly
};

type HorrListProps = {
  data: Item[];
};

const { width , height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');
const _spacing = 16;
const _imageWidth = width * .8;
const _itemFullSize = width + _spacing;


 

const JobCardSlider = ({ data }: HorrListProps) => {
  return (
       <SafeAreaView style={styles.container}>


                            <ImageBackground
                              source={require("../../assets/jobBg.jpg")}
                              className='absolute w-full h-full'
                              resizeMode="cover"
                            >

                            </ImageBackground>
                                 <Text className="font-bold text-2xl text-center  mb-8 ">Recommended opportunities for you</Text>
       
                          <Animated.FlatList 
                              data={data}
                              showsHorizontalScrollIndicator={false}
                              horizontal
                              snapToInterval={_imageWidth + _spacing}
                              decelerationRate={"fast"}
                              contentContainerStyle={{
                              gap:_spacing,
                              paddingHorizontal:( width - _imageWidth ) / 2
                            }}
                            keyExtractor={item => String(item.key)}
                            style={{flexGrow:0}}
                            renderItem={({ item,index }) => <JobCard item={item} index={index} />} 
                            />
                             <Pressable  className="bg-blue-500 items-center justify-center p-4 mt-4 w-['80%'] rounded-lg">
                                   <Text className="font-bold text-xl text-center text-white" > View All</Text>
                             </Pressable>
         </SafeAreaView>
     
    
    
  );
};

export default JobCardSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    justifyContent:'center',
    alignItems:'center',
  
  },

});
