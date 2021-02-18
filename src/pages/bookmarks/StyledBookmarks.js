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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0.5rem;

  > a {
    margin: 1rem 0;
  }
`;
