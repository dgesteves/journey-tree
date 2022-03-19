import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => `calc(${theme.sizes.size_9}*4)`};
`;

export const Heading = styled.h1`
  font-family: "Fredoka", sans-serif;
  margin: ${({ theme }) => theme.sizes.size_9} 0;
  color: ${({ theme }) => theme.colors.white};
  border: 2px double transparent;
  background-image: linear-gradient(
      ${({ theme }) => theme.colors.background},
      ${({ theme }) => theme.colors.background}
    ),
    radial-gradient(
      circle at left top,
      ${({ theme }) => theme.colors.turquoise},
      ${({ theme }) => theme.colors.violet}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 8px;
  border-radius: 8px;
  border-left: none;
  border-right: none;
`;

export default Main;
