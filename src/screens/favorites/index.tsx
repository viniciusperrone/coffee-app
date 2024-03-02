import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { Hidden } from "@/components/Hidden";

import { Wrapper } from "./style";

// ----------------------------------------------------------------------

export function FavoritesPage() {
  const navigation = useNavigation();

  return(
    <Wrapper>
      <Header
        title="Favorites"
        onBack={navigation.goBack}
        rightComponent={<Hidden />}
      />

    </Wrapper>
  )
}
