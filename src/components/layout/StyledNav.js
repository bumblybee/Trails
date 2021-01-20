import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  max-width: 100%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  background: #fffeff;
  position: relative;

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
    color: #fe7762;
    border-radius: 4px;
    border: 2px solid #fe7762;
    padding: 0.5rem;

    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 620px) {
    margin-right: 0;
  }
`;
