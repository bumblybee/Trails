import styled from "styled-components";

export const StyledLocationInput = styled.input`
  width: 40%;
`;

export const StyledLocationDropDown = styled.div`
  z-index: 100;
  position: absolute;

  width: 37.2%;
  height: 110px;

  overflow-y: scroll;
  /* color: #99a29e;
  background: #fffeff; */

  font-size: 0.95rem;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);

  > div {
    padding: 0.5rem;
  }
`;
