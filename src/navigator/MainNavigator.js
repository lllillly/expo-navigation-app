import Sc1 from "../screens/Sc1";
import Sc2 from "../screens/Sc2";
import Sc3 from "../screens/Sc3";
import Sc4 from "../screens/Sc4";
// import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import Icon from "react-native-ionicons";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const MainNavigatior = createBottomTabNavigator(
  {
    SCREEN1: {
      screen: Sc1,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? `battery-full` : `battery-dead`}
            size={36}
          />
        ),
      },
    },

    SCREEN2: {
      screen: Sc2,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? `battery-full` : `battery-dead`}
            size={36}
          />
        ),
      },
    },
    SCREEN3: {
      screen: Sc3,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? `battery-full` : `battery-dead`}
            size={36}
          />
        ),
      },
    },
    SCREEN4: {
      screen: Sc4,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? `battery-full` : `battery-dead`}
            size={36}
          />
        ),
      },
    },
  },
  {
    headerMode: "screen",
    mode: "card" /* modal도 가능 - 효과가 다름 */,
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default createAppContainer(MainNavigatior);
