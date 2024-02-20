import { NavigationContainer } from "@react-navigation/native";

import { Loading } from "@/components/Loading";
import { StackRoutes } from "./stack.routes";

export function Routes() {
  return(
    <NavigationContainer fallback={<Loading />}>
      <StackRoutes />
    </NavigationContainer>
  )
}