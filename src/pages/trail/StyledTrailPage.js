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
  }

  h5 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: #99a29e;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;
  }

  p {
    margin-top: 4rem;
    width: 68%;
    line-height: 1.5;
  }
`;

export const StyledFloatingCard = styled.div`
  border: 1px solid #eceeedee;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);

  position: absolute;
  right: 1.7rem;
  top: -3rem;
  z-index: 10;
`;

export const StyledIconContainer = styled.div`
  padding: 2rem 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
`;

export const StyledButtonContainer = styled.div`
  padding: 0 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border: 2px solid transparent;
    border-radius: 6px;
    color: #fff;
    background: #ccc;

    :hover {
      cursor: pointer;
      background: #fff;
      border: 2px solid #ccc;
      color: #ccc;
    }

    :last-child {
      background: #fe7762;
      :hover {
        background: #fff;
        border: 2px solid #fe7762;
        color: #fe7762;
      }
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
  border: 1px solid #b9c8b8;
  width: 67%;
`;
