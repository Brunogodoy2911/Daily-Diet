import styled, { css } from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";

export type StatisticsHeaderTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: StatisticsHeaderTypeStyleProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  height: 150px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const TextStatus = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_1};

    line-height: ${theme.FONT_SIZE.XXXL * 1.3}px;
  `}
`;

export const SubTextStatus = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    color: ${theme.COLORS.GRAY_2};

    line-height: ${theme.FONT_SIZE.MD * 1.3}px;
  `}
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  top: 20px;
  left: 24px;
`;
