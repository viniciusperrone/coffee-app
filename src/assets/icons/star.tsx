import Svg, { Path } from 'react-native-svg';

type TIcon = {
  width?: string | number;
  height?: string | number;
};

export function StartIcon({ width = 10, height = 9 }: TIcon) {
  return(
    <Svg 
      width={width}
      height={height}
      viewBox="0 0 10 9" 
      fill="none" 
    >
      <Path 
        d="M5.72083 0.962506L6.45416 2.42917C6.55416 2.63334 6.82083 2.82917 7.04583 2.86667L8.37499 3.08751C9.22499 3.22917 9.42499 3.84584 8.81249 4.45417L7.77916 5.48751C7.60416 5.66251 7.50833 6.00001 7.56249 6.24167L7.85833 7.52084C8.09166 8.53334 7.55416 8.92501 6.65833 8.39584L5.41249 7.65834C5.18749 7.52501 4.81666 7.52501 4.58749 7.65834L3.34166 8.39584C2.44999 8.92501 1.90833 8.52917 2.14166 7.52084L2.43749 6.24167C2.49166 6.00001 2.39583 5.66251 2.22083 5.48751L1.18749 4.45417C0.579159 3.84584 0.774993 3.22917 1.62499 3.08751L2.95416 2.86667C3.17499 2.82917 3.44166 2.63334 3.54166 2.42917L4.27499 0.962506C4.67499 0.166673 5.32499 0.166673 5.72083 0.962506Z" 
        fill="#FBBE21"
      />
    </Svg>

  )
}