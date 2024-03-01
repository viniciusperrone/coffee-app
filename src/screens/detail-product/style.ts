import styled from "styled-components/native";
import { 
  View,
  ScrollView,
  ImageBackground, 
  Image as SquareImage, 
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
  background-color: #FBFBFB;
`;

export const Content = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false
})``;

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

export const Column = styled(View)`
  flex-direction: column;
`;

export const Square = styled(View)`
  width: 48px;
  height: 48px;
  background-color: #F9F9F9;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
`;

export const SquareIcon = styled(SquareImage)`
  width: 24px;
  height: 24px;
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

export const BottomSheet = styled(View)`
  width: 100%;
  bottom: 0;
  background-color: white;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding-horizontal: 30px;
  padding-top: 20px;
  padding-bottom: 30px;
`;

export const BottomSheetTitle = styled(Text)`
  font-size: 14px;
  font-family: 'Sora-Regular';
  color: #9B9B9B;
`;

export const BottomSheetSubtitle = styled(Text)`
  font-size: 18px;
  font-family: 'Sora-SemiBold';
  color: #C67C4E;
`;

export const BottomSheetButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})`
  width: 70%;
  height: 60px;
  border-radius: 16px;
  background-color: #C67C4E;
  align-items: center;
  justify-content: center;
`;

export const BottomSheetTextButton = styled(Text)`
  font-size: 16px;
  font-family: 'Sora-SemiBold';
  color: white;
`;