import { SearchIcon } from "@/assets/icons/search";
import { AnalyticsIcon } from '@/assets/icons/analytics';

import { 
  Container, 
  SubmitButton,
  Field,
} from "./style";

export function SearchInput() {
  return(
    <Container>
      <SearchIcon />
      <Field placeholder="Search coffee" />
      <SubmitButton activeOpacity={0.8}>
        <AnalyticsIcon />
      </SubmitButton>
    </Container>
  )
}