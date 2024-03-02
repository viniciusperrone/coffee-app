import Svg, { Path } from 'react-native-svg';

// ----------------------------------------------------------------------

type IconProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

// ----------------------------------------------------------------------

export function NoteIcon({ width = 12, height = 13, fill = '#303336' }: IconProps) {
  return(
    <Svg 
      width={width}
      height={height}
      viewBox="0 0 12 13" 
      fill="none" 
    >
      <Path 
        d="M8.16784 8.96365H3.95618"
        stroke={fill}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M8.16784 6.52152H3.95618" 
        stroke={fill}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M5.56326 4.08506H3.95618" 
        stroke={fill}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M8.28003 1.10405C8.28003 1.10405 3.80178 1.10638 3.79478 1.10638C2.18478 1.1163 1.18787 2.17563 1.18787 3.79147V9.1558C1.18787 10.7798 2.19237 11.8432 3.81637 11.8432C3.81637 11.8432 8.29403 11.8415 8.30162 11.8415C9.91162 11.8316 10.9091 10.7716 10.9091 9.1558V3.79147C10.9091 2.16747 9.90403 1.10405 8.28003 1.10405Z" 
        stroke={fill}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}
