import styled from "styled-components";

export const StyledScoutedTrailsContainer = styled.div`
  width: 85%;
  margin: 4rem auto;
  padding: 2rem;

  @media (max-width: 620px) {
    width: 100%;
    margin: 2.5rem auto 0;

    h3 {
      text-align: center;
      font-size: 1.95rem;
    }
  }
`;

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTextContainer = styled.div`
  margin-top: 1rem;

  p {
    font-size: 1.15rem;
    font-weight: 400;
  }
`;
