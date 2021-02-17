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
      rgba(254, 119, 98, 0.45),
      rgba(254, 119, 98, 0.2),
      rgb(12, 15, 14, 0.8)
    ),
    url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");

  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  z-index: 10;
  height: 840px;

  @media (max-width: 620px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const StyledLandingContent = styled.div`
  color: #fff;
  text-align: left;
  width: 60%;
  margin: 12% auto;

  @media (max-width: 620px) {
    width: 100%;
    margin: 45% auto;
  }
`;

export const StyledLandingText = styled.div`
  width: 55%;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  color: #fff;

  h1 {
    margin-bottom: 0.5rem;
    font-family: "PT Sans", sans-serif;
    font-size: 2.75rem;
  }

  p {
    margin-bottom: 2.5rem;
    line-height: 1.35;
    font-weight: 500;
    font-size: 1.2rem;
  }

  @media (max-width: 620px) {
    width: 80%;
  }
`;

export const StyledCardContainer = styled.div`
  padding: 2rem;

  h3 {
    padding: 1rem 0 2rem;
    font-size: 2.5rem;
  }
`;
