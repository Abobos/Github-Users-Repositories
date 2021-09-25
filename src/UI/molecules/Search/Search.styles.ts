import styled from "styled-components";

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media only screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const SearchBox = styled.div`
  align-self: center;
  margin-top: 2rem;

  @media only screen and (min-width: 900px) {
    margin-top: 0;
    width: 50%;
  }
`;
