import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 327px;
  height: 192px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  padding: 24px;

  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_2};
  `}
  text-align: center;
  margin-bottom: 32px;
`;

export const Row = styled.View`
  flex-direction: row;

  gap: 12px;
`;
