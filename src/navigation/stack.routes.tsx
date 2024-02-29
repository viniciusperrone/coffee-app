import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootPage } from "@/screens/root";
import { TabsRoutes } from "./tabs.routes";
import { DetailProduct } from "@/screens/detail-product";
import { Order } from "@/screens/order";

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
        component={DetailProduct}
      />
      <Stack.Screen
        name="order"
        component={Order}
      />
    </Stack.Navigator>
  )
}
