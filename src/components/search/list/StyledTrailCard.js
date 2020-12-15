import styled from "styled-components";
import { FaBullseye } from "react-icons/fa";

export const StyledCard = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 0.5px solid #f1f1f1;
  border-radius: 6px;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s ease-out;

  :not(:last-child) {
    margin-bottom: 0.8rem;
  }

  :hover {
    cursor: pointer;
  }
`;

export const StyledImageContainer = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
`;

export const StyledCardContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 0.2rem;
    text-transform: capitalize;
    letter-spacing: 0.08rem;
    font-family: "PT Sans", sans-serif;
  }

  h5 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: #99a29e;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;
  }

  p {
    font-weight: 300;
    :first-letter {
      text-transform: capitalize;
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const StyledBookmarkIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: #fe7762;
  font-size: 1.35rem;

  :hover {
    cursor: pointer;
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

export const StyledBullseye = styled(FaBullseye)`
  color: ${(props) =>
    props.difficulty === "beginner"
      ? "#b1ce7c"
      : props.difficulty === "intermediate"
      ? "#fe7762"
      : props.difficulty === "advanced"
      ? "#fe7762"
      : ""};
`;
