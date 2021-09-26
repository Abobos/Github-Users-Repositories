import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-size: 70%;

  @media screen and (min-width: 900px) {
    font-size: 90%;
  }
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  background-color: whitesmoke;
}
`;
