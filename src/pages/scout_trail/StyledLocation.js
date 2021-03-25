import styled from "styled-components";

export const StyledLocationInput = styled.input`
  width: 40%;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const StyledLocationDropDown = styled.div`
  z-index: 100;
  position: absolute;
  padding: 0.2rem;
  margin-top: 0.25rem;
  width: 37.2%;
  height: 105px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  overflow-y: scroll;
  color: #99a29e;
  background: #fff;
  border-radius: 6px;

  font-size: 0.95rem;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);

  > div {
    padding: 0.5rem;
  }

  @media (max-width: 620px) {
    width: 87.5%;
  }
`;

export const StyledLocationSuggestion = styled.div`
  background-color: ${({ suggestion }) =>
    suggestion.active ? "#eceeed" : "#fff"};
  cursor: pointer;
`;
