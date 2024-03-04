import { SafeAreaView } from "react-native";
import MapView from 'react-native-maps';

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { GpsIcon } from '@/assets/icons/gps';

import { 
  Wrapper, 
  Content, 
  FloatingButton, 
  Row, 
  Column,
  BottomSheet, 
  BottomSheetHeader,
  BottomSheetContent,
  Heading,
  SubHeading,
  SimpleText,
  SimpleTextBold,
  Progress,
  Box,
  SquareIcon
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
          <BottomSheetContent>
            <Row 
              style={{ 
                width : '100%', 
                gap: 10
              }}
            >
              <Progress color="#36C07E" />
              <Progress color="#36C07E" />
              <Progress color="#36C07E" />
              <Progress color="#DFDFDF" />
            </Row>

            <Box>
              <SquareIcon>
                <FontAwesome 
                  name="motorcycle"
                  color="#C67C4E"
                  size={25}
                />
              </SquareIcon>
              <Column style={{ gap: 10 }}>
                <SubHeading>Delivered your order</SubHeading>
                <SimpleText>
                  We deliver your goods to you in {'\n'} 
                  the shortes possible time.
                </SimpleText>
              </Column>
            </Box>
          </BottomSheetContent>
        </BottomSheet>
      </SafeAreaView>
    </Wrapper>
  )
}
