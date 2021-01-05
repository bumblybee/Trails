import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

export const StyledStarRatingComponent = styled(StarRatingComponent)`
  label > svg {
    margin: 0;
    padding: 0;
  }
`;

export const StyledStar = styled(FaStar)`
  font-size: 0.95rem;
`;
