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
      to bottom,
      rgba(52, 66, 59, 0.3) 60%,
      rgba(254, 119, 98, 0.5)
    ),
    url("https://cdn.pixabay.com/photo/2019/12/05/23/26/dawn-4676278_960_720.jpg");

  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  z-index: 10;
  height: 850px;

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

  @media (max-width: 620px) {
    width: 100%;
    margin: 45% auto;
  }
`;

export const StyledLandingText = styled.div`
  width: 50%;

  h1 {
    margin-bottom: 0.5rem;
    font-family: "PT Sans", sans-serif;
    font-size: 2.5rem;
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
