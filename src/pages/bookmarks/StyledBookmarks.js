import styled from "styled-components";

export const StyledBookmarksContainer = styled.div`
  width: 85%;
  margin: 4rem auto;
  padding: 2rem;
`;

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 1rem;

  > a {
    margin: 1rem 0;
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
