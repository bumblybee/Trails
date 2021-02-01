import styled from "styled-components";

export const StyledTrailPageWrapper = styled.div`
  padding: 4.5rem 1rem;
`;

export const StyledTrailPageContainer = styled.div`
  width: 70%;
  padding: 2rem;
  margin: 0 auto;

  h2 {
    margin-bottom: 1rem;
  }

  h5 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: #99a29e;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;
  }

  p {
    margin-top: 1rem;
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  height: 400px;
  width: 100%;
`;
