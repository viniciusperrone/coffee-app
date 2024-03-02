import styled from "styled-components";

import { 
  View, 
  TouchableOpacity, 
  Dimensions, 
  TextInput
} from "react-native";

// ----------------------------------------------------------------------

export const Container = styled(View)`
  align-self: center;
  width: ${() => Dimensions.get('window').width - 60};
  height: 52px;
  background-color: #313131;
  border-radius: 16px;
  padding-horizontal: 4px;
  padding-vertical: 4px;
  flex-direction: row;
`;

export const SubmitButton = styled(TouchableOpacity)`
  width: 44;
  height: 44;
  background-color: #C67C4E;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const Field = styled(TextInput).attrs({
  placeholderTextColor: '#989898',
})`
  flex: 1;
  font-family: 'Sora-Regular';
  font-size: 16px;
  color: #DDDDDD;
`;
