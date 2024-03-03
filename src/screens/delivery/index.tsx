import MapView from 'react-native-maps';

import { Wrapper } from "./style";

export function DeliveryPage() {
  return(
    <Wrapper>
      <MapView 
        style={{
          flex: 1
        }}
      />
    </Wrapper>
  )
}
