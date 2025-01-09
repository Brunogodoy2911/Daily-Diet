import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type FeedbackTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type?: FeedbackTypeStyleProps;
  isBold?: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    color: ${theme.COLORS.GRAY_1};
  `}
  ${({ theme, isBold }) =>
    isBold &&
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    text-align: center;
`;

export const StyledImage = styled.Image`
  height: 320px;
  width: 244px;

  margin-top: 40px;
  margin-bottom: 32px;
`;
