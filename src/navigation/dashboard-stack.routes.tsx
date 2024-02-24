import { HearcIcon } from "@/assets/icons/heart";
import { Header } from "@/components/Header";
import { Dashboard } from "@/screens/dashboard";
import { DetailProduct } from "@/screens/detail-product";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function DashboardStackRoutes() {
  return(
    <Stack.Navigator 
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        name="detail-product"
        component={DetailProduct}
      />
    </Stack.Navigator>
  )
}