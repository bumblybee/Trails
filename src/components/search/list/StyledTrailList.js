import styled from "styled-components";

export const StyledCardList = styled.ul`
  padding: 1rem;
  overflow-y: scroll;
  max-height: 874px;
  ::-webkit-scrollbar-scrollbar-track-color {
    background: transparent;
    color: transparent;
  }
`;

export const StyledCard = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 0.5px solid #eceeed;
  border-radius: 6px;

  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);
  :not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const StyledImageContainer = styled.div`
  width: 250px;
  height: 250px;
`;

export const StyledCardContentContainer = styled.div`
  padding: 1rem;
  h3 {
    margin-bottom: 0.2rem;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 0.08rem;
    font-family: "PT Sans", sans-serif;
  }

  h5 {
    margin-bottom: 1rem;
    color: #99a29e;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;
  }

  p {
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
