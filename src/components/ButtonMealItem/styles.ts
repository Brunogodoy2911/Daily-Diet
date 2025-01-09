import styled, { css } from "styled-components/native";

export type ButtonMealItemTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonMealItemTypeStyleProps;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;

  margin-top: 8px;

  padding-left: 12px;
  padding-right: 16px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
`;

export const TimeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_4};

  margin-left: 8px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    flex: 1;

    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

  border-radius: 999px;
`;
