import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { HeartIcon } from "@/assets/icons/heart";
import { StackNavigation } from "@/navigation/routes";
import { useBoolean } from "@/hooks/use-boolean";

import { 
  Wrapper, 
  Content, 
  Image,
  Title,
  Heading,
  SubHeading,
  Divider,
  Row,
  SizeButton,
  SizeButtonText
} from "./style";
import { StartIcon } from "@/assets/icons/star";

export function DetailProduct() {
  const favorite = useBoolean();
  const navigate = useNavigation<StackNavigation>();

  return(
    <Wrapper>
      <Header 
        title="Detail"
        onBack={navigate.goBack}
        rightComponent={(
          <HeartIcon 
            fill={favorite.value ? "#FF6961" : "none"}
            width={26}
            height={24}
          />
        )}
        onAction={favorite.onToggle}
      />

      <Content>
        <Image 
          source={require("@/assets/images/coffee-cappucino.png")}
          resizeMode="cover"
          imageStyle={{
            borderRadius: 16
          }}
        />

        <Title>
          Cappucino
        </Title>

        <SubHeading>
          with Chocolate
        </SubHeading>

        <Row style={{ gap: 5 }}>
          <StartIcon 
            width={20}
            height={20}
          />

          <Heading>4.8</Heading>

          <SubHeading style={{ marginTop: 2, fontFamily: 'Sora-SemiBold' }}>(230)</SubHeading>
        </Row>
        <Divider />

        <Heading>Description</Heading>

        <SubHeading>
          A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml 
          of espresso coffee and 85ml of fresh milk the fo.. Read More
        </SubHeading>
        
        <Heading>Size</Heading>

        <Row
          style={{
            justifyContent: "space-between"
          }}
        >
          <SizeButton selected={false}>
            <SizeButtonText selected={false}>
              S
            </SizeButtonText>
          </SizeButton>
          <SizeButton selected={true}>
            <SizeButtonText selected={true}>
              M
            </SizeButtonText>
          </SizeButton>
          <SizeButton selected={false}>
            <SizeButtonText selected={false}>
              L
            </SizeButtonText>
          </SizeButton>
        </Row>

      </Content>

    </Wrapper>
  )
}