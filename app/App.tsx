import { View, Text,StyleSheet, Dimensions,SafeAreaView} from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {  useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Feed from '../screens/FeedScreen';
import SecondTab from '../screens/InterestSelection';
import ThirdTab from '../screens/SignupSetting';
import FeedScreen from '../screens/FeedScreen';
import TopBar from './TopBar'
import InsightCard from '../components/InsightCard';


const renderScene = SceneMap({
  third: ThirdTab,
  second: FeedScreen,
  first: SecondTab,
});

const routes = [
  { key: 'first', title: '' },
  { key: 'second', title: '' },
  { key: 'third', title: '' },
];

const {width,height} = Dimensions.get('window');
const Tab = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(1);
  return (
    <SafeAreaProvider>
      
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width, height: layout.height }}
        renderTabBar={()=> <TopBar index={index} setIndex={setIndex} />}
      />
    
    </SafeAreaProvider>
   
  )
}

export default Tab

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    
  },
});