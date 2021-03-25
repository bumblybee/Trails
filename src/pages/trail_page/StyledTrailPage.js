import styled from "styled-components";

export const StyledTrailPageWrapper = styled.div`
  padding: 5rem 1rem;
  position: relative;

  @media (max-width: 620px) {
    padding: 4rem 0 1rem;
    width: 100%;
  }
`;

export const StyledTrailPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 620px) {
    padding: 1.5rem 1.5rem 0;
    width: 100%;
    flex-direction: column-reverse;
  }

  h2 {
    margin-bottom: 1rem;
    width: 80%;
    font-size: 2.5rem;

    @media (max-width: 620px) {
      font-size: 2rem;
      width: 90%;
    }
  }

  h5 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: #99a29e;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;

    @media (max-width: 620px) {
      margin-bottom: 0.5rem;
    }
  }

  p {
    margin-top: 3rem;
    width: 64%;
    line-height: 1.5;

    @media (max-width: 620px) {
      width: 100%;
      margin-top: 1.75rem;
    }
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 400px;

  @media (max-width: 620px) {
    height: 200px;
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const StyledFloatingCardsContainer = styled.div`
  position: absolute;
  right: 7%;
  top: -3rem;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding-bottom: 2rem;

  .icon-card {
    @media (max-width: 620px) {
      display: none;
    }
  }

  @media (max-width: 620px) {
    top: auto;
    right: auto;
    position: relative;
    margin: 0;
    padding-bottom: 0;
  }
`;

export const StyledFloatingCard = styled.div`
  border: 1px solid #eceeedee;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);
  padding: 2.25rem;
  width: 300px;

  span {
    font-size: 0.95rem;
    color: #99a29e;
  }

  @media (max-width: 620px) {
    padding: 1rem;
    /* border: none; */
    box-shadow: none;
    margin: 2rem 0 0;
    width: 99%;
  }
`;

export const StyledIconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  text-transform: capitalize;
  font-size: 1.25rem;

  .icon-label {
    font-size: 0.95rem;
    color: #fe7762;
    font-weight: 500;
  }

  svg {
    color: #a5b8a4;
  }

  .difficulty {
    color: ${(props) =>
      props.difficulty === "beginner"
        ? "#b1ce7c"
        : props.difficulty === "intermediate"
        ? "#79d0eb"
        : props.difficulty === "advanced"
        ? "#fccf54"
        : props.difficulty === "expert"
        ? "#FE7762"
        : "#eeeeed"};
  }
`;

export const StyledHeaderIcons = styled.div`
  .mobile-icons {
    display: none;

    @media (max-width: 620px) {
      display: flex;
      justify-content: space-evenly;
      margin-left: 1rem;
      font-size: 1.05rem;

      span {
        margin-right: 0.5rem;
        font-size: 0.95rem;
        color: #a5b8a4;
      }

      svg {
        color: #86928d;
      }

      svg:not(:first-child) {
        margin-right: 0.5rem;
      }

      .difficulty {
        color: ${(props) =>
          props.difficulty === "beginner"
            ? "#b1ce7c"
            : props.difficulty === "intermediate"
            ? "#79d0eb"
            : props.difficulty === "advanced"
            ? "#fccf54"
            : props.difficulty === "expert"
            ? "#FE7762"
            : "#eeeeed"};
      }
    }
  }

  @media (max-width: 620px) {
    display: flex;
    width: 100%;
  }
`;

export const StyledIcon = styled.div`
  display: flex;

  span {
    color: #99a29eee;
    font-size: 0.89rem;
  }

  svg,
  div {
    margin-right: 1rem;
  }
`;

export const StyledButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.75rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 6px;
    outline: none;
    color: #fff;
    background: ${(props) => (props.user ? "#B1CE7C" : "#eceeed")};

    :hover {
      cursor: pointer;
      background: ${(props) => (props.user ? "#fff" : "")};
      border: ${(props) =>
        props.user ? "2px solid #B1CE7C" : "2px solid transparent"};
      color: ${(props) => (props.user ? "#B1CE7C" : "#fff")};
    }

    :nth-child(1) {
      background: ${(props) => (props.user ? "#749073" : "#eceeed")};

      :hover {
        background: ${(props) => (props.user ? "#fff" : "")};
        border: ${(props) =>
          props.user ? "2px solid #a5b8a4" : "2px solid transparent"};
        color: ${(props) => (props.user ? "#749073" : "#fff")};
      }
    }

    :last-child {
      background: ${(props) => (props.user ? "#fe7762" : "#eceeed")};

      :hover {
        background: ${(props) => (props.user ? "#fff" : "")};
        border: ${(props) =>
          props.user ? "2px solid #fe7762" : "2px solid transparent"};
        color: ${(props) => (props.user ? "#fe7762" : "#fff")};
      }
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const StyledBorder = styled.hr`
  margin: 1rem 0 2rem;
  border: none;
  border-top: 5px solid #a5b8a4;
  width: 64%;

  @media (max-width: 620px) {
    width: 100%;
    margin: 1rem 0 0;
  }
`;

export const StyledCardBorder = styled.hr`
  border: none;
  border-top: 2px solid #99a29e;
`;
