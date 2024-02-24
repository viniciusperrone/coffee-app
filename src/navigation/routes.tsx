import { NavigationContainer, NavigationProp } from "@react-navigation/native";

import { Loading } from "@/components/Loading";
import { StackRoutes } from "./stack.routes";

export type ScreenNames = ["home", "dashboard"]
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;


export function Routes() {
  return(
    <NavigationContainer fallback={<Loading />}>
      <StackRoutes />
    </NavigationContainer>
  )
}