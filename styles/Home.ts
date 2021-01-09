import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.bgColor.main};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
`;
