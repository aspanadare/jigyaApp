import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Googleround from "../assets/google-round.svg"; // Adjust the path
import LinkedinRound from "../assets/linkedin-round.svg"; // Adjust the path
import { SafeAreaProvider } from "react-native-safe-area-context";
import ReusableSwitch from '../components/ToggleSwitch'; // Adjust the path 
import Bell from "../assets/notification.svg"; // Adjust the path
import Filter from "../assets/interest filter.svg"; // Adjust the path
import HDImage from "../assets/hd images.svg"; // Adjust the path
import Play from "../assets/auto_play.svg"; // Adjust the path
import ToggleSwitch from "../components/ToggleSwitch";


const { width, height } = Dimensions.get("window");

const SignupSetting = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView  style={{ flex: 1 }}>
        {/* Sign section */}
        <View style={styles.signUp} className="px-4 py-6 flex-2">
          <View>
            <Text className="text-white font-bold text-xl mb-4">
              Sign In for free
            </Text>
            <Text className="text-white text-md mb-8">
              Unlock your learning potential! Dive into a world of knowledge,
              connect with experts, and land your dream job.
            </Text>

            <View className="flex-row justify-between items-center ">
              <Pressable className="px-4 py-4 rounded-md bg-white w-28 shadow-slate-950 align-top">
                <Text className="text-md text-center text-md">Sign in</Text>
              </Pressable>
              <View className="flex-row ">
                <Googleround width={62} height={62} className="mb-4" />
                <LinkedinRound width={62} height={62} className="mb-4" />
              </View>
            </View>
          </View>
        </View>

        {/* Sign setting section */}
        <View className="setting flex-2">
          <View className="px-4 py-4 flex-row justify-between">
            <View className="flex-row gap-4 items-center">
              <Bell width={32} height={32} className="align-middle" />
              <Text className="text-xl">Notifications</Text>
            </View>
            <View className="toggle">
             <ToggleSwitch label="Switch 1" storageKey="switch1" initialValue={false} />
            </View>
          </View>
          <View className="w-['90%'] h-[1px] bg-gray-200 justify-center items-center ml-auto mr-auto"></View>

          <View className="px-4 py-4 flex-row justify-between">
            <View className="flex-row gap-4 items-center">
              <Filter width={32} height={32} className="align-middle" />
              <Text className="text-xl">Your Interests</Text>
            </View>
             
          </View>
          <View className="w-['90%'] h-[1px] bg-gray-200 justify-center items-center ml-auto mr-auto"></View>

          <View className="px-4 py-4 flex-row justify-between">
            <View className="flex-row gap-4 items-center">
              <HDImage width={32} height={32} className="align-middle" />
              <Text className="text-xl">HD Images</Text>
            </View>
            <View className="toggle">
            <ToggleSwitch label="Switch 1" storageKey="switch1" initialValue={false} />
            </View>
          </View>
          <View className="w-['90%'] h-[1px] bg-gray-200 justify-center items-center ml-auto mr-auto"></View>

          <View className="px-4 py-4 flex-row justify-between">
            <View className="flex-row gap-4 items-center">
              <Play width={32} height={32} className="align-middle" />
              <Text className="text-xl">Auto play</Text>
            </View>
            <View className="toggle">
            <ToggleSwitch label="Switch 1" storageKey="switch1" initialValue={false} />
            </View>
          </View>
          <View className="w-['90%'] h-[1px] bg-gray-200 justify-center items-center ml-auto mr-auto"></View>
        </View>

         {/* Footer  */}

         <View className="footer bg-slate-500 p-4   " style={styles.footer} > 
           <View className="align-middle flex-row flex-wrap gap-2 items-center justify-center ">
              <Text className="text-gray-300 text-xl p-4">Share this app</Text>
              <Text className="text-gray-300 text-xl p-4">Rate this app</Text>
              <Text className="text-gray-300 text-xl p-4">Feedback</Text>
              <Text className="text-gray-300 text-xl p-4">T&C</Text>
              <Text className="text-gray-300 text-xl p-4">Privacy Policy</Text>
            </View>
         </View>


      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignupSetting;

const styles = StyleSheet.create({
  signUp: {
    backgroundColor: "#2DA5CB",
    width: width,
  },
  footer: {
    flex:1,
    alignContent:'center', 
    width:width,
    flexDirection:'row',
    justifyContent:'space-around',
    alignSelf:'center',
    gap:2,
    alignItems:'center',
    flexWrap:'wrap'
  },
});
