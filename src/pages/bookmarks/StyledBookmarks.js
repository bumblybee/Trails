import styled from "styled-components";

export const StyledBookmarksContainer = styled.div`
  width: 90%;
  margin: 4rem auto;
  padding: 2rem;

  h3 {
    font-size: 2rem;
  }
`;

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 0.5rem;

  > a {
    margin: 1rem 0;
  }
`;
