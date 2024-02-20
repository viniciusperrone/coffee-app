import { Wrapper, Content, Title, Description, Button, TextButton } from "./style";

export function RootPage() {
  return(
    <Wrapper 
      source={require('@/assets/images/background.png')}
      resizeMode="cover"
    >
      <Content>
        <Title>
          Coffee so good, 
          your taste buds 
          will love it.
        </Title>
        <Description>
          The best grain, the finest roast, the 
          powerful flavor.
        </Description>
        <Button activeOpacity={0.9}>
          <TextButton>
            Get Started
          </TextButton>
        </Button>
      </Content>
    </Wrapper>
  )
}