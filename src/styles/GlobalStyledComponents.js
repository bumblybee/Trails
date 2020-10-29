import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPinkButton = styled.button`
  background: #fe7762;
  display: block;
  width: 100%;
  color: #fff;
  padding: 12px 18px;
  border-radius: 4px;
  border: none;

  font-weight: 400;
  text-align: center;
  position: relative;

  :hover {
    cursor: pointer;
    background: #fe9787;

    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 620px) {
    padding: 10px 14px;
  }
`;
