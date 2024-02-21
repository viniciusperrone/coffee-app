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

export function Dashboard() {
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
        </Body>
      </ContentWrapper>
    </Wrapper>
  )
}