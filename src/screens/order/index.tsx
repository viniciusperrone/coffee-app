import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import { Header } from "@/components/Header";
import { CashIcon } from "@/assets/icons/cash";
import { DiscountIcon } from "@/assets/icons/discount";

import { 
  Wrapper, 
  Content, 
  Column, 
  Row,
  Divider,
  DividerLarge,
  Heading,
  SubHeading,
  NormalText,
  LargeText,
  ThinText,
  BottomSheet,
  BottomSheetButton,
  BottomSheetTextButton,
  DotsContainer,
  Dots,
  CashContainer,
  CashBox,
  CashPriceText,
  CashPriceTextSecondary,
  Discount,
  DiscountText,
  ItemOrderWrapper,
  ItemOrderImage,
  ItemOrderTitle,
  ItemOrderSubtitle,
  ItemOrderCircleButton,
  ItemOrderValueText,
  ActionButton,
  ActionText
} from "./style";
import { EditIcon } from "@/assets/icons/edit";
import { NoteIcon } from "@/assets/icons/note";

// ----------------------------------------------------------------------

export function OrderPage() {
  const navigation = useNavigation();

  const renderBottomSheet = (
    <BottomSheet>
      <Row 
        style={{ 
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Row style={{ gap: 10, alignItems: 'center' }}>
          <CashIcon />
          <CashContainer>
            <CashBox>
              <CashPriceText>
                Cash
              </CashPriceText>
            </CashBox>
            <Row style={{ width: 62, justifyContent: 'center' }}>
              <CashPriceTextSecondary>
                $ 5.53
              </CashPriceTextSecondary>
            </Row>
          </CashContainer>
        </Row>
        <DotsContainer>
          <Dots />
          <Dots />
          <Dots />
        </DotsContainer>
      </Row>
      <BottomSheetButton>
        <BottomSheetTextButton>
          Order
        </BottomSheetTextButton>
      </BottomSheetButton>
    </BottomSheet>
  );

  return(
    <Wrapper>
      <Header
        title="Order"
        onBack={navigation.goBack}
      />
      <Content>
        <Column 
          style={{
            paddingHorizontal: 30,
            paddingTop: 30,
            paddingBottom: 15,
            gap: 15
          }}
        >
          <Heading>Delivery Address</Heading>
          <SubHeading>Jl. Kpg Sutoyo</SubHeading>
          <ThinText>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</ThinText>
          <Row style={{ gap: 10 }}>
            <ActionButton>
              <EditIcon />
              <ActionText>Edit Address</ActionText>
            </ActionButton>
            <ActionButton>
              <NoteIcon />
              <ActionText>
                Add Note
              </ActionText>
            </ActionButton>
          </Row>
          <Divider />
          <Item />
        </Column>
        <DividerLarge />
        <Column
          style={{
            paddingHorizontal: 30,
            paddingTop: 30,
            gap: 15
          }}
        >
            <Discount>
              <Row style={{ gap: 10 }}>
                <DiscountIcon />
                <DiscountText>
                  1 Discount is applied
                </DiscountText>
              </Row>
              <AntDesign name="right" size={22} />
            </Discount>
          <Heading>Payment Summary</Heading>
          <Row
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <NormalText>Price</NormalText>
            <LargeText>$ 4.53</LargeText>
          </Row>
          <Row
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <NormalText>Delivery Fee</NormalText>
            <LargeText>$ 1.0</LargeText>
          </Row>
          <Divider />
          <Row
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <NormalText>Total Payment</NormalText>
            <LargeText>$ 5.53</LargeText>
          </Row>
        </Column>
      </Content>
      {renderBottomSheet}
    </Wrapper>
  )
}

function Item() {
  return(
    <ItemOrderWrapper>
      <Row style={{ gap: 15 }}>
        <ItemOrderImage 
          source={require("@/assets/images/coffee-cappucino.png")}
          resizeMode="cover"
          imageStyle={{
            borderRadius: 12
          }}
        />
        <Column style={{ justifyContent: 'center' }}>
          <ItemOrderTitle>
            Cappucino
          </ItemOrderTitle>
          <ItemOrderSubtitle>
            with Chocolate
          </ItemOrderSubtitle>
        </Column>
      </Row>
      <Row style={{ alignItems: 'center', gap: 8 }}>
        <ItemOrderCircleButton>
          <AntDesign 
            name="minus" 
            size={15} 
            color="#AAADB0"
          />
        </ItemOrderCircleButton>
        <ItemOrderValueText>1</ItemOrderValueText>
        <ItemOrderCircleButton>
          <Entypo name="plus" size={15} />
        </ItemOrderCircleButton>
      </Row>
    </ItemOrderWrapper>
  )
}