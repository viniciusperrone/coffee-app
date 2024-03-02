import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { ScreensNavigation } from "@/navigation/routes";
import { useBoolean } from "@/hooks/use-boolean";
import { HeartIcon } from "@/assets/icons/heart";
import { StartIcon } from "@/assets/icons/star";

import { 
  Wrapper, 
  Content, 
  Image,
  Title,
  Heading,
  SubHeading,
  Divider,
  Row,
  Column,
  SizeButton,
  SizeButtonText,
  Square,
  SquareIcon,
  BottomSheet,
  BottomSheetTitle,
  BottomSheetSubtitle,
  BottomSheetButton,
  BottomSheetTextButton
} from "./style";

// ----------------------------------------------------------------------

export function DetailProductPage() {
  const favorite = useBoolean();
  const navigation = useNavigation<ScreensNavigation>();

  return(
    <Wrapper>
      <Header 
        title="Detail"
        onBack={navigation.goBack}
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
        <Column
          style={{
            paddingHorizontal: 30,
            paddingVertical: 30,
            gap: 15,
          }}
        >
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

            <Row style={{ 
              flex: 1, 
              justifyContent: 'flex-end',
              gap: 10
            }}>
              <Square>
                <SquareIcon 
                  source={require("@/assets/images/grain.png")}
                />
              </Square>
              <Square>
                <SquareIcon
                  source={require("@/assets/images/milk.png")}
                />
              </Square>
            </Row>
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
        </Column>
        <BottomSheet>
          <Row
            style={{
              justifyContent: 'space-between'
            }}
          >
            <Column 
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <BottomSheetTitle>
                Price
              </BottomSheetTitle>
              <BottomSheetSubtitle>
                $ 4.53
              </BottomSheetSubtitle>
            </Column>
            <BottomSheetButton onPress={() => navigation.navigate("order")}>
              <BottomSheetTextButton>
                Buy Now
              </BottomSheetTextButton>
            </BottomSheetButton>
          </Row>
        </BottomSheet>
      </Content>
    </Wrapper>
  )
}
