import styled from "styled-components/native";
import { 
  View, 
  ImageBackground, 
  Dimensions, 
  Text,
  Pressable,
  TouchableOpacity
} from "react-native";

// ----------------------------------------------------------------------

type SizeButtonProps = {
  selected: boolean;
}

// ----------------------------------------------------------------------

export const Wrapper = styled(View)`
  flex: 1;
`;

export const Content = styled(View)`
  flex: 1;
  padding-vertical: 30px;
  padding-horizontal: 30px;
  gap: 15px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-family: 'Sora-SemiBold';
  color: #2F2D2C;
`;

export const Heading = styled(Text)`
  font-size: 20px;
  font-family: 'Sora-SemiBold';
  color: #2F2D2C;
`;

export const SubHeading = styled(Text)`
  font-size: 16px;
  font-family: 'Sora-Regular';
  color: #9B9B9B;
`;

export const Divider = styled(View)`
  width: 100%;
  height: 1px;
  background-color: #EAEAEA;
`;

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SizeButton = styled(Pressable)<SizeButtonProps>`
  width: ${(Dimensions.get("window").width - 80) / 3};
  height: 42px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.selected ? "#C67C4E" : "#DEDEDE"};
  background-color: ${props => props.selected ? "#FFF5EE" : "none"};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const SizeButtonText = styled(Text)<SizeButtonProps>`
  font-size: 16px;
  font-family: 'Sora-Regular';
  color: ${props => props.selected ? "#C67C4E" : "#2F2D2C"}
`;

export const Image = styled(ImageBackground)`
  width: ${Dimensions.get("window").width - 60};
  height: 226px;
  align-self: center;
`;