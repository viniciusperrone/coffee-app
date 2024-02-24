import { useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from 'expo-linear-gradient';

import { 
  Wrapper, 
  ContentWrapper, 
  Header,
  WrapperLeftHeader,
  HeaderTitle,
  HeaderSubtitle,
  Avatar,
  Body,
  styles 
} from "./style";

import { SearchInput } from '@/components/SearchInput';
import { PromoCard } from '@/components/PromoCard';
import { CategoryNav } from "@/components/CategoryNav";
import { CardProduct } from "@/components/CardProduct";

import { _categories } from "@/_mocks/categories";
import { StackNavigation } from "@/navigation/routes";

const DEFAULT_CATEGORY_SELECTED = _categories[0].name;

export function Dashboard() {
  const [category, setCategory] = useState<string>(DEFAULT_CATEGORY_SELECTED);
  const navigation = useNavigation<StackNavigation>();

  return(
    <Wrapper>
      <LinearGradient 
        colors={["#313131", "#242424", "#131313"]}
        start={{
          x: 0, y: 1
        }}
        end={{
          x: 1, 
          y: 0
        }}
        style={styles.backgroundGradient}
      />

      <ContentWrapper>
        <Header>
          <WrapperLeftHeader>
            <HeaderTitle>
              Location
            </HeaderTitle>
            <HeaderSubtitle>
              Bilzen, Tanjungbalai
            </HeaderSubtitle>
          </WrapperLeftHeader>

          <Avatar 
            source={require("@/assets/images/avatar.png")}
          />
        </Header>
        <Body>
          <SearchInput />
          <PromoCard />
          <FlatList
            data={_categories}
            renderItem={({ item }) => (
              <CategoryNav 
                key={item.id}
                {...item}
              />
            )}
            style={{
              minHeight: 48,
            }}
            contentContainerStyle={{
              paddingHorizontal: 30,
              gap: 20
            }}
            horizontal
          />

          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingHorizontal: 30,
              gap: 10,
            }}
            showsVerticalScrollIndicator={false}
          >
            {
              Array.from({ length: 8}).map((_) => <CardProduct onPress={() => navigation.navigate("detail-product")}/>)
            }
          </ScrollView>
        </Body>
      </ContentWrapper>
    </Wrapper>
  )
}