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
    padding: 0;
    justify-content: space-around;
    img {
      height: 50px;
    }
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.3rem;
  transition: border-color 0.2s ease-in-out 0s;

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
    margin-right: 0.5rem;
  }
`;

export const StyledLinkButton = styled(Link)`
  color: #fff;
`;
