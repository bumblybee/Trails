import styled from "styled-components";

export const StyledProgressContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 25%;
  z-index: 100;
  width: 40%;
  background: transparent;
  padding: 8rem;

  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const StyledProgressText = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #ffffff99;
  font-size: 1.3rem;
`;
