import Svg, { Path } from 'react-native-svg';

// ----------------------------------------------------------------------

type IconProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

// ----------------------------------------------------------------------

export function GpsIcon({ width = 24, height = 24, fill = '#292D32' }: IconProps) {
  return(
    <Svg 
      width={width} 
      height={height}
      viewBox="0 0 24 24" 
      fill="none" 
    >
      <Path 
        d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M12 4V2" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M4 12H2" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M12 20V22" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M20 12H22" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}
