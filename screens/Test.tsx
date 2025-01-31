import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  )
}

export default Test


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7987',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1, // Add border for debugging
    borderColor: 'red', // Change color as needed
    
  },
});
