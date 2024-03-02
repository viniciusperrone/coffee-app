import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootPage } from "@/screens/root";
import { TabsRoutes } from "./tabs.routes";
import { DetailProductPage } from "@/screens/detail-product";
import { OrderPage } from "@/screens/order";

// ----------------------------------------------------------------------

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
      <Stack.Screen
        name="detail-product"
        component={DetailProductPage}
      />
      <Stack.Screen
        name="order"
        component={OrderPage}
      />
    </Stack.Navigator>
  )
}
