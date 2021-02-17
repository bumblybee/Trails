import styled from "styled-components";

export const StyledCardContainer = styled.div`
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.12);

  border: 0.5px solid #eceeed75;
  border-radius: 6px;
  width: 300px;
  height: 330px;

  background: #fff;
  margin-right: 1rem;

  display: flex;
  flex-direction: column;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledCardImage = styled.div`
  width: 100%;
  height: 150px;
  background: #ccc;

  img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const StyledCardContent = styled.div`
  padding: 1rem 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  line-height: 1.33;

  h4 {
    text-transform: capitalize;
    letter-spacing: 0.02rem;
    margin-top: 0;
    font-size: 1.2rem;
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
`;

export const StyledIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 0.975rem;

  svg {
    margin-left: 0.507rem;
  }
`;
