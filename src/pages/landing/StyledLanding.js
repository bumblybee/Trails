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
      rgb(12, 15, 14, 0.75)
    ),
    url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  z-index: 1;
  position: relative;
  padding: 2rem;
  text-align: center;
  z-index: 10;
  height: 860px;

  @media (max-width: 620px) {
    width: 100%;
    padding: 1rem;
    height: 100%;
  }
`;

export const StyledLandingContent = styled.div`
  color: #fff;
  text-align: left;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  @media (max-width: 620px) {
    width: 90%;
    transform: translate(-50%, -53%);
  }
`;

export const StyledLandingText = styled.div`
  width: 60%;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  color: #fff;

  h1 {
    margin-bottom: 0;
    font-family: "PT Sans", sans-serif;
    font-size: 2.75rem;

    @media (max-width: 620px) {
      font-size: 2.2rem;
      line-height: 0.9;
      margin-bottom: 0.5rem;
    }
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.35;
    font-weight: 500;
    font-size: 1.35rem;

    @media (max-width: 620px) {
      font-size: 1.1rem;
      /* margin-bottom: 1.5rem; */
      width: 90%;
    }
  }

  @media (max-width: 620px) {
    width: 95%;
  }
`;

export const StyledLandingBottomContainer = styled.div`
  padding: 1.5rem;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 620px) {
    width: 100%;
    padding: 0;
  }

  h3 {
    padding: 2rem 0 1rem;
    font-size: 2.25rem;

    @media (max-width: 620px) {
      font-size: 1.8rem;
    }
  }
`;

export const StyledLandingCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > a {
      margin-bottom: 1rem;
    }
  }
`;
