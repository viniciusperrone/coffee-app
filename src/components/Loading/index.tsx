import { ActivityIndicator } from "react-native";

import { Wrapper } from "./style";

// ----------------------------------------------------------------------

export function Loading() {
  return(
    <Wrapper>
      <ActivityIndicator 
        color="#FFFFFF"
      />
    </Wrapper>
  )
}
