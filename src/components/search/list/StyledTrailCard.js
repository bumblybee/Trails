import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCardLinkWrapper = styled(Link)`
  text-decoration: none;
  color: #34423b;
`;

export const StyledCard = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 0.5px solid #eceeed75;
  border-radius: 6px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.12);
  position: relative;
  transition: transform 0.05s ease-out;

  :not(:last-child) {
    margin-bottom: 0.5rem;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);

    transform: scale(1.01);
  }

  @media (max-width: 620px) {
    height: 220px;
    background-image: linear-gradient(
        to bottom right,
        rgba(52, 66, 59, 0.7) 40%,
        rgba(254, 119, 98, 0.35)
      ),
      url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    grid-template-columns: 1fr;
  }
`;

export const StyledBookmarkIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: #fe7762;
  font-size: 1.4rem;

  :hover {
    cursor: pointer;
  }

  svg {
    :hover {
      fill: #fe7762;
    }
    :active {
      color: #fe7762;
    }

    :focus {
      color: #fe7762;
    }
  }
`;

export const StyledImageContainer = styled.div`
  width: 250px;
  height: 250px;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const StyledCardContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 620px) {
    height: 100%;
    padding: 2.5rem 2rem 1rem 2.5rem;
    display: grid;
    grid-template-columns: 1fr;
  }

  h3 {
    margin-bottom: 0.2rem;
    text-transform: capitalize;
    letter-spacing: 0.08rem;
    font-family: "PT Sans", sans-serif;
    @media (max-width: 620px) {
      color: #fff;
      font-weight: 600;
      text-shadow: 1px 1px #333;
    }
  }

  h5 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: #99a29e;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;

    @media (max-width: 620px) {
      color: #eceeedee;
      text-shadow: 1px 1px #333;
    }
  }

  p {
    font-weight: 300;
    width: 98%;
    :first-letter {
      text-transform: capitalize;
    }

    @media (max-width: 620px) {
      color: #fff;
      text-shadow: 1px 1px #333;
    }
  }
`;

export const StyledCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #99a29e;
`;

export const StyledIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  svg {
    margin-left: 1rem;
  }
`;
