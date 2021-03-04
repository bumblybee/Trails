import styled from "styled-components";

export const StyledScoutedTrailsContainer = styled.div`
  width: 90%;
  margin: 4rem auto;
  padding: 2rem;
`;

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat() (5, 1fr);
  margin-top: 0.5rem;

  > a {
    margin: 1rem 0;
  }
`;

export const StyledTextContainer = styled.div`
  margin-top: 2rem;
`;
