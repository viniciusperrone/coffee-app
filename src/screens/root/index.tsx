import { useNavigation } from "@react-navigation/native";

import { StackNavigation } from "@/navigation/stack.routes";

import { Wrapper, Content, Title, Description, Button, TextButton } from "./style";

export function RootPage() {
  const navigation = useNavigation<StackNavigation>();

  return(
    <Wrapper 
      source={require('@/assets/images/background.png')}
      resizeMode="contain"
      imageStyle={{
        marginBottom: 200
      }}
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
        <Button 
          activeOpacity={0.9}
          onPress={() => navigation.navigate("dashboard")}
        >
          <TextButton>
            Get Started
          </TextButton>
        </Button>
      </Content>
    </Wrapper>
  )
}