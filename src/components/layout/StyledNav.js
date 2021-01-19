import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  max-width: 100%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  background: #fffeff;

  @media (max-width: 620px) {
    padding: 0.5rem 0.7rem;
  }
`;

export const StyledLogo = styled.img`
  height: 24px;
  @media (max-width: 620px) {
    height: 20px;
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.3rem;
  transition: border-color 0.2s ease-in-out 0s;

  svg {
    font-size: 2.2rem;
    color: #2b5740;
    border-radius: 50%;
    border: 1px solid #2b5740;
    padding: 0.5rem;
  }

  @media (max-width: 620px) {
    margin-right: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  color: #34423b;
  margin-right: 2.5rem;

  :hover {
    color: #fe7762;
  }

  @media (max-width: 620px) {
    margin-right: 0.7rem;
    font-size: 0.95rem;
  }
`;
