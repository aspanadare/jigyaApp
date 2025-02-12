import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const BottomNav = ({index,setIndex}) => {
  return (
    <View style={{position:'absolute',bottom:0,left:0,zIndex:50,backgroundColor:'#000',width:'100%',height:80, justifyContent:'center',alignItems:'center'}}>
      
      {index === 0 ? (
        <TouchableOpacity  >
          
            <MaterialCommunityIcons
                  name="magnify"
                   color= "#2DA5CB" 
                   size={24}
             />
        </TouchableOpacity>
      ) : (
        <MaterialCommunityIcons
        name="magnify"
         color= "#2DA5CB" 
         size={0}
   />
      )
      }
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({})