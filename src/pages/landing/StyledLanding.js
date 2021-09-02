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
    height: 99.75%;
  }
`;

export const StyledLandingContent = styled.div`
  color: #fff;
  text-align: left;
  width: 60%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -55%);

  @media (max-width: 1366px) {
    width: 75%;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 810px) {
    width: 85%;
  }

  @media (max-width: 620px) {
    width: 92%;
    transform: translate(-50%, -59%);
  }
`;

export const StyledLandingText = styled.div`
  width: 65%;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  color: #fff;

  h1 {
    margin-bottom: 0;
    font-family: "PT Sans", sans-serif;
    font-size: 3.5rem;

    @media (max-width: 1366px) {
      font-size: 3rem;
    }

    @media (max-width: 620px) {
      font-size: 2.5rem;
      line-height: 0.9;
      margin-bottom: 0.5rem;
    }
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.35;
    font-weight: 500;
    font-size: 1.55rem;

    @media (max-width: 1366px) {
      font-size: 1.3rem;
    }

    @media (max-width: 620px) {
      font-size: 1.2rem;
      width: 95%;
    }
  }

  @media (max-width: 1366px) {
    width: 75%;
  }

  @media (max-width: 810px) {
    width: 85%;
  }

  @media (max-width: 620px) {
    width: 95%;
    margin-bottom: 2.25rem;
  }
`;

export const StyledLandingBottomContainer = styled.div`
  padding: 1.5rem 0;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1366px) {
    width: 75%;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 810px) {
    width: 85%;
  }

  @media (max-width: 620px) {
    width: 100%;
    padding: 0;
  }

  h3 {
    padding: 2rem 0 3rem;
    font-size: 1.85rem;
    font-weight: 600;
    font-family: "Noto Sans Jp";

    @media (max-width: 620px) {
      padding: 2rem 0;
      font-size: 1.65rem;
      text-align: center;
    }
  }
`;

export const StyledLandingCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 810px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    margin: 0 auto;

    > div {
      margin-bottom: 1rem;
    }

    > div:last-child {
      margin-right: 1rem;
    }
  }
`;
