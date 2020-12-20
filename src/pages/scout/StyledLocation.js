import styled from "styled-components";

export const StyledLocationInput = styled.input`
  width: 40%;
`;

export const StyledLocationDropDown = styled.div`
  z-index: 100;
  position: absolute;
  padding: 0.3rem;
  width: 37.2%;
  height: 105px;

  overflow-y: scroll;
  color: #99a29e;
  background: #fff;

  font-size: 0.95rem;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);

  > div {
    padding: 0.3rem;
  }
`;

export const StyledLocationSuggestion = styled.div`
  background-color: ${({ suggestion }) =>
    suggestion.active ? "#eceeed" : "#fff"};
  cursor: pointer;
`;
