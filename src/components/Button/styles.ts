import styled from "styled-components";

export const ButtonStyle = styled.button`
  margin-top: ${({ theme }) => theme.sizes.size_2};
  font-size: ${({ theme }) => theme.sizes.size_4};
  padding: 6px 52px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 25px;
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

  &&:hover {
    background-image: linear-gradient(
        ${({ theme }) => theme.colors.background},
        ${({ theme }) => theme.colors.background}
      ),
      radial-gradient(
        circle at left top,
        ${({ theme }) => theme.colors.violet},
        ${({ theme }) => theme.colors.turquoise}
      );
    padding: 12px 52px;
    transition: all 0.3s ease;
  }
`;
