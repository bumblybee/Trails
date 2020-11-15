import styled from "styled-components";

export const StyledTrailListHeader = styled.div`
  color: #34423b;
  padding: 0.5rem 1rem;

  h1 {
    margin: 1rem 0 0.5rem;
  }

  p {
    color: #99a29e;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

export const StyledTrailList = styled.ul`
  padding: 1rem;
  overflow-y: scroll;
  max-height: 874px;
  ::-webkit-scrollbar-scrollbar-track-color {
    background: transparent;
    color: transparent;
  }
`;
