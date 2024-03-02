import { PressableProps } from "react-native";

import { StartIcon } from "@/assets/icons/star";
import { PlusIcon } from "@/assets/icons/plus";

import { 
  Wrapper, 
  CoverContent, 
  WrapperStar,
  ScoreText,
  Title, 
  Subtitle, 
  PriceText, 
  AddButton,
  Body,
  Footer,
} from "./style";

// ----------------------------------------------------------------------

export function CardProduct({ ...rest }: PressableProps) {
  return(
    <Wrapper {...rest}>
      <CoverContent
        source={require("@/assets/images/coffee-cappucino.png")}
        resizeMode="cover"
        imageStyle={{
          borderRadius: 16
        }}
      >
        <WrapperStar>
          <StartIcon 
            width={12}
            height={12}
          />
          <ScoreText>4.8</ScoreText>
        </WrapperStar>

      </CoverContent>

      <Body>
        <Title>
          Cappucino
        </Title>

        <Subtitle>
          with Chocolate
        </Subtitle>

        <Footer>
          <PriceText>
            $ 4.53
          </PriceText>

          <AddButton>
            <PlusIcon
              width={20}
              height={20}
            />
          </AddButton>
        </Footer>
      </Body>
    </Wrapper>
  )
}
