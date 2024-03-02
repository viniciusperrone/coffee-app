import styled from "styled-components";

import { View, Text, Pressable, ImageBackground, Dimensions } from "react-native";

// ----------------------------------------------------------------------

export const Wrapper = styled(Pressable)`
  width: ${() => (Dimensions.get("window").width - 70) / 2};
  min-height: 240px;
  background-color: white;
  border-radius: 20px;
  gap: 10px;
`;

export const WrapperStar = styled(View)`
  width: 50px;
  height: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const CoverContent = styled(ImageBackground)`
  margin-top: 5;
  width: ${() => (Dimensions.get("window").width - 90) / 2};
  height: 130px;
  align-self: center;
`;

export const Body = styled(View)`
  flex: 1;
  padding-horizontal: 10px;
  gap: 10px;
`;

export const Footer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-family: 'Sora-SemiBold';
  color: #2F2D2C;
`;

export const Subtitle = styled(Text)`
  font-size: 16px;
  font-family: 'Sora-SemiBold';
  color: #9B9B9B;
`;

export const PriceText = styled(Text)`
  font-size: 20px;
  font-family: 'Sora-SemiBold';
  color: #2F4B4E;
`;

export const ScoreText = styled(Text)`
  font-size: 14px;
  font-family: 'Sora-SemiBold';
  color: white;
`;

export const AddButton = styled(Pressable)`
  width: 32px;
  height: 32px;
  background-color: #C67C4E;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
