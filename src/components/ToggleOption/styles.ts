import styled, { css } from "styled-components/native";

export type ToggleOptionTypeStyleProps = "PRIMARY" | "SECUNDARY";

type Props = {
  type: ToggleOptionTypeStyleProps;
  isSelected?: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 47%;
  height: 50px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
  gap: 8px;
  
  margin-bottom: 148px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 6px;

  ${({ theme, type, isSelected }) =>
    isSelected &&
    css`
      border: ${type === "PRIMARY"
        ? `1px solid ${theme.COLORS.GREEN_DARK}`
        : `1px solid ${theme.COLORS.RED_DARK}`};

      background-color: ${type === "PRIMARY"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
    `}
`;

export const Dot = styled.View<Props>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  border-radius: 999px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_1};
  `}
`;
