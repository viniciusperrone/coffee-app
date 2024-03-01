import Svg, { Path } from 'react-native-svg';

type IconProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export function CashIcon({ width = 24, height = 20, fill = '#C67C4E' }: IconProps) {
  return(
    <Svg 
      width={width}
      height={height}
      viewBox="0 0 24 20" 
      fill="none"
    >
      <Path 
        d="M19.3 5.91998V11.07C19.3 14.15 17.54 15.47 14.9 15.47H6.10995C5.65995 15.47 5.22996 15.43 4.82996 15.34C4.57996 15.3 4.33996 15.23 4.11996 15.15C2.61996 14.59 1.70996 13.29 1.70996 11.07V5.91998C1.70996 2.83998 3.46995 1.52002 6.10995 1.52002H14.9C17.14 1.52002 18.75 2.47001 19.18 4.64001C19.25 5.04001 19.3 5.44998 19.3 5.91998Z" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M22.3011 8.9201V14.0701C22.3011 17.1501 20.5411 18.4701 17.9011 18.4701H9.11105C8.37105 18.4701 7.70106 18.3701 7.12106 18.1501C5.93106 17.7101 5.12105 16.8001 4.83105 15.3401C5.23105 15.4301 5.66105 15.4701 6.11105 15.4701H14.9011C17.5411 15.4701 19.3011 14.1501 19.3011 11.0701V5.9201C19.3011 5.4501 19.2611 5.03014 19.1811 4.64014C21.0811 5.04014 22.3011 6.38011 22.3011 8.9201Z" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M10.4984 11.1399C11.9564 11.1399 13.1384 9.95791 13.1384 8.49988C13.1384 7.04185 11.9564 5.85986 10.4984 5.85986C9.04038 5.85986 7.8584 7.04185 7.8584 8.49988C7.8584 9.95791 9.04038 11.1399 10.4984 11.1399Z" stroke="#C67C4E" 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M4.78003 6.29999V10.7" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M16.2217 6.30029V10.7003" 
        stroke={fill}
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}