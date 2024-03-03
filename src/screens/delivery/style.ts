import styled from "styled-components/native";

import { View, Pressable, Dimensions, Text } from "react-native";

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