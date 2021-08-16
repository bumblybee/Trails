import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

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

  @media (max-width: 1024px) {
    width: 18%;
    right: 2.25rem;
  }

  @media (max-width: 810px) {
    width: 25%;
  }

  @media (max-width: 620px) {
    top: 2.75rem;
    right: 1rem;
    width: 40%;
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

export const StyledRedirect = styled(Redirect)`
  color: #34423b;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 1rem 0 1rem 1rem;

  :hover {
    color: #fffeff;
    background: #ccc;
  }
`;

export const StyledAdminPanel = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #fe7762;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  input {
    border: none;
    background: #eceeed;
    padding: 0.75rem;
    font-weight: 300;
    /* border-top-left-radius: 6px;
    border-top-right-radius: 6px; */
    text-align: center;

    :focus {
      border: none;
      outline: none;
    }

    ::placeholder {
      font-weight: 300;
      color: #99a29e;
    }
  }

  .edit-link {
    border: none;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    text-align: center;
    background: #fe7762;
    padding: 0.75rem;
    color: #fff;

    :hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const StyledMenuHr = styled.hr`
  border: none;
  border-top: 1px solid #b9c8b8;
  padding: 0;
`;
