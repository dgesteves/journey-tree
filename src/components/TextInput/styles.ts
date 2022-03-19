import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.sizes.size_1};

  label {
    font-weight: 500;
    margin-bottom: 6px;
  }

  input {
    padding: 6px;
    transition: all 0.3s ease;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.background};
    border: 2px double transparent;
    background-image: linear-gradient(
        ${({ theme }) => theme.colors.white},
        ${({ theme }) => theme.colors.white}
      ),
      radial-gradient(
        circle at left top,
        ${({ theme }) => theme.colors.turquoise},
        ${({ theme }) => theme.colors.violet}
      );
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
`;
