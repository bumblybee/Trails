import styled from "styled-components";

export const StyledCardContainer = styled.div`
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);
  border: 0.5px solid #eceeed75;
  border-radius: 6px;
  width: 300px;
  height: 330px;
  flex: 1 1 0;
  background: #fff;
  position: relative;

  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-right: 1rem;
  }
  :hover {
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 620px) {
    height: 315px;
    width: 100%;
  }
`;

export const StyledCardImage = styled.div`
  width: 100%;
  height: 150px;
  background: #ccc;
  /* border-top-left-radius: 6px;
  border-top-right-radius: 6px; */

  img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const StyledCardContent = styled.div`
  padding: 0 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  line-height: 1.33;

  h4 {
    text-transform: capitalize;
    letter-spacing: 0.02rem;
    margin-top: 0.25rem;
    font-size: 1.1rem;
  }

  h5 {
    margin-bottom: 0.75rem;
    text-transform: capitalize;
    color: #99a29e;
    text-shadow: 0 0 1px #99a29e;
    font-size: 0.9rem;
    font-weight: 300;
    font-family: "Noto Sans JP", sans-serif;
  }

  p {
    font-weight: 300;
    margin-bottom: 0.75rem;
  }
`;

export const StyledCardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  color: #99a29e;
  /* height: 100%; */
`;

export const StyledIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 0.975rem;

  svg {
    margin-left: 0.57rem;
  }
`;
