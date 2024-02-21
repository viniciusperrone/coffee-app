import { useState } from "react";
import { FlatList } from "react-native";

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

import { _categories } from "@/_mocks/categories";
import { CategoryNav } from "@/components/CategoryNav";

const DEFAULT_CATEGORY_SELECTED = _categories[0].name;

export function Dashboard() {
  const [category, setCategory] = useState<string>(DEFAULT_CATEGORY_SELECTED);

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
            contentContainerStyle={{
              paddingHorizontal: 30,
              gap: 20
            }}
            horizontal
          />
        </Body>
      </ContentWrapper>
    </Wrapper>
  )
}