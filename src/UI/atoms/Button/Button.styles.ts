import styled from "styled-components";

export const StyledButton = styled.button`
  appearance: none;
  outline: none;
  padding: 0.6rem;
  color: white;
  background-color: #0e1117;
  border: none;

  &:disabled {
    background-color: gray;
    cursor: none;
  }
`;
