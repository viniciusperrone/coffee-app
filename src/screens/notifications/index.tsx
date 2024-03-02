import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { Hidden } from "@/components/Hidden";

import { Wrapper } from "./style";

// ----------------------------------------------------------------------

export function Notifications() {
  const navigation = useNavigation();

  return(
    <Wrapper>
      <Header
        title="Notifications"
        onBack={navigation.goBack}
        rightComponent={<Hidden />}
      />
    </Wrapper>
  )
}
