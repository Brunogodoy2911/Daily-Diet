import styled, { css } from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
  gap: 12px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_2 : theme.COLORS.white};

  border-width: ${({ type }) => (type === "PRIMARY" ? 0 : 1)}px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_1};
  border-radius: 6px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${type === "PRIMARY" ? theme.COLORS.white : theme.COLORS.GRAY_1};
  `}
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === "PRIMARY" ? theme.COLORS.white : theme.COLORS.GRAY_1,
}))``;
