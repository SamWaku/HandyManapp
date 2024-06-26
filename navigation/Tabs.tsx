import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "../Screens/HomeScreen";
import HireScreen from "../Screens/HireScreen";
import ServiceScreen from "../Screens/ServiceScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
type Props = {}

const Tabs: React.FC<Props> = (props: Props) => {
  return (
   <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel:true,
      tabBarStyle:{
        position: 'absolute',
        borderRadius:20,
        bottom:25,
        left:10,
        right:10,
        height:90,
        ...styles.shadow
   },}}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Hire" component={HireScreen}/>
        <Tab.Screen name="Service" component={ServiceScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
   </Tab.Navigator>

   
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset:{
      width: 0,
      height: 10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
})

export default Tabs