import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  max-width: 100%;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.08);
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

  @media (max-width: 620px) {
    margin-right: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  color: #34423b;
  margin-right: 2.5rem;

  @media (max-width: 620px) {
    margin-right: 0.5rem;
  }
`;
