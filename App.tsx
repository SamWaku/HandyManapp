import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import Tabs from "./navigation/Tabs";
import AnimTab3 from "./navigation/Tab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AnimTab3 />
    </NavigationContainer>
  );
}
