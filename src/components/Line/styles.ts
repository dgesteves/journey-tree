import styled from "styled-components";

export const VerticalLine = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.white};
  height: ${({ theme }) => theme.sizes.size_9};
`;

export const HorizontalLine = styled.hr`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Root = styled.div`
  display: flex;
  justify-content: center;
`;

export const Edges = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Connections = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
`;
