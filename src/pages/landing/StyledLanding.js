import styled from "styled-components";

export const StyledLanding = styled.div`
  position: relative;
  height: calc(100vh - 75px);
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 26.04%,
      #fffeff 100%
    ),
    linear-gradient(
      180deg,
      rgba(43, 87, 64, 0.81) 31.77%,
      rgba(43, 87, 64, 0.735802) 99.99%,
      rgba(43, 87, 64, 0) 100%
    );
  z-index: 1;

  @media (max-width: 620px) {
    height: calc(100vh - 410px);
  }
`;

export const StyledLandingContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  z-index: 10;

  @media (max-width: 620px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const StyledLandingContent = styled.div`
  color: #fff;
  text-align: left;
  width: 80%;
  margin: 13% auto;
`;

export const StyledLandingText = styled.div`
  width: 50%;

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2.5rem;
  }
`;

export const StyledImageContainer = styled.div`
  position: absolute;
  top: 39%;
  left: 0;
  width: 100%;
  z-index: -1;

  @media (max-width: 1028px) {
    top: 80vh;
  }
`;
