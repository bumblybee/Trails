import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 4rem;
  right: 2.8rem;
  background: #fffeff;

  border-radius: 4px;
  width: 10%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 620px) {
    top: 2.7rem;
    right: 1.25rem;
    width: 30%;
  }
`;

export const StyledLink = styled(Link)`
  color: #34423b;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 1rem 0 1rem 1rem;

  :hover {
    color: #fffeff;
    background: #ccc;
  }

  :first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  :last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    font-weight: 400;
  }

  :nth-child(4),
  :nth-child(5) {
    font-weight: 400;
  }
`;

export const StyledMenuHr = styled.hr`
  border: none;
  border-top: 1px solid #b9c8b8;
  padding: 0;
`;
