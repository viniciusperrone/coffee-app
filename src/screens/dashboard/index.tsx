import { LinearGradient } from 'expo-linear-gradient';

import { 
  Wrapper, 
  ContentWrapper, 
  Header,
  WrapperLeftHeader,
  HeaderTitle,
  HeaderSubtitle,
  styles 
} from "./style";

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
        </Header>
      </ContentWrapper>
    </Wrapper>
  )
}