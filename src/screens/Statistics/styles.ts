import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type StatisticsTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: StatisticsTypeStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  flex: 1;

  align-items: center;

  padding-left: 24px;
  padding-right: 24px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_1};
    text-align: center;

    margin-top: 33px;
    margin-bottom: 23px;
  `}
`;

export const Row = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 12px;
`;
