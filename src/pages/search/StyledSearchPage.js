import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  width: 100%;
  height: 874px;
  overflow: hidden;

  @media (max-width: 1028px) {
    height: 100vh;
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column-reverse;
    > div {
      height: 50%;
    }
  }
`;
