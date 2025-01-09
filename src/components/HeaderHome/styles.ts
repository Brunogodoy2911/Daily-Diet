import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 999px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-width: 2px;
`;
