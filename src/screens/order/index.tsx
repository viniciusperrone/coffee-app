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
  BottomSheetTextButton
} from "./style";
import { CashIcon } from "@/assets/icons/cash";

// ----------------------------------------------------------------------

export function Order() {
  const navigation = useNavigation();
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
        <BottomSheet>
          <Row>
            <CashIcon 
              
            />
          </Row>
          <BottomSheetButton>
            <BottomSheetTextButton>
              Order
            </BottomSheetTextButton>
          </BottomSheetButton>
        </BottomSheet>
      </Content>
    </Wrapper>
  )
}