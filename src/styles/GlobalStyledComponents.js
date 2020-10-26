import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPinkButton = styled.button`
  background: #fe7762;
  display: block;
  width: 100%;
  color: #fff;
  padding: 14px 20px;
  border-radius: 4px;
  border: none;

  font-weight: 400;
  text-align: center;
  position: relative;

  :hover {
    cursor: pointer;
    background: #fe9787;
  }

  @media (max-width: 620px) {
    padding: 10px 14px;
  }
`;
