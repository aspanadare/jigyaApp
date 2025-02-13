// app/(tabs)/index.tsx
import React from 'react';
 
import SwipeableScreen from '../ScreenWithSwipe';

import {  Dimensions, Platform, View ,Text ,StyleSheet} from "react-native";
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

import { item,data2,courseData } from "../../screens/carousel/mockData";
// import VerticalList from '../../screens/carousel/VerticalList';
import JobCardSlider from '../../screens/carousel/JobCardSlider';
import CourseCard from '../../components/CourseCard';
import CourseCardSlider from '../../screens/carousel/CourseCardSlider';

 
// import { TAB_BAR_HEIGHT } from "../../app/index";
const TAB_BAR_HEIGHT = 46;

interface Item {
  key: string;
  title: string;
  image: string;
  index: number;
  bg: string,
  description: string;
  author: {
    name: string;
    avatar: string;
  };
}



type Course = {
  key: string;
  bg: string;
  courseName: string;
  courseType: string;
  delivery: string;
  universityName: string;
  universityLogo: string;
  image: string;
  startDate: Date;
  applyByDate: Date;
  fees: number;
  universityLink: string;
};


type HorrListProps = {
  data: Course[];
};

// Define the props for the VerticalList component
interface VerticalListProps {
  data: Item[];
}

let { width, height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');

const _spacing = 0;
const _itemHight = height - (TAB_BAR_HEIGHT || 0); 
const _itemWidth = width;


const HomeScreen:React.FC<VerticalListProps> = ({ data }) => {

    const scrollY = useSharedValue(0);
      const onScrollY = useAnimatedScrollHandler(
        (e) => {
          scrollY.value = e.contentOffset.y / _itemHight;
        }
      )
      return (
        
        <SwipeableScreen leftScreen="profile" rightScreen="Search">
          <View style={styles.container}>
            {/* <VerticalList data={item}   />  */}
            {/* <JobCardSlider data={data2}   />  */}
            <CourseCardSlider data={courseData}   /> 



          </View>
        </SwipeableScreen>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;


 