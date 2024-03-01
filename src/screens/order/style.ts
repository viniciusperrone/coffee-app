import { View, ScrollView, Dimensions, Text } from "react-native";

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
