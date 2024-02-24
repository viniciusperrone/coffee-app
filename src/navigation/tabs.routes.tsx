import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "@/screens/dashboard";

const Tab = createBottomTabNavigator();

export function TabsRoutes() {
  return(
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,        
      }}
      initialRouteName="dashboard"
    >
      <Tab.Screen 
        name="dashboard"
        component={Dashboard}
        options={{
          
        }}
      />
    </Tab.Navigator>
  )
}