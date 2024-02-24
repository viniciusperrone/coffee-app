import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootPage } from "@/screens/root";
import { TabsRoutes } from "./tabs.routes";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="home"
        component={RootPage}
      />
      <Stack.Screen 
        name="dashboard"
        component={TabsRoutes}
      />
    </Stack.Navigator>
  )
}