import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Dashboard } from "@/screens/dashboard";
import { RootPage } from "@/screens/root";

const Stack = createNativeStackNavigator();

export type ScreenNames = ["home", "dashboard"]
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

export function StackRoutes() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="home"
        component={RootPage}
      />
      <Stack.Screen 
        name="dashboard"
        component={Dashboard}
      />
    </Stack.Navigator>
  )
}