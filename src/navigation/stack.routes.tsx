import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabsRoutes } from "./tabs.routes";
import { RootPage } from "@/screens/root";
import { DetailProductPage } from "@/screens/detail-product";
import { OrderPage } from "@/screens/order";
import { DeliveryPage } from "@/screens/delivery";

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
      <Stack.Screen
        name="delivery"
        component={DeliveryPage}
      />
    </Stack.Navigator>
  )
}
