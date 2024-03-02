import styled from "styled-components/native";

import { ImageBackground, View, Text, TouchableOpacity } from "react-native";

// ----------------------------------------------------------------------

export const Wrapper = styled(ImageBackground)`
  flex: 1;
  background-color: black;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled(View)`
  width: 100%;
  align-self: flex-end;
  gap: 10px;
  padding-bottom: 48px;
`;

export const Title = styled(Text)`
  font-size: 40px;
  font-family: 'Sora-SemiBold';
  text-align: center;
  padding: 0 25px;
  color: white;
`;

export const Description = styled(Text)`
  font-size: 18px;
  font-family: 'Sora-Regular';
  text-align: center;
  padding: 0 25px;
  margin-bottom: 15px;
  color: #A9A9A9;
`;

export const Button = styled(TouchableOpacity)`
  width: 80%;
  height: 62px;
  align-self: center;
  background-color: #C67C4E;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled(Text)`
  font-size: 16px;
  font-family: 'Sora-SemiBold';
  color: white;
`;
