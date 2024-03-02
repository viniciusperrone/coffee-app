import { View, ScrollView, Dimensions, Text, TouchableOpacity, Pressable, ImageBackground } from "react-native";

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
  font-family: 'Sora-Light';
  color: #808080;
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

export const DotsContainer = styled(View)`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: #808080;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const Dots = styled(View)`
  width: 3px;
  height: 3px;
  background-color: white;
`;

export const CashContainer = styled(View)`
  width: 112px;
  height: 24px;
  border-radius: 20px;
  background-color: #F6F6F6;
  flex-direction: row;
  align-items: center;
`;

export const CashBox= styled(View)`
  width: 50px;
  height: 100%;
  border-radius: 20px;
  background-color: #C67C4E;
  align-items: center;
  justify-content: center;
`;

export const CashPriceText = styled(Text)`
  font-size: 14px;
  font-family: 'Sora-Regular';
  color: white;
`;

export const CashPriceTextSecondary = styled(Text)`
  font-size: 14px;
  font-family: 'Sora-Regular';
  color: #2F2D2C;
`;

export const Discount = styled(View)`
  width: 100%;
  height: 56px;
  border-width: 2px;
  border-color: #EAEAEA;
  border-style: solid;
  border-radius: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 15px;
`;

export const DiscountText = styled(Text)`
  font-size: 18px;
  font-family: 'Sora-SemiBold';
  color: #2F2D2C;
`;

export const ItemOrderWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemOrderImage = styled(ImageBackground)`
  width: 54px;
  height: 54px;
`;

export const ItemOrderTitle = styled(Text)`
  font-size: 20px;
  font-family: 'Sora-SemiBold';
  color: #2F2D2C;
`;

export const ItemOrderSubtitle = styled(Text)`
  font-size: 16px;
  font-family: 'Sora-Regular';
  color: #9B9B9B;
`;

export const ItemOrderValueText = styled(Text)`
  font-size: 18px;
  font-family: 'Sora-SemiBold';
  color: #2F2D2C;
`;

export const ItemOrderCircleButton = styled(Pressable)`
  width: 28px;
  height: 28px;
  border: 1px solid #EAEAEA;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
`;

export const ActionButton = styled(Pressable)`
  height: 28px;
  padding-horizontal: 10px;
  border: 1px solid #EAEAEA;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const ActionText = styled(Text)`
  font-size: 14px;
  font-family: 'Sora-Regular';
  color: #303336;

`;