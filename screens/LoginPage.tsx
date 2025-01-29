import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import Google from '../assets/google.svg' // Adjust the path 
import Linkedin from '../assets/linkedIn.svg' // Adjust the path 
import Jigya from '../assets/Jigya_logo.svg' // Adjust the path 


 

const LoginPage = () => {
  return (
    <View style={styles.container}>
        
        <Jigya width={82} height={82}  className="mb-4" /> 
      <Text className='uppercase font-bold text-2xl my-6'>Sign UP for free</Text>
      
   

      <Pressable className='mb-4'>
      <Google width={330} height={52} />  
       
      </Pressable>
      <Pressable>
         <Linkedin width={330} height={52}  />  
       </Pressable>
      <Text className=' font-light text-sm my-6 text-center '>By signing up, you accept our {'\n'} 
      <Text className='font-semibold'>Privacy Policy</Text> and <Text className='font-semibold'>Terms and Conditions</Text></Text>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
