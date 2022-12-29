import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";

type StyledTextInput = {
  style: any
  focusedStyle: any
} & TextInputProps

export function StyledTextInput({ style, focusedStyle, ...props }: StyledTextInput) {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <TextInput
      {...props}
      style={!focus ? style : { ...style, ...focusedStyle }}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  )
}