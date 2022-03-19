import styled from "styled-components";

export const Heading = styled.p`
  font-size: ${({ theme }) => theme.sizes.size_5};
  font-weight: 600;
  margin-bottom: 8px;
`;

export const SubHeading = styled.p`
  text-shadow: ${({ theme }) => theme.shadows.textShadow};
`;
