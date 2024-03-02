import { 
  Wrapper, 
  WrapperTag, 
  WrapperText, 
  WrapperDescription,
  DescriptionBackground, 
  DescriptionText
} from "./style";

// ----------------------------------------------------------------------

export function PromoCard() {
  return(
    <Wrapper 
      source={require("@/assets/images/promo-background.png")}
      resizeMode="cover"
      imageStyle={{
        borderRadius: 16
      }}
    >
      <WrapperTag>
        <WrapperText>
          Promo
        </WrapperText>
      </WrapperTag>

      <WrapperDescription>
        <DescriptionBackground>
          <DescriptionText>
            Buy one get
          </DescriptionText>
        </DescriptionBackground>

        <DescriptionBackground>
          <DescriptionText>
            on free
          </DescriptionText>
        </DescriptionBackground>
      </WrapperDescription>

    </Wrapper>
  )
}
