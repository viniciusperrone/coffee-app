import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "@/screens/dashboard";
import { HomeIcon } from "@/assets/icons/tabs/home";
import { HeartIcon } from "@/assets/icons/tabs/heart";
import { BagIcon } from "@/assets/icons/tabs/bag";
import { NotificationIcon } from "@/assets/icons/tabs/notification";

const Tab = createBottomTabNavigator();

export function TabsRoutes() {
  return(
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'transparent'
      }}
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          borderRadius: 16,
          backgroundColor: 'white'
        }
      }}
      initialRouteName="dashboard"
    >
      <Tab.Screen 
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ 
              height: '100%',
              justifyContent: 'center'
              
            }}>
              <HomeIcon 
                color={focused ? "#C67C4E" : "#8D8D8D"}
              />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="actions"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ 
              height: '100%',
              justifyContent: 'center'
              
            }}>
              <HeartIcon 
                color={focused ? "#C67C4E" : "#8D8D8D"}
              />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="cart"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ 
              height: '100%',
              justifyContent: 'center'
              
            }}>
              <BagIcon
                color={focused ? "#C67C4E" : "#8D8D8D"}
              />
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
            <View style={{ 
              height: '100%',
              justifyContent: 'center'
              
            }}>
              <NotificationIcon
                color={focused ? "#C67C4E" : "#8D8D8D"}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}