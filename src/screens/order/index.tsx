import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";

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
  BottomSheet,
  BottomSheetButton,
  BottomSheetTextButton,
  DotsContainer,
  Dots,
  CashContainer,
  CashBox,
  CashPriceText,
  CashPriceTextSecondary
} from "./style";
import { CashIcon } from "@/assets/icons/cash";

// ----------------------------------------------------------------------

export function Order() {
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
            gap: 15
          }}
        >
          <Heading>Delivery Address</Heading>
          <SubHeading>Jl. Kpg Sutoyo</SubHeading>
          <Divider />
        </Column>
        <DividerLarge />
        <Column
          style={{
            paddingHorizontal: 30,
            paddingTop: 30,
            gap: 15
          }}
        >
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