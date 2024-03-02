import { View } from "react-native";

// ----------------------------------------------------------------------

export function Hidden() {
  return(
    <View 
      style={{ 
        opacity: 0, 
        height: 0 
      }} 
    />
  )
}
