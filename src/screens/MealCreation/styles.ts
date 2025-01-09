import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Content = styled.View`
  flex: 1;

  padding: 40px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Scroll = styled.ScrollView`
  flex-grow: 1;
`;

export const Row = styled.View`
  flex-direction: row;

  gap: 20px;
`;

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    margin-bottom: 8px;

    color: ${theme.COLORS.GRAY_2};
    
    line-height: ${theme.FONT_SIZE.MD * 1.3}px;
  `}
`;
