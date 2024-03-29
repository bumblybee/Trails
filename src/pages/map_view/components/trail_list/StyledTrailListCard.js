import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBahai, FaRoute } from "react-icons/fa";

export const StyledCardLinkWrapper = styled(Link)`
  text-decoration: none;
  color: #34423b;
  height: 100%;
`;

export const StyledCard = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 0.5px solid #eceeed75;
  border-radius: 6px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.12);
  position: relative;
  /* transition: box-shadow 0.01s linear; */

  :not(:last-child) {
    margin-bottom: 0.5rem;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);
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
    padding: 0.25rem;
  }
`;

export const StyledBookmarkIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: #fe7762;
  font-size: 1.45rem;

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

  @media (max-width: 620px) {
    top: 0.75rem;
    right: 0.75rem;
    left: auto;
  }
`;

export const StyledImageContainer = styled.div`
  width: 250px;
  height: 250px;
  :hover {
    box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);
  }
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

  :hover {
    box-shadow: inset 0 2px 8px 1px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

export const StyledCardContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 620px) {
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.7);
  }

  h4 {
    margin-bottom: 0.2rem;
    text-transform: capitalize;
    letter-spacing: 0.05rem;

    @media (max-width: 620px) {
      color: #eee;
      font-weight: 600;
      text-shadow: 0 0 1px #000;
    }
  }

  h5 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: #99a29e;
    text-shadow: 0 0 1px #99a29e;
    font-size: 0.95rem;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;

    @media (max-width: 620px) {
      color: #b1ce7c;
      /* text-shadow: 1px 1px #333; */
      font-size: 0.875rem;
    }
  }

  p {
    font-weight: 300;
    width: 98%;
    :first-letter {
      text-transform: capitalize;
    }

    @media (max-width: 1350px) {
      font-size: 0.95rem;
    }

    @media (max-width: 620px) {
      height: 100%;
      width: 100%;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr;
      color: #eceeedee;
      /* text-shadow: 1px 1px #333; */
    }
  }
`;

export const StyledCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #86928d;

  @media (max-width: 620px) {
    color: #eceeedee;
  }
`;

export const StyledIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  svg:not(:first-child) {
    margin-left: 0.75rem;

    @media (max-width: 1400px) {
      margin-left: 0.3rem;
    }
  }

  .miles {
    color: #86928d;
    margin-left: 0.1rem;
    font-size: 0.875rem;

    @media (max-width: 620px) {
      color: #eeeeed;
    }
  }

  @media (max-width: 1400px) {
    font-size: 0.975rem;
  }
`;

export const StyledDifficulty = styled(FaBahai)`
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
`;

export const StyledLength = styled(FaRoute)`
  font-size: 1.15rem;
`;
