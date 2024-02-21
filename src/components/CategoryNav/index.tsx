import { View } from "react-native";

import { TCategory } from "@/types/category";

import { Button, TextButton } from "./style";

export function CategoryNav({ name, selected }: TCategory) {
  return(
    <Button selected={selected}>
      <TextButton selected={selected}>
        {name[0].toUpperCase() + name.substring(1)}
      </TextButton>
    </Button>
  )
}