import styled from "styled-components";

export const StyledTrailList = styled.ul`
  padding: 2rem 1rem 1rem 1.5rem;
  overflow-y: scroll;
  max-height: 950px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar-scrollbar-track-color {
    background: transparent;
    color: transparent;
  }

  @media (max-width: 620px) {
    padding: 1rem 0.5rem;
  }
`;

export const StyledTrailListHeader = styled.div`
  color: #34423b;
  padding: 3.5rem 0 2rem;

  h3 {
    margin: 0 0 0.5rem;
    font-size: 2.1rem;

    @media (max-width: 620px) {
      margin: 0 0 1rem;
      font-size: 1.5rem;
    }
  }

  p {
    color: #99a29e;
    font-size: 0.9rem;
    font-weight: 400;
    margin-left: 0.2rem;
  }

  @media (max-width: 620px) {
    padding: 0;
  }
`;
