import styled from "styled-components";

export const StyledMapMarkerPopup = styled.div`
  width: 260px;
  height: auto;
  padding: 0.5rem;
  text-align: center;

  :hover {
    cursor: pointer;
  }

  h3 {
    margin-bottom: 0.25rem;
    font-size: 1.55rem;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }
`;

export const StyledImageContainer = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;
