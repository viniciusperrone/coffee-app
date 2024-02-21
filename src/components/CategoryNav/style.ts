import styled from "styled-components/native";

import { TouchableOpacity, Text } from "react-native";

import { TCategory } from "@/types/category";

type Props = Omit<TCategory, "id" | "name">

export const Button = styled(TouchableOpacity)<Props>`
  height: 48px;
  padding-horizontal: 20px;
  background-color: ${props => props.selected ? "#C67C4E" : "#FFFFFF"};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled(Text)<Props>`
  font-size: 18px;
  font-family: ${props => props.selected ? "Sora-SemiBold" : "Sora-Regular"};
  color: ${props => props.selected ? "#FFFFFF" : "#2F4B4E"}
`;