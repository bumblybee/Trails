import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  width: 100%;

  overflow: hidden;

  @media (max-width: 1028px) {
    height: 100vh;
  }

  @media (max-width: 1028px) {
    display: flex;
    flex-direction: column-reverse;
    > div {
      height: 45%;
    }

    > div:nth-child(2) {
      height: 55%;
    }
  }
`;
