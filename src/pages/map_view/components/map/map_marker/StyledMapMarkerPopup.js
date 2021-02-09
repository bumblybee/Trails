import styled from "styled-components";

export const StyledMapMarkerPopup = styled.div`
  width: 225px;
  height: auto;
  max-height: 240px;
  padding: 0.5rem 0.4rem;
  text-align: center;
  overflow-y: hidden;

  :hover {
    cursor: pointer;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 0.88rem;
  }
`;

export const StyledImageContainer = styled.div`
  height: 125px;
  width: 100%;
  margin-top: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
