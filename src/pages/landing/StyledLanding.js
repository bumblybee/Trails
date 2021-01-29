import styled from "styled-components";

export const StyledLanding = styled.div`
  position: relative;
  height: 100%;

  @media (max-width: 620px) {
    height: 100vh;
  }
`;

export const StyledLandingContainer = styled.div`
  background: linear-gradient(
      to top,
      rgba(254, 119, 98, 0.6) 5%,
      rgba(254, 119, 98, 0.1),
      rgba(255, 255, 255)
    ),
    url("/assets/Black People Hiking.png");

  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  z-index: 10;
  height: 860px;

  @media (max-width: 620px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const StyledLandingContent = styled.div`
  color: #fff;
  text-align: left;
  width: 60%;
  margin: 7% auto;

  @media (max-width: 620px) {
    width: 100%;
    margin: 45% auto;
  }
`;

export const StyledLandingText = styled.div`
  width: 55%;

  color: #000;
  h1 {
    margin-bottom: 0.5rem;
    font-family: "PT Sans", sans-serif;
    font-size: 2.7rem;
  }

  p {
    margin-bottom: 2.5rem;
    line-height: 1.33;
  }

  @media (max-width: 620px) {
    width: 80%;
  }
`;

export const StyledCardContainer = styled.div`
  padding: 2rem;

  h3 {
    padding: 1rem 0 2rem;
  }
`;
