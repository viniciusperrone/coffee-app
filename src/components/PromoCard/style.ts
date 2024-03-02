import styled from "styled-components";

import { ImageBackground, View, Text, Dimensions } from "react-native";

// ----------------------------------------------------------------------

export const Wrapper = styled(ImageBackground)`
  width: ${() => Dimensions.get("window").width - 60};
  height: 160px;
  align-self: center;
  justify-content: space-between;
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

export const WrapperTag = styled(View)`
  width: 80px;
  height: 34px;
  background-color: #ED5151;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const WrapperText = styled(Text)`
  font-size: 18px;
  font-family: 'Sora-SemiBold';
  color: white;
`;

export const WrapperDescription = styled(View)`
  gap: 10px;
  align-items: self-end;
`;

export const DescriptionBackground = styled(View)`
  /* width: auto */
  height: 23px;
  position: 'relative';
  z-index: -1;
  background-color: #1C1C1C;
`;

export const DescriptionText = styled(Text)`
  position: 'absolute';
  margin-top: -15px;
  font-size: 32px;
  font-family: 'Sora-SemiBold';
  color: white;
`;
