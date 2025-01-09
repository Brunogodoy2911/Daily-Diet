import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type MealDetailsTypeStyleProps = "PRIMARY" | "SECONDARY" | "";

type Props = {
  type: MealDetailsTypeStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  flex: 1;

  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XX}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px;
`;

export const MiniTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom:8px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 24px;
`;

export const Tag = styled.View`
  width: 144px;
  height: 34px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 1000px;
`;

export const Dot = styled.View<Props>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  border-radius: 999px;
`;

export const TextTag = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Footer = styled.View`
  flex: 1;

  justify-content: flex-end;

  margin-bottom: 16px;
  gap: 9px;
`;
