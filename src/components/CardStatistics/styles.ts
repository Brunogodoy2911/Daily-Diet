import styled, { css } from "styled-components/native";

export type CardStatisticsTypeStyleProps =
  | "DEFAULT"
  | "PRIMARY"
  | "SECONDARY"
  | "MINI_PRIMARY"
  | "MINI_SECONDARY";

type Props = {
  type: CardStatisticsTypeStyleProps;
};

export const Container = styled.View<Props>`
  height: ${({ type }) =>
    type === "MINI_PRIMARY" || type === "MINI_SECONDARY" ? "115px" : "100px"};
  width: ${({ type }) =>
    type === "MINI_PRIMARY" || type === "MINI_SECONDARY" ? "48%" : "100%"};

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" || type === "MINI_PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY" || type === "MINI_SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};

  justify-content: center;
  align-items: center;

  padding-left: 12px;
  padding-right: 12px;

  margin-bottom: 12px;

  border-radius: 8px;
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

    text-align: center;
  `}
`;
