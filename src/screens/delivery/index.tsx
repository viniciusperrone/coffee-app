import { SafeAreaView } from "react-native";
import MapView from 'react-native-maps';

import AntDesign from "react-native-vector-icons/AntDesign";
import { GpsIcon } from '@/assets/icons/gps';

import { 
  Wrapper, 
  Content, 
  FloatingButton, 
  Row, 
  BottomSheet, 
  BottomSheetHeader,
  Heading,
  SubHeading,
  SimpleText,
  SimpleTextBold
} from "./style";

export function DeliveryPage() {
  return(
    <Wrapper>
      <MapView
        initialRegion={{
          latitude: -25.4284,
          longitude: -49.2733,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034
        }}
        style={{
          position: 'absolute',
          zIndex: -1,
          left: 0,
          top: 0,
          right: 0,
          width: '100%',
          height: '100%'
        }}
      />
      <SafeAreaView>
        <Content>
          <Row
            style={{
              paddingHorizontal: 30,
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <FloatingButton>
              <AntDesign name="left" size={22} />
            </FloatingButton>
            <FloatingButton>
              <GpsIcon />
            </FloatingButton>
          </Row>
        </Content>
        <BottomSheet>
          <BottomSheetHeader>
            <Heading>10 minutes left</Heading>
            <Row style={{ gap: 2 }}>
              <SimpleText>
                Delivery to
              </SimpleText>
              <SimpleTextBold>
                Jl. Kpg Sutoyo
              </SimpleTextBold>
            </Row>
          </BottomSheetHeader>
        </BottomSheet>
      </SafeAreaView>
    </Wrapper>
  )
}
