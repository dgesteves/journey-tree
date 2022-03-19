import styled from "styled-components";

export const NodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Step = styled.div`
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
  padding: ${({ theme }) => theme.sizes.size_6};
  border-radius: 8px;
  max-width: ${({ theme }) => `calc(${theme.sizes.size_9}*6)`};
  min-height: ${({ theme }) => theme.sizes.size_9};
  text-align: center;
  cursor: pointer;
`;
