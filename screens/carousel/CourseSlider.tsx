import {
    Dimensions,
    ImageBackground,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Button,
    Pressable,
    Animated,
  } from "react-native";
  import React, { useState } from "react";
  import CourseCard from "../../components/CourseCard";
  import { SafeAreaProvider } from "react-native-safe-area-context";
  
  const { width, height } = Dimensions.get("window");
  const paddingTop = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;


 const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
  
  const CourseSlider = () => {
    const [data, setData] = useState([1, 1, 1, 1]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
  
    return (
       
      <View style={styles.container}>
          
        <SafeAreaProvider>
          
          <SafeAreaView style={[styles.container, { paddingTop }]}>
            <StatusBar backgroundColor="red" />
            <Text className="font-bold text-xl text-center absolute top-4 left-4 mb-4 ">Courses you may like to take</Text>
            <ImageBackground
              source={require("../../assets/course-carousel-bg.jpg")}
              style={styles.backgroundImage}
              resizeMode="cover"
            ></ImageBackground>
          
            <View style={{   width: width,padding:16 }}>
            <Animated.FlatList

                showsHorizontalScrollIndicator={false}
                data={data}
                bounces={false}
                horizontal
                decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: 'center' }}
                  
                pagingEnabled
                snapToAlignment='center'
                scrollEventThrottle={16}
                onScroll={(e) =>{ 
                    const x = e.nativeEvent.contentOffset.x;
                    setCurrentIndex(Math.floor(x / width));
                }}
                renderItem={({ item, index }) => {
                  return (
                    <View

                        style={{
                        
                        margin: SPACING ,
                        alignItems: 'center',
                        justifyContent: 'center',
                          }}
                    >
                      <TouchableOpacity
                        style={{ width: "90%", height: "80%",justifyContent:'center',alignItems:'center'}}
                        disabled={true}
                      >
                        <CourseCard />
                      </TouchableOpacity>
                    </View>
                  );
                }}
                
              />
  <View
              className="indicators"
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: width - 32,
              }}
            >
              {data.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 8,
                      backgroundColor: currentIndex === index ? "#757575" : "#DCDCDC",
                      marginLeft: 5,
                      
                    }}
                  ></View>
                );
              })}
            </View>
            </View>
            
             <Pressable style={{...styles.allCourse, backgroundColor:'#2DA5CB',alignItems:'center',justifyContent:'center'}} >
                  <Text className="font-bold text-xl text-center text-white" > View All</Text>
             </Pressable>
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
    );
  };
  
  export default CourseSlider;
  
  const styles = StyleSheet.create({
      allCourse:{
        
          backgroundColor:"##2DA5CB",
          paddingVertical:18,
          paddingHorizontal:16,
          borderRadius:8,
          
          width:'84%' 
      },
       
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    backgroundImage: {
      width: width,
      position: "absolute",
      height: height,
    },
  });
  