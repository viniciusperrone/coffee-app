import { View, ScrollView, Dimensions, Text, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

// ----------------------------------------------------------------------

export const Wrapper = styled(View)`
  flex: 1;
  background-color: #FBFBFB;
`;

export const Content = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false
})``;

export const Column = styled(View)`
  flex-direction: column;
`;

export const Row = styled(View)`
  flex-direction: row;
`;

export const Heading = styled(Text)`
  font-size: 20px;
  font-family: 'Sora-SemiBold';
  color: #2F2D2C;
`;

export const SubHeading = styled(Text)`
  font-size: 18px;
  font-family: 'Sora-SemiBold';
  color: #303336;
`;

export const ThinText = styled(Text)`
  font-size: 14px;
  font-family: 'Sora-SemiBold';
  color: #2F2D2C;
`;

export const LargeText = styled(Text)`
  font-size: 14px;
  font-family: 'Sora-SemiBold';
  color: #2F2D2C;
`;

export const NormalText = styled(Text)`
  font-size: 14px;
  font-family: 'Sora-Regular';
  color: #2F2D2C;
`;

export const DividerLarge = styled(View)`
  width: ${() => Dimensions.get("window").width};
  height: 4px;
  background-color: #F4F4F4;
`;

export const Divider = styled(View)`
  width: 100%;
  height: 1px;
  background-color: #EAEAEA;
`;

export const BottomSheet = styled(View)`
  width: 100%;
  background-color: white;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding-horizontal: 30px;
  padding-top: 20px;
  padding-bottom: 30px;
  gap: 15px;
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
  width: 100%;
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