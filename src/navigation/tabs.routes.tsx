import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "@/screens/dashboard";
import { HomeIcon } from "@/assets/icons/tabs/home";
import { HeartIcon } from "@/assets/icons/tabs/heart";
import { BagIcon } from "@/assets/icons/tabs/bag";
import { NotificationIcon } from "@/assets/icons/tabs/notification";
import { DashboardStackRoutes } from "./dashboard-stack.routes";
import { Favorites } from "@/screens/favorites";
import { Cart } from "@/screens/cart";

const Tab = createBottomTabNavigator();

export function TabsRoutes() {

  const renderLineFocused = (
    <LinearGradient 
      colors={["#C67C4E", "#DA9468", "#EDAB81"]}
      start={{
        x: 0, y: 0
      }}
      end={{
        x: 1, 
        y: 0
      }}
      style={tabBarStyle.tabLineFocused}
    />
  )

  return(
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: tabBarStyle.tabWrapper
      }}
      initialRouteName="dashboard"
    >
      <Tab.Screen 
        name="dashboard"
        component={DashboardStackRoutes}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={tabBarStyle.tabScreen}>
              <HomeIcon 
                color={focused ? "#C67C4E" : "#8D8D8D"}
              />
              {focused && renderLineFocused}
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="favorites"
        component={Favorites}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={tabBarStyle.tabScreen}>
              <HeartIcon 
                color={focused ? "#C67C4E" : "#8D8D8D"}
              />
              {focused && renderLineFocused}
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="cart"
        component={Cart}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={tabBarStyle.tabScreen}>
              <BagIcon
                color={focused ? "#C67C4E" : "#8D8D8D"}
              />
              {focused && renderLineFocused}
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="notifications"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={tabBarStyle.tabScreen}>
              <NotificationIcon
                color={focused ? "#C67C4E" : "#8D8D8D"}
              />
              {focused && renderLineFocused}
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const tabBarStyle = StyleSheet.create({
  tabWrapper: {
    borderRadius: 24,
    backgroundColor: 'white'
  },
  tabScreen: {
    height: '100%',
    alignItems: 'center',
    paddingTop: 18,
    gap: 4
  },
  tabLineFocused: {
    width: 12,
    height: 4,
    borderRadius: 8
  }
});