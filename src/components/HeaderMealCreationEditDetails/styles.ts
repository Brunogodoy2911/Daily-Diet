import styled, { css } from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

export type HeaderMealCreationEditDetailsTypeStyleProps =
  | "DEFAULT"
  | "PRIMARY"
  | "SECONDARY"
  | "";

type Props = {
  type: HeaderMealCreationEditDetailsTypeStyleProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  height: 80px;

  align-items: center;
  justify-content: center;

  flex-direction: row;

  background-color: ${({ type, theme }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))`
  position: absolute;
  left: 24px;
`;
