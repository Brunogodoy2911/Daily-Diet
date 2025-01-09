import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type InputTextTypeStyleProps = "DEFAULT" | "DESCRIPTION";

type Props = {
  type: InputTextTypeStyleProps;
};

export const Container = styled.View`
  flex: 1;

  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_2};
    
    line-height: ${theme.FONT_SIZE.MD * 1.3}px;
  `}
`;

export const InputText = styled(TextInput)<Props>`
  width: 100%;
  height: ${({ type }) => (type === "DESCRIPTION" ? 120 : 48)}px;

  padding: 14px;
  margin-bottom: 24px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  text-align-vertical: top;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;
