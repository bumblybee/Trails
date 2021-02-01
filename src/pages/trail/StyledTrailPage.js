import styled from "styled-components";

export const StyledTrailPageWrapper = styled.div`
  padding: 4.5rem 1rem;
`;

export const StyledTrailPageContainer = styled.div`
  position: relative;
  width: 60%;
  padding: 2rem;
  margin: 0 auto;

  h2 {
    margin-bottom: 1rem;
    width: 80%;
    font-size: 2.5rem;
  }

  h5 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: #99a29e;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;
  }

  p {
    margin-top: 3rem;
    width: 64%;
    line-height: 1.5;
  }
`;

export const StyledFloatingCardContainer = styled.div`
  position: absolute;
  right: 7%;
  top: -2.5rem;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

export const StyledFloatingCard = styled.div`
  border: 1px solid #eceeedee;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);
  padding: 2.5rem;
  width: 300px;

  span {
    font-size: 0.95rem;
    color: #99a29e;
  }
`;

export const StyledIconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  font-size: 1.25rem;
`;

export const StyledIcon = styled.div`
  display: flex;
  color: #999;

  padding-bottom: 0.5rem;

  svg,
  div {
    margin-right: 1rem;
  }

  svg {
    color: #99a29e;
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
    color: #fff;
    background: ${(props) => (props.user ? "#a5b8a4" : "#eceeed")};

    :hover {
      cursor: pointer;
      background: ${(props) => (props.user ? "#fff" : "")};
      border: ${(props) =>
        props.user ? "2px solid #a5b8a4" : "2px solid transparent"};
      color: ${(props) => (props.user ? "#a5b8a4" : "#fff")};
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

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  height: 400px;
  width: 100%;
`;

export const StyledBorder = styled.hr`
  margin: 1rem 0 2rem;
  border: 1px solid #a5b8a4;
  width: 64%;
`;
