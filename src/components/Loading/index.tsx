import { ActivityIndicatorBase } from "react-native";

import { Wrapper } from "./style";

export function Loading() {
  return(
    <Wrapper>
      <ActivityIndicatorBase 
        color="#FFFFFF"
      />
    </Wrapper>
  )
}