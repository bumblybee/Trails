import styled from "styled-components";

export const StyledLanding = styled.div`
  position: relative;
  height: 100%;

  background: linear-gradient(
      to bottom,
      rgba(52, 66, 59, 0.9) 60%,
      rgba(52, 66, 59, 0.7),
      rgba(254, 119, 98, 0.5)
    ),
    url("https://images.unsplash.com/photo-1591899761266-148e5928e389?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80");

  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 620px) {
    height: 100vh;
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
    font-size: 2.1rem;
  }

  p {
    margin-bottom: 2.5rem;
    line-height: 1.33;
  }

  @media (max-width: 620px) {
    width: 80%;
  }
`;

export const StyledImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  @media (max-width: 1028px) {
    top: 75vh;
  }
`;

export const StyledCardContainer = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255)
  );
  margin-top: 12rem;
  padding: 2rem;
`;
