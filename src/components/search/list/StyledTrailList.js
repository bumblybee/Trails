import styled from "styled-components";

export const StyledTrailList = styled.ul`
  padding: 2rem 1rem 1rem 1.5rem;
  overflow-y: scroll;
  max-height: 874px;
  scrollbar-width: none;
  /* ::-webkit-scrollbar-scrollbar-track-color {
    background: transparent;
    color: transparent;
  } */
`;

export const StyledTrailListHeader = styled.div`
  color: #34423b;
  padding: 0 0 2rem;

  h1 {
    margin: 0 0 0.5rem;
  }

  p {
    color: #99a29e;
    font-size: 0.9rem;
    font-weight: 400;
    margin-left: 0.2rem;
  }
`;
