import Svg, { Path } from 'react-native-svg';

// ----------------------------------------------------------------------

type TIcon = {
  width?: string | number;
  height?: string | number;
};

// ----------------------------------------------------------------------

export function PlusIcon({ width = 16, height = 16 }: TIcon) {
  return(
    <Svg 
      width={width} 
      height={height} 
      viewBox="0 0 16 16" 
      fill="none"
    >
      <Path 
        d="M4 8H12" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <Path 
        d="M8 12V4" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </Svg>
  )
}
