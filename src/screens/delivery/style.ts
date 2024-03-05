import styled from "styled-components/native";

import { View, Pressable, Dimensions, Text, Image } from "react-native";

// ----------------------------------------------------------------------

type ProgressProps = {
  color: string;
};


// ----------------------------------------------------------------------

export const Wrapper = styled(View)`
  flex: 1;
`;

export const Content = styled(View)`
  flex: 1;
  position: relative;
  top: 0;
  padding-top: 40px;
  gap: 10px;
  z-index: -1;
`;

export const Row = styled(View)`
  flex-direction: row;
`;

export const Column = styled(View)`
  flex-direction: column;
`;

export const FloatingButton = styled(Pressable)`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const BottomSheet = styled(View)`
  position: absolute;
  width: 100%;
  height: 300px;
  bottom: ${() => - Dimensions.get("window").height + 45};
  background-color: white;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  gap: 10px;
  padding-horizontal: 30px;
  padding-vertical: 15px;
`;

export const BottomSheetHeader = styled(View)`
  align-items: center;
  gap: 10px;
`;

export const BottomSheetContent = styled(View)`
  padding-vertical: 10px;
  gap: 15px;
`;

export const Box = styled(View)`
  width: 100%;
  border: 1px solid #DEDEDE; 
  border-radius: 14px;
  flex-direction: row;
  gap: 15px;
  padding-horizontal: 15px;
  padding-vertical: 15px;
`;

export const SquareIcon = styled(View)`
  width: 62px;
  height: 62px;
  border: 1px solid #DEDEDE; 
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled(Text)`
  font-size: 20px;
  font-family: 'Sora-SemiBold';
  color: #303336;
`;

export const SubHeading = styled(Text)`
  font-size: 18px;
  font-family: 'Sora-SemiBold';
  color: #303336;
`;

export const SimpleText = styled(Text)`
  font-size: 12px;
  font-family: 'Sora-Regular';
  color: #808080;
`;

export const SimpleTextBold = styled(Text)`
  font-size: 12px;
  font-family: 'Sora-SemiBold';
  color: #303336;
`;

export const Progress = styled(View)<ProgressProps>`
  width: ${() => (Dimensions.get("window").width - 90) / 4};
  background-color: ${props => props.color};
  height: 4px;
  border-radius: 20px;
`;

export const CallButton = styled(Pressable)`
  height: 54px;
  width: 54px;
  border: 1px solid #DEDEDE;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;

export const AvatarDeliver = styled(Image)``;