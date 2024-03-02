import { View } from "react-native";
import Svg, { Path } from 'react-native-svg';

export function SearchIcon() {
  return(
    <View
      style={{
        height: '100%',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path 
          d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58333C17.5 5.21108 13.9556 1.66666 9.58332 1.66666C5.21107 1.66666 1.66666 5.21108 1.66666 9.58333C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <Path 
          d="M18.3333 18.3333L16.6667 16.6667" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  )
}
