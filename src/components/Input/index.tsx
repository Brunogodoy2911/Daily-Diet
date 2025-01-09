import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { InputText, InputTextTypeStyleProps } from "./styles";

type Props = TextInputProps & {
  type?: InputTextTypeStyleProps;
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ type = "DEFAULT", inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <InputText
      type={type}
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_3}
      {...rest}
    />
  );
}
