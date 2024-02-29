import { NavigationContainer, NavigationProp } from "@react-navigation/native";

import { Loading } from "@/components/Loading";
import { StackRoutes } from "./stack.routes";

// ----------------------------------------------------------------------

export type ScreenNames = ["home", "dashboard", "detail-product", "order"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

// ----------------------------------------------------------------------

export function Routes() {
  return(
    <NavigationContainer 
      theme={navigationTheme as any}
      fallback={<Loading />}
    >
      <StackRoutes />
    </NavigationContainer>
  )
}

const navigationTheme = {
  dark: true,
  colors: {
    border: 'transparent',
    background: "#F9F9F9",
  },
};