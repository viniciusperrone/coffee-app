import Svg, { Path } from 'react-native-svg';

// ----------------------------------------------------------------------

type IconProps = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

// ----------------------------------------------------------------------

export function EditIcon({ width = 13, height = 13, fill = '#303336' }: IconProps) {
  return(
    <Svg 
      width={width}
      height={height}
      viewBox="0 0 13 13" 
      fill="none" 
    >
      <Path 
        d="M5.70387 1.12692H3.52279C1.72904 1.12692 0.60437 2.39684 0.60437 4.19467V9.04451C0.60437 10.8423 1.72379 12.1123 3.52279 12.1123H8.67012C10.4697 12.1123 11.5891 10.8423 11.5891 9.04451V6.69484" 
        stroke={fill}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M4.14962 5.87053L8.50886 1.51128C9.05195 0.968776 9.9322 0.968776 10.4753 1.51128L11.1852 2.22119C11.7283 2.76428 11.7283 3.64511 11.1852 4.18761L6.80495 8.56786C6.56753 8.80528 6.24553 8.93886 5.90953 8.93886H3.72437L3.7792 6.73386C3.78737 6.40953 3.91978 6.10036 4.14962 5.87053Z" 
        stroke={fill}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M7.84644 2.1848L10.5099 4.8483" 
        stroke={fill}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  )
}
