import styled from "styled-components/native";

import { View, Text } from "react-native";

// ----------------------------------------------------------------------

export const Wrapper = styled(View)`
  width: 100%;
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 30px;
`;

export const Title = styled(Text)`
  font-family: 'Sora-SemiBold';
  font-size: 24px;
  color: #2F2D2C;
`;