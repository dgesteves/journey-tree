import styled from "styled-components";

const Text = styled.article`
  text-shadow: ${({ theme }) => theme.shadows.textShadow};
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.size_6};
  margin: ${({ theme }) => theme.sizes.size_5} 0
    ${({ theme }) => `calc(${theme.sizes.size_9}*2)`} 0;
  width: 60%;
  text-align: center;
  letter-spacing: 0.2rem;

  span {
    font-family: "Fredoka", sans-serif;
    background: ${({ theme }) => theme.gradients.textGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Text;
