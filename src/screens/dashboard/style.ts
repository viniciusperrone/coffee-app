import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled(View)`
  flex: 1;
  background-color: white;
`;

export const ContentWrapper = styled(View)`
  position: absolute;
  top: 0;
  flex: 1;
  background-color: red;
  /* z-index: -1; */
`;

export const Header = styled(View)`
  width: 100%;
`;

export const WrapperLeftHeader= styled(View)`
  width: 100%;
`;

export const HeaderTitle = styled(Text)`
  font-size: 12px;
  /* color: #; */
`;

export const HeaderSubtitle = styled(Text)`
  width: 100%;
`;

export const styles = StyleSheet.create({
  backgroundGradient: {
    // position: 'absolute',
    zIndex: -1,
    left: 0,
    top: 0,
    right: 0,
    width: '100%',
    height: '40%'
  }
});