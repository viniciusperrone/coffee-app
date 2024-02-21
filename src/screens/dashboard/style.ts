import { 
  SafeAreaView, 
  View,
  Text,
  Image, 
  StyleSheet 
} from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

export const ContentWrapper = styled(View)`
  flex: 1;
  position: relative;
  top: 0;
  padding-top: 30px;
  gap: 10px;
  z-index: -1;
`;

export const Header = styled(View)`
  width: 100%;
  padding-horizontal: 30px;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperLeftHeader= styled(View)``;

export const HeaderTitle = styled(Text)`
  font-size: 14px;
  font-family: 'Sora-Regular';
  color: #B7B7B7;
  /* color: #; */
`;

export const Avatar = styled(Image)`
  width: 44px;
  height: 44px;
  border-radius: 14px;
`;

export const HeaderSubtitle = styled(Text)`
  font-size: 18px;
  font-family: 'Sora-SemiBold';
  color: #DDDDDD;
`;

export const Body = styled(View)`
  flex: 1;
  padding-top: 30px;
  gap: 30px;
`;

export const styles = StyleSheet.create({
  backgroundGradient: {
    position: 'absolute',
    backgroundColor: 'red',
    zIndex: -1,
    left: 0,
    top: 0,
    right: 0,
    width: '100%',
    height: '40%'
  }
});