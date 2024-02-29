import { ReactNode } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Wrapper, Title } from "./style";

// ----------------------------------------------------------------------

type HeaderProps = {
  title: string;
  onBack: () => void;
  rightComponent?: ReactNode;
  onAction?: () => void;
};

// ----------------------------------------------------------------------

export function Header({ 
  title, 
  onBack,
  rightComponent, 
  onAction 
}: HeaderProps) {
  const renderLeftComponent = (
    <TouchableOpacity onPress={onBack}>
      <Icon name="arrow-back-ios" size={24} />
    </TouchableOpacity>
  )
  
  const renderRightComponent = (
    <TouchableOpacity 
      onPress={onAction}
      style={{ width: 24 }}
    >
      {rightComponent}
    </TouchableOpacity>
  )

  return(
    <SafeAreaView>
      <Wrapper>
        {renderLeftComponent}
        <Title>
          {title}
        </Title>
        {renderRightComponent}
      </Wrapper>
    </SafeAreaView>
  )
}