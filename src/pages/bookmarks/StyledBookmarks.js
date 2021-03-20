import styled from "styled-components";

export const StyledBookmarksContainer = styled.div`
  width: 85%;
  margin: 4rem auto;
  padding: 2rem;

  @media (max-width: 620px) {
    width: 100%;
    h3 {
      text-align: center;
      font-size: 1.95rem;
    }
  }
`;

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 1rem;

  > a {
    margin: 1rem 0;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

export const StyledNoBookmarksContainer = styled.div`
  margin-top: 1rem;
  grid-column-start: 1;
  grid-column-end: 3;

  p {
    font-size: 1.15rem;
    font-weight: 400;
  }
`;
