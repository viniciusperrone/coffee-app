import styled from "styled-components/native";

import { View, Pressable } from "react-native";

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