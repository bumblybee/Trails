import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

export const StyledStarRatingComponent = styled(StarRatingComponent)`
  svg {
    margin-left: 0.1rem;
    padding: 0;
  }
`;

export const StyledStar = styled(FaStar)`
  font-size: 1rem;
`;
