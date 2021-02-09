import styled from "styled-components";

export const StyledMapMarkerPopup = styled.div`
  width: 220px;
  height: auto;
  max-height: 240px;
  padding: 0.5rem;
  text-align: center;
  overflow-y: hidden;

  :hover {
    cursor: pointer;
  }

  h3 {
    margin-bottom: 0.25rem;
    font-size: 1.3rem;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }
`;

export const StyledImageContainer = styled.div`
  height: 125px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
