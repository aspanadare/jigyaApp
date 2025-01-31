import { View, Text, StyleSheet,Dimensions } from 'react-native';
import React from 'react';

const {width,height} = Dimensions.get('window');
// Define prop types for TopBar
interface TopBarProps {
  index: number;
  setIndex: (index: number) => void;
}

const TopBar: React.FC<TopBarProps> = ({ index, setIndex }) => {
  return (
     <View style={styles.container}>
      <Text>TopBar</Text>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  container: {
    height:0,
    width:width,
  },
});