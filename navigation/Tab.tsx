import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon, { Icons } from "../components/Icons";
import Colors from "../constants/Colors";
import * as Animatable from "react-native-animatable";

// screens
import HomeScreen from "../Screens/HomeScreen";
import HireScreen from "../Screens/HireScreen";
import ServiceScreen from "../Screens/ServiceScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.Feather,
    icon: "home",
    component: HomeScreen,
    color: Colors.primary,
    alphaClr: Colors.primaryAlpha,
  },
  {
    route: "Search",
    label: "Hire",
    type: Icons.Feather,
    icon: "search",
    component: HireScreen,
    color: Colors.green,
    alphaClr: Colors.greenAlpha,
  },
  {
    route: "Add",
    label: "Services",
    type: Icons.Feather,
    icon: "plus-square",
    component: ServiceScreen,
    color: Colors.red,
    alphaClr: Colors.redAlpha,
  },
  {
    route: "Account",
    label: "Account",
    type: Icons.FontAwesome,
    icon: "user-circle-o",
    component: ProfileScreen,
    color: Colors.purple,
    alphaClr: Colors.purpleAlpha,
  },
];

const Tab = createBottomTabNavigator();

type Tab2Props = {
  item: (typeof TabArr)[0];
  onPress: () => void;
  accessibilityState: { selected: boolean };
};

const Tab2: React.FC<Tab2Props> = ({ item, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef<Animatable.View & View>(null);
  const textViewRef = useRef<Animatable.View & View>(null);

  useEffect(() => {
    if (viewRef.current && textViewRef.current) {
      if (focused) {
        viewRef.current.animate({
          0: { transform: [{ scale: 0 }] },
          1: { transform: [{ scale: 1 }] },
        });
        textViewRef.current.animate({
          0: { transform: [{ scale: 0 }] },
          1: { transform: [{ scale: 1 }] },
        });
      } else {
        viewRef.current.animate({
          0: { transform: [{ scale: 1 }] },
          1: { transform: [{ scale: 0 }] },
        });
        textViewRef.current.animate({
          0: { transform: [{ scale: 1 }] },
          1: { transform: [{ scale: 0 }] },
        });
      }
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, borderRadius: 16 },
          ]}
        />
        <View
          style={[
            styles.btn,
            { backgroundColor: focused ? undefined : item.alphaClr },
          ]}
        >
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.primary}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text style={{ color: Colors.white, paddingHorizontal: 8 }}>
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function AnimTab3() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            margin: 16,
            borderRadius: 16,
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => (
                  <Tab2 {...props} item={item} onPress={props.onPress!} />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 16,
  },
});
