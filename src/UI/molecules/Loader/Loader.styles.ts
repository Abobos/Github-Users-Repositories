import styled, { keyframes } from "styled-components";

const rotate = keyframes`  
    to {
      transform: rotate(360deg);
    }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid #f5f5f5;
  border-radius: 50%;
  border-top-color: paleturquoise;
  animation: ${rotate} 0.5s linear infinite;
`;
